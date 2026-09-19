export const site = {
  name: "Agha Ahmed",
  shortName: "Agha Ahmed",
  title: "Automation Engineer",
  tagline:
    "Building scalable test automation for high-traffic travel platforms and enterprise applications — WebdriverIO, TypeScript, cross-browser CI/CD, and reliable regression at scale.",
  location: "Lahore, Pakistan",
  email: "aghaahmed512@gmail.com",
  phone: "+92 302 4116225",
  linkedin: "https://www.linkedin.com/in/agha-ahmed",
  github: "https://github.com/AghaAhmed512",
  profileImage: "/profile.png",
  logo: "/logo.svg",
  resumePath: "/resume.pdf",
  yearsExperience: "5",
} as const;

export const achievementStats = [
  { target: 5, suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "+", label: "Flaky Tests Stabilized" },
  { target: 5, suffix: "", label: "Enterprise Products" },
] as const;

export const clientEndorsement = {
  company: "KAYAK",
  companyLogo: "/logos/kayak.png",
  tenure: "3+ years on travel automation",
  quoteLead: "Dependable, productive automation engineer",
  quoteRest:
    "— experienced in cloud-powered tests, GTM tracking, and visual regression. Owns the automation suite, drove LambdaTest adoption, and brings meaningful value every day.",
  name: "Ramunas Klimavicius",
  title: "Director of Quality Management",
  highlights: [
    "LambdaTest adoption",
    "GTM & visual regression",
    "CI & flaky-test ownership",
    "Cross-team support",
  ],
} as const;

export const peerRecommendations = [
  {
    quote:
      "Great automation engineer — independent, proactive, and hard-working with little direction.",
    name: "Gabija Pokvytyte",
    title: "Quality Manager",
    company: "KAYAK",
    relation: "Managed Agha directly",
  },
  {
    quote:
      "Strong technical skills, takes ownership, and delivers high-quality work; grew quickly in automation and testing.",
    name: "Hassaan Ahmad Farooqi",
    title: "Principal Software Engineer",
    company: "Arbisoft",
    relation: "Managed Agha directly",
  },
] as const;

export const professionalSummary = [
  "Automation Engineer building enterprise-grade end-to-end frameworks for KAYAK, Momondo, HotelsCombined, Mundi, and HireStream using WebdriverIO and TypeScript.",
  "Strong in cross-browser testing (LambdaTest), Smart UI visual regression, CI/CD pipeline stability, API-driven test data, and migration from legacy stacks such as Protractor.",
  "Background in eLearning QA (including McKinsey Academy) and earlier Flutter mobile development at Ewig Life.",
] as const;

export const aboutMe = [
  "I started as a Junior App Developer at Ewig Life (2021–2022), building cross-platform mobile apps with Flutter and Dart for Android and iOS.",
  "At Arbisoft, I spent a year as an E-Learning Technical Developer focused on QA and testing — validating interactive modules for enterprise programs including McKinsey Academy across LMS and CMS platforms.",
  "Since June 2023, I have been an Automation Engineer at Arbisoft, scaling automation for high-traffic travel brands and HireStream’s ATS — stabilizing CI/CD, leading Protractor-to-WebdriverIO migration, and improving release confidence.",
  "I work closely with engineering, QA, and product teams to prevent production defects through stable, reusable automation and clear defect documentation in Jira.",
] as const;

