# Portfolio Website - Customization Guide

## 🎯 Overview

Your professional portfolio website is ready! This is a personalized portfolio for **Erick Emmanuel Mora Olmedo**, featuring your actual projects with comprehensive case studies and a modern dark theme with animated particles effect inspired by your original portfolio.

## ✨ Key Features

- **Dark Hero Section** with animated particles/stars background
- **Project Case Studies** with detailed lifecycle documentation
- **Skills by Category** (Frontend, Backend, Database, AI/ML, Tools)
- **Responsive Design** across all devices
- **Smooth Animations** and transitions
- **Interactive Elements** with hover effects
- **Contact Form** with toast notifications (currently frontend-only)

## 📝 Your Current Projects

1. **Professional Portfolio Website** (2025) - This website with full case study
2. **League Of Legends Player Comparison App** (2025) - Analytics platform
3. **Neural Network SMS Text Classifier** (2024) - ML spam detection
4. **WorldCup Database using PostgreSQL** (2023) - Database system
5. **SITE 2023 Publication** (2023) - Research publication

## 🎨 How to Customize

### Personal Information

Edit `/app/frontend/src/mock.js`:

#### Hero Section
```javascript
hero: {
  name: "Erick Emmanuel Mora Olmedo",  // Your full name
  title: "Full Stack Developer & Data Scientist",  // Your title
  description: "...",  // Your tagline
  resumeLink: "#"  // Link to your resume PDF
}
```

#### About Section
Update your bio, experience stats:
```javascript
about: {
  description: "...",  // Your story
  yearsExperience: "3+",
  projectsCompleted: "15+",
  technologiesUsed: "20+"
}
```

#### Skills
Skills are organized by category (Frontend, Backend, Database, AI/ML, Tools):
```javascript
skills: [
  { name: "React", level: 95, category: "Frontend" },
  // Add more skills with their proficiency level and category
]
```

#### Projects with Case Studies
Each project can have a detailed case study:
```javascript
{
  id: 1,
  title: "Project Name",
  year: "2025",
  description: "...",
  image: "https://...",
  technologies: ["React", "Python"],
  liveLink: "#",
  githubLink: "#",
  featured: true,
  hasCaseStudy: true,  // Enable case study page
  caseStudy: {
    challenge: "...",
    solution: "...",
    results: [...],
    techStack: [...],
    timeline: [...],
    lessonsLearned: [...]
  }
}
```

#### Contact & Social Links
```javascript
contact: {
  email: "erickmoraolmedo@gmail.com",
  phone: "+1 (555) 123-4567",
  location: "United States"
},
social: {
  github: "https://github.com/moraole",
  linkedin: "https://linkedin.com/in/erick-mora",
  twitter: "https://twitter.com/erickmo"
}
```

## 🎨 Design Theme

### Dark Hero Section
- Gradient background: slate-900 → slate-800
- Animated particles/stars effect
- White text on dark background
- Social media icons with backdrop blur

### Color Scheme
- Primary: Slate-900 (dark blue-gray)
- Secondary: White/Slate-100
- Accent: Various shades of slate
- No gradients on buttons (following design guidelines)

### Typography
- Large, bold headings
- Clean, readable body text
- Proper spacing and hierarchy

## 🚀 Features Breakdown

### 1. Hero Section
- Full-screen landing with animated particles
- Your name, title, and tagline
- CTA buttons (View Work, Download Resume)
- Social media links (GitHub, LinkedIn, Twitter)
- Scroll indicator

### 2. About Section
- Bio/description
- Statistics cards with icons
- Clean, professional layout

### 3. Projects Section
- Grid layout with project cards
- Year badges
- Hover effects showing action buttons
- "Case Study" button for detailed project pages
- Technology badges

### 4. Case Study Pages
Each project with `hasCaseStudy: true` gets:
- Full case study page at `/project/:id`
- Sections: Challenge, Solution, Results, Tech Stack, Timeline, Lessons Learned
- "Get In Touch" CTA at the bottom
- Back to Portfolio navigation

