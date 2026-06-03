export const site = {
  name: "Ahmed Mehmood",
  shortName: "Ahmed Mehmood",
  title: "QA Automation Engineer | DevOps Enthusiast",
  tagline:
    "Building reliable end-to-end automation frameworks, improving software quality, and expanding expertise in cloud infrastructure, CI/CD, and DevOps practices.",
  location: "Lahore, Pakistan",
  email: "aghaaahmed512@gmail.com",
  phone: "+92 302 4116225",
  linkedin: "https://www.linkedin.com/in/agha-ahmed",
  github: "https://github.com/AghaAhmed512",
  profileImage: "/profile.png",
  resumePath: "/resume.pdf",
  yearsExperience: "4",
} as const;

export const achievementStats = [
  { target: 4, suffix: "+", label: "Years Experience" },
  { target: 4, suffix: "", label: "Enterprise Products" },
  { target: 100, suffix: "+", label: "Automated Test Cases" },
] as const;

export const professionalSummary = [
  "QA Automation Engineer with 4 years of experience in enterprise test automation.",
  "Experienced in WebdriverIO, TypeScript, LambdaTest, CI/CD validation, and cross-browser testing across large-scale products including KAYAK and Hirestream.",
  "Additionally completed hands-on DevOps training involving AWS, Docker, Terraform, GitHub Actions, and Ansible while building personal cloud and development projects.",
] as const;

export const aboutMe = [
  "Started my career as an E-Learning Technical Developer / QA at Arbisoft.",
  "Transitioned into Software Automation where I worked on enterprise-scale platforms including KAYAK and Hirestream.",
  "Developed expertise in automation frameworks, cross-browser testing, CI/CD quality validation, and test reliability improvements.",
  "Recently expanded my skillset through hands-on DevOps training focused on AWS, Docker, Terraform, GitHub Actions, and Ansible.",
  "Outside of professional work, I enjoy building personal projects such as FinTrack to strengthen my development and DevOps capabilities.",
] as const;

export const experience = [
  {
    role: "QA Automation Engineer",
    company: "Arbisoft",
    location: "Lahore, Pakistan",
    period: "Dec 2022 – Jun 2026",
    highlights: [
      "Developed and maintained scalable end-to-end automation frameworks using WebdriverIO and TypeScript.",
      "Worked on enterprise travel platforms including KAYAK, Momondo, HotelsCombined, and Mundi.",
      "Performed cross-browser testing using LambdaTest across Chrome, Firefox, Edge, Safari, macOS, and iOS.",
      "Implemented Smart UI visual testing to detect layout and UI regressions.",
      "Monitored CI/CD pipelines and investigated build failures.",
      "Improved automation stability by identifying and fixing flaky tests.",
      "Collaborated closely with developers, product managers, and QA teams.",
    ],
  },
  {
    role: "E-Learning Technical Developer / QA",
    company: "Arbisoft",
    location: "Lahore, Pakistan",
    period: "Jun 2022 – Dec 2022",
    highlights: [
      "Developed and customized interactive e-learning content.",
      "Performed quality assurance testing for LMS and CMS platforms.",
      "Reviewed content quality and functionality.",
      "Created QA reports and validation documentation.",
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
      "Implemented GTM and localization testing across brands and locales.",
      "Supported migration from Protractor to WebdriverIO.",
      "Actively monitored scheduled builds and improved test stability.",
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
    category: "Automation & Testing",
    skills: [
      "End-to-End Testing",
      "Regression Testing",
      "Cross-Browser Testing",
      "Visual Regression (Smart UI)",
      "CI/CD Build Monitoring",
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: ["WebdriverIO", "Chai", "Mocha", "LambdaTest", "Smart UI", "Git", "Jira"],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript"],
  },
  {
    category: "Domains",
    skills: ["Travel Platforms", "HR / ATS Systems", "eLearning / LMS"],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "GC University Faisalabad (GCUF)",
    location: "Lahore, Pakistan",
    period: "Nov 2017 – Dec 2021",
  },
  {
    degree: "ICS (Intermediate in Computer Science)",
    school: "Islamia College Railway Road",
    location: "Lahore, Pakistan",
    period: "Jul 2015 – Sep 2017",
  },
  {
    degree: "Matriculation",
    school: "Shining Boys School",
    location: "Lahore, Pakistan",
    period: "Jul 2013 – Jul 2015",
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
