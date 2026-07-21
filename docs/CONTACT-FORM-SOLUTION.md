# COREI™ Contact Form Solution — Google Forms + Gmail Workflow

**Status**: Proposed — Awaiting Client Gmail Account
**Date**: 2026-07-21

---

## Overview

A zero-cost contact form solution using Google Forms as a stealth backend, storing submissions in a Google Sheet and triggering email notifications that auto-forward to board members.

**Why This Approach:**
- ✅ Free (no Firebase Functions needed — works on Spark Plan)
- ✅ No server/database required
- ✅ Reliable delivery via Gmail
- ✅ Automatic spreadsheet logging
- ✅ Custom-styled frontend (matches site design)
- ✅ Client controls all data (their Gmail account)

---

## Architecture

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────┐
│  Website Form   │────▶│  Google Form │────▶│  Gmail Inbox │
│  (Custom UI)    │POST │  (Stealth)   │     │  (COREI Gmail)│
└─────────────────┘     └──────────────┘     └──────┬──────┘
                               │                    │
                               ▼                    ▼
                        ┌──────────────┐     ┌──────────────┐
                        │ Google Sheet │     │ Auto-Forward │
                        │ (Submissions)│     │ → Board Email │
                        └──────────────┘     └──────────────┘
```

---

## Setup Instructions (For Client)

### Step 1: Create Gmail Account

1. Go to https://accounts.google.com/signup
2. Create a business-branded Gmail:
   - Recommended: `corei.contact@gmail.com` or `info.coreitex@gmail.com`
   - Or use a custom domain if they set up Google Workspace (free tier available)
3. Note the credentials — these will be used for:
   - Google Forms backend
   - Google Sheets logging
   - Gmail forwarding rules

### Step 2: Create Google Form (Stealth)

1. Go to https://forms.google.com (logged into the new Gmail)
2. Create a new form titled "COREI™ Contact Form"
3. Add these fields:

| Field | Type | Required |
|-------|------|----------|
| Name | Short answer | Yes |
| Email | Short answer (email validation) | Yes |
| Phone | Short answer | No |
| Message | Long answer (paragraph) | Yes |
| Subscribe | Checkboxes (Yes/No) | No |

4. **Important**: Go to Settings → Presentation → uncheck "Show link to submit another response"
5. Go to Settings → Presentation → check "Collect email addresses" (adds timestamp + submitter email)

### Step 3: Get the Form Action URL

1. Open the form in your browser
2. Right-click → View Page Source
3. Search for `action="https://docs.google.com/forms/d/e/...`
4. Copy the full action URL
5. Find the entry IDs for each field by searching for `entry.XXXXXXX`

The form POST URL looks like:
```
https://docs.google.com/forms/d/e/FORM_ID/formResponse
```

Fields are submitted as:
```
?entry.123456=Name&entry.789012=Email&entry.345678=Phone&entry.901234=Message&entry.567890=Subscribe
```

### Step 4: Create Google Sheet (Automatic)

1. When you create the form, Google automatically creates a response Sheet
2. Open it — it will have columns for each field + timestamp
3. Name the sheet "COREI Contact Submissions"
4. Optionally add conditional formatting for unread rows

### Step 5: Set Up Gmail Auto-Forward to Board

1. In the COREI Gmail account, go to Settings → Filters and Blocked Addresses
2. Create a new filter with these criteria:
   - **From**: `noreply@google.com` AND `notification+z ...@forms.google.com`
   - **Subject**: contains "COREI™ Contact Form"
   - **Has attachment**: No
3. Forward to: `[board-member-email]`
4. Also apply label: "Contact Form Submissions"

**Alternative**: Create a label + folder structure:
- `COREI/Contact-Form/` — all form submissions land here
- `COREI/Contact-Form/Board/` — forwarded copies
- `COREI/Contact-Form/Processed/` — after handling

### Step 6: Set Up Email Forwarding Rules

To forward ONLY form submissions to board members:

1. **Method 1: Gmail Filter**
   - Create filter: From contains `@forms.google.com`
   - Action: Forward to `[board-email@domain.com]`
   - Action: Apply label "Form Submissions"
   - Action: Skip Inbox (optional)