export const experience = [
  {
    role: "Automation Engineer",
    company: "Arbisoft",
    location: "Lahore, Pakistan · Onsite",
    period: "Jun 2023 – Present",
    highlights: [
      "Building scalable test automation for KAYAK, Momondo, HotelsCombined, Mundi, and HireStream.",
      "Built and scaled enterprise end-to-end automation frameworks using WebdriverIO and TypeScript.",
      "Delivered HireStream ATS coverage: candidate management, job creation, forms, settings, and email-based workflows.",
      "Stabilized CI/CD by resolving 100+ flaky and quarantined tests through root-cause analysis.",
      "Introduced reusable automation utilities and optimized test architecture for faster regression runs.",
      "Implemented cross-browser strategy on LambdaTest (Chrome, Firefox, Edge, Safari on macOS and iOS).",
      "Introduced Smart UI visual regression testing to catch UI inconsistencies before production.",
      "Led migration of 50+ test cases from Protractor to WebdriverIO.",
      "Tracked quarantine metrics and build health across product areas; documented issues in Jira with clear reproduction steps.",
      "Collaborated with engineering to identify and prevent production-level defects via automated pipelines.",
    ],
  },
  {
    role: "E-Learning Technical Developer (QA & Testing)",
    company: "Arbisoft",
    location: "Lahore, Pakistan · Onsite",
    period: "Jun 2022 – May 2023",
    highlights: [
      "Performed functional and end-to-end QA on interactive eLearning modules for enterprise programs including McKinsey Academy.",
      "Validated learning workflows, navigation, and course functionality across LMS and CMS platforms.",
      "Identified, documented, and tracked defects through structured QA processes.",
      "Conducted UI and content validation for consistency, accessibility, and instructional alignment.",
      "Supported release testing and deployment validation across multiple learning environments.",
      "Collaborated with developers, instructional designers, and stakeholders on quality improvements.",
    ],
  },
  {
    role: "Junior App Developer",
    company: "Ewig Life",
    location: "Lahore, Pakistan · Onsite",
    period: "Feb 2021 – May 2022",
    technologies: ["Flutter", "Dart", "Android", "iOS"],
    highlights: [
      "Developed cross-platform mobile applications using Flutter and Dart.",
      "Implemented user authentication, API integrations, and real-time data handling.",
      "Collaborated with teams to build, test, and enhance app functionality and stability.",
    ],
  },
] as const;

