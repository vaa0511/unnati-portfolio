export type ProfileKey = "lead" | "backend" | "manager" | "analytics";

export type PortfolioProfile = {
  label: string;
  eyebrow: string;
  headline: string;
  roles: string[];
  summary: string;
  about: string[];
  priorities: string[];
  experienceTitle: string;
  experiencePoints: string[];
};

export const basePortfolio = {
  name: "Unnati Mandaliya",
  initials: "UM",
  email: "unnatimandaliya511@gmail.com",
  phone: "+91 78744 15956",
  whatsapp: "917874415956",
  location: "India",
  linkedin: "https://www.linkedin.com/in/unnati-mandaliya/",
  availability: "Immediate Joiner",
  workPreference: "Remote, Hybrid & Relocation",
  years: "9+",
  resume: "/resume/unnatimandaliya_teamlead.pdf",
  skills: [
    {
      label: "Backend",
      items: ["PHP", "Laravel", "CakePHP", "CodeIgniter", "Node.js", "MVC"],
    },
    {
      label: "Frontend",
      items: ["Vue.js", "JavaScript", "jQuery", "AJAX", "HTML5", "CSS3", "Bootstrap"],
    },
    { label: "Database", items: ["MySQL", "Database Design", "Optimization"] },
    {
      label: "APIs",
      items: ["REST API Development", "Third-party Integrations"],
    },
    {
      label: "Tools",
      items: ["Git", "GitHub", "Bitbucket", "Jira", "Postman"],
    },
    {
      label: "Methods",
      items: ["Agile", "Scrum", "SDLC", "Team Leadership", "Client Communication"],
    },
    {
      label: "Data",
      items: ["Python", "Data Analysis", "Reporting", "Business Insights", "Dashboards"],
    },
  ],
  openRoles: [
    "Full Stack Developer",
    "Technical Team Lead",
    "Senior Laravel Developer",
    "Technical Project Manager",
    "Business Analyst",
    "Junior Data Analyst",
    "Data Analytics Trainee",
    "Operations Analyst",
  ],
  learningFocus: [
    "Python for analytics",
    "Business reporting",
    "Dashboard thinking",
    "Data-driven product decisions",
  ],
  experienceSummary: [
    { value: "9+", label: "Years in web development" },
    { value: "Full stack", label: "Laravel, Vue.js, APIs, MySQL" },
    { value: "Lead", label: "Teams, clients, sprints, delivery" },
  ],
  careerHighlights: [
    {
      title: "Full Stack Development",
      points: [
        "Built business web applications using PHP, Laravel, Vue.js, JavaScript, jQuery, AJAX, HTML, CSS, Bootstrap, and MySQL.",
        "Developed backend modules, frontend screens, admin panels, REST APIs, third-party integrations, and database-driven workflows.",
      ],
    },
    {
      title: "Technical Leadership",
      points: [
        "Led developers through task planning, sprint execution, code review, quality checks, releases, and production support.",
        "Converted client requirements into practical technical plans while balancing timelines, scope, risks, and maintainability.",
      ],
    },
    {
      title: "Project Delivery",
      points: [
        "Managed communication with clients and stakeholders across Agile/Scrum workflows, reporting, and delivery updates.",
        "Delivered solutions across FinTech, e-commerce, CRM, project management, automation, and reporting domains.",
      ],
    },
  ],
  projectSummary: [
    { value: "20+", label: "Successful deliveries" },
    { value: "4", label: "Core domains" },
    { value: "End-to-end", label: "Planning to release" },
  ],
  projects: [
    {
      title: "FinTech Platform",
      category: "Financial Technology",
      role: "Technical Lead",
      year: "Enterprise project",
      description:
        "Secure financial transactions, API integrations, admin dashboard, and user management.",
      impact:
        "Led architecture and delivery of secure transaction workflows, reporting, and role-based administration.",
      responsibilities: [
        "Designed secure transaction workflows and admin modules",
        "Integrated third-party financial APIs",
        "Guided code reviews, release planning, and team coordination",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "REST APIs"],
      liveUrl: "",
      repositoryUrl: "",
      tone: "blue",
    },
    {
      title: "E-commerce Platform",
      category: "Commerce",
      role: "Senior Full Stack Developer",
      year: "Production platform",
      description:
        "Product management, payment gateway integration, order tracking, and inventory management.",
      impact:
        "Built scalable order, payment, inventory, and fulfilment modules with third-party integrations.",
      responsibilities: [
        "Built product, cart, order, and inventory workflows across frontend and backend",
        "Integrated payment gateway and order tracking services",
        "Improved backend structure for maintainable feature delivery",
      ],
      technologies: ["Laravel", "Vue.js", "MySQL", "Payment APIs", "JavaScript"],
      liveUrl: "",
      repositoryUrl: "",
      tone: "purple",
    },
    {
      title: "CRM Solution",
      category: "Business Automation",
      role: "Technical Team Lead",
      year: "Business system",
      description:
        "Customer management, lead tracking, analytics dashboard, automation, and reporting.",
      impact:
        "Delivered centralized lead management and reporting workflows that improved sales visibility.",
      responsibilities: [
        "Converted client requirements into CRM modules",
        "Delivered lead tracking, dashboards, and reporting flows",
        "Coordinated sprint execution and client feedback cycles",
      ],
      technologies: ["PHP", "REST APIs", "MySQL", "AJAX"],
      liveUrl: "",
      repositoryUrl: "",
      tone: "cyan",
    },
    {
      title: "Project Management System",
      category: "Team Productivity",
      role: "Project Manager",
      year: "Internal operations",
      description:
        "Task allocation, team collaboration, progress tracking, and detailed reporting.",
      impact:
        "Coordinated requirements and delivery for sprint planning, workload tracking, and project reporting.",
      responsibilities: [
        "Managed project scope, priorities, and delivery timelines",
        "Defined task allocation and progress reporting workflows",
        "Aligned developers, QA, and stakeholders through Agile ceremonies",
      ],
      technologies: ["Laravel", "Jira", "Agile", "Reporting"],
      liveUrl: "",
      repositoryUrl: "",
      tone: "orange",
    },
  ],
  achievements: [
    { value: "9+", label: "Years of professional experience" },
    { value: "Full stack", label: "PHP, Laravel, Vue.js, APIs and MySQL" },
    { value: "Led", label: "Multiple successful project deliveries" },
    { value: "Managed", label: "Cross-functional development teams" },
    { value: "Improved", label: "Workflows and delivery efficiency" },
  ],
  certifications: [
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      issuer: "Udemy",
      year: "2026",
      credentialUrl: "https://www.udemy.com/certificate/UC-4b08a1eb-4517-4968-a696-c363b40b3429/",
    },
    {
      title: "Leadership Skills",
      issuer: "Coursera",
      year: "2025",
      credentialUrl: "https://coursera.org/share/d6741e2abb8561845f18f5d78886fc0a",
    },
    {
      title: "Crash Course on Python",
      issuer: "Coursera",
      year: "2025",
      credentialUrl: "https://coursera.org/share/0021a1a9bbe236eef959154702647e30",
    },
    {
      title: "Google AI Essentials",
      issuer: "Coursera",
      year: "2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/X460FK0H1TKZ",
    },
    {
      title: "Foundations of Project Management",
      issuer: "Coursera",
      year: "2022",
      credentialUrl: "https://coursera.org/share/1491193433e143fc318cf31bfee516d7",
    },
  ],
};

