export const site = {
  name: "Agha Muhammad Ahmed Mehmood",
  shortName: "Agha Ahmed",
  title: "Software Automation Engineer",
  tagline:
    "Building reliable end-to-end automation for travel platforms and enterprise HR systems.",
  location: "Lahore, Pakistan",
  email: "aghaaahmed512@gmail.com",
  phone: "+92 302 4116225",
  linkedin: "https://www.linkedin.com/in/agha-ahmed",
  github: "https://github.com/AghaAhmed512",
  profileImage: "/profile.png",
  resumePath: "/resume.pdf",
  yearsExperience: "3+",
} as const;

export const profile = `Motivated Software Automation Engineer with 3+ years of experience delivering reliable, scalable end-to-end automation for both consumer-facing travel platforms (KAYAK, Momondo, HotelsCombined) and enterprise HR / ATS systems (HireStream). Strong expertise in WebdriverIO, TypeScript, JavaScript, cross-browser testing, CI build stability, and Smart UI visual regression testing. Known for improving test reliability, reducing manual effort, and collaborating closely with cross-functional teams.`;

export const experience = [
  {
    role: "Software Automation Engineer",
    company: "Arbisoft",
    location: "Lahore, Pakistan",
    period: "Dec 2022 – Present",
    highlights: [
      "Design, develop, and maintain scalable end-to-end automation frameworks using WebdriverIO, JavaScript, and TypeScript.",
      "Work across consumer-scale travel products and enterprise HR / ATS platforms.",
      "Execute cross-browser & cross-platform testing using LambdaTest (Chrome, Firefox, Edge, Safari, macOS, iOS).",
      "Implement Smart UI visual regression testing to catch unintended UI and layout changes.",
      "Monitor CI pipelines, analyze failures, identify flaky tests, and improve overall test stability.",
      "Create clear Jira tickets with reproduction steps, evidence, and expected vs actual behavior.",
      "Collaborate closely with developers, QAs, and product managers to align automation with business workflows.",
    ],
  },
  {
    role: "E-Learning Technical Developer / QA",
    company: "Arbisoft",
    location: "Lahore, Pakistan",
    period: "Jun 2022 – Dec 2022",
    highlights: [
      "Developed and customized interactive eLearning courses to meet specific client needs and learning goals.",
      "Reviewed and edited course content for clarity, consistency, and alignment with instructional design principles.",
      "Performed detailed acceptance testing and created comprehensive QA reports documenting bugs and improvements.",
      "Conducted quality assurance testing for eLearning courses on both LMS and CMS platforms.",
    ],
  },
] as const;

export const projects = [
  {
    name: "HireStream",
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
    name: "KAYAK Travel Ecosystem",
    subtitle: "KAYAK · Momondo · HotelsCombined",
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
