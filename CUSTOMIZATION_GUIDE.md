# Erick's Portfolio - Customization Guide

## Overview

A minimalist, single-page portfolio website inspired by [erickmo.netlify.app](https://erickmo.netlify.app/).

## Features

- **Day/Night Theme Toggle** - Simple slider to switch between light and dark modes
- **Animated Star Background** - Subtle 4-pointed star shapes that twinkle
- **Project Case Studies** - Slide-up panel with detailed project information
- **Responsive Design** - Works on all screen sizes

## Customization

### Edit Portfolio Content

All content is in `/app/frontend/src/mock.js`:

```javascript
export const portfolioData = {
  projects: [
    {
      id: 1,
      title: "Project Name",
      year: "2025",
      description: "...",
      technologies: ["React", "Python"],
      hasCaseStudy: true,
      caseStudy: {
        challenge: "...",
        solution: "...",
        results: [...],
        techStack: [...],
        timeline: [...],
        lessonsLearned: [...]
      }
    }
  ]
};
```

### Adding New Projects

1. Add a new object to the `projects` array
2. Set `hasCaseStudy: true` to enable the case study panel
3. Include all case study sections

### Contact Information

Update the contact section in `MinimalistPortfolio.js`:
- Location
- Email address

## File Structure

```
/app/frontend/src/
├── mock.js                    # All portfolio content
├── components/
│   └── AccessibilityMenu.js   # Theme toggle
├── contexts/
│   └── AccessibilityContext.js
├── pages/
│   └── MinimalistPortfolio.js # Main component
└── index.css                  # Global styles
```

## Tech Stack

- React
- TailwindCSS
- Canvas API (star animations)

## Deployment

Configured for Netlify. See `netlify.toml`.

---

**Portfolio Owner**: Erick Mora Olmedo  
**GitHub**: [@moraole](https://github.com/moraole)
