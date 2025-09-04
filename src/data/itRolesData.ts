import { sapModules } from './sapModules';

export interface LearningPath {
  name: string;
  description: string;
  coreTopics: string[];
  beginner: string[];
  intermediate: string[];
  advanced: string[];
  capacityPlanning: string;
  freeResources: Array<{
    title: string;
    description: string;
    url: string;
  }>;
}

export const itRolesData = {
  "Software Developer": {
    "Core Concepts": [
      "Programming Paradigms (OOP, Functional, Procedural)",
      "Data Structures & Algorithms",
      "Software Development Lifecycle (SDLC)",
      "Design Patterns & Architecture",
      "Version Control Systems",
      "Database Design & Management",
      "Testing Methodologies",
      "Security Best Practices"
    ],
    "Beginner": [
      "Programming basics (Python, Java, C#, JavaScript)",
      "IDEs (VS Code, IntelliJ, Eclipse)",
      "Data types, operators, loops, functions",
      "Basic object-oriented programming (OOP)",
      "HTML/CSS basics",
      "Git fundamentals",
      "SQL basics",
      "Debugging techniques"
    ],
    "Intermediate": [
      "Data structures (arrays, linked lists, stacks, queues, hashmaps, trees, graphs)",
      "Algorithms (sorting, searching, recursion, dynamic programming, greedy)",
      "Software development lifecycle (SDLC, Agile, Scrum)",
      "Design patterns (Singleton, Factory, Observer, MVC)",
      "Version control (Git/GitHub/GitLab advanced)",
      "RESTful API development",
      "Database optimization",
      "Unit testing frameworks"
    ],
    "Advanced": [
      "Microservices architecture",
      "APIs (REST, GraphQL, gRPC)",
      "Multithreading and concurrency",
      "Secure coding practices",
      "CI/CD pipelines (Jenkins, GitHub Actions)",
      "Unit testing & automation (JUnit, PyTest, Selenium)",
      "Scalability, performance optimization",
      "Cloud deployment strategies"
    ],
    "Capacity Planning": [
      "Performance monitoring and profiling",
      "Load testing and stress testing",
      "Resource optimization strategies",
      "Scalability planning",
      "Memory management",
      "Database performance tuning",
      "Application monitoring tools",
      "Disaster recovery planning"
    ],
    "Free Resources": [
      {
        title: "FreeCodeCamp Full Stack Development",
        url: "https://www.freecodecamp.org/learn",
        description: "Complete web development curriculum"
      },
      {
        title: "takeUforward DSA Course",
        url: "https://takeuforward.org/strivers-a2z-dsa-course/",
        description: "Complete Data Structures & Algorithms"
      },
      {
        title: "CodeWithHarry DSA",
        url: "https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
        description: "DSA in Hindi/English"
      },
      {
        title: "JavaScript Mastery",
        url: "https://youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
        description: "Complete JavaScript course"
      },
      {
        title: "Python Complete Course",
        url: "https://youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
        description: "Python from beginner to advanced"
      },
      {
        title: "Java Programming",
        url: "https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5",
        description: "Complete Java programming"
      },
      {
        title: "NeetCode Algorithms",
        url: "https://youtube.com/c/NeetCode",
        description: "Coding interview preparation"
      },
      {
        title: "Abdul Bari Algorithms",
        url: "https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
        description: "Algorithm design and analysis"
      }
    ]
  },
  "Web Developer": {
    "Core Concepts": [
      "Frontend Technologies (HTML5, CSS3, JavaScript)",
      "Backend Development",
      "Database Integration",
      "API Development & Integration",
      "Web Security",
      "Performance Optimization",
      "Responsive Design",
      "Testing & Deployment"
    ],
    "Frontend": [
      "HTML5, CSS3, JavaScript (ES6+)",
      "Responsive design, Flexbox, Grid",
      "Frameworks: React, Angular, Vue",
      "State management (Redux, Context API, Vuex)",
      "Web accessibility (WCAG standards)",
      "CSS preprocessors (Sass, Less)",
      "Build tools (Webpack, Vite)",
      "Browser DevTools"
    ],
    "Backend": [
      "Node.js, Django, Spring Boot, Express.js",
      "REST APIs & GraphQL",
      "Authentication & authorization (JWT, OAuth2)",
      "Databases (SQL & NoSQL)",
      "Caching (Redis, Memcached)",
      "Server administration",
      "API documentation",
      "Database migrations"
    ],
    "Advanced Full-Stack": [
      "SSR/SSG (Next.js, Nuxt.js)",
      "Progressive Web Apps (PWAs)",
      "Web security (XSS, CSRF, HTTPS, OWASP Top 10)",
      "Deployment (Docker, Kubernetes, AWS Amplify, Netlify)",
      "Microservices architecture",
      "Real-time applications (WebSockets)",
      "Performance monitoring",
      "SEO optimization"
    ],
    "Capacity Planning": [
      "Website performance optimization",
      "CDN implementation",
      "Database query optimization",
      "Image and asset optimization",
      "Caching strategies",
      "Load balancing",
      "Server scaling strategies",
      "Performance budgets"
    ],
    "Free Resources": [
      {
        title: "Traversy Media Web Development",
        url: "https://youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
        description: "Complete web development course"
      },
      {
        title: "freeCodeCamp Full Stack",
        url: "https://youtube.com/watch?v=nu_pCVPKzTk",
        description: "Full stack development bootcamp"
      },
      {
        title: "React Complete Course",
        url: "https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
        description: "Learn React from basics to advanced"
      },
      {
        title: "Vue.js Tutorial",
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa",
        description: "Complete Vue.js course"
      },
      {
        title: "Angular Complete Guide",
        url: "https://youtube.com/playlist?list=PLTjRvDozrdlxAhsPP4ZYtt3G8KbJ449oT",
        description: "Angular from beginner to expert"
      },
      {
        title: "Full Stack JavaScript",
        url: "https://youtube.com/watch?v=H3XIJYEPdus",
        description: "MEAN/MERN stack development"
      },
      {
        title: "React 4 Projects",
        url: "https://youtube.com/watch?v=82PXenL4MGg",
        description: "Build real React projects"
      }
    ]
  },
  "IT Support Technician": {
    "Core Concepts": [
      "Hardware Troubleshooting",
      "Software Installation & Configuration",
      "Network Fundamentals",
      "Operating Systems",
      "Help Desk Operations",
      "ITIL Framework",
      "Customer Service",
      "Documentation & Ticketing"
    ],
    "Beginner": [
      "Windows, Linux, macOS basics",
      "Troubleshooting hardware/software",
      "Networking basics (IP, DNS, DHCP, VPN)",
      "Basic security concepts",
      "Help desk software",
      "Customer communication skills",
      "Basic scripting",
      "System backup procedures"
    ],
    "Intermediate": [
      "Active Directory, Group Policy, SCCM",
      "Remote monitoring & management tools",
      "Service desk tools (Jira, ServiceNow)",
      "Scripting (PowerShell, Bash)",
      "Network troubleshooting",
      "Virtualization basics",
      "Mobile device management",
      "Incident management"
    ],
    "Advanced": [
      "ITIL framework & processes",
      "Incident response procedures",
      "Cybersecurity basics (firewalls, antivirus, SIEM tools)",
      "Transition to roles: SysAdmin, Security Analyst",
      "Advanced troubleshooting techniques",
      "Automation scripting",
      "Compliance and auditing",
      "Change management"
    ],
    "Capacity Planning": [
      "System performance monitoring",
      "Resource utilization tracking",
      "Help desk queue management",
      "SLA management",
      "Asset lifecycle management",
      "Capacity forecasting",
      "Preventive maintenance scheduling",
      "Disaster recovery planning"
    ],
    "Free Resources": [
      {
        title: "Professor Messer CompTIA A+",
        url: "https://www.professormesser.com/free-a-plus-training/",
        description: "Free A+ certification training"
      },
      {
        title: "Microsoft Learn",
        url: "https://docs.microsoft.com/en-us/learn/",
        description: "Microsoft technologies training"
      },
      {
        title: "Linux Journey",
        url: "https://linuxjourney.com/",
        description: "Learn Linux step by step"
      },
      {
        title: "ITIL Foundation",
        url: "https://www.axelos.com/certifications/itil-service-management",
        description: "ITIL framework overview"
      },
      {
        title: "Spiceworks Community",
        url: "https://community.spiceworks.com/",
        description: "IT professional community"
      }
    ]
  },
  "Network Administrator": {
    "Core Concepts": [
      "Network Protocols & Architecture",
      "Network Security",
      "Network Design & Implementation",
      "Monitoring & Troubleshooting",
      "Virtualization",
      "Cloud Networking",
      "Network Automation",
      "Disaster Recovery"
    ],
    "Beginner": [
      "Networking fundamentals (TCP/IP, OSI model)",
      "Routers, switches, firewalls basics",
      "Windows/Linux server administration",
      "Network cables and hardware",
      "Basic network protocols",
      "IP addressing and subnetting",
      "Network documentation",
      "Basic security concepts"
    ],
    "Intermediate": [
      "VLANs, VPNs, subnetting",
      "DNS, DHCP, Load Balancers",
      "Virtualization (VMware, Hyper-V)",
      "Monitoring tools (Nagios, Zabbix)",
      "Network optimization",
      "Wireless networking",
      "Network redundancy",
      "Quality of Service (QoS)"
    ],
    "Advanced": [
      "Network security (IDS/IPS, Zero Trust)",
      "Cloud networking (AWS VPC, Azure VNets)",
      "Automation (Ansible, Terraform)",
      "High availability and disaster recovery",
      "Software-defined networking (SDN)",
      "Network function virtualization",
      "Advanced routing protocols",
      "Network architecture design"
    ],
    "Capacity Planning": [
      "Bandwidth monitoring and planning",
      "Network performance optimization",
      "Traffic analysis and forecasting",
      "Scalability planning",
      "Network resource allocation",
      "Performance bottleneck identification",
      "Growth projection modeling",
      "Network upgrade planning"
    ],
    "Free Resources": [
      {
        title: "Cisco Networking Academy",
        url: "https://www.netacad.com/",
        description: "Free networking courses"
      },
      {
        title: "Packet Tracer",
        url: "https://www.netacad.com/courses/packet-tracer",
        description: "Network simulation tool"
      },
      {
        title: "Professor Messer Network+",
        url: "https://www.professormesser.com/network-plus/",
        description: "Network+ certification training"
      },
      {
        title: "NetworkLessons.com",
        url: "https://networklessons.com/",
        description: "Free networking tutorials"
      },
      {
        title: "Wireshark University",
        url: "https://www.wireshark.org/docs/",
        description: "Network protocol analyzer"
      }
    ]
  },
  "Database Administrator": {
    "Core Concepts": [
      "Database Design & Architecture",
      "Performance Tuning & Optimization",
      "Backup & Recovery",
      "Security & Compliance",
      "Data Modeling",
      "Query Optimization",
      "Replication & Clustering",
      "Cloud Database Management"
    ],
    "Beginner": [
      "SQL (DDL, DML, joins, subqueries)",
      "Relational database design (ER diagrams, normalization)",
      "Database installation and configuration",
      "Basic backup and restore procedures",
      "User management and permissions",
      "Data types and constraints",
      "Basic indexing concepts",
      "Database security basics"
    ],
    "Intermediate": [
      "Stored procedures, triggers, indexing",
      "NoSQL databases (MongoDB, Cassandra)",
      "Backup & recovery strategies",
      "Performance monitoring and tuning",
      "Database replication",
      "Data migration techniques",
      "Advanced SQL queries",
      "Database automation scripts"
    ],
    "Advanced": [
      "Data replication, partitioning, clustering",
      "Performance tuning & query optimization",
      "Security (encryption, roles, auditing)",
      "Cloud databases (AWS RDS, BigQuery, Cosmos DB)",
      "High availability solutions",
      "Disaster recovery planning",
      "Database DevOps",
      "Multi-database management"
    ],
    "Capacity Planning": [
      "Database growth monitoring",
      "Storage capacity planning",
      "Performance baseline establishment",
      "Resource utilization tracking",
      "Query performance analysis",
      "Index optimization strategies",
      "Memory allocation planning",
      "Scalability assessment"
    ],
    "Free Resources": [
      {
        title: "W3Schools SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
        description: "Complete SQL tutorial"
      },
      {
        title: "PostgreSQL Tutorial",
        url: "https://www.postgresqltutorial.com/",
        description: "Learn PostgreSQL"
      },
      {
        title: "MongoDB University",
        url: "https://university.mongodb.com/",
        description: "Free MongoDB courses"
      },
      {
        title: "SQLBolt",
        url: "https://sqlbolt.com/",
        description: "Interactive SQL lessons"
      },
      {
        title: "MySQL Documentation",
        url: "https://dev.mysql.com/doc/",
        description: "Official MySQL documentation"
      }
    ]
  },
  "Cybersecurity Analyst": {
    "Core Concepts": [
      "Security Frameworks & Standards",
      "Threat Analysis & Intelligence",
      "Incident Response",
      "Vulnerability Management",
      "Network Security",
      "Cryptography",
      "Security Tools & Technologies",
      "Compliance & Governance"
    ],
    "Beginner": [
      "Cybersecurity fundamentals",
      "Firewalls, antivirus, IDS/IPS",
      "Threat types (malware, phishing, ransomware)",
      "Basic networking security",
      "Password security",
      "Security awareness training",
      "Basic encryption concepts",
      "Security policies and procedures"
    ],
    "Intermediate": [
      "Ethical hacking basics (Kali Linux, Metasploit, Burp Suite)",
      "Network security (VPNs, SSL/TLS, Wireshark)",
      "SOC operations, SIEM tools (Splunk, ELK, QRadar)",
      "Vulnerability assessment",
      "Risk management",
      "Security incident handling",
      "Digital forensics basics",
      "Compliance frameworks"
    ],
    "Advanced": [
      "Penetration testing (OSCP, CEH-level)",
      "Security frameworks (NIST, ISO 27001, CIS Controls)",
      "Cryptography (RSA, AES, PKI, blockchain security)",
      "Advanced incident response & forensics",
      "Cloud security (AWS, Azure, GCP security controls)",
      "Advanced persistent threats (APT)",
      "Security architecture design",
      "Threat hunting techniques"
    ],
    "Capacity Planning": [
      "Security monitoring capacity planning",
      "SIEM log storage planning",
      "Incident response resource allocation",
      "Security tool performance monitoring",
      "Threat intelligence feed management",
      "Security training program scaling",
      "Vulnerability scanning capacity",
      "Backup and recovery planning for security systems"
    ],
    "Free Resources": [
      {
        title: "Cybrary",
        url: "https://www.cybrary.it/",
        description: "Free cybersecurity training"
      },
      {
        title: "SANS Cyber Aces",
        url: "https://cyberaces.org/",
        description: "Free cybersecurity tutorials"
      },
      {
        title: "NIST Cybersecurity Framework",
        url: "https://www.nist.gov/cyberframework",
        description: "Official NIST framework"
      },
      {
        title: "OWASP",
        url: "https://owasp.org/",
        description: "Web application security"
      },
      {
        title: "Kali Linux Training",
        url: "https://kali.training/",
        description: "Official Kali Linux training"
      }
    ]
  },
  "Data Scientist": {
    "Core Concepts": [
      "Statistics & Probability",
      "Machine Learning Algorithms",
      "Data Processing & Analysis",
      "Data Visualization",
      "Big Data Technologies",
      "Programming for Data Science",
      "Experimental Design",
      "Business Intelligence"
    ],
    "Beginner": [
      "Statistics, probability, linear algebra",
      "Python (NumPy, Pandas, Matplotlib, Seaborn)",
      "SQL for data analysis",
      "Data cleaning and preprocessing",
      "Basic data visualization",
      "Excel/Google Sheets for data analysis",
      "Introduction to R",
      "Data ethics and privacy"
    ],
    "Intermediate": [
      "Machine Learning (scikit-learn)",
      "Data wrangling, feature engineering",
      "Data visualization (Tableau, Power BI)",
      "Big data basics (Hadoop, Spark)",
      "A/B testing and experimental design",
      "Time series analysis",
      "Natural language processing basics",
      "Database design for analytics"
    ],
    "Advanced": [
      "Deep learning (TensorFlow, PyTorch)",
      "NLP, computer vision, reinforcement learning",
      "MLOps (Kubeflow, MLflow)",
      "Data pipelines (Airflow, Kafka)",
      "Advanced predictive modeling & deployment",
      "Distributed computing",
      "Advanced statistical modeling",
      "Production ML systems"
    ],
    "Capacity Planning": [
      "Data storage and compute planning",
      "Model training resource allocation",
      "Data pipeline scalability",
      "Model serving infrastructure",
      "Data quality monitoring",
      "Feature store management",
      "Model performance monitoring",
      "Data governance and lineage"
    ],
    "Free Resources": [
      {
        title: "Kaggle Learn",
        url: "https://www.kaggle.com/learn",
        description: "Free data science courses"
      },
      {
        title: "Coursera Data Science",
        url: "https://www.coursera.org/browse/data-science",
        description: "Data science specializations"
      },
      {
        title: "Python for Data Science Handbook",
        url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
        description: "Free online book"
      },
      {
        title: "Google AI Education",
        url: "https://ai.google/education/",
        description: "Machine learning courses"
      },
      {
        title: "Fast.ai",
        url: "https://www.fast.ai/",
        description: "Practical deep learning"
      }
    ]
  },
  "AI/ML Engineer": {
    "Core Concepts": [
      "Machine Learning Fundamentals",
      "Deep Learning Architectures",
      "Model Development & Training",
      "Model Deployment & Serving",
      "MLOps & Production Systems",
      "AI Ethics & Fairness",
      "Performance Optimization",
      "Research & Development"
    ],
    "Core": [
      "Mathematics for AI (calculus, linear algebra, probability)",
      "ML algorithms (SVM, decision trees, regression, clustering)",
      "Programming (Python, R, SQL)",
      "Data preprocessing and feature engineering",
      "Model evaluation and validation",
      "Statistical analysis",
      "Algorithm optimization",
      "Research methodologies"
    ],
    "Deep Learning": [
      "CNNs, RNNs, LSTMs, Transformers",
      "Frameworks: TensorFlow, PyTorch",
      "Large language models (LLMs), fine-tuning",
      "Computer vision applications",
      "Natural language processing",
      "Generative models",
      "Transfer learning",
      "Neural architecture search"
    ],
    "Advanced": [
      "Model deployment (FastAPI, Flask, TorchServe, HuggingFace)",
      "Edge AI & federated learning",
      "Generative AI (GANs, Diffusion models, Prompt Engineering)",
      "AI ethics, bias, fairness, explainability (XAI)",
      "Distributed training",
      "Model compression and optimization",
      "Real-time inference systems",
      "AI research and development"
    ],
    "Capacity Planning": [
      "GPU/TPU resource planning",
      "Model training time estimation",
      "Inference serving capacity",
      "Data pipeline throughput",
      "Memory and storage requirements",
      "Model versioning and storage",
      "Distributed training coordination",
      "Cost optimization for cloud AI services"
    ],
    "Free Resources": [
      {
        title: "Machine Learning Course by Andrew Ng",
        url: "https://www.coursera.org/learn/machine-learning",
        description: "Classic ML course"
      },
      {
        title: "Deep Learning Specialization",
        url: "https://www.coursera.org/specializations/deep-learning",
        description: "Deep learning by Andrew Ng"
      },
      {
        title: "Hugging Face Course",
        url: "https://huggingface.co/course",
        description: "Transformers and NLP"
      },
      {
        title: "Papers with Code",
        url: "https://paperswithcode.com/",
        description: "Latest ML research papers"
      },
      {
        title: "Google AI Blog",
        url: "https://ai.googleblog.com/",
        description: "Latest AI research and news"
      }
    ]
  },
  "Cloud/DevOps Engineer": {
    "Core Concepts": [
      "Cloud Computing Fundamentals",
      "Infrastructure as Code",
      "Continuous Integration/Deployment",
      "Container Orchestration",
      "Monitoring & Observability",
      "Security & Compliance",
      "Automation & Scripting",
      "Site Reliability Engineering"
    ],
    "Beginner": [
      "Cloud basics (AWS, Azure, GCP fundamentals)",
      "Linux shell, scripting",
      "Version control (Git)",
      "Basic networking concepts",
      "Virtual machines and containers",
      "Command line tools",
      "Basic security practices",
      "Agile and DevOps principles"
    ],
    "Intermediate": [
      "Docker, Kubernetes",
      "CI/CD (Jenkins, GitHub Actions, GitLab CI)",
      "Infrastructure as Code (Terraform, Ansible, Pulumi)",
      "Configuration management",
      "Container registries and orchestration",
      "Monitoring and logging basics",
      "Cloud storage and databases",
      "Load balancing and auto-scaling"
    ],
    "Advanced": [
      "Cloud-native architecture (microservices, serverless)",
      "Observability (Prometheus, Grafana, ELK)",
      "Security & compliance in cloud",
      "Multi-cloud & hybrid cloud strategies",
      "Service mesh (Istio, Linkerd)",
      "GitOps workflows",
      "Advanced networking and security",
      "Cost optimization and governance"
    ],
    "Capacity Planning": [
      "Resource utilization monitoring",
      "Auto-scaling configuration",
      "Cost optimization strategies",
      "Performance benchmarking",
      "Disaster recovery planning",
      "Capacity forecasting",
      "SLA and SLO management",
      "Infrastructure scaling strategies"
    ],
    "Free Resources": [
      {
        title: "AWS Free Tier",
        url: "https://aws.amazon.com/free/",
        description: "Free AWS services"
      },
      {
        title: "Google Cloud Skills Boost",
        url: "https://www.cloudskillsboost.google/",
        description: "Free Google Cloud training"
      },
      {
        title: "Azure Learn",
        url: "https://docs.microsoft.com/en-us/learn/azure/",
        description: "Microsoft Azure training"
      },
      {
        title: "Kubernetes Documentation",
        url: "https://kubernetes.io/docs/home/",
        description: "Official Kubernetes docs"
      },
      {
        title: "Docker Get Started",
        url: "https://docs.docker.com/get-started/",
        description: "Official Docker tutorial"
      }
    ]
  },
  "Quality Assurance Engineer": {
    "Core Concepts": [
      "Testing Methodologies",
      "Test Automation",
      "Quality Processes",
      "Bug Tracking & Management",
      "Performance Testing",
      "Security Testing",
      "API Testing",
      "Continuous Testing"
    ],
    "Beginner": [
      "Testing fundamentals (unit, integration, system, UAT)",
      "Manual testing & bug tracking (Jira, Bugzilla)",
      "Test case design and execution",
      "Defect lifecycle management",
      "Software development lifecycle",
      "Basic SQL for testing",
      "Cross-browser testing",
      "Mobile testing basics"
    ],
    "Intermediate": [
      "Test automation (Selenium, Cypress, Playwright)",
      "API testing (Postman, REST Assured)",
      "Performance testing (JMeter, LoadRunner)",
      "Test data management",
      "CI/CD integration for testing",
      "Database testing",
      "Security testing basics",
      "Agile testing methodologies"
    ],
    "Advanced": [
      "Continuous testing in CI/CD pipelines",
      "Security & penetration testing in QA",
      "Test-driven development (TDD), Behavior-driven development (BDD)",
      "AI-driven test automation",
      "Advanced performance testing",
      "Test architecture design",
      "Quality metrics and reporting",
      "Test environment management"
    ],
    "Capacity Planning": [
      "Test execution time planning",
      "Test environment resource allocation",
      "Automation ROI analysis",
      "Test data volume planning",
      "Performance test load planning",
      "Test coverage analysis",
      "Quality metrics tracking",
      "Test maintenance effort estimation"
    ],
    "Free Resources": [
      {
        title: "Software Testing Help",
        url: "https://www.softwaretestinghelp.com/",
        description: "Comprehensive testing tutorials"
      },
      {
        title: "Selenium Documentation",
        url: "https://selenium-python.readthedocs.io/",
        description: "Selenium automation guide"
      },
      {
        title: "Postman Learning Center",
        url: "https://learning.postman.com/",
        description: "API testing with Postman"
      },
      {
        title: "ISTQB Syllabus",
        url: "https://www.istqb.org/certifications/foundation-level",
        description: "Software testing certification"
      },
      {
        title: "Test Automation University",
        url: "https://testautomationu.applitools.com/",
        description: "Free test automation courses"
      }
    ]
  },
  
  // SAP Functional Roles
  "sap-fi": {
    name: "SAP FI (Financial Accounting)",
    description: "Manage financial accounting processes and general ledger operations",
    "Core Concepts": [
      "General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR)",
      "Asset Accounting, Bank Accounting",
      "Financial reporting, integration with CO (Controlling)",
      "Chart of Accounts, Company Code"
    ],
    "Beginner": [
      "SAP Navigation basics",
      "General Ledger fundamentals",
      "Document posting principles",
      "Master data creation"
    ],
    "Intermediate": [
      "Asset accounting configuration",
      "Bank accounting setup",
      "Month-end closing procedures",
      "Financial statement preparation"
    ],
    "Advanced": [
      "Parallel ledgers configuration",
      "New GL implementation",
      "Financial closing cockpit",
      "Integration with other modules"
    ],
    "Capacity Planning": "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with multiple implementations",
    "Free Resources": [
      {
        title: "SAP FI Tutorial - TutorialsPoint",
        description: "Complete SAP FI tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_fi/index.htm"
      },
      {
        title: "SAP Help Portal - Financial Accounting",
        description: "Official SAP documentation for FI module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/eb3777d5495d46c5b2fa773206bbfb46/4a004e8dd4654b9a8d0c6f8c6b5e8c5c.html"
      },
      {
        title: "Michael Management - SAP FI Videos",
        description: "Free SAP FI training videos",
        url: "https://www.youtube.com/user/MichaelManagement"
      },
      {
        title: "openSAP Finance Courses",
        description: "Free SAP finance courses",
        url: "https://open.sap.com/courses?q=finance"
      }
    ]
  },

  "sap-co": {
    name: "SAP CO (Controlling)",
    description: "Manage cost accounting and internal reporting processes",
    "Core Concepts": [
      "Cost Center Accounting, Profit Center Accounting",
      "Internal Orders, Product Costing",
      "Profitability Analysis (CO-PA)",
      "Management accounting principles"
    ],
    "Beginner": [
      "Controlling fundamentals",
      "Cost center setup",
      "Cost element creation",
      "Basic planning concepts"
    ],
    "Intermediate": [
      "Internal order management",
      "Activity-based costing",
      "Profit center accounting",
      "Period-end closing"
    ],
    "Advanced": [
      "COPA reporting and configuration",
      "Integration with FI/PP/SD",
      "Advanced cost allocation",
      "Predictive costing"
    ],
    "Capacity Planning": "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with advanced costing expertise",
    "Free Resources": [
      {
        title: "SAP CO Tutorial - TutorialsPoint",
        description: "Complete SAP CO tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_co/index.htm"
      },
      {
        title: "SAP Help Portal - Controlling",
        description: "Official SAP documentation for CO module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/b1c834a22d05483b8a75710743b5ff26/4a004e8dd4654b9a8d0c6f8c6b5e8c5c.html"
      },
      {
        title: "YouTube - SAP CO Training",
        description: "Free SAP CO training videos",
        url: "https://www.youtube.com/results?search_query=sap+co+training"
      }
    ]
  },

  "sap-sd": {
    name: "SAP SD (Sales & Distribution)",
    description: "Manage sales processes from order to delivery and billing",
    "Core Concepts": [
      "Sales order processing, Pricing, Billing",
      "Shipping, Delivery, Returns",
      "Credit management",
      "Customer master data"
    ],
    "Beginner": [
      "Sales document types",
      "Customer master creation",
      "Basic pricing procedures",
      "Order-to-cash process"
    ],
    "Intermediate": [
      "Advanced pricing configuration",
      "Shipping and delivery setup",
      "Credit management configuration",
      "Returns processing"
    ],
    "Advanced": [
      "ATP (Available to Promise)",
      "Output Determination",
      "Revenue recognition",
      "Variant configuration"
    ],
    "Capacity Planning": "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with complex pricing expertise",
    "Free Resources": [
      {
        title: "SAP SD Tutorial - TutorialsPoint",
        description: "Complete SAP SD tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_sd/index.htm"
      },
      {
        title: "SAP Help Portal - Sales and Distribution",
        description: "Official SAP documentation for SD module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/8308e6d301d54584a33cd04a9861bc52/4a004e8dd4654b9a8d0c6f8c6b5e8c5c.html"
      },
      {
        title: "SAP Community - SD Forum",
        description: "Community discussions and solutions for SD",
        url: "https://community.sap.com/topics/sales-distribution"
      }
    ]
  },

  "sap-mm": {
    name: "SAP MM (Materials Management)",
    description: "Manage procurement and inventory processes",
    "Core Concepts": [
      "Procurement process, Purchase Requisitions & Orders",
      "Inventory Management, Goods Receipt, Invoice Verification",
      "Vendor Master & Info Records",
      "Material master data"
    ],
    "Beginner": [
      "Material master creation",
      "Vendor master setup",
      "Purchase requisition process",
      "Goods receipt basics"
    ],
    "Intermediate": [
      "Purchase order management",
      "Invoice verification process",
      "Inventory management",
      "Material valuation"
    ],
    "Advanced": [
      "Release strategies",
      "Subcontracting processes",
      "Consignment management",
      "Batch management"
    ],
    "Capacity Planning": "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with procurement optimization",
    "Free Resources": [
      {
        title: "SAP MM Tutorial - TutorialsPoint",
        description: "Complete SAP MM tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_mm/index.htm"
      },
      {
        title: "SAP Help Portal - Materials Management",
        description: "Official SAP documentation for MM module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/8308e6d301d54584a33cd04a9861bc52/4a004e8dd4654b9a8d0c6f8c6b5e8c5c.html"
      },
      {
        title: "ERPPrep - SAP MM Materials",
        description: "Free SAP MM learning materials",
        url: "https://www.erpprep.com/sap-mm-material-management-training-tutorials"
      }
    ]
  },

  "sap-pp": {
    name: "SAP PP (Production Planning)",
    description: "Manage production planning and manufacturing processes",
    "Core Concepts": [
      "Master Data (BOM, Work Centers, Routing)",
      "MRP (Material Requirement Planning)",
      "Capacity Planning, Production Orders",
      "Manufacturing execution"
    ],
    "Beginner": [
      "BOM creation and management",
      "Work center configuration",
      "Routing setup",
      "MRP basics"
    ],
    "Intermediate": [
      "Production order management",
      "Capacity planning",
      "Shop floor control",
      "Costing in production"
    ],
    "Advanced": [
      "Kanban implementation",
      "Repetitive Manufacturing",
      "Integration with MM & SD",
      "Advanced planning"
    ],
    "Capacity Planning": "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with manufacturing expertise",
    "Free Resources": [
      {
        title: "SAP PP Tutorial - TutorialsPoint",
        description: "Complete SAP PP tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_pp/index.htm"
      },
      {
        title: "SAP Help Portal - Production Planning",
        description: "Official SAP documentation for PP module",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/8308e6d301d54584a33cd04a9861bc52/4a004e8dd4654b9a8d0c6f8c6b5e8c5c.html"
      },
      {
        title: "YouTube - SAP PP Complete Course",
        description: "Free SAP PP training course",
        url: "https://www.youtube.com/results?search_query=sap+pp+complete+course"
      }
    ]
  },

  "sap-hcm": {
    name: "SAP HCM / SuccessFactors",
    description: "Manage human resources and talent management processes",
    "Core Concepts": [
      "Personnel Administration (PA), Organizational Management (OM)",
      "Time Management, Payroll",
      "Employee Self-Service (ESS), Manager Self-Service (MSS)",
      "Talent management"
    ],
    "Beginner": [
      "Employee master data",
      "Organizational structure",
      "Time recording basics",
      "Basic payroll concepts"
    ],
    "Intermediate": [
      "Time management configuration",
      "Payroll processing",
      "Benefits administration",
      "Performance management"
    ],
    "Advanced": [
      "SuccessFactors implementation",
      "Learning management",
      "Compensation planning",
      "Advanced analytics"
    ],
    "Capacity Planning": "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with cloud HCM expertise",
    "Free Resources": [
      {
        title: "SAP HCM Tutorial - TutorialsPoint",
        description: "Complete SAP HCM tutorial for beginners",
        url: "https://www.tutorialspoint.com/sap_hr/index.htm"
      },
      {
        title: "SAP SuccessFactors Learning Hub",
        description: "Official SAP SuccessFactors learning resources",
        url: "https://help.sap.com/docs/SAP_SUCCESSFACTORS_PLATFORM"
      },
      {
        title: "openSAP SuccessFactors Courses",
        description: "Free SuccessFactors courses",
        url: "https://open.sap.com/courses?q=successfactors"
      }
    ]
  },

  // SAP Technical Roles
  "sap-abap": {
    name: "SAP ABAP Developer",
    description: "Develop custom applications and enhance SAP functionality",
    "Core Concepts": [
      "ABAP programming fundamentals",
      "Data Dictionary concepts",
      "Report development",
      "Module pool programming"
    ],
    "Beginner": [
      "ABAP syntax and basics",
      "Data types and structures",
      "Internal tables",
      "Simple reports"
    ],
    "Intermediate": [
      "BAPIs and BADIs",
      "Enhancements and modifications",
      "ALV reports",
      "Dialog programming"
    ],
    "Advanced": [
      "Object-Oriented ABAP",
      "CDS Views",
      "AMDPs (ABAP Managed Database Procedures)",
      "RAP (Restful ABAP Programming)",
      "Fiori Integration"
    ],
    "Capacity Planning": "Entry-level: 6 months training, Mid-level: 2-3 years, Senior: 5+ years with OO ABAP expertise",
    "Free Resources": [
      {
        title: "SAP ABAP Tutorial - TutorialsPoint",
        description: "Complete ABAP programming tutorial",
        url: "https://www.tutorialspoint.com/sap_abap/index.htm"
      },
      {
        title: "SAP Developer Center - ABAP",
        description: "Official SAP ABAP development resources",
        url: "https://developers.sap.com/topics/abap-platform.html"
      },
      {
        title: "ABAP Code Samples - GitHub",
        description: "Open source ABAP code examples",
        url: "https://github.com/SAP-samples/abap-platform-rap-workshops"
      },
      {
        title: "openSAP ABAP Courses",
        description: "Free ABAP programming courses",
        url: "https://open.sap.com/courses?q=abap"
      }
    ]
  },

  "sap-basis": {
    name: "SAP BASIS Administrator",
    description: "Manage SAP system administration and infrastructure",
    "Core Concepts": [
      "System administration",
      "User management",
      "Transport Management System (TMS)",
      "System monitoring and performance"
    ],
    "Beginner": [
      "SAP system architecture",
      "User administration",
      "Basic system monitoring",
      "Transport management"
    ],
    "Intermediate": [
      "Performance tuning",
      "Kernel upgrades",
      "System copies",
      "Background job management"
    ],
    "Advanced": [
      "SAP HANA administration",
      "Security configuration",
      "SSO implementation",
      "Disaster recovery"
    ],
    "Capacity Planning": "Entry-level: 6 months certification, Mid-level: 2-3 years, Senior: 5+ years with HANA expertise",
    "Free Resources": [
      {
        title: "SAP BASIS Tutorial - TutorialsPoint",
        description: "Complete SAP BASIS administration guide",
        url: "https://www.tutorialspoint.com/sap_basis/index.htm"
      },
      {
        title: "SAP Help Portal - Administration",
        description: "Official SAP administration documentation",
        url: "https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_752"
      },
      {
        title: "SAPBasisInfo - Free Resources",
        description: "SAP BASIS tutorials and tips",
        url: "https://www.sapbasisinfo.com/"
      }
    ]
  },

  "sap-hana": {
    name: "SAP HANA Developer/Administrator",
    description: "Work with SAP's in-memory database platform",
    "Core Concepts": [
      "In-Memory database concepts",
      "Modeling (Calculation Views, Attribute Views)",
      "SQLScript programming",
      "Performance optimization"
    ],
    "Beginner": [
      "HANA architecture basics",
      "Data modeling fundamentals",
      "Basic SQLScript",
      "HANA Studio navigation"
    ],
    "Intermediate": [
      "Advanced modeling techniques",
      "Procedures and functions",
      "Data provisioning",
      "Performance monitoring"
    ],
    "Advanced": [
      "HANA Security configuration",
      "Smart Data Integration",
      "Predictive Analysis Library",
      "HANA Cloud integration"
    ],
    "Capacity Planning": "Entry-level: 6 months training, Mid-level: 2-3 years, Senior: 5+ years with cloud expertise",
    "Free Resources": [
      {
        title: "SAP HANA Tutorial - TutorialsPoint",
        description: "Complete SAP HANA tutorial",
        url: "https://www.tutorialspoint.com/sap_hana/index.htm"
      },
      {
        title: "SAP HANA Developer Guide",
        description: "Official SAP HANA development documentation",
        url: "https://help.sap.com/docs/SAP_HANA_PLATFORM"
      },
      {
        title: "openSAP HANA Courses",
        description: "Free SAP HANA courses from openSAP",
        url: "https://open.sap.com/courses?q=hana"
      }
    ]
  },

  "sap-s4hana": {
    name: "SAP S/4HANA Consultant",
    description: "Implement and migrate to SAP's next-generation ERP",
    "Core Concepts": [
      "S/4HANA architecture and benefits",
      "Migration strategies (Conversion, Greenfield, Hybrid)",
      "Simplified data model",
      "Embedded analytics"
    ],
    "Beginner": [
      "S/4HANA overview and benefits",
      "Differences from ECC",
      "Universal Journal concept",
      "Business Partner concept"
    ],
    "Intermediate": [
      "Migration planning and execution",
      "Finance in S/4HANA",
      "Supply chain in S/4HANA",
      "Embedded analytics setup"
    ],
    "Advanced": [
      "Central Finance implementation",
      "Advanced analytics configuration",
      "Custom development in S/4HANA",
      "Integration with cloud solutions"
    ],
    "Capacity Planning": "Entry-level: 1 year SAP experience + 6 months S/4HANA, Mid-level: 3-4 years, Senior: 6+ years with migration expertise",
    "Free Resources": [
      {
        title: "SAP S/4HANA Overview - openSAP",
        description: "Free courses on S/4HANA fundamentals",
        url: "https://open.sap.com/courses?q=s4hana"
      },
      {
        title: "SAP S/4HANA Documentation",
        description: "Official SAP S/4HANA documentation",
        url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE"
      },
      {
        title: "SAP Community - S/4HANA",
        description: "Community discussions and best practices",
        url: "https://community.sap.com/topics/s4hana"
      }
    ]
  },

  "sap-fiori": {
    name: "SAP Fiori/UI5 Developer",
    description: "Develop modern user interfaces for SAP applications",
    "Core Concepts": [
      "SAPUI5 framework",
      "OData services",
      "Fiori Design Principles",
      "Launchpad Configuration"
    ],
    "Beginner": [
      "UI5 basics and MVC pattern",
      "Fiori design principles",
      "Basic app development",
      "OData service consumption"
    ],
    "Intermediate": [
      "Advanced UI5 controls",
      "Custom Fiori apps",
      "Launchpad configuration",
      "Mobile development"
    ],
    "Advanced": [
      "RAP integration with Fiori",
      "Custom themes and styling",
      "Performance optimization",
      "Fiori Elements"
    ],
    "Capacity Planning": "Entry-level: 6 months web development + SAP, Mid-level: 2-3 years, Senior: 5+ years with UI/UX expertise",
    "Free Resources": [
      {
        title: "SAPUI5 SDK - Demo Kit",
        description: "Official SAPUI5 documentation and examples",
        url: "https://sapui5.hana.ondemand.com/"
      },
      {
        title: "SAP Fiori Design Guidelines",
        description: "Official Fiori design principles and guidelines",
        url: "https://experience.sap.com/fiori-design-web/"
      },
      {
        title: "UI5 Tutorial - Developers Guide",
        description: "Step-by-step UI5 development tutorial",
        url: "https://developers.sap.com/tutorials/sapui5-101.html"
      }
    ]
  },

  "sap-bw": {
    name: "SAP BW/BI Developer",
    description: "Design and implement business intelligence solutions",
    "Core Concepts": [
      "Data warehousing concepts",
      "ETL processes",
      "Data modeling",
      "Reporting and analytics"
    ],
    "Beginner": [
      "BW architecture basics",
      "InfoProviders and InfoObjects",
      "Data extraction basics",
      "Simple reporting"
    ],
    "Intermediate": [
      "Advanced data modeling",
      "Transformation rules",
      "Process chains",
      "BEx reporting"
    ],
    "Advanced": [
      "BW on HANA optimization",
      "BW/4HANA features",
      "Integration with SAC",
      "Advanced analytics"
    ],
    "Capacity Planning": "Entry-level: 6 months BI background, Mid-level: 2-3 years, Senior: 5+ years with HANA expertise",
    "Free Resources": [
      {
        title: "SAP BW Tutorial - TutorialsPoint",
        description: "Complete SAP BW tutorial",
        url: "https://www.tutorialspoint.com/sap_bw/index.htm"
      },
      {
        title: "SAP BW/4HANA Documentation",
        description: "Official SAP BW/4HANA documentation",
        url: "https://help.sap.com/docs/SAP_BW4HANA"
      },
      {
        title: "openSAP BW Courses",
        description: "Free SAP BW courses",
        url: "https://open.sap.com/courses?q=bw"
      }
    ]
  },

  "sap-ariba": {
    name: "SAP Ariba Consultant",
    description: "Implement procurement and supply chain cloud solutions",
    "Core Concepts": [
      "Procurement lifecycle management",
      "Supplier management",
      "Sourcing and contracts",
      "Cloud integration"
    ],
    "Beginner": [
      "Ariba platform overview",
      "Supplier onboarding",
      "Basic procurement processes",
      "User management"
    ],
    "Intermediate": [
      "Advanced sourcing strategies",
      "Contract management",
      "Supplier risk management",
      "Integration configuration"
    ],
    "Advanced": [
      "S/4HANA integration",
      "Custom forms and workflows",
      "Advanced analytics",
      "Multi-tier supplier networks"
    ],
    "Capacity Planning": "Entry-level: 6 months procurement knowledge, Mid-level: 2-3 years, Senior: 5+ years with cloud expertise",
    "Free Resources": [
      {
        title: "SAP Ariba Learning Hub",
        description: "Official SAP Ariba learning resources",
        url: "https://help.sap.com/docs/ARIBA_PROCUREMENT"
      },
      {
        title: "openSAP Ariba Courses",
        description: "Free SAP Ariba courses",
        url: "https://open.sap.com/courses?q=ariba"
      },
      {
        title: "SAP Community - Ariba",
        description: "Community discussions and solutions",
        url: "https://community.sap.com/topics/ariba"
      }
    ]
  },

  "sap-successfactors": {
    name: "SAP SuccessFactors Consultant",
    description: "Implement cloud-based human capital management solutions",
    "Core Concepts": [
      "Employee Central",
      "Performance & Goals",
      "Learning management",
      "Recruiting and onboarding"
    ],
    "Beginner": [
      "SuccessFactors platform basics",
      "Employee Central configuration",
      "Basic reporting",
      "User provisioning"
    ],
    "Intermediate": [
      "Performance management setup",
      "Learning administration",
      "Compensation planning",
      "Integration with other systems"
    ],
    "Advanced": [
      "Advanced analytics and People Analytics",
      "Custom integrations",
      "Intelligent services",
      "Global implementations"
    ],
    "Capacity Planning": "Entry-level: 6 months HR knowledge, Mid-level: 2-3 years, Senior: 5+ years with cloud HCM expertise",
    "Free Resources": [
      {
        title: "SAP SuccessFactors Learning",
        description: "Official SuccessFactors learning resources",
        url: "https://help.sap.com/docs/SAP_SUCCESSFACTORS_PLATFORM"
      },
      {
        title: "openSAP SuccessFactors Courses",
        description: "Free SuccessFactors courses",
        url: "https://open.sap.com/courses?q=successfactors"
      },
      {
        title: "SuccessFactors Community",
        description: "Community discussions and support",
        url: "https://community.sap.com/topics/successfactors"
      }
    ]
  },

  "sap-analytics-cloud": {
    name: "SAP Analytics Cloud Specialist",
    description: "Implement business intelligence and analytics solutions",
    "Core Concepts": [
      "Data modeling and visualization",
      "Story building and dashboards",
      "Predictive analytics",
      "Planning and forecasting"
    ],
    "Beginner": [
      "SAC platform overview",
      "Data connection setup",
      "Basic story creation",
      "Simple charts and visualizations"
    ],
    "Intermediate": [
      "Advanced modeling techniques",
      "Calculated measures",
      "Planning applications",
      "Blended models"
    ],
    "Advanced": [
      "Smart Insights and AI features",
      "Custom widgets and extensions",
      "API integration",
      "Multi-dimensional analysis"
    ],
    "Capacity Planning": "Entry-level: 6 months BI background, Mid-level: 2-3 years, Senior: 5+ years with advanced analytics",
    "Free Resources": [
      {
        title: "SAP Analytics Cloud Documentation",
        description: "Official SAC documentation and tutorials",
        url: "https://help.sap.com/docs/SAP_ANALYTICS_CLOUD"
      },
      {
        title: "openSAP Analytics Cloud Courses",
        description: "Free SAC courses and learning paths",
        url: "https://open.sap.com/courses?q=analytics+cloud"
      },
      {
        title: "SAP Community - Analytics Cloud",
        description: "Community discussions and solutions",
        url: "https://community.sap.com/topics/analytics-cloud"
      }
    ]
  },

  "sap-security": {
    name: "SAP Security & GRC Consultant",
    description: "Implement security and governance, risk & compliance solutions",
    "Core Concepts": [
      "Roles & Authorizations",
      "User provisioning",
      "Segregation of Duties (SoD)",
      "Risk management"
    ],
    "Beginner": [
      "SAP security basics",
      "User and role management",
      "Authorization concepts",
      "Basic GRC concepts"
    ],
    "Intermediate": [
      "Complex authorization objects",
      "SOD analysis and remediation",
      "Access risk analysis",
      "Security monitoring"
    ],
    "Advanced": [
      "GRC Access Control implementation",
      "Process Control configuration",
      "Risk Analysis & Remediation",
      "Advanced compliance reporting"
    ],
    "Capacity Planning": "Entry-level: 6 months SAP + security knowledge, Mid-level: 2-3 years, Senior: 5+ years with GRC expertise",
    "Free Resources": [
      {
        title: "SAP Security Tutorial - TutorialsPoint",
        description: "Complete SAP security tutorial",
        url: "https://www.tutorialspoint.com/sap_security/index.htm"
      },
      {
        title: "SAP GRC Documentation",
        description: "Official SAP GRC documentation",
        url: "https://help.sap.com/docs/SAP_GOVERNANCE_RISK_COMPLIANCE"
      },
      {
        title: "openSAP Security Courses",
        description: "Free SAP security courses",
        url: "https://open.sap.com/courses?q=security"
      }
    ]
  },

  "sap-crm": {
    name: "SAP CRM Consultant",
    description: "Implement customer relationship management solutions",
    "Core Concepts": [
      "Marketing processes",
      "Sales management",
      "Service management",
      "Partner channel management"
    ],
    "Beginner": [
      "CRM basics and navigation",
      "Customer master data",
      "Basic sales processes",
      "Service ticket management"
    ],
    "Intermediate": [
      "Marketing campaign management",
      "Sales cycle configuration",
      "Service processes",
      "Interaction center setup"
    ],
    "Advanced": [
      "SAP C/4HANA integration",
      "SAP CX suite implementation",
      "Advanced analytics",
      "Mobile CRM solutions"
    ],
    "Capacity Planning": "Entry-level: 6 months CRM knowledge, Mid-level: 2-3 years, Senior: 5+ years with cloud CRM expertise",
    "Free Resources": [
      {
        title: "SAP CRM Tutorial - TutorialsPoint",
        description: "Complete SAP CRM tutorial",
        url: "https://www.tutorialspoint.com/sap_crm/index.htm"
      },
      {
        title: "SAP CX Documentation",
        description: "Official SAP Customer Experience documentation",
        url: "https://help.sap.com/docs/SAP_CUSTOMER_EXPERIENCE"
      },
      {
        title: "SAP Community - CRM",
        description: "Community discussions and solutions",
        url: "https://community.sap.com/topics/crm"
      }
    ]
  }
};

// Combine both datasets
export const allLearningPaths = { ...itRolesData, ...sapModules };