# Erick Mora Olmedo Portfolio - Product Requirements Document

## Original Problem Statement
Build a personal portfolio website for Erick Emmanuel Mora Olmedo that replicates the minimalist, single-page design of the user's original portfolio (https://erickmo.netlify.app).

## User Personas
- **Primary:** Recruiters and hiring managers viewing portfolio
- **Secondary:** Fellow developers and collaborators

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

### Accessibility (Simplified)
- ✅ Simple light/dark mode toggle slider
- ✅ Sun/Moon icons on toggle
- ✅ Keyboard accessible

### Configuration
- ✅ Netlify deployment configuration (netlify.toml)
- ✅ "Made with Emergent" badge removed

## Architecture
```
/app/frontend/
├── src/
│   ├── components/
│   │   ├── AccessibilityMenu.js  # Simple theme toggle slider
│   │   └── TechStackBadge.js
│   ├── contexts/
│   │   └── AccessibilityContext.js
│   ├── pages/
│   │   └── MinimalistPortfolio.js  # Main portfolio component
│   ├── index.css                    # Global styles & themes
│   └── mock.js                      # All portfolio content
└── netlify.toml
```

## Key Files
- `/app/frontend/src/pages/MinimalistPortfolio.js` - Main component with star animation
- `/app/frontend/src/mock.js` - All portfolio content (projects, case studies)
- `/app/frontend/src/components/AccessibilityMenu.js` - Theme toggle

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
- Added comprehensive accessibility features
- Configured for Netlify deployment

---

## Backlog / Future Considerations
- P2: Break down MinimalistPortfolio.js into smaller components
- P3: Add project images/screenshots to case studies
- P3: Add social links (GitHub, LinkedIn)
