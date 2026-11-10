import {
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  EducationStatistic,
  AchievementItem,
  PersonalInfo
} from '../models/portfolio.models';

export type {
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  EducationStatistic,
  AchievementItem,
  PersonalInfo
};

export const PERSONAL_INFO: PersonalInfo = {
  name: 'FELLAH A',
  title: 'Software Developer | Java Full Stack Developer',
  headline: 'Turning Ideas Into Reliable Software Solutions.',
  introduction: 'I am a B.Tech graduate in Artificial Intelligence and Data Science with a strong foundation in Java, Object-Oriented Programming, Data Structures and Algorithms, and SQL. I enjoy developing scalable applications using Spring Boot, Microservices, and Angular, and building practical software solutions to solve real-world problems.',
  profileSummary: 'Aspiring Software Engineer with a strong foundation in Java, OOP, Data Structures and Algorithms, and SQL. Skilled in Spring Boot, REST APIs, Hibernate, Microservices, and Angular. Experienced in developing scalable applications, secure authentication, and database integration. Passionate about problem-solving and building efficient, reliable software solutions.',
  location: 'Erode, Tamil Nadu, India',
  email: 'fellahhakeem@gmail.com',
  phone: '+91 6381096110',
  linkedinUrl: 'https://linkedin.com/in/fellah004',
  githubUrl: 'https://github.com/Fellah004',
  photoUrl: 'assets/images/fellah-profile.jpeg',
  resumeUrl: 'assets/Fellah_A_Resume.pdf',
  degree: 'B.Tech – Artificial Intelligence and Data Science',
  college: 'Nandha Engineering College, Erode',
  graduationYear: '2026',
  cgpa: '8.45 / 10'
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    icon: 'code',
    skills: ['Java', 'Python', 'SQL', 'C']
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    icon: 'layout',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular']
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    icon: 'server',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'JDBC', 'Microservices']
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'MongoDB']
  },
  {
    id: 'development-tools',
    title: 'Development Tools',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'Maven', 'Docker', 'Postman', 'Swagger', 'VS Code', 'Eclipse']
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    icon: 'cpu',
    skills: [
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'Java Collections',
      'Exception Handling',
      'Java 8 Features',
      'Stream API',
      'Lambda Expressions',
      'Database Fundamentals'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'stayvista-hotel-management',
    number: '01',
    title: 'StayVista Hotel Management System',
    fullName: 'StayVista — Enterprise Microservices Hotel Operations Platform',
    category: 'FULL STACK DEVELOPMENT / MICROSERVICES',
    badge: 'MAJOR PROJECT',
    isMajor: true,
    description: 'Developed a microservices-based Hotel Management System using Java 21, Spring Boot, Angular, and MySQL to manage guests, rooms, reservations, billing, and hotel operations. Implemented JWT-based authentication and role-based access control, integrating Eureka service discovery, centralized configuration, Spring Cloud Gateway, and REST APIs for microservice communication.',
    highlights: [
      'JWT-based secure authentication & role-based access control (RBAC)',
      'Service discovery with Netflix Eureka & Spring Cloud Centralized Config',
      'Spring Cloud Gateway with token relay, routing filters, and rate limiting',
      'Asynchronous inter-service communication using RabbitMQ and OpenFeign',
      'Docker containerized deployment architecture for distributed scalability'
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'Microservices',
      'Angular',
      'MySQL',
      'Spring Security',
      'JWT',
      'Eureka',
      'Spring Cloud Gateway',
      'Docker',
      'RabbitMQ'
    ],
    githubUrl: 'https://github.com/Fellah004/StayVista-Hotel-Management-System',
    imageUrl: 'assets/images/projects/stayvista-hotel.jpg'
  },
  {
    id: 'skillsphere',
    number: '02',
    title: 'SkillSphere',
    fullName: 'SkillSphere – Enterprise Learning & Assessment Management System',
    category: 'FULL STACK DEVELOPMENT / ENTERPRISE APPLICATION',
    badge: 'ENTERPRISE SYSTEM',
    isMajor: false,
    description: 'Developed an enterprise-grade learning and assessment management system designed for training institutes, corporate teams, trainers, students, coordinators, and evaluators. Manages the complete learning lifecycle including course curriculum, batch timetables, attendance tracking, automated examinations, project submissions, and certificate eligibility.',
    highlights: [
      'Role-based access control for 5 roles: Admin, Trainer, Student, Coordinator, and Evaluator',
      'Complete learning lifecycle tracking: courses, modules, batches, sessions, and attendance',
      'Automated assessment workflows, assignment grading rubrics, and project evaluations',
      'Automated digital certificate eligibility verification and integrated email notifications'
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'JWT',
      'MySQL',
      'Maven',
      'Spring Mail'
    ],
    githubUrl: 'https://github.com/Fellah004/SkillSphere-Enterprise-Learning-Assessment-Management-System',
    imageUrl: 'assets/images/projects/skillsphere-lms.jpg'
  },
  {
    id: 'eshoppingzone',
    number: '03',
    title: 'EShoppingZone',
    fullName: 'EShoppingZone – E-Commerce Application',
    category: 'FULL STACK DEVELOPMENT / E-COMMERCE',
    badge: 'MICROSERVICES',
    isMajor: false,
    description: 'Architected a distributed microservices e-commerce platform orchestrating 6 decoupled services (Website Controller, Profile, Product, Cart, Order, and Wallet) using Spring Boot 3, Spring Cloud OpenFeign, and RabbitMQ. Features strict role separation between Customers and Merchants, real-time cart calculations, and digital wallet checkout.',
    highlights: [
      'Distributed 6-service architecture orchestrated via Docker Compose',
      'Strict security boundaries separating Customer shopping flows from Merchant catalog controls',
      'Asynchronous payment and order fulfillment event publishing through RabbitMQ message broker',
      'Integrated digital wallet ledger service supporting top-ups, debit payments, and audit statements'
    ],
    technologies: [
      'Java 21',
      'Spring Boot 3',
      'Microservices',
      'Spring Cloud OpenFeign',
      'RabbitMQ',
      'MySQL 8.0',
      'Spring Security',
      'JWT',
      'Docker Compose'
    ],
    githubUrl: 'https://github.com/Fellah004/EShoppingZone',
    imageUrl: 'assets/images/projects/eshoppingzone-store.jpg'
  },
  {
    id: 'ai-image-anomaly-detection',
    number: '04',
    title: 'AI-Driven Image Anomaly Detection for Public Safety',
    category: 'ARTIFICIAL INTELLIGENCE / DEEP LEARNING',
    badge: 'AI & COMPUTER VISION',
    isMajor: false,
    description: 'Developed an unsupervised deep learning system for public safety monitoring that learns normal visual patterns and identifies unusual activities or anomalies in surveillance images. The system uses deep learning techniques to recognize deviations from expected visual behavior.',
    highlights: [
      'Unsupervised feature representation learning on high-density video surveillance feeds',
      'Deep Convolutional Autoencoders engineered for spatiotemporal anomaly localization',
      'Real-time automated alerting framework detecting anomalous security incidents'
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Convolutional Neural Networks',
      'Autoencoders',
      'Deep Learning'
    ],
    githubUrl: 'https://github.com/Fellah004/AI-Driven-Image-Anomaly-Detection-for-Public-Safety',
    imageUrl: 'assets/images/projects/ai-anomaly-detection.jpg'
  },
  {
    id: 'smart-pet-feeder',
    number: '05',
    title: 'Smart Pet Feeder',
    category: 'INTERNET OF THINGS / EMBEDDED SYSTEMS',
    badge: 'IOT & EMBEDDED',
    isMajor: false,
    description: 'Designed and developed an IoT-based automated pet feeding system that controls food dispensing using embedded hardware components. The system integrates sensors and a connected IoT platform to support automated feeding and monitoring.',
    highlights: [
      'Precision servo-motor actuation for portion-controlled food dispensing',
      'Real-time weight calibration and hopper level sensing via Load Cell and HX711 module',
      'Remote telemetry monitoring, schedule triggers, and manual overrides via Blynk IoT'
    ],
    technologies: [
      'ESP8266',
      'NodeMCU',
      'Servo Motor',
      'Load Cell',
      'HX711',
      'Blynk IoT'
    ],
    githubUrl: 'https://github.com/Fellah004/Smart-pet-feeder',
    imageUrl: 'assets/images/projects/smart-pet-feeder.jpg'
  },
  {
    id: 'realtime-inventory-management',
    number: '06',
    title: 'Real-Time Inventory Management for Vision and Mission',
    category: 'COMPUTER VISION / INVENTORY MANAGEMENT',
    badge: 'EDGE AI',
    isMajor: false,
    description: 'Developed a real-time inventory management solution using computer vision and object detection to improve inventory tracking and reduce manual monitoring. Integrated TensorFlow with Raspberry Pi to support automated object identification.',
    highlights: [
      'Achieved more than 90% object detection accuracy across diverse warehouse conditions',
      'Reduced manual tracking effort by approximately 60% through edge vision automation',
      'Embedded model execution on Raspberry Pi hardware for decentralized asset monitoring'
    ],
    metrics: '>90% Accuracy · ~60% Effort Reduction',
    technologies: [
      'Python',
      'TensorFlow',
      'Raspberry Pi',
      'Computer Vision'
    ],
    imageUrl: 'assets/images/projects/inventory-vision.jpg'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'capgemini',
    company: 'Capgemini',
    position: 'Software Development Trainee',
    duration: 'June 2026 – October 2026',
    description: 'Completed structured technical training focused on enterprise software development, strengthening programming fundamentals and gaining exposure to modern application development technologies.',
    keyLearningAreas: [
      'Java programming and Data Structures and Algorithms',
      'Spring Boot, Spring Security, and Microservices architecture',
      'Containerization and orchestration exposure with Docker and Kubernetes',
      'Angular frontend fundamentals and responsive UI integration',
      'Enterprise application development standards and software engineering best practices'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Microservices', 'Docker', 'Kubernetes', 'Angular', 'DSA']
  },
  {
    id: 'cubeai',
    company: 'CubeAI Tech Solutions Pvt. Ltd.',
    position: 'Full Stack Developer Intern',
    duration: 'March 2025 – May 2025',
    description: 'Completed a three-month internship program that included 14 days of onsite technical training, gaining practical exposure to frontend development and web technologies.',
    keyLearningAreas: [
      'Semantic HTML5 and modern CSS3 layout engineering',
      'JavaScript fundamentals, DOM manipulation, and modern ES6+ paradigms',
      'React.js component-based architecture and state workflows',
      'Practical frontend web development and cross-browser responsiveness'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Frontend Development']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech',
    number: '01',
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    institution: 'Nandha Engineering College, Erode',
    duration: '2022 – 2026',
    scoreLabel: 'CGPA',
    scoreValue: '8.45 / 10',
    isPrimary: true,
    description: 'Undergraduate engineering program covering core computer science fundamentals, Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Machine Learning, and Full-Stack Software Engineering.'
  },
  {
    id: 'hsc-12th',
    number: '02',
    degree: 'Higher Secondary Certificate (HSC – 12th)',
    institution: 'Christhu Jyothi Matriculation Higher Secondary School, Erode',
    duration: '2020 – 2022',
    scoreLabel: 'PERCENTAGE',
    scoreValue: '83.05%',
    isPrimary: false,
    description: 'Higher secondary education with core specialization in Mathematics, Physics, Chemistry, and Computer Science, establishing strong analytical problem-solving foundations.'
  },
  {
    id: 'sslc-10th',
    number: '03',
    degree: 'Secondary School Leaving Certificate (SSLC – 10th)',
    institution: 'Christhu Jyothi Matriculation Higher Secondary School, Erode',
    duration: '2019 – 2020',
    scoreLabel: 'PERCENTAGE',
    scoreValue: '79.06%',
    isPrimary: false,
    description: 'Secondary school education providing a rigorous academic foundation across science, mathematics, and analytical reasoning.'
  }
];

export const EDUCATION_STATISTICS: EducationStatistic[] = [
  { value: '8.45', label: 'COLLEGE CGPA' },
  { value: '83.05%', label: 'HSC (12TH)' },
  { value: '79.06%', label: 'SSLC (10TH)' },
  { value: '2026', label: 'GRADUATION YEAR' }
];

export const EDUCATION_METRICS = EDUCATION_STATISTICS;

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  // Certifications
  {
    id: 'nptel-cloud',
    category: 'Certifications',
    badge: 'NPTEL',
    title: 'Cloud Computing',
    organization: 'NPTEL / IIT Kharagpur',
    description: 'Rigorous certification covering distributed cloud infrastructure, virtualization principles, cloud service models (IaaS, PaaS, SaaS), and cloud storage scaling.'
  },
  {
    id: 'infosys-blockchain',
    category: 'Certifications',
    badge: 'INFOSYS SPRINGBOARD',
    title: 'Blockchain',
    organization: 'Infosys Springboard',
    description: 'Comprehensive study of blockchain architecture, distributed consensus mechanisms, smart contracts, cryptographic hashing, and decentralized ledger technology.'
  },
  {
    id: 'infosys-ai-primer',
    category: 'Certifications',
    badge: 'INFOSYS SPRINGBOARD',
    title: 'AI Primer',
    organization: 'Infosys Springboard',
    description: 'In-depth foundation covering machine learning paradigms, neural networks, computer vision concepts, and natural language processing basics.'
  },
  {
    id: 'infosys-data-science',
    category: 'Certifications',
    badge: 'INFOSYS SPRINGBOARD',
    title: 'Data Science Foundation',
    organization: 'Infosys Springboard',
    description: 'Covered data manipulation, exploratory data analysis, statistics, feature engineering, and predictive modeling using Python.'
  },
  {
    id: 'digilabs-python',
    category: 'Certifications',
    badge: 'DIGILABS',
    title: 'Python Level III',
    organization: 'Digilabs',
    description: 'Advanced Python certification demonstrating proficiency in object-oriented programming, data structures, algorithm optimization, and modular code architecture.'
  },
  {
    id: 'coursera-blockchain',
    category: 'Certifications',
    badge: 'COURSERA',
    title: 'Blockchain Basics',
    organization: 'Coursera',
    description: 'Certified foundational competency in blockchain technology, cryptographic protocols, decentralized transactions, and peer-to-peer network security.'
  },

  // Competitions & Hackathons
  {
    id: 'sih-hackathon',
    category: 'Competitions',
    badge: 'NATIONAL HACKATHON',
    title: 'Smart India Hackathon – Travel Management Portal',
    organization: 'Ministry of Education & AICTE',
    description: 'Designed and engineered a full-stack digital travel management solution focused on itinerary automation, resource tracking, and unified traveler experience.'
  },
  {
    id: 'techstars-pitch',
    category: 'Competitions',
    badge: 'STARTUP PITCH',
    title: 'Techstars Startup Weekend – Business Model Pitch',
    organization: 'Techstars',
    description: 'Formulated and pitched a high-impact technology startup business model, demonstrating product vision, market strategy, and software execution plan.'
  },

  // Innovation & Awards
  {
    id: 'ideathon-winner',
    category: 'Innovation & Awards',
    badge: '1ST PRIZE WINNER',
    title: 'Innovation Day & Ideathon Winner – AI-Based Training System',
    organization: 'Innovation Council',
    description: 'Secured 1st place for architecting an intelligent AI-driven adaptive training and skill-assessment system designed to enhance learning efficacy.'
  },
  {
    id: 'tech-support-award',
    category: 'Innovation & Awards',
    badge: 'EXCELLENCE AWARD',
    title: 'Best Technical Support Award',
    organization: 'Nandha Engineering College',
    year: '2024 – 2025',
    description: 'Honored with the Best Technical Support Award for demonstrating outstanding technical leadership, infrastructure maintenance, and peer guidance.'
  },
  {
    id: 'yuva-utsav-painting',
    category: 'Innovation & Awards',
    badge: 'DISTRICT AWARD',
    title: 'District Level Yuva Utsav 2023 – Second Prize in Painting',
    organization: 'District Youth Cultural Council',
    year: '2023',
    description: 'Awarded 2nd Prize at the district level for creative visual arts, highlighting design sensitivity, aesthetic perception, and creative expression.'
  },
  {
    id: 'meme-creation-award',
    category: 'Innovation & Awards',
    badge: '1ST PRIZE',
    title: 'First Prize – Meme Creation Event',
    organization: 'Nandha Engineering College',
    description: 'Won 1st prize for creative digital media and tech visual storytelling, blending humor, design, and contemporary tech culture.'
  },

  // Leadership
  {
    id: 'dept-secretary',
    category: 'Leadership',
    badge: 'DEPARTMENT LEADER',
    title: 'Department Secretary – AI & DS',
    organization: 'Nandha Engineering College',
    year: '2025 – 2026',
    description: 'Elected departmental leader heading student technical forums, workshops, coding symposia, and academic industry interactions.'
  },
  {
    id: 'trekking-secretary',
    category: 'Leadership',
    badge: 'CLUB SECRETARY',
    title: 'Secretary – College Trekking Club',
    organization: 'Nandha Engineering College',
    year: '2023 – 2024',
    description: 'Organized and led 5+ outdoor leadership expeditions, promoting physical discipline, team cohesion, and contributing to a 40% increase in club participation.'
  },
  {
    id: 'event-organizer',
    category: 'Leadership',
    badge: 'EVENT LEAD',
    title: 'Event Organizer',
    organization: 'College Technical & Cultural Events',
    year: '2023 – 2026',
    description: 'Successfully organized 5+ departmental and inter-college events, demonstrating leadership, stakeholder coordination, and end-to-end event management.'
  }
];
