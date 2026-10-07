---
name: PPLG Precision Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006242'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  accent-blue-hover: '#1D4ED8'
  accent-blue-dark: '#3B82F6'
  bg-canvas-light: '#F8FAFC'
  bg-surface-light: '#FFFFFF'
  border-light: '#E2E8F0'
  bg-canvas-dark: '#0F172A'
  bg-surface-dark: '#1E293B'
  border-dark: '#334155'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.025em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system expresses a disciplined, modern tech aesthetic crafted specifically for early-career software and game engineering students. The identity bridges foundational competence and forward-looking ambition: structured without feeling clinical, vibrant without visual clutter, and deliberately engineered to highlight code craftsmanship and digital deliverables.

The design movement centers on **Modern Technical Minimalism**:
- **Clarity and Signal-to-Noise Ratio**: Content, typography, and project showcases take precedence over ornamental decorations.
- **Micro-tactile Precision**: Subtle borders, sharp contrast steps, and controlled ambient elevation ground components cleanly on screen.
- **Developer Affordances**: Code-adjacent touches such as status pills, monospace accents, technology stack tags, and crisp hairline dividers convey a practical, production-ready mindset.

## Colors

The palette balances clean slate architecture with an electric blue accent that commands focus for interactions and narrative milestones.

- **Primary (`#2563EB`)**: Drives primary calls-to-action, active navigation states, interactive hover anchors, and focal skill badges. In dark mode, this adapts toward `#3B82F6` for accessibility against deep slate backdrops.
- **Secondary (`#0F172A`)**: Represents structural authority and anchor text in light mode, doubling as the core canvas substrate in dark mode.
- **Tertiary (`#10B981`)**: Dedicated to availability signals, build indicators, and positive runtime states (e.g., "Available for Internship").
- **Neutral (`#64748B`)**: Regulates secondary text, subtle outline definitions, and quiet iconography across both lighting environments.

Surfaces rely on pure white (`#FFFFFF`) against cool off-canvas tones (`#F8FAFC`) in light mode, translating to `#1E293B` against `#0F172A` under dark mode. Borders utilize hairline values (`#E2E8F0` / `#334155`) to demarcate containers without creating visual heaviness.

## Typography

The type system pairs **Plus Jakarta Sans** for headlines and structural titling with **Inter** for sustained technical reading and component metadata.

- **Plus Jakarta Sans**: Injected with slight geometric warmth and tight tracking (`-0.02em` to `-0.03em`) on large display tiers, creating confident, contemporary hero titles and section headers.
- **Inter**: Neutral, tall x-height, and exceptionally legible across compact screens and nested project tags. Use `body-md` for portfolio descriptions and `body-sm` for secondary project metadata.
- **Labels & Tags**: Rendered with medium or semi-bold weights with gentle letter-spacing to enhance readability in small chips and metadata badges.

## Layout & Spacing

The structural layout utilizes a centered, high-focus container constrained to a maximum width of `64rem` (`1024px` / `max-w-5xl`). This preserves optimal typographic line lengths and avoids overstretched project grids on wide desktop displays.

- **Grid Architecture**: Standard 12-column responsive fluid grid.
  - **Mobile (< 768px)**: 1 column stack; outer margins set to `1rem`, card gaps to `1rem`.
  - **Tablet (768px - 1024px)**: 2-column project split; outer margins set to `1.5rem`, card gaps to `1.5rem`.
  - **Desktop (≥ 1024px)**: 3-column project presentation; container centered with `2rem` safe margin padding.
- **Vertical Rhythm**: Major sections breathe using `space-2xl` (`4rem`) padding top and bottom, generating generous whitespace that emphasizes individual accomplishments.
- **Component Flow**: Form groups, hero buttons, and project metadata adhere to a strict 4px/8px modular scale (`space-xs` through `space-xl`).

## Elevation & Depth

Visual hierarchy prioritizes crisp borders combined with soft ambient light rather than thick, high-drop shadow stacks:

- **Flat Outlines with Micro-Tints**: Surfaces sit primarily on low-contrast structural hairlines (`1px solid #E2E8F0` in light, `1px solid #334155` in dark).
- **Ambient Card Elevation**: Project and bio cards utilize a low-intensity, hyper-diffused shadow (`0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`). On interactive hover, elevate smoothly to `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)` with a -2px vertical lift.
- **Frosted Glass Header**: The top navigation employs an elevated backdrop blur (`backdrop-filter: blur(12px)`) combined with an 80% opacity fill (`#FFFFFF/80` or `#0F172A/80`) and a persistent bottom hairline border to anchor reading flow during scroll.

## Shapes

The interface embraces a rounded level of `2` (`0.5rem` / `8px` baseline radius). This matches modern technical software interfaces by delivering clean geometry without clinical sharpness:

- **Buttons & Input Elements**: `rounded-md` (`0.5rem` / `8px`) provides compact tactile affordance.
- **Cards & Project Surfaces**: `rounded-lg` (`1rem` / `16px`) delivers distinct framing for project screenshots and section blocks.
- **Status Indicators & Tech Stack Tags**: Fully rounded pill shapes (`rounded-full` / `9999px`) to create clear differentiation between actionable surfaces and informational labels.
- **Embedded Media**: Project screenshots adopt top-radius matching (`rounded-t-lg`) with clipped overflow to maintain edge alignment with card borders.

## Components

### Buttons
- **Primary**: Solid blue (`#2563EB`), high-contrast white text, `label-md` weight, `rounded-md`. Subtle hover transition to `#1D4ED8`. Active state scales to `98%`.
- **Secondary / Ghost**: Hairline border (`#E2E8F0` / dark: `#334155`), background transparent or subtle surface tint. Text matches primary body content. Hover introduces surface neutral tinting.
- **Icon Actions**: 40x40px square touch target, `rounded-md`, housing SVGs (GitHub, External Link, Theme Toggle) centered with smooth foreground color shifts.

### Chips & Badges
- **Status Pill (Internship/Availability)**: Fully rounded (`rounded-full`), flex row with an animated or static 6px indicator dot (`#10B981`), `label-sm` text, light emerald background tint (`bg-emerald-50 text-emerald-700` / dark: `bg-emerald-950/40 text-emerald-300`).
- **Tech Stack Badges**: Pill-shaped, subtle slate border, background `bg-slate-100 dark:bg-slate-800`, text `text-slate-700 dark:text-slate-300`. Padding `4px 12px`.

### Project Cards
- **Structure**: Vertical flex layout; top 16:9 media container, followed by structured padding (`space-lg`).
- **Content Hierarchy**: 
  1. Title (`headline-md`) linked to project repository or demo.
  2. 2-line truncated description (`body-sm`).
  3. Inline tag ribbon for stack composition.
  4. Footer action row with text/icon links for "Live Demo" and "Source Code".
- **Hover Behavior**: Card border shifts toward accent color or lighter slate border, accompanied by a subtle `-2px` transform.

### Input Fields & Contact Form
- **Form Fields**: Base surface background, 1px border (`#E2E8F0` / dark: `#334155`), `rounded-md`, internal padding `10px 14px`.
- **Focus State**: Ring offset of `2px` with primary blue accent (`focus:ring-2 focus:ring-blue-500 focus:border-transparent`).
- **Labels**: `label-md` pinned directly above field with `space-xs` gap.

### Lists & Key Specifications
- **Skills Matrix**: Categorized list items grouped by capability (Web Dev, Backend Logic, Game Dev) containing micro icon bullet points and progress or level tags.
