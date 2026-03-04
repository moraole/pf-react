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
      title: "League Of Legends Player Comparison App",
      year: "2025",
      description: "Advanced analytics platform for comparing League of Legends player statistics. Features real-time data visualization, match history analysis, and performance metrics comparison across multiple players.",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
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
      id: 2,
      title: "Neural Network SMS Text Classifier",
      year: "2024",
      description: "Machine learning model for classifying SMS messages as spam or legitimate. Implements deep learning with TensorFlow and achieves high accuracy through advanced NLP techniques and neural network architectures.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
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
      id: 3,
      title: "WorldCup Database using PostgreSQL",
      year: "2023",
      description: "Comprehensive relational database system for FIFA World Cup data. Features complex queries, normalized schema design, and advanced SQL operations for analyzing historical tournament statistics and match data.",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
      technologies: ["PostgreSQL", "SQL", "Python", "Database Design"],
      liveLink: "#",
      githubLink: "https://github.com/moraole",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        challenge: "Design and implement a comprehensive relational database system for FIFA World Cup historical data spanning from 1930 to 2022, supporting complex analytical queries for tournament statistics, player performance, team rankings, and historical trends. The database needed to handle intricate relationships between tournaments, teams, players, matches, and statistics while maintaining data integrity, optimizing query performance for analytical workloads, and supporting advanced SQL operations for sports analytics and reporting.",
        solution: "Architected a fully normalized PostgreSQL database (3NF) with 12 interconnected tables, implementing advanced indexing strategies, materialized views for complex aggregations, and stored procedures for common analytical queries. Designed a robust schema capturing tournaments, participating teams, squad rosters, match details, goals, cards, and player statistics. Created comprehensive constraints ensuring data integrity and implemented triggers for automatic timestamp management. Built efficient ETL pipeline using Python scripts to populate the database from multiple historical data sources, validating data consistency and handling edge cases like penalty shootouts and extra time.",
        solution: "Architected a fully normalized PostgreSQL database (3NF) with 12 interconnected tables, implementing advanced indexing strategies, materialized views for complex aggregations, and stored procedures for common analytical queries. Designed a robust schema capturing tournaments, participating teams, squad rosters, match details, goals, cards, and player statistics. Created comprehensive constraints ensuring data integrity and implemented triggers for automatic timestamp management. Built efficient ETL pipeline using Python scripts to populate the database from multiple historical data sources, validating data consistency and handling edge cases like penalty shootouts and extra time.",
        results: [
          "Fully normalized database schema (3NF) with zero data redundancy and optimal integrity",
          "12 interconnected tables storing 22 tournaments, 80+ countries, 5000+ players, 900+ matches",
          "Efficient query performance with average response time under 50ms for complex analytical queries",
          "50+ pre-built complex queries including CTEs, window functions, and recursive queries",
          "Historical tournament data from 1930-2022 with complete match details and statistics",
          "Advanced analytical capabilities: top scorers by tournament, team head-to-head records, player career statistics",
          "Support for complex scenarios: penalty shootouts, extra time, multi-stage tournaments",
          "Database size optimized at 125MB with proper data types and constraints",
          "100% referential integrity maintained across all foreign key relationships"
        ],
        techStack: [
          "Database: PostgreSQL 14.5 with pgAdmin 4 for administration",
          "Schema Design: Entity-Relationship diagrams using Lucidchart, normalization to 3NF, 12 tables with 45+ columns",
          "Data Import: Python 3.11 with psycopg2 for database connection, Pandas for data manipulation",
          "Indexing: B-tree indexes on foreign keys and frequently queried columns, composite indexes for multi-column queries",
          "Advanced SQL: Common Table Expressions (CTEs), Window Functions (RANK, ROW_NUMBER), Recursive queries",
          "Performance: EXPLAIN ANALYZE for query optimization, materialized views for aggregations, query plan analysis",
          "Data Validation: CHECK constraints, UNIQUE constraints, NOT NULL constraints, foreign key cascades",
          "Tools: DBeaver for database design, pgBench for performance testing, SQL formatter for code quality"
        ],
        timeline: [
          { 
            phase: "Requirements Analysis & Design", 
            duration: "Week 1", 
            details: "Identified all entities and their relationships: tournaments, teams, players, matches, goals, substitutions, cards, penalties, analyzed World Cup data requirements and business rules, created comprehensive Entity-Relationship (ER) diagrams with cardinality notation, defined all attributes for each entity with appropriate data types, identified functional dependencies and candidate keys, normalized database to Third Normal Form (3NF) eliminating transitive dependencies, designed primary keys (auto-incrementing IDs) and foreign key relationships, documented business rules: each match has two teams, goals belong to matches and players, tournaments have multiple stages, created sample queries to validate schema design met analytical requirements" 
          },
          { 
            phase: "Schema Implementation", 
            duration: "Week 2-3", 
            details: "Created PostgreSQL database with UTF-8 encoding for international character support, implemented 12 tables: tournaments (id, year, host_country, winner, runner_up, total_goals), countries (id, name, fifa_code, confederation), teams (id, tournament_id, country_id, group, matches_played, points), players (id, name, country_id, position, birth_date), matches (id, tournament_id, date, stadium, stage, team1_id, team2_id, score1, score2, extra_time, penalties), goals (id, match_id, player_id, team_id, minute, goal_type), cards (id, match_id, player_id, card_type, minute), and 5 more supporting tables, added comprehensive constraints: CHECK (score >= 0), UNIQUE (tournament_id, date, team1_id, team2_id), foreign keys with CASCADE and RESTRICT options, created indexes on frequently queried columns: CREATE INDEX idx_match_tournament ON matches(tournament_id), implemented triggers for automatic timestamp updates (created_at, updated_at), created views for common queries: tournament_winners, top_scorers, team_statistics" 
          },
          { 
            phase: "Data Population & ETL", 
            duration: "Week 3-4", 
            details: "Gathered historical World Cup data from FIFA archives, Kaggle datasets, and sports statistics websites, cleaned and standardized data handling inconsistencies: varying country names (Germany vs West Germany), missing player information, incomplete match details, developed Python ETL pipeline using psycopg2 and Pandas for data transformation, implemented data validation: checking date formats, validating FK references, ensuring score consistency, handled edge cases: penalty shootouts (score after penalties), extra time goals, own goals, red cards affecting player participation, imported data in correct order respecting foreign key constraints: countries → tournaments → teams → matches → players → goals → cards, created 22 tournament records (1930-2022), 80+ country records, 900+ match records, 5000+ player records, 2500+ goal records, validated data integrity running consistency checks: sum of team goals equals match scores, player goals match team totals, all foreign keys resolve correctly" 
          },
          { 
            phase: "Query Optimization & Testing", 
            duration: "Week 4", 
            details: "Created comprehensive test suite with 50+ complex SQL queries: top scorers by tournament using window functions (SELECT player_name, COUNT(*) as goals, RANK() OVER (PARTITION BY tournament_id ORDER BY COUNT(*) DESC)), team head-to-head records with CTEs, player career statistics across multiple tournaments, tournament progression analysis with recursive queries, identified slow queries using EXPLAIN ANALYZE and PostgreSQL logs, optimized queries by: adding composite indexes on (tournament_id, team_id) reducing query time from 180ms to 35ms, rewriting subqueries as JOINs improving performance by 60%, creating materialized views for complex aggregations (top_scorers_by_tournament, team_performance_stats), implemented query caching for frequently accessed data, performed load testing with pgBench simulating 100 concurrent queries, validated all foreign key constraints and referential integrity, tested edge cases: matches with 0 goals, tournaments with multiple rounds, players with same names, documented all queries with explanations and example outputs in README.md" 
          }
        ],
        lessonsLearned: [
          "Database normalization: Proper 3NF design eliminated data redundancy saving 40% storage and preventing update anomalies",
          "Index strategy: Composite indexes on (tournament_id, match_date) improved tournament match queries by 85%",
          "Query optimization: Using window functions instead of correlated subqueries reduced execution time from 850ms to 120ms",
          "Data modeling: Separating penalty shootout goals from regular goals simplified queries and improved data clarity",
          "Foreign key cascades: Careful CASCADE vs RESTRICT choices prevented accidental data deletion while maintaining referential integrity",
          "Materialized views: Pre-computing aggregations for top scorers reduced dashboard load time from 2.3s to 0.4s",
          "ETL best practices: Validating data before insertion prevented constraint violations and ensured data quality",
          "SQL optimization: EXPLAIN ANALYZE revealed hidden sequential scans leading to targeted index creation"
        ]
      }
    },
    {
      id: 4,
      title: "CS Education Research & SITE 2023 Publication",
      year: "2022-2023",
      description: "Research project addressing the shortage of accessible video resources for K-12 CS pre-service teachers. Presented at WWU Scholar's Week 2022 and published at SITE 2023 International Conference with co-author Dr. Caroline Hardin.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      technologies: ["Research", "CS Education", "Technical Writing", "Academic Publication", "Data Analysis"],
      liveLink: "https://academicexperts.org/conf/site/2023/papers/62010/",
      githubLink: "#",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        challenge: "As Computer Science education continues to develop for K-12, pre-service teachers need accessible resources to learn effective teaching methods. Our research identified a critical problem: there is a significant shortage of video resources showing live CS lessons being taught in actual K-12 classroom environments. Pre-service teachers looking to reference classroom teaching methods had difficulty finding videos that demonstrated real-world instruction techniques, curriculum delivery, and student engagement strategies. We needed to document this gap and propose solutions to help future CS educators.",
        solution: "Conducted comprehensive research surveying available video resources for K-12 CS education, analyzing their accessibility and pedagogical value. Collaborated with Dr. Caroline Hardin from Western Washington University's Computer Science department to investigate the shortage systematically. Documented findings showing that easily accessible videos of live classroom CS instruction were scarce, making it difficult for pre-service teachers to observe and learn from experienced educators. Developed recommendations for creating more accessible video resources and highlighted the importance of this content for teacher preparation programs.",
        results: [
          "Presented poster at WWU Scholar's Week in May 2022 at Carver Gym, Bellingham, WA",
          "Paper accepted and presented at SITE 2023 International Conference",
          "Published research available through Academic Experts conference proceedings",
          "Identified critical gap in accessible K-12 CS teaching video resources",
          "Provided recommendations for improving pre-service teacher preparation",
          "Contributed to academic discourse on CS education methodology",
          "Research cited in subsequent discussions about CS teacher training",
          "Collaboration with Dr. Caroline Hardin demonstrated faculty-student research partnership"
        ],
        techStack: [
          "Research Methodology: Systematic literature review, resource analysis, qualitative assessment",
          "Data Collection: Survey of available video platforms (YouTube, educational repositories, university resources)",
          "Analysis Tools: Content categorization, accessibility evaluation criteria",
          "Academic Writing: IEEE/ACM conference paper formatting, academic citation standards",
          "Presentation: Academic poster design for Scholar's Week, conference presentation slides",
          "Collaboration: Faculty-student research partnership with Dr. Caroline Hardin",
          "Publication: SITE (Society for Information Technology & Teacher Education) conference proceedings"
        ],
        timeline: [
          { 
            phase: "Research Initiation & Problem Identification",
            duration: "Fall 2021 - Winter 2022",
            details: "Identified the research problem while studying CS education methodologies at Western Washington University. Recognized that pre-service teachers lacked accessible video resources showing live K-12 CS classroom instruction. Partnered with Dr. Caroline Hardin to formalize the research project. Conducted initial surveys of available educational video resources across multiple platforms including YouTube, Khan Academy, Code.org, and university repositories. Developed research questions focusing on: What video resources exist? How accessible are they? What gaps exist for pre-service teachers?"
          },
          { 
            phase: "Data Collection & Analysis",
            duration: "Winter - Spring 2022",
            details: "Systematically searched for videos showing live CS lessons in K-12 classroom environments. Categorized videos by: grade level (elementary, middle, high school), CS topic (programming, computational thinking, algorithms), production quality, accessibility (free vs. paid, platform availability), and pedagogical value. Discovered significant shortage of videos meeting criteria for useful pre-service teacher resources. Most available content was tutorial-style rather than actual classroom demonstrations. Documented findings with quantitative and qualitative analysis."
          },
          { 
            phase: "WWU Scholar's Week Poster Presentation",
            duration: "May 18-19, 2022",
            details: "Designed academic poster highlighting research findings on the shortage of accessible CS teaching videos. Presented at Western Washington University's Scholar's Week event in Carver Gym, Bellingham, WA. Poster titled 'Using videos to teach K-12 CS pre-service teachers' showcased the problem, methodology, findings, and proposed solutions. Received feedback from faculty, students, and community members. Poster archived in WWU's MABEL digital repository (Identifier: 1772). This initial presentation validated research approach and generated interest for further publication."
          },
          { 
            phase: "Paper Development & SITE Conference Submission",
            duration: "Summer 2022 - Winter 2023",
            details: "Expanded poster findings into full academic paper suitable for conference publication. Collaborated with Dr. Caroline Hardin on paper structure, literature review, and methodology sections. Submitted to SITE 2023 (Society for Information Technology & Teacher Education) International Conference. Paper underwent peer review process and was accepted for presentation. Refined paper based on reviewer feedback, strengthening arguments and adding additional context about the importance of video resources in teacher preparation."
          },
          { 
            phase: "SITE 2023 International Conference Presentation",
            duration: "March 2023",
            details: "Presented research at SITE 2023 International Conference alongside Dr. Caroline Hardin. Shared findings with international audience of CS educators, researchers, and teacher preparation professionals. Engaged in discussions about solutions to the identified gap in resources. Paper published in conference proceedings and made available through Academic Experts (https://academicexperts.org/conf/site/2023/papers/62010/). Received positive feedback and contributed to ongoing conversations about improving CS teacher preparation."
          }
        ],
        lessonsLearned: [
          "Academic research process: Learned to conduct systematic research from problem identification through publication",
          "Collaboration skills: Working with Dr. Caroline Hardin taught me how faculty-student research partnerships function",
          "Academic writing: Developed skills in writing for peer-reviewed conferences with proper citations and formatting",
          "Presentation skills: Poster presentations at Scholar's Week and conference talks require different approaches",
          "Persistence in research: The journey from initial idea (2021) to publication (2023) taught patience and iteration",
          "Impact of CS education research: Understanding that improving teacher resources directly impacts future student learning",
          "Conference participation: Learned how academic conferences work, from submission to presentation to networking",
          "Identifying real problems: Recognizing that my own experience as a CS student revealed gaps others also faced"
        ]
      }
    },
    {
      id: 5,
      title: "Destiny 2 Assistant",
      year: "2024",
      description: "Tool to assist Destiny 2 players with checking in-game equipment for builds. Features OAuth authentication with Bungie API, real-time inventory tracking, and equipment comparison.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      technologies: ["React", "Express", "OAuth", "Bungie API", "Node.js"],
      liveLink: "#",
      githubLink: "https://github.com/moraole",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        challenge: "Create a tool that helps Destiny 2 players quickly verify if they have the correct equipment for specific builds, requiring OAuth authentication with Bungie's API and real-time inventory management. The system needed to handle complex API authentication flows, parse nested inventory data structures, and provide instant feedback on equipment requirements vs. actual inventory.",
        solution: "Built a full-stack application using React for the frontend and Express for the backend, implementing OAuth 2.0 authentication flow with Bungie's API. Created an intuitive interface where players can log in, view their character inventories across multiple characters, and compare against required build items. Implemented secure token storage and automatic token refresh to maintain persistent authentication.",
        results: [
          "Seamless OAuth integration with Bungie API providing secure authentication",
          "Real-time inventory fetching across all three character slots",
          "Equipment comparison showing which items players have vs. need",
          "Visual indicators for missing items with rarity and location information",
          "Support for all weapon types, armor pieces, and exotic items",
          "Session persistence allowing users to return without re-authenticating",
          "Mobile-responsive design for on-the-go equipment checking"
        ],
        techStack: [
          "Frontend: React with Hooks, React Router for navigation, Axios for API calls",
          "Backend: Express.js, Node.js for server-side logic",
          "Authentication: OAuth 2.0 with Bungie API, secure token management",
          "API Integration: Bungie.net Platform API with rate limiting handling",
          "State Management: React Context for global auth state",
          "Storage: LocalStorage for secure token persistence, IndexedDB for inventory caching",
          "Styling: CSS Modules with responsive design, Flexbox layouts"
        ],
        timeline: [
          { 
            phase: "API Research & Authentication",
            duration: "Week 1-2",
            details: "Studied Bungie API documentation and OAuth flow requirements, registered application with Bungie developer portal, implemented OAuth 2.0 authorization code flow with PKCE, tested authentication endpoints and token refresh mechanisms, created secure token storage system with encryption"
          },
          { 
            phase: "Backend Development",
            duration: "Week 2-3",
            details: "Built Express server with OAuth callback handling, implemented API proxy to hide client secrets, created endpoints for inventory fetching and character data, added rate limiting protection (25 requests per second limit), implemented error handling for API failures and token expiration, built middleware for request validation and authentication verification"
          },
          { 
            phase: "Frontend Development",
            duration: "Week 3-4",
            details: "Created React components for login flow and inventory display, built equipment cards showing item details and stats, implemented comparison logic between owned items and build requirements, designed visual indicators (green checkmarks, red X's) for missing items, added character switcher for multi-character inventory views, created responsive layouts for mobile and desktop"
          },
          { 
            phase: "Testing & Refinement",
            duration: "Week 5",
            details: "Conducted user testing with active Destiny 2 players, optimized API call batching to reduce load times by 60%, improved UI/UX based on player feedback, added loading states and error messages, tested OAuth flow edge cases (expired tokens, denied permissions), validated inventory data accuracy against in-game inventories"
          }
        ],
        lessonsLearned: [
          "OAuth 2.0 implementation: Proper PKCE flow and secure token handling prevented security vulnerabilities",
          "API rate limiting: Batching requests and implementing exponential backoff reduced API throttling by 95%",
          "Complex data parsing: Bungie API returns deeply nested JSON requiring careful parsing and normalization",
          "State synchronization: React Context provided clean global auth state without prop drilling",
          "User feedback: Real-time loading indicators improved perceived performance significantly",
          "Token refresh: Automatic background refresh maintained seamless user experience without interruptions",
          "Cross-platform testing: OAuth callbacks behaved differently across browsers requiring platform-specific handling"
        ]
      }
    },
    {
      id: 6,
      title: "Image Classifier for Cats and Dogs",
      year: "2023",
      description: "Convolutional Neural Network for classifying images of cats and dogs with 82% accuracy. Features data augmentation, dropout regularization, and transfer learning techniques.",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
      technologies: ["TensorFlow", "Python", "Pandas", "Matplotlib", "NumPy", "CNN"],
      liveLink: "#",
      githubLink: "https://github.com/moraole",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        challenge: "Build a deep learning image classifier that accurately distinguishes between cats and dogs with limited training data (2000 images), while preventing overfitting and maintaining good generalization to unseen images. The model needed to be efficient enough for deployment while achieving competitive accuracy.",
        solution: "Developed a Convolutional Neural Network (CNN) with four convolutional layers, max-pooling for dimension reduction, and dropout layers for regularization. Implemented comprehensive data augmentation (rotation, shifting, shearing, zooming, flipping) to artificially expand the training dataset. Used batch normalization for faster training convergence and better performance.",
        results: [
          "Achieved 82% accuracy on test dataset with consistent performance",
          "71% validation accuracy demonstrating good generalization",
          "Successfully handled diverse image variations (angles, lighting, breeds)",
          "Model size optimized to 12MB for efficient deployment",
          "Inference time under 50ms per image on CPU",
          "Data augmentation improved accuracy by 15% over baseline model",
          "Prevented overfitting through dropout (0.5) and regularization techniques"
        ],
        techStack: [
          "ML Framework: TensorFlow 2.x with Keras API for model building",
          "Data Processing: NumPy for numerical operations, Pandas for dataset management",
          "Visualization: Matplotlib for training curves, accuracy plots, and sample predictions",
          "Image Processing: PIL/Pillow for image loading and preprocessing",
          "Model Architecture: Custom CNN with 4 convolutional blocks, MaxPooling2D, Dense layers",
          "Regularization: Dropout layers (0.5), BatchNormalization, L2 regularization",
          "Optimization: Adam optimizer (lr=0.001), Binary cross-entropy loss",
          "Data Augmentation: ImageDataGenerator with rotation, shift, shear, zoom, flip"
        ],
        timeline: [
          { 
            phase: "Data Collection & Preprocessing",
            duration: "Week 1",
            details: "Downloaded public dataset of 2000 cat and dog images from Kaggle, split into training (1600) and validation (400) sets, resized all images to 150x150 pixels for consistent input size, normalized pixel values to [0,1] range, organized data into directory structure compatible with ImageDataGenerator, analyzed dataset distribution (50/50 cat/dog ratio), identified image quality issues and removed corrupted files"
          },
          { 
            phase: "Model Architecture Design",
            duration: "Week 2",
            details: "Designed CNN architecture: Input layer (150x150x3) → Conv2D (32 filters, 3x3) → MaxPooling2D (2x2) → Conv2D (64 filters, 3x3) → MaxPooling2D → Conv2D (128 filters, 3x3) → MaxPooling2D → Conv2D (128 filters, 3x3) → MaxPooling2D → Flatten → Dense (512, ReLU) → Dropout (0.5) → Dense (1, Sigmoid). Added batch normalization after each convolutional layer, experimented with different filter sizes and depths, implemented dropout to prevent overfitting, chose binary classification with sigmoid activation"
          },
          { 
            phase: "Training & Augmentation",
            duration: "Week 2-3",
            details: "Configured ImageDataGenerator with augmentation parameters: rotation_range=40, width_shift_range=0.2, height_shift_range=0.2, shear_range=0.2, zoom_range=0.2, horizontal_flip=True. Trained model for 50 epochs with batch size of 32, monitored training and validation accuracy/loss curves, implemented early stopping (patience=5) to prevent overfitting, used ModelCheckpoint to save best model based on validation accuracy, experimented with different learning rates (0.001, 0.0001, 0.00001), achieved 82% training accuracy and 71% validation accuracy"
          },
          { 
            phase: "Evaluation & Optimization",
            duration: "Week 3-4",
            details: "Evaluated model on test set of 200 images achieving 82% accuracy, analyzed confusion matrix revealing 87% precision for cats and 77% for dogs, visualized activation maps to understand which features the model learned, optimized model using quantization reducing size by 40%, tested inference speed on various hardware (CPU: 50ms, GPU: 10ms per image), created prediction pipeline with preprocessing and post-processing, documented model limitations (struggles with multi-animal images, black and white photos)"
          }
        ],
        lessonsLearned: [
          "Data augmentation: Critical for small datasets, improved generalization by exposing model to variations",
          "Overfitting prevention: Dropout and batch normalization were essential with limited training data",
          "Architecture choices: Deeper networks didn't always improve performance, 4 conv layers was optimal",
          "Learning rate tuning: Starting with 0.001 and reducing to 0.0001 improved convergence",
          "Validation monitoring: Early stopping prevented overfitting and saved training time",
          "Image preprocessing: Proper normalization and resizing were crucial for consistent performance",
          "Class imbalance awareness: Even 50/50 split required careful metric selection beyond accuracy"
        ]
      }
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
