'use client';

import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/Layout';

export default function TestPage() {
  return (
    <VStack gap={2}>
      <h1>Astryx + Next.js + Tailwind Working!</h1>
      <Button label="Hello from Astryx" onClick={() => alert('Hi!')} />
    </VStack>
  );
}
