# Portfolio Website - Customization Guide

## 🎯 Quick Start

Your professional portfolio website is ready! All the content can be easily customized by editing the mock data file.

## 📝 How to Customize Your Portfolio

### 1. Personal Information & Content
Edit `/app/frontend/src/mock.js` to update:

#### Hero Section
```javascript
hero: {
  name: "Your Name",           // Replace with your name
  title: "Full Stack Developer", // Replace with your title/role
  description: "...",           // Your tagline
  resumeLink: "#"              // Link to your resume PDF
}
```

#### About Section
```javascript
about: {
  heading: "About Me",
  description: "...",          // Your bio/story
  yearsExperience: "5+",       // Years of experience
  projectsCompleted: "50+",    // Number of projects
  happyClients: "30+"         // Number of clients
}
```

#### Skills
```javascript
skills: [
  { name: "React", level: 90 },     // Skill name and proficiency (0-100)
  { name: "JavaScript", level: 95 },
  // Add or remove skills as needed
]
```

#### Projects
```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "https://...",        // Project thumbnail URL
    technologies: ["React", "Node.js"], // Tech stack
    liveLink: "https://...",     // Live demo URL
    githubLink: "https://..."    // GitHub repo URL
  },
  // Add more projects...
]
```

#### Contact Information
```javascript
contact: {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country"
}
```

#### Social Links
```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername"
}
```

## 🎨 Design Customization

### Colors
To change the color scheme, edit `/app/frontend/src/index.css`:
- Update CSS variables in the `:root` section
- Primary colors are defined as `--primary`, `--secondary`, etc.

### Logo/Branding
Edit `/app/frontend/src/components/Header.js` and `/app/frontend/src/components/Footer.js` to change the "Portfolio" text to your brand name or add a logo image.

## 📸 Adding Your Own Project Images

Replace the placeholder image URLs in `mock.js` with:
1. Your own hosted images (recommended)
2. Images from Unsplash, Pexels, or other free stock photo sites
3. Images stored in `/app/frontend/public/` folder (reference as `/image-name.jpg`)

## 🚀 Features Included

### ✅ Functional (Frontend Only with Mock Data)
- Smooth scroll navigation
- Responsive design (mobile, tablet, desktop)
- Interactive project cards with hover effects
- Contact form with toast notifications (MOCK - not connected to backend)
- Social media links
- Skills progress bars
- Statistics cards

### 📦 Components Used
- Shadcn UI components (Button, Card, Input, Textarea, Progress, Badge, Toast)
- Lucide React icons
- React Router for routing
- Sonner for toast notifications

## 🔄 Next Steps

If you want to add backend functionality:
1. Contact form can be connected to send actual emails
2. Add a CMS to manage projects dynamically
3. Add analytics tracking
4. Add blog functionality
5. Add authentication for admin panel

## 💡 Tips

- Keep project descriptions concise (2-3 lines)
- Use high-quality images (1200x800px recommended)
- Update social links to your actual profiles
- Add your real resume PDF and update the link
- Test on mobile devices for responsive design

## 🎯 File Structure

```
/app/frontend/src/
├── mock.js                    # 👈 EDIT THIS FILE for content
├── components/
│   ├── Header.js             # Navigation bar
│   ├── Hero.js               # Hero/landing section
│   ├── About.js              # About section
│   ├── Projects.js           # Projects grid
│   ├── Skills.js             # Skills section
│   ├── Contact.js            # Contact form
│   └── Footer.js             # Footer with social links
├── pages/
│   └── Home.js               # Main page layout
└── App.js                    # Main app component
```

---

**Need help?** The portfolio is built with React and uses modern best practices. Simply edit the mock.js file to get started!
