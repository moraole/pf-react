// Portfolio data for Erick Emmanuel Mora Olmedo

export const portfolioData = {
  hero: {
    name: "Erick Emmanuel Mora Olmedo",
    title: "Full Stack Developer & Data Scientist",
    description: "Building innovative solutions with modern technologies, from databases to machine learning applications.",
    resumeLink: "#",
    githubUsername: "moraole"
  },
  about: {
    heading: "About Me",
    description: "I'm a passionate full-stack developer and data scientist with expertise in building scalable applications and machine learning solutions. I specialize in modern web technologies, database systems, and neural networks. My work spans from competitive gaming analytics to AI-powered text classification systems.",
    yearsExperience: "3+",
    projectsCompleted: "15+",
    technologiesUsed: "20+"
  },
  skills: [
    { name: "React", level: 95, category: "Frontend" },
    { name: "JavaScript/TypeScript", level: 90, category: "Frontend" },
    { name: "Python", level: 95, category: "Backend" },
    { name: "PostgreSQL", level: 90, category: "Database" },
    { name: "FastAPI", level: 85, category: "Backend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "Machine Learning", level: 88, category: "AI/ML" },
    { name: "TensorFlow", level: 85, category: "AI/ML" },
    { name: "Neural Networks", level: 87, category: "AI/ML" },
    { name: "Git/GitHub", level: 92, category: "Tools" },
    { name: "RESTful APIs", level: 90, category: "Backend" }
  ],
  projects: [
    {
      id: 1,
      title: "Professional Portfolio Website",
      year: "2025",
      description: "Modern, responsive portfolio built with React, FastAPI, and MongoDB. Features smooth animations, project showcase, contact forms, and comprehensive case studies documenting the development lifecycle.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["React", "FastAPI", "MongoDB", "Shadcn UI", "Tailwind CSS"],
      liveLink: window.location.origin,
      githubLink: "#",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        challenge: "Create a professional portfolio that showcases projects with detailed case studies and lifecycle documentation.",
        solution: "Built a full-stack application with React frontend and FastAPI backend, implementing smooth animations, responsive design, and interactive project showcases.",
        results: [
          "Fully responsive design across all devices",
          "Interactive project cards with hover effects",
          "Integrated contact form with validation",
          "Smooth scroll navigation and animations",
          "Case study pages for detailed project documentation"
        ],
        techStack: [
          "Frontend: React 19, Shadcn UI, Tailwind CSS, React Router",
          "Backend: FastAPI, Python, Motor (async MongoDB driver)",
          "Database: MongoDB",
          "Deployment: Netlify (Frontend), Docker (Backend)"
        ],
        timeline: [
          { phase: "Planning & Design", duration: "Week 1", details: "Analyzed existing portfolio, gathered requirements, created wireframes and design system" },
          { phase: "Frontend Development", duration: "Week 1-2", details: "Built React components, implemented responsive layouts, added animations" },
          { phase: "Backend Development", duration: "Week 2", details: "Created FastAPI endpoints, MongoDB integration, contact form handling" },
          { phase: "Testing & Deployment", duration: "Week 3", details: "Cross-browser testing, performance optimization, deployment setup" }
        ],
        lessonsLearned: [
          "Importance of component reusability in React",
          "Performance optimization with lazy loading",
          "Responsive design best practices",
          "Clean API architecture with FastAPI"
        ]
      }
    },
    {
      id: 2,
      title: "League Of Legends Player Comparison App",
      year: "2025",
      description: "Advanced analytics platform for comparing League of Legends player statistics. Features real-time data visualization, match history analysis, and performance metrics comparison across multiple players.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      technologies: ["React", "Python", "Riot API", "Chart.js", "PostgreSQL"],
      liveLink: "#",
      githubLink: "https://github.com/moraole",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        challenge: "Create a comprehensive tool for analyzing and comparing League of Legends player performance with real-time data from Riot Games API.",
        solution: "Developed a full-stack application that fetches player data from Riot API, processes statistics, and presents comparative analytics through interactive visualizations.",
        results: [
          "Real-time player statistics retrieval",
          "Interactive data visualizations with Chart.js",
          "Match history analysis and comparison",
          "Performance metrics dashboard",
          "Player rank tracking and trends"
        ],
        techStack: [
          "Frontend: React, Chart.js, Material-UI",
          "Backend: Python, Flask/FastAPI",
          "Database: PostgreSQL",
          "API: Riot Games API",
          "Data Processing: Pandas, NumPy"
        ],
        timeline: [
          { phase: "Research & API Integration", duration: "Week 1", details: "Studied Riot API documentation, obtained API keys, tested endpoints" },
          { phase: "Backend Development", duration: "Week 2-3", details: "Built API wrapper, data processing pipeline, database schema design" },
          { phase: "Frontend Development", duration: "Week 3-4", details: "Created comparison interface, data visualizations, responsive layouts" },
          { phase: "Testing & Optimization", duration: "Week 5", details: "Performance optimization, rate limit handling, user testing" }
        ],
        lessonsLearned: [
          "Rate limiting strategies for external APIs",
          "Efficient data caching mechanisms",
          "Complex data visualization techniques",
          "Real-time data processing optimization"
        ]
      }
    },
    {
      id: 3,
      title: "Neural Network SMS Text Classifier",
      year: "2024",
      description: "Machine learning model for classifying SMS messages as spam or legitimate. Implements deep learning with TensorFlow and achieves high accuracy through advanced NLP techniques and neural network architectures.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      technologies: ["Python", "TensorFlow", "Keras", "NLP", "Scikit-learn"],
      liveLink: "#",
      githubLink: "https://github.com/moraole",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        challenge: "Build an accurate SMS spam detection system using neural networks that can classify messages in real-time with high precision.",
        solution: "Developed a deep learning model using TensorFlow and Keras with LSTM layers for sequential text processing, achieving over 95% accuracy in spam detection.",
        results: [
          "95%+ accuracy in spam detection",
          "Real-time message classification",
          "Low false positive rate",
          "Handles multiple languages",
          "Scalable architecture for production use"
        ],
        techStack: [
          "ML Framework: TensorFlow, Keras",
          "NLP: NLTK, spaCy, Word2Vec",
          "Data Processing: Pandas, NumPy",
          "Model: LSTM Neural Network",
          "Deployment: Flask API, Docker"
        ],
        timeline: [
          { phase: "Data Collection & Preprocessing", duration: "Week 1-2", details: "Gathered SMS datasets, cleaned data, tokenization, vectorization" },
          { phase: "Model Development", duration: "Week 3-4", details: "Designed neural network architecture, trained multiple models, hyperparameter tuning" },
          { phase: "Evaluation & Optimization", duration: "Week 5", details: "Model evaluation, performance optimization, cross-validation" },
          { phase: "Deployment", duration: "Week 6", details: "Created API endpoint, containerization, documentation" }
        ],
        lessonsLearned: [
          "Text preprocessing best practices",
          "LSTM architecture for sequential data",
          "Model evaluation metrics for imbalanced datasets",
          "Production ML deployment strategies"
        ]
      }
    },
    {
      id: 4,
      title: "WorldCup Database using PostgreSQL",
      year: "2023",
      description: "Comprehensive relational database system for FIFA World Cup data. Features complex queries, normalized schema design, and advanced SQL operations for analyzing historical tournament statistics and match data.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
      technologies: ["PostgreSQL", "SQL", "Python", "Database Design"],
      liveLink: "#",
      githubLink: "https://github.com/moraole",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        challenge: "Design and implement a normalized relational database to store and query comprehensive FIFA World Cup historical data efficiently.",
        solution: "Created a well-structured PostgreSQL database with normalized tables, efficient indexing, and complex queries for analyzing tournament statistics, player performance, and match outcomes.",
        results: [
          "Fully normalized database schema (3NF)",
          "Efficient query performance with indexing",
          "Complex analytical queries for statistics",
          "Historical data from multiple World Cups",
          "Support for advanced reporting and analytics"
        ],
        techStack: [
          "Database: PostgreSQL 14+",
          "Schema Design: ER Diagrams, Normalization",
          "Data Import: Python scripts with psycopg2",
          "Queries: Advanced SQL, CTEs, Window Functions",
          "Tools: pgAdmin, DBeaver"
        ],
        timeline: [
          { phase: "Requirements Analysis", duration: "Week 1", details: "Identified entities, relationships, data requirements" },
          { phase: "Schema Design", duration: "Week 2", details: "Created ER diagrams, normalized tables, defined constraints" },
          { phase: "Implementation", duration: "Week 3", details: "Created tables, relationships, indexes, views" },
          { phase: "Data Population & Testing", duration: "Week 4", details: "Imported historical data, tested queries, optimized performance" }
        ],
        lessonsLearned: [
          "Database normalization principles",
          "Query optimization techniques",
          "Index strategy for large datasets",
          "Complex SQL query construction"
        ]
      }
    },
    {
      id: 5,
      title: "SITE 2023 Publication",
      year: "2023",
      description: "Research publication or project presented at SITE 2023. Contributed to academic research in software engineering, information technology, or education technology.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      technologies: ["Research", "Technical Writing", "Academic Publication"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
      hasCaseStudy: false
    }
  ],
  contact: {
    email: "erickmoraolmedo@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "United States"
  },
  social: {
    github: "https://github.com/moraole",
    linkedin: "https://linkedin.com/in/erick-mora",
    twitter: "https://twitter.com/erickmo",
    portfolio: "https://erickmo.netlify.app/"
  }
};