### 5. Skills Section
- Organized by category (Frontend, Backend, etc.)
- Progress bars showing proficiency
- Hover animations

### 6. Contact Section
- Contact information cards
- Working contact form (frontend validation)
- Toast notifications on submission

### 7. Header Navigation
- Sticky header
- Changes style based on scroll position
- Adapts to dark hero section
- Smooth scroll to sections
- Mobile-responsive menu

## 📂 File Structure

```
/app/frontend/src/
├── mock.js                           # 👈 MAIN CUSTOMIZATION FILE
├── components/
│   ├── Header.js                     # Navigation with dark/light mode
│   ├── Hero.js                       # Hero with particles
│   ├── ParticlesBackground.js        # Animated stars effect
│   ├── About.js                      # About section
│   ├── Projects.js                   # Projects grid
│   ├── ProjectCaseStudy.js          # Case study page
│   ├── Skills.js                     # Skills by category
│   ├── Contact.js                    # Contact form
│   └── Footer.js                     # Footer
├── pages/
│   └── Home.js                       # Main page
└── App.js                            # Router configuration
```

## 🎯 Adding New Projects

1. Open `/app/frontend/src/mock.js`
2. Add a new project to the `projects` array:
```javascript
{
  id: 6,  // Increment ID
  title: "Your New Project",
  year: "2025",
  description: "Description...",
  image: "https://...",  // Project image URL
  technologies: ["Tech1", "Tech2"],
  liveLink: "https://...",
  githubLink: "https://...",
  featured: true,
  hasCaseStudy: false  // Set to true to add case study
}
```

3. If adding a case study, include the `caseStudy` object with all sections

## 🖼️ Images

Current project images are from Unsplash. To use your own:
1. Host images online (Imgur, Cloudinary, etc.)
2. Or place in `/app/frontend/public/images/`
3. Reference as `/images/project-name.jpg`

## 🔧 Technical Stack

- **Frontend**: React 19, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI, Python
- **Database**: MongoDB
- **Animations**: CSS animations, Canvas API (particles)
- **Icons**: Lucide React
- **Routing**: React Router

## 🎨 Customizing the Particles Effect

Edit `/app/frontend/src/components/ParticlesBackground.js`:
- Number of particles: Line ~43
- Particle size: Line ~30
- Connection distance: Line ~58
- Animation speed: Lines ~31-32

## 📱 Responsive Design

The portfolio is fully responsive:
- Desktop: Full layout with all features
- Tablet: Adjusted grid layouts
- Mobile: Single column, hamburger menu

## 🚀 Next Steps

### Frontend Enhancements
- Add more projects as you complete them
- Update case studies with actual data
- Add your real resume PDF link
- Update social media links

### Backend Integration (Optional)
- Connect contact form to email service
- Add analytics tracking
- Create admin panel for project management
- Add blog functionality

## 💡 Tips

1. Keep project descriptions concise (2-3 lines)
2. Use high-quality images (recommended: 800x600px)
3. Update your GitHub link to actual repository
4. Add real contact information
5. Write detailed case studies - they showcase your process
6. Include lessons learned - shows growth mindset

## 🎉 What Makes This Portfolio Stand Out

1. **Case Studies**: Full project lifecycle documentation
2. **Dark Theme**: Modern, professional aesthetic matching your original
3. **Animated Background**: Engaging particles effect
4. **Organized Skills**: Clear categorization
5. **Real Projects**: Your actual work with proper attribution
6. **Professional Design**: Industry-standard layout and interactions

---

**Current Portfolio Owner**: Erick Emmanuel Mora Olmedo  
**GitHub**: [@moraole](https://github.com/moraole)  
**Original Portfolio**: [erickmo.netlify.app](https://erickmo.netlify.app/)

To customize, edit `/app/frontend/src/mock.js` and replace the placeholder content with your information!