2. **Method 2: Multiple Recipients**
   - Create a Google Group (e.g., `corei-board@googlegroups.com`)
   - Add all board members
   - Forward form submissions to the group address

### Step 7: Submit a Test

1. Fill out the form manually to verify flow
2. Check: Google Sheet has the row
3. Check: Gmail received the notification
4. Check: Board member email received the forward

---

## Website Form Implementation

### Form Component (React/Next.js)

```tsx
'use client';

import { useState, FormEvent } from 'react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/FORM_ID/formResponse';
const ENTRY_NAME = 'entry.XXXXXXXX';
const ENTRY_EMAIL = 'entry.XXXXXXXX';
const ENTRY_PHONE = 'entry.XXXXXXXX';
const ENTRY_MESSAGE = 'entry.XXXXXXXX';
const ENTRY_SUBSCRIBE = 'entry.XXXXXXXX';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subscribe: true,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const params = new URLSearchParams();
    params.append(ENTRY_NAME, formData.name);
    params.append(ENTRY_EMAIL, formData.email);
    params.append(ENTRY_PHONE, formData.phone);
    params.append(ENTRY_MESSAGE, formData.message);
    params.append(ENTRY_SUBSCRIBE, formData.subscribe ? 'Yes' : 'No');

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', subscribe: true });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center p-8">
        <h3>Thank you!</h3>
        <p>Your message has been sent. We'll get back to you soon.</p>
        <button onClick={() => setStatus('idle')}>Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <textarea
        placeholder="Message"
        required
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <label>
        <input
          type="checkbox"
          checked={formData.subscribe}
          onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
        />
        Subscribe to our mailing list
      </label>
      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send'}
      </button>
      {status === 'error' && <p className="text-red-500">Something went wrong. Please try again.</p>}
    </form>
  );
}
```

### Important Notes

- **`mode: 'no-cors'`**: Google Forms blocks CORS, so we can't read the response. The form still submits.
- **Success detection**: We assume success if no error is thrown. We could also redirect to the Google Form confirmation page.
- **Spam protection**: Consider adding a honeypot field (hidden input, if filled = spam)
- **Rate limiting**: Consider adding a cooldown timer on the frontend

### Honeypot Anti-Spam

```tsx
// Add a hidden field - bots fill it, humans don't
<div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
  <input
    type="text"
    name="form_fields[field_adba421]"
    tabIndex={-1}
    autoComplete="off"
    value={honeypot}
    onChange={(e) => setHoneypot(e.target.value)}
  />
</div>

// In submit handler:
if (honeypot) return; // silently ignore bot submissions
```

---

## Security Considerations

- Google Forms does NOT support CAPTCHA in the POST URL method
- The form action URL is public (anyone could submit directly)
- Mitigation: Honeypot field + frontend rate limiting
- For higher security, consider reCAPTCHA v3 (requires Google Cloud setup, costs money)
- Alternative: Use Cloudflare Turnstile (free) — but requires a site key

---

## Board Member Forwarding Setup

### Current Known Recipients
- [Board Member 1 Email] — TBD (user has these, to be filled in)
- [Board Member 2 Email] — TBD

### Recommended Setup
1. Create a Gmail filter per board member (or one filter with multiple forwards)
2. Use "Forward to" + "Apply label" so the original stays in COREI inbox
3. Board members can reply directly to the submission (Gmail shows original submitter info if collected)

### Future Expansion
If the client wants different forms routing to different people:
- Create separate Google Forms per type (Volunteer, Donate, General)
- Each form has its own Gmail filter → different forward addresses
- Each form stores in a separate Google Sheet tab

---

## Client Action Items

1. **Create Gmail account** for COREI™
2. **Share credentials** with developer (me) so I can:
   - Extract the Google Form action URL
   - Configure entry field IDs
3. **Provide board member emails** for forwarding
4. **Test the form** once set up

---

**Document Status**: Draft v1.0
**Last Updated**: 2026-07-21
**Author**: AI_Claw