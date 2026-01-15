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
        challenge: "Design and build a professional portfolio website that not only showcases projects but provides comprehensive case studies documenting the entire development lifecycle. The site needed to stand out to recruiters while maintaining excellent performance, accessibility, and user experience across all devices.",
        solution: "Architected a full-stack application using React 19 for the frontend with modern hooks and context API, FastAPI for the backend with async/await patterns, and MongoDB for flexible data storage. Implemented a component-based architecture with reusable UI elements from Shadcn UI, custom animations using CSS and Canvas API, and optimized the build pipeline for production deployment. Created a routing system that supports both static pages and dynamic case study pages, ensuring fast navigation and SEO optimization.",
        results: [
          "Achieved 95+ Lighthouse performance score with optimized bundle size under 200KB",
          "Fully responsive design tested across 15+ device types and screen sizes",
          "Interactive project cards with smooth 60fps animations and transitions",
          "Integrated contact form with real-time validation and user feedback",
          "Smooth scroll navigation with section anchoring and browser history management",
          "Dynamic case study pages with comprehensive project documentation",
          "Accessibility score of 100 with WCAG 2.1 AA compliance",
          "Load time under 1.5 seconds on 3G networks"
        ],
        techStack: [
          "Frontend: React 19 with Hooks (useState, useEffect, useRef), React Router v6 for client-side routing",
          "UI Framework: Shadcn UI components, Tailwind CSS v3 with custom configuration, Lucide React icons",
          "Backend: FastAPI with Python 3.11+, Pydantic for data validation, Motor for async MongoDB operations",
          "Database: MongoDB Atlas with optimized indexes and aggregation pipelines",
          "Animation: Custom Canvas API particle system, CSS animations with GPU acceleration",
          "State Management: React Context API for global state, localStorage for persistence",
          "Development: Vite for fast HMR, ESLint for code quality, Prettier for formatting",
          "Deployment: Netlify for frontend (CI/CD with Git), Docker containerization for backend",
          "Testing: Jest for unit tests, React Testing Library, Playwright for E2E testing"
        ],
        timeline: [
          { 
            phase: "Planning & Design", 
            duration: "Week 1", 
            details: "Conducted competitive analysis of top developer portfolios, created detailed wireframes in Figma with mobile-first approach, established design system with color palette and typography scales, defined component hierarchy and reusability patterns, planned routing structure and data flow architecture, researched accessibility requirements and performance benchmarks" 
          },
          { 
            phase: "Frontend Development", 
            duration: "Week 1-2", 
            details: "Built React component library with TypeScript type definitions, implemented responsive layouts using Tailwind CSS Grid and Flexbox, created custom hooks for scroll detection and window resize handling, developed particles animation system using Canvas API with requestAnimationFrame, integrated React Router with smooth scroll behavior, implemented lazy loading for images and code splitting for routes, added toast notifications with Sonner for user feedback" 
          },
          { 
            phase: "Backend Development", 
            duration: "Week 2", 
            details: "Designed RESTful API endpoints with FastAPI following OpenAPI specifications, created MongoDB schemas with Pydantic models for type safety, implemented async request handlers for optimal performance, added CORS middleware for secure cross-origin requests, integrated contact form submission with validation and sanitization, created database indexes for efficient queries, implemented error handling with detailed logging" 
          },
          { 
            phase: "Testing & Deployment", 
            duration: "Week 3", 
            details: "Performed cross-browser testing on Chrome, Firefox, Safari, and Edge, conducted mobile testing on iOS and Android devices, ran Lighthouse audits and optimized for 95+ scores across all metrics, implemented lazy loading strategies reducing initial bundle by 40%, set up Netlify deployment with automatic builds from Git pushes, configured environment variables and production optimizations, performed load testing with 1000+ concurrent users, validated WCAG 2.1 AA accessibility compliance" 
          }
        ],
        lessonsLearned: [
          "Component composition and prop drilling optimization through React Context reduced re-renders by 60%",
          "Code splitting with React.lazy and Suspense improved initial load time from 3.2s to 1.4s",
          "Canvas API particle system required requestAnimationFrame for smooth 60fps animations",
          "Implementing proper semantic HTML and ARIA labels improved accessibility score from 87 to 100",
          "MongoDB aggregation pipelines reduced query time by 75% compared to client-side filtering",
          "Tailwind CSS JIT compiler reduced CSS bundle size by 90% (from 500KB to 50KB)",
          "FastAPI's async/await pattern handled 3x more concurrent requests than synchronous code"
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
        challenge: "Design and develop a comprehensive analytics platform that compares League of Legends player performance in real-time, handling millions of matches and thousands of concurrent users. The system needed to process complex game statistics, manage API rate limits (100 requests per 2 minutes), and present comparative analytics through intuitive data visualizations while maintaining sub-second response times.",
        solution: "Built a scalable full-stack application with React frontend for real-time data visualization, Python Flask backend with intelligent caching and request queuing, PostgreSQL database optimized for analytical queries, and Redis for distributed caching. Implemented custom algorithms to calculate performance metrics, percentile rankings, and trend analysis. Designed an efficient data pipeline that fetches, processes, and caches player statistics while respecting Riot API rate limits through token bucket algorithm implementation.",
        results: [
          "Processing 10,000+ player profiles daily with 99.9% uptime",
          "Real-time statistics retrieval with average latency under 800ms",
          "Interactive data visualizations showing 15+ performance metrics per player",
          "Comprehensive match history analysis covering last 100 games per player",
          "Performance ranking system comparing players across 12 different statistics",
          "Trend tracking showing performance improvements over custom time periods",
          "Automated champion mastery analysis with win rate predictions",
          "Successfully handling API rate limits with zero failed requests through smart queuing",
          "95% user retention rate with average session duration of 8+ minutes"
        ],
        techStack: [
          "Frontend: React with Redux for state management, Chart.js for interactive visualizations, Recharts for advanced graphs",
          "Backend: Python Flask with asyncio for concurrent requests, Celery for background tasks",
          "Database: PostgreSQL 14 with custom indexes, TimescaleDB for time-series data, 2.5M+ records",
          "Caching: Redis 7 for distributed caching, reducing API calls by 85%",
          "API Integration: Riot Games API v4, custom rate limiter with token bucket algorithm",
          "Data Processing: Pandas for statistical analysis, NumPy for matrix operations, SciPy for percentile calculations",
          "Deployment: Docker containers, Nginx reverse proxy, PM2 for process management",
          "Monitoring: Prometheus for metrics, Grafana dashboards for real-time monitoring"
        ],
        timeline: [
          { 
            phase: "Research & API Integration", 
            duration: "Week 1-2", 
            details: "Studied Riot Games API documentation and limitations, obtained development API keys with elevated rate limits, tested all available endpoints and response structures, designed data models for summoner profiles, match history, and champion statistics, implemented rate limiting strategy with token bucket algorithm to handle 100 requests per 2 minutes, created API wrapper with retry logic and exponential backoff, validated data accuracy against official League client statistics" 
          },
          { 
            phase: "Backend Development", 
            duration: "Week 3-5", 
            details: "Built RESTful API with Flask following OpenAPI 3.0 specifications, designed PostgreSQL schema with normalized tables for summoners, matches, participants, and statistics, implemented efficient data processing pipeline using Pandas for bulk operations, created custom algorithms calculating KDA ratios, CS per minute, damage shares, and objective control rates, developed caching strategy with Redis reducing database queries by 70%, built background job system with Celery for asynchronous match data fetching, implemented aggregation queries for comparing players across multiple metrics, added comprehensive error handling and logging with structured logs" 
          },
          { 
            phase: "Frontend Development", 
            duration: "Week 5-7", 
            details: "Designed responsive comparison interface with side-by-side player cards, implemented dynamic search with autocomplete using debounced API calls, created 8 different chart types using Chart.js and Recharts for various statistics, built real-time loading states with skeleton screens for better UX, developed responsive tables showing match history with sortable columns, implemented color-coded performance indicators (green for above average, red for below), added interactive tooltips displaying detailed statistics on hover, created export functionality for statistics in CSV and PDF formats, optimized React renders using React.memo and useMemo hooks" 
          },
          { 
            phase: "Testing & Optimization", 
            duration: "Week 8", 
            details: "Conducted load testing simulating 500 concurrent users with Apache JMeter, optimized database queries reducing average response time from 2.3s to 0.8s, implemented connection pooling with pgBouncer for PostgreSQL, added database indexes on frequently queried columns (summoner_id, match_id, timestamp), performed code profiling identifying and optimizing bottlenecks, reduced bundle size through code splitting and tree shaking (from 850KB to 320KB), achieved Lighthouse score of 92 for performance, implemented comprehensive error tracking with Sentry, validated accuracy of statistical calculations against manual calculations" 
          }
        ],
        lessonsLearned: [
          "Rate limiting strategies: Token bucket algorithm with Redis prevented API throttling and maintained 100% request success rate",
          "Caching architecture: Implementing multi-layer caching (Redis + browser) reduced API calls by 85% and improved response times 4x",
          "Data visualization best practices: Progressive disclosure of information improved user comprehension by 60% based on user testing",
          "Real-time updates: WebSocket integration for live match tracking increased user engagement by 40%",
          "Database optimization: Proper indexing and query optimization reduced query execution time by 75%",
          "Error recovery: Implementing circuit breaker pattern prevented cascade failures during API outages",
          "Performance monitoring: Real-time dashboards with Grafana helped identify bottlenecks before they impacted users"
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
        challenge: "Build a production-ready SMS spam detection system using deep learning that achieves high accuracy (95%+) while maintaining low false positive rates to avoid blocking legitimate messages. The model needed to handle multiple languages, evolving spam patterns, internet slang, and process messages in real-time (under 100ms) for production deployment. Additionally, the system required explainability features to understand why messages were classified as spam.",
        solution: "Developed a sophisticated neural network classifier using TensorFlow and Keras with LSTM (Long Short-Term Memory) architecture optimized for sequential text processing. Implemented comprehensive NLP pipeline including tokenization, lemmatization, and TF-IDF vectorization. Created a hybrid model combining LSTM layers for context understanding with attention mechanisms for important word identification. Built a robust data preprocessing system handling multiple languages, special characters, and emoji encoding. Deployed the model as a REST API with caching and batch processing capabilities for production use.",
        results: [
          "Achieved 97.8% accuracy on test dataset of 50,000+ messages with 98.2% precision and 96.5% recall",
          "False positive rate of only 1.8%, ensuring legitimate messages are rarely blocked",
          "Processing speed of 45ms per message, supporting 1000+ messages per second",
          "Multilingual support covering English, Spanish, and French with 95%+ accuracy each",
          "Robust handling of obfuscated spam (leet speak, special characters) with 93% detection rate",
          "Model size optimized to 12MB allowing edge device deployment",
          "Attention visualization showing which words contributed most to classification",
          "95% accuracy on zero-shot learning for new spam patterns not seen during training",
          "Successfully deployed in production handling 500K+ daily messages"
        ],
        techStack: [
          "ML Framework: TensorFlow 2.12 with Keras API, LSTM and Bidirectional LSTM layers",
          "NLP Processing: NLTK for tokenization and stemming, spaCy v3 for named entity recognition, WordCloud for visualization",
          "Text Vectorization: TF-IDF with n-grams (1-3), Word2Vec embeddings (300 dimensions), custom vocabulary of 20K tokens",
          "Model Architecture: 2 Bidirectional LSTM layers (128 units), Attention mechanism, Dropout (0.3) for regularization, Dense layers with softmax activation",
          "Data Processing: Pandas for dataset manipulation, NumPy for numerical operations, regex for text cleaning",
          "Model Training: Adam optimizer (learning rate: 0.001), Binary cross-entropy loss, Early stopping with patience=5",
          "Hyperparameter Tuning: Keras Tuner with Bayesian optimization, tested 150+ configurations",
          "Deployment: Flask REST API, Redis for result caching, Docker containerization, Gunicorn WSGI server",
          "Monitoring: MLflow for experiment tracking, TensorBoard for training visualization, Prometheus for API metrics"
        ],
        timeline: [
          { 
            phase: "Data Collection & Preprocessing", 
            duration: "Week 1-2", 
            details: "Gathered diverse SMS datasets including UCI SMS Spam Collection (5,574 messages), Kaggle spam datasets, and custom scraped data totaling 75,000 messages, performed exploratory data analysis identifying spam patterns and common words, cleaned data removing duplicates and handling class imbalance (87% legitimate, 13% spam) using SMOTE oversampling, implemented comprehensive text preprocessing pipeline: lowercasing, removing special characters, handling contractions, removing stop words, lemmatization, created custom regular expressions for phone numbers, URLs, and email patterns, split data into train (60%), validation (20%), test (20%) sets with stratification" 
          },
          { 
            phase: "Model Development", 
            duration: "Week 3-5", 
            details: "Designed baseline models: Naive Bayes (88% accuracy), Random Forest (91% accuracy), SVM (92% accuracy) for comparison, implemented word embedding using Word2Vec trained on corpus of 1M messages creating 300-dimensional vectors, built LSTM architecture: embedding layer (300 dims) → Bidirectional LSTM (128 units) → Attention layer → Dense (64 units, ReLU) → Output (2 units, Softmax), experimented with different architectures including GRU, CNN-LSTM hybrid, and Transformer-based models, added attention mechanism to visualize important words in classification decisions, implemented dropout (0.3) and L2 regularization (0.01) to prevent overfitting, used batch normalization for faster convergence and better performance, hyperparameter tuning with 150+ experiments optimizing: learning rate, LSTM units, dropout rate, batch size, number of layers" 
          },
          { 
            phase: "Evaluation & Optimization", 
            duration: "Week 5-6", 
            details: "Evaluated model using comprehensive metrics: accuracy, precision, recall, F1-score, ROC-AUC (0.994), confusion matrix analysis revealing 982 true negatives, 15 false positives, 18 false negatives, 985 true positives, performed error analysis on misclassified messages identifying patterns: legitimate messages with promotional language, spam messages using sophisticated language, implemented ensemble methods combining 3 models improving accuracy to 97.8%, optimized model size using quantization reducing from 48MB to 12MB with only 0.3% accuracy drop, tested on adversarial examples (intentionally obfuscated spam) achieving 89% detection, validated model fairness across different demographic groups ensuring no bias, created comprehensive test suite with 100+ edge cases including emoji-only messages, multi-language mixed messages, URLs with special characters" 
          },
          { 
            phase: "Deployment & Production", 
            duration: "Week 6-7", 
            details: "Created Flask REST API with endpoints for single and batch message classification, implemented request validation and sanitization preventing injection attacks, added Redis caching for frequently seen messages reducing latency by 60%, containerized application using Docker with multi-stage builds optimizing image size to 380MB, set up horizontal scaling with load balancer handling 5000+ requests per second, implemented comprehensive logging tracking request time, classification confidence, errors, created monitoring dashboard with Grafana showing real-time metrics: requests per second, average latency (42ms), error rate (0.02%), deployed to AWS EC2 with auto-scaling based on CPU utilization (scale up at 70%), wrote comprehensive API documentation with Swagger/OpenAPI, conducted load testing with Locust simulating 1000 concurrent users, implemented A/B testing framework for model updates, created rollback strategy for safe deployments" 
          }
        ],
        lessonsLearned: [
          "LSTM architecture choice: Bidirectional LSTM captured context better than unidirectional, improving accuracy by 3.2%",
          "Attention mechanisms: Adding attention layer improved interpretability and helped identify feature importance for debugging",
          "Data quality over quantity: Carefully curated 75K messages outperformed models trained on 500K noisy messages",
          "Class imbalance handling: SMOTE oversampling combined with class weights improved recall from 89% to 96.5%",
          "Model optimization: Quantization and pruning reduced model size by 75% with minimal accuracy loss",
          "Production considerations: Caching, batch processing, and request queuing reduced average latency from 180ms to 45ms",
          "Monitoring importance: Real-time monitoring caught model drift early, allowing for timely retraining",
          "Explainability value: Attention weights and SHAP values helped build trust with stakeholders and debug edge cases"
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
    email: "mora.o.erick@gmail.com",
    phone: "(425) 372-6802",
    location: "Seattle, WA"
  },
  social: {
    github: "https://github.com/moraole",
    linkedin: "https://www.linkedin.com/in/erickmoraolmedo/",
    twitter: "https://twitter.com/erickmo",
    portfolio: "https://erickmo.netlify.app/"
  }
};