export const projects = [
  {
    name: "HireStream",
    logo: "/logos/hirestream.svg",
    logoLightBg: true,
    logoWide: true,
    subtitle: "Enterprise ATS / HR Platform",
    description:
      "End-to-end test automation for core ATS workflows including candidate management, job applications, forms, and settings modules.",
    tech: ["WebdriverIO", "TypeScript", "API-driven test data", "Smart UI", "Jira"],
    highlights: [
      "Automated candidate creation, job creation, form submission, and settings modules (Locations, Departments, Core Values, Forms).",
      "Implemented API-driven test data setup to reduce execution time and improve reliability.",
      "Validated email-based workflows with automated email verification for form submissions.",
      "Performed CSV export validations for exported candidate data correctness.",
      "Maintained high test stability by fixing flaky tests and improving synchronization strategies.",
    ],
    impact: [
      "Improved regression reliability for HireStream's core HR workflows.",
      "Reduced manual testing effort through stable, reusable automation coverage.",
      "Helped identify multiple product-level issues early through automation.",
    ],
  },
  {
    name: "KAYAK",
    logo: "/logos/kayak.png",
    subtitle: "Travel Search Platform (KAYAK · Momondo · HotelsCombined)",
    description:
      "Automation for web-based travel search platforms — Flights, Cars, Hotels, Packages — with cross-browser coverage and localization testing.",
    tech: ["WebdriverIO", "TypeScript", "Chai", "LambdaTest", "GTM & Localization"],
    highlights: [
      "Built and maintained automation for Flights, Cars, Hotels, Packages, and related search flows.",
      "Added cross-browser coverage (Firefox, Edge, Safari, iOS) using LambdaTest.",
      "Used Chai assertions and custom helper methods for readability and reusability.",
      "Implemented GTM/converge tracking validation and localization coverage across brands and locales.",
      "Maintained cloud-based LambdaTest execution and contributed to cross-browser troubleshooting practices.",
      "Supported migration from Protractor to WebdriverIO and monitored scheduled builds for stability.",
    ],
    impact: [
      "Improved stability and reliability of daily smoke, sanity, and regression pipelines.",
      "Reduced false failures by identifying and fixing flaky tests.",
      "Helped identify multiple product-level issues early through automation.",
    ],
  },
  {
    name: "McKinsey",
    logo: "/logos/mckinsey.png",
    logoLightBg: true,
    logoWide: true,
    subtitle: "Enterprise eLearning · Digital Learning Programs",
    description:
      "Developed and validated interactive eLearning modules and digital learning experiences for enterprise professional learning programs across LMS platforms.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "QA Testing",
      "LMS",
      "CMS",
      "Content Validation",
    ],
    highlights: [
      "Developed and customized interactive eLearning modules and learning experiences.",
      "Performed functional testing and quality assurance of digital learning content.",
      "Validated course functionality, navigation flows, and learner experience.",
      "Reviewed content quality, consistency, and alignment with project requirements.",
      "Collaborated with instructional designers, developers, and stakeholders.",
      "Supported content publishing and delivery across LMS platforms.",
      "Identified and reported defects to ensure a smooth learning experience.",
    ],
    impact: [
      "Delivered high-quality digital learning experiences through rigorous testing and content validation.",
      "Improved content reliability and learner experience across learning programs.",
      "Contributed to successful delivery of professional learning solutions.",
    ],
  },
  {
    name: "Edly",
    logo: "/logos/edly.svg",
    subtitle: "Online Education · Learning Platforms",
    description:
      "Created and tested learning content for online education platforms, with end-to-end QA across LMS and CMS environments before release.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "LMS",
      "CMS",
      "QA Testing",
      "Content Management",
    ],
    highlights: [
      "Created and customized learning content for online education platforms.",
      "Performed end-to-end testing of courses and learning modules.",
      "Verified platform functionality across different learning environments.",
      "Conducted acceptance testing and quality validation before release.",
      "Reported, tracked, and verified issues to maintain content quality.",
      "Collaborated with content creators, developers, and project stakeholders.",
      "Ensured learning materials met functional and quality standards.",
    ],
    impact: [
      "Improved content quality and platform reliability through detailed testing.",
      "Supported successful delivery of learning solutions for end users.",
      "Helped maintain a consistent and engaging learning experience.",
    ],
  },
] as const;

export const skillGroups = [
  {
    category: "Programming languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    category: "Manual & automation testing",
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Functional / Regression / Smoke / Sanity Testing",
      "Defect Reporting & Bug Tracking",
      "WebdriverIO",
      "Selenium concepts",
      "API Testing",
      "UI Automation",
      "Cross-browser Testing",
      "Smart UI Visual Testing",
    ],
  },
  {
    category: "Frameworks & tools",
    skills: [
      "Node.js",
      "Chai",
      "Mocha",
      "Postman",
      "REST API testing",
      "Reusable test utilities",
      "Git",
      "GitHub",
      "Jira",
      "Agile / Scrum",
    ],
  },
  {
    category: "CI/CD & cloud exposure",
    skills: [
      "CI/CD pipelines",
      "GitHub Actions",
      "Jenkins basics",
      "Automated test execution",
      "AWS (basic)",
      "Docker (basic)",
      "LambdaTest",
    ],
  },
  {
    category: "Domains & development",
    skills: [
      "Travel platforms",
      "HR / ATS systems",
      "eLearning / LMS",
      "Flutter",
      "Dart",
      "Android",
      "iOS",
    ],
  },
] as const;

export const education = [
  {
    degree: "BS in Computer Science",
    school: "GC University Faisalabad (GCUF)",
    location: "Lahore, Pakistan",
    period: "Nov 2017 – Dec 2021",
    gpa: "GPA: 3.01 / 4.0",
    details: [
      "Relevant coursework: Data Structures & Algorithms, OOP, Database Systems, Software Engineering, Operating Systems, Computer Networks.",
      "GCUF Debating Society — debates, event coordination, and academic activities (~20 hours/week).",
    ],
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#recognition", label: "Endorsement" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