export const profiles: Record<ProfileKey, PortfolioProfile> = {
  lead: {
    label: "Full Stack Lead",
    eyebrow: "Hello, I'm",
    headline: "Full Stack Developer",
    roles: ["PHP Laravel Developer", "Vue.js Developer", "Technical Team Lead"],
    summary:
      "I build full-stack web applications with PHP, Laravel, Vue.js, JavaScript, MySQL, and REST APIs while bringing strong technical leadership and delivery experience.",
    about: [
      "I am a Full Stack Developer and Technical Team Lead with 9+ years of experience in software development and project delivery. I specialize in PHP, Laravel, Vue.js, JavaScript, MySQL, REST APIs, team leadership, and secure, scalable web applications.",
      "I turn business ideas into dependable digital products across backend, frontend, database, integrations, and delivery while keeping quality, timelines, communication, and customer outcomes in focus.",
    ],
    priorities: [
      "Full-stack development",
      "Vue.js",
      "PHP",
      "Laravel",
      "Team leadership",
      "System architecture",
    ],
    experienceTitle: "Full Stack Developer & Technical Lead",
    experiencePoints: [
      "Build full-stack web applications using PHP, Laravel, Vue.js, JavaScript, and MySQL",
      "Develop frontend screens, backend modules, REST APIs, and third-party integrations",
      "Gather and analyze client requirements",
      "Plan sprints and allocate work",
      "Review code and maintain quality",
      "Make system design and architecture decisions",
      "Lead and mentor development teams",
    ],
  },
  backend: {
    label: "Technical Team Lead",
    eyebrow: "Full-stack engineering profile",
    headline: "",
    roles: ["Full Stack Developer", "API & Integration Specialist", "Technical Team Lead"],
    summary:
      "I design maintainable Laravel systems, Vue.js interfaces, robust REST APIs, and data-driven products built for usability, security, performance, and scale.",
    about: [
      "I am a senior full-stack engineer with deep experience across PHP, Laravel, Vue.js, JavaScript, MySQL, REST APIs, third-party integrations, and modern delivery practices.",
      "My work combines hands-on development with frontend implementation, backend architecture, code review, performance tuning, and practical technical leadership.",
    ],
    priorities: ["PHP", "Laravel", "Vue.js", "JavaScript", "REST APIs", "MySQL"],
    experienceTitle: "Senior Full Stack Developer",
    experiencePoints: [
      "Design scalable Laravel applications",
      "Build Vue.js and JavaScript-based frontend features",
      "Build secure REST APIs and integrations",
      "Optimize MySQL queries and data models",
      "Review code and establish standards",
      "Translate requirements into technical plans",
    ],
  },
  manager: {
    label: "Project Manager",
    eyebrow: "Delivery leadership profile",
    headline: "Technical Project Manager",
    roles: ["Agile Delivery Lead", "Client & Team Management"],
    summary:
      "I align clients, product goals, and engineering teams to deliver complex software projects with clarity, quality, and momentum.",
    about: [
      "I combine a strong software engineering background with project planning, stakeholder communication, delivery governance, and team leadership.",
      "I am comfortable owning requirements, schedules, risks, sprint execution, client reporting, and the practical decisions that keep delivery moving.",
    ],
    priorities: [
      "Project delivery",
      "Agile",
      "Stakeholder management",
      "Risk management",
    ],
    experienceTitle: "Technical Project Manager",
    experiencePoints: [
      "Own project scope, planning, and execution",
      "Facilitate Agile ceremonies and reporting",
      "Manage client and stakeholder communication",
      "Track risks, dependencies, and timelines",
      "Coordinate cross-functional delivery teams",
      "Improve workflows and delivery predictability",
    ],
  },
  analytics: {
    label: "Data & Analytics",
    eyebrow: "Open to growth roles",
    headline: "Data Analytics Learner",
    roles: ["Business Analyst", "Operations Analyst", "Technical Project Manager"],
    summary:
      "I am expanding into data analytics with Python, reporting, and business insight skills, backed by 9+ years of experience understanding systems, clients, workflows, and delivery outcomes.",
    about: [
      "I am open to data analytics, business analyst, and operations analyst roles where my software delivery background helps me understand requirements, systems, data flows, and stakeholder needs quickly.",
      "My current learning focus includes Python for data analysis, business reporting, dashboards, and turning operational information into practical decisions.",
    ],
    priorities: [
      "Python",
      "Data analysis",
      "Business reporting",
      "Process improvement",
      "Stakeholder communication",
    ],
    experienceTitle: "Data Analytics & Business Insight",
    experiencePoints: [
      "Analyze business workflows and reporting needs",
      "Understand product, customer, and operational data flows",
      "Use Python learning to support analysis and automation",
      "Translate stakeholder questions into measurable insights",
      "Connect technical systems with business decisions",
      "Adapt quickly across product, delivery, and data-focused roles",
    ],
  },
};
