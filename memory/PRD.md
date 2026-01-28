# Erick Mora Olmedo Portfolio - Product Requirements Document

## Original Problem Statement
Build a personal portfolio website for Erick Emmanuel Mora Olmedo that replicates the minimalist, single-page design of the user's original portfolio (https://erickmo.netlify.app).

## Core Requirements (Completed)

### Layout & Design
- ✅ Single-page minimalist design
- ✅ "ERICK" on one line, "MORA" below shifted right
- ✅ Projects listed on right side with year indicators
- ✅ Contact info (Seattle, WA + email) at bottom right

### Theme System
- ✅ Day/Night mode toggle (simplified slider button)
- ✅ **Night Mode (Default):** Dark blue gradient with subtle animated star-shaped stars
- ✅ **Light Mode:** Pure white background with subtle black star shapes
- ✅ Moon removed from dark mode

### Stars Animation
- ✅ Star-shaped particles (4-pointed stars, not circles)
- ✅ Varying sizes (0.5-2px, much smaller than before)
- ✅ Lower opacity for subtlety (doesn't overpower text)
- ✅ Subtle twinkle effect
- ✅ **Resize bug fixed:** Stars regenerate on window resize

### Case Study Panel
- ✅ Slide-up panel from bottom on project click
- ✅ 15% margins on sides (7.5% each side)
- ✅ Click outside to close with smooth animation
- ✅ Full case study content with sections: Challenge, Solution, Results, Tech Stack, Timeline, Lessons

### Branding
- ✅ Page title: "Erick's Portfolio"
- ✅ Meta description updated
- ✅ Removed all external branding references
- ✅ Clean README.md and CUSTOMIZATION_GUIDE.md

### Configuration
- ✅ Netlify deployment configuration (netlify.toml)

## Architecture
```
/app/frontend/
├── public/
│   └── index.html             # Clean HTML with custom title
├── src/
│   ├── components/
│   │   └── AccessibilityMenu.js  # Simple theme toggle slider
│   ├── contexts/
│   │   └── AccessibilityContext.js
│   ├── pages/
│   │   └── MinimalistPortfolio.js  # Main portfolio component
│   ├── index.css              # Global styles & themes
│   └── mock.js                # All portfolio content
└── netlify.toml
```

## Tech Stack
- React
- TailwindCSS
- Canvas API (for star animations)

## Deployment
- Platform: Netlify
- Build command: `yarn build`
- Publish directory: `build`

---

## Changelog

### January 28, 2026
- **Updated portfolio** - Changed page title to "Erick's Portfolio"
- Removed all external branding references from index.html
- Updated README.md and CUSTOMIZATION_GUIDE.md
- Simplified accessibility menu to just light/dark toggle slider
- Removed moon from dark mode
- Changed stars from circles to 4-pointed star shapes
- Made stars much smaller (0.5-2px) and more subtle
- Reduced star opacity to not overpower text
- Fixed resize bug: stars now regenerate properly when window is resized
- Added subtle twinkle animation to stars

### Previous Sessions
- Built minimalist one-page portfolio layout
- Implemented day/night theme transition
- Created slide-up case study panel
- Configured for Netlify deployment

---

## Backlog / Future Considerations
- P2: Break down MinimalistPortfolio.js into smaller components
- P3: Add project images/screenshots to case studies
- P3: Add social links (GitHub, LinkedIn)
