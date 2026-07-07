# Captain Jon's Pool Service — Design Brainstorm

## Reference Site
Design must be congruent with https://poolleaksarasota.com/ which uses:
- **Dark navy/charcoal hero** with full-bleed photography
- **Amber/gold accent** (#F5A623 / warm gold) for CTAs and highlighted text
- **Anchor logo** motif — nautical/captain branding
- **Clean white sections** alternating with dark sections
- **Bold sans-serif headings** (heavy weight) with clean body copy
- **Trust badges** in hero (Licensed & Insured, Same-Day, etc.)
- **Sticky header** that transitions from transparent to opaque on scroll
- **Phone number prominent** in top-right CTA button (amber/gold)

---

## Three Stylistic Approaches

### Approach A — "Gulf Coast Authority"
Deep navy + amber gold, nautical anchor motif, bold editorial typography, asymmetric hero with captain photo. Probability: **0.07**

### Approach B — "Florida Sunshine Pro"
Bright aqua + white + coral accents, clean grid layout, tropical feel, very light and airy. Probability: **0.03**

### Approach C — "Coastal Command"
Dark charcoal + electric teal + warm white, industrial-nautical hybrid, strong typographic hierarchy. Probability: **0.05**

---

## Chosen Approach: **A — "Gulf Coast Authority"**

This approach directly mirrors the poolleaksarasota.com aesthetic, creating a cohesive Captain Jon's brand family.

### Design Movement
Editorial nautical authority — the visual language of a trusted local expert, not a franchise.

### Core Principles
1. **Dark-first hero** — full-bleed dark navy with photography, creating immediate authority
2. **Gold as the conversion color** — every CTA, price highlight, and key stat uses amber gold
3. **Trust through specificity** — named neighborhoods, real service areas, no generic copy
4. **Scroll-driven revelation** — content reveals as user scrolls, no click-to-expand

### Color Philosophy
- **Navy Dark**: `oklch(0.18 0.04 250)` — deep professional navy (matches poolleaksarasota.com hero)
- **Amber Gold**: `oklch(0.75 0.16 75)` — warm conversion gold for CTAs and highlights
- **Pool Blue**: `oklch(0.55 0.15 220)` — medium pool water blue for accents
- **Clean White**: `oklch(0.98 0 0)` — section backgrounds, text on dark
- **Light Gray**: `oklch(0.96 0.005 250)` — subtle section alternation

### Layout Paradigm
Asymmetric full-bleed sections with left-anchored text blocks. Hero: captain photo right, headline left. Service sections alternate image/text. Chemical delivery gets a full-width "feature spotlight" with a dark background to make it stand out.

### Signature Elements
1. **Anchor divider** — thin nautical anchor icon used as section dividers
2. **Gold pill badges** — "NEW SERVICE", "SARASOTA'S FIRST", "ONLY $45/MO" in amber gold
3. **Wave SVG dividers** — subtle wave shapes between sections (pool water motif)

### Interaction Philosophy
Smooth scroll-triggered fade-ins. Phone number pulses gently on mobile. CTA buttons scale on hover. Sticky nav transitions from transparent to navy on scroll.

### Animation
- Hero text: staggered fade-up (0ms, 150ms, 300ms delays)
- Section cards: fade-up on scroll intersection (60ms stagger)
- CTA buttons: scale(1.03) on hover, scale(0.97) on active
- Stats counter: count-up animation when scrolled into view
- Nav: smooth background transition on scroll (200ms ease-out)

### Typography System
- **Display**: Oswald (700) — bold, authoritative, all-caps for section labels
- **Headings**: Montserrat (700/800) — strong, modern, readable
- **Body**: Open Sans (400/600) — clean, highly readable for service descriptions
- **Accent**: Oswald (400) — for stats, labels, navigation

### Brand Essence
Sarasota's hands-on pool expert — personal service, expert results, no franchise overhead. Adjectives: **Trustworthy, Expert, Local**.

### Brand Voice
Headlines are direct and benefit-focused. CTAs are action-oriented without being pushy.
- Example headline: "Your Pool, Perfectly Balanced — Every Single Week"
- Example CTA: "Get Your Free Quote Today"
- Banned phrases: "Welcome to our website", "Get started today", "We are committed to excellence"

### Wordmark & Logo
Anchor icon (matching poolleaksarasota.com) + "Captain Jon's" in Oswald bold + "POOL SERVICE" in smaller Oswald regular below. Gold anchor on navy background.

### Signature Brand Color
**Amber Gold** `#F5A623` — the same gold used on poolleaksarasota.com, creating brand family cohesion.

---

## Style Decisions
- Form submissions route to jonathansmart4@gmail.com
- Phone: (941) 584-3165 (pool service line)
- Pool Leak site phone: (941) 253-3447
- Chemical delivery service: $45/month subscription, text photo of test strip
- Service areas: Sarasota, Bradenton, Parrish, Lakewood Ranch, Venice, Siesta Key, Longboat Key, Manatee County
- No contracts, no obligations messaging throughout
- Cross-link to poolleaksarasota.com in nav and footer
