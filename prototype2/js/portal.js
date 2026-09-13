/**
 * COREI™ Client Portal & Interactive Report Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Facility Inspector Data for the 11 Blueprint Zones
    const facilities = {
        admin: {
            title: "CORE Administration Building",
            category: "EXECUTIVE & OPERATIONS",
            icon: "🏛️",
            img: "images/complex-blueprint.webp",
            desc: "Primary operational anchor on the Northwest campus perimeter. Two-story modular wing housing executive offices, community board meeting chamber, and shared collaborative suites.",
            location: "Northwest Campus",
            footprint: "18,500 sq ft",
            silo: "Community & Social Responsibility"
        },
        clinic: {
            title: "Crossroads Family Care Medical Clinic",
            category: "HEALTHCARE SERVICES",
            icon: "🏥",
            img: "images/medical-center.webp",
            desc: "Full-service primary care facility delivering preventative, diagnostic, and clinical medicine to rural East Texas residents in partnership with Crossroads Family Care.",
            location: "West Campus Wing",
            footprint: "22,000 sq ft",
            silo: "Medical Services"
        },
        veterans: {
            title: "Integrated Clinic & Veteran Center",
            category: "VETERAN ADVOCACY",
            icon: "🎖️",
            img: "images/veteran-center.webp",
            desc: "Dedicated sanctuary and clinical center for East Texas veterans, offering telehealth connectivity, peer support rooms, career transition services, and specialized outpatient care.",
            location: "North-Northeast Sector",
            footprint: "28,400 sq ft",
            silo: "Veterans Services"
        },
        childcare: {
            title: "Childcare & Early Learning Academy",
            category: "EDUCATION & FAMILY",
            icon: "🧸",
            img: "images/childcare-center.webp",
            desc: "Custom faceted footprint featuring colorful red, blue, and yellow architectural cladding, dual secured entrance portals, continuous clerestory daylight ribbons, and an enclosed play quad.",
            location: "South Campus Zone",
            footprint: "14,200 sq ft",
            silo: "Childcare & After-School"
        },
        market_plaza: {
            title: "Expanded Market Plaza",
            category: "COMMERCE & ARTISANS",
            icon: "🎪",
            img: "images/expanded-market-plaza.webp",
            desc: "Dynamic open-air marketplace under high-tensile canopy sails. Houses weekend farmers markets, regional trade expos, cultural fairs, and live outdoor community events.",
            location: "East Plaza Sector",
            footprint: "16,000 sq ft",
            silo: "Business & Economic Dev"
        },
        food_market: {
            title: "Community Food Market & Eatery",
            category: "FOOD SECURITY & COMMERCE",
            icon: "🥖",
            img: "images/community-food-market.webp",
            desc: "Modern timber-and-glass market pavilion providing fresh agricultural produce, locally prepared culinary offerings, and educational demonstration kitchens.",
            location: "Far East Perimeter",
            footprint: "12,800 sq ft",
            silo: "Community Activities"
        },
        tower: {
            title: "5G Disguised Monopine Cell Tower",
            category: "RURAL TELECOM & BROADBAND",
            icon: "📡",
            img: "images/cell-tower-5g.webp",
            desc: "High-capacity telecommunications mast disguised within East Texas pine boughs. Powers ultra-broadband, telehealth telemetry, distance learning, and campus-wide high-speed Wi-Fi.",
            location: "Northwest Forest Compound",
            footprint: "120 ft Vertical Mast",
            silo: "Digital Infrastructure"
        },
        one_park: {
            title: "One Park Garden & Walking Circuits",
            category: "RECREATION & WELLNESS",
            icon: "🌳",
            img: "images/one-park-garden.webp",
            desc: "Concentric paved health trails, manicured botanical rings, shaded contemplation arbors, and low-impact senior wellness circuits.",
            location: "Southwest Grounds",
            footprint: "2.4 Acres",
            silo: "Sports & Recreation"
        },
        butterfly: {
            title: "Butterfly Garden & Native Sanctuary",
            category: "BOTANICAL & ECOLOGY",
            icon: "🦋",
            img: "images/butterfly-garden.webp",
            desc: "Butterfly-shaped horticultural preserve planted with native Texas milkweed, pollinator flora, educational nature markers, and stone pathways.",
            location: "Southeast Grounds",
            footprint: "1.2 Acres",
            silo: "Youth & Environmental"
        },
        garden_plots: {
            title: "Community Garden Plots & Raised Beds",
            category: "SUSTAINABILITY & NUTRITION",
            icon: "🌱",
            img: "images/community-garden-plots.webp",
            desc: "Raised circular 3D platform featuring 6 organic planter plots, rainwater recovery barrels, and dedicated agricultural training tool sheds.",
            location: "Northeast Pond Perimeter",
            footprint: "0.8 Acres",
            silo: "Health & Nutrition"
        },
        plaza: {
            title: "Community Plaza & Central Fountain",
            category: "CIVIC CIVITAS",
            icon: "⛲",
            img: "images/community-plaza.webp",
            desc: "The central civic heart of the complex with radial paved pathways uniting all 10 facilities, framed by illuminated water fountains and public art.",
            location: "Central Campus Node",
            footprint: "25,000 sq ft",
            silo: "Community Unity"
        }
    };

    // 2. Facility Inspector Switching
    const facilityButtons = document.querySelectorAll('.facility-btn');
    const stageImg = document.getElementById('stage-img');
    const stageBadge = document.getElementById('stage-badge');
    const stageTitle = document.getElementById('stage-title');
    const stageDesc = document.getElementById('stage-desc');
    const stageLoc = document.getElementById('stage-location');
    const stageFoot = document.getElementById('stage-footprint');
    const stageSilo = document.getElementById('stage-silo');

    if (facilityButtons.length > 0) {
        facilityButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                facilityButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const key = btn.getAttribute('data-facility');
                const data = facilities[key];
                if (!data) return;

                if (stageImg) stageImg.src = data.img;
                if (stageBadge) stageBadge.textContent = data.category;
                if (stageTitle) stageTitle.textContent = data.title;
                if (stageDesc) stageDesc.textContent = data.desc;
                if (stageLoc) stageLoc.textContent = data.location;
                if (stageFoot) stageFoot.textContent = data.footprint;
                if (stageSilo) stageSilo.textContent = data.silo;
            });
        });
    }

    // 3. Tab Filter Navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.portal-section');

    if (tabButtons.length > 0) {
        tabButtons.forEach(tab => {
            tab.addEventListener('click', () => {
                tabButtons.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const target = tab.getAttribute('data-target');
                if (target === 'all') {
                    sections.forEach(sec => sec.style.display = 'block');
                } else {
                    sections.forEach(sec => {
                        if (sec.id === target) {
                            sec.style.display = 'block';
                            sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                            sec.style.display = 'none';
                        }
                    });
                }
            });
        });
    }

    // 4. Lightbox Simulator
    const previewCards = document.querySelectorAll('.preview-card');
    const lightbox = document.getElementById('portal-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const zoomToggleBtn = document.getElementById('lightbox-zoom-toggle');
    const closeBtn = document.getElementById('lightbox-close');

    if (previewCards.length > 0 && lightbox) {
        previewCards.forEach(card => {
            card.addEventListener('click', () => {
                const src = card.getAttribute('data-src');
                const title = card.getAttribute('data-title');
                if (lightboxImg) lightboxImg.src = src;
                if (lightboxCaption) lightboxCaption.textContent = title;
                lightbox.classList.add('active');
                if (lightboxImg) lightboxImg.classList.remove('zoomed');
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
        }

        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) lightbox.classList.remove('active');
            });
        }

        if (zoomToggleBtn && lightboxImg) {
            zoomToggleBtn.addEventListener('click', () => {
                lightboxImg.classList.toggle('zoomed');
                zoomToggleBtn.textContent = lightboxImg.classList.contains('zoomed') 
                    ? "Fit Viewport [Z]" 
                    : "Full Width Zoom [Z]";
            });

            lightboxImg.addEventListener('click', () => {
                lightboxImg.classList.toggle('zoomed');
                zoomToggleBtn.textContent = lightboxImg.classList.contains('zoomed') 
                    ? "Fit Viewport [Z]" 
                    : "Full Width Zoom [Z]";
            });
        }

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') lightbox.classList.remove('active');
            if (e.key === 'z' || e.key === 'Z') {
                if (zoomToggleBtn) zoomToggleBtn.click();
            }
        });
    }

    // 5. Copy Payment Helper
    const copyBtns = document.querySelectorAll('.copy-trigger');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalText = btn.textContent;
                    btn.textContent = "Copied!";
                    setTimeout(() => {
                        btn.textContent = originalText;
                    }, 2000);
                });
            }
        });
    });
});
