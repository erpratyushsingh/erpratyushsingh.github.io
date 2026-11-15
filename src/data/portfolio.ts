export interface Profile {
  name: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  yearsExperience: string;
  education: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  name: string;
  type: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export const profile: Profile = {
  name: "Pratyush Singh",
  role: "Technical Lead",
  headline: "Cloud & Solution Architecture | Azure, .NET & Microservices",
  summary:
    "I modernize enterprise software with cloud-native .NET, Azure, and event-driven architecture, building reliable systems and enabling teams to deliver at scale.",
  location: "Bengaluru, India",
  email: "erpratyushsingh08@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/pratzz/",
  githubUrl: "https://github.com/erpratyushsingh",
  yearsExperience: "8+",
  education: "B.E. in Information Technology - UIET, Panjab University",
};

export const experience: ExperienceItem[] = [
  {
    role: "Technical Lead",
    company: "KPMG India",
    period: "May 2026 - Present",
    location: "Bengaluru, India",
    highlights: [
      "Leading digital transformation for a global automotive leader, designing cloud-native solutions to improve production pipeline efficiency.",
      "Turning complex requirements into scalable technical architectures while partnering with cross-functional teams and mentoring engineers.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Meritech Software Pvt. Ltd.",
    period: "April 2022 - April 2026",
    location: "Mohali, Punjab, India",
    highlights: [
      "Led modernization of the Centra-SD platform, decomposing a monolith into .NET microservices on Microsoft Azure.",
      "Designed event-driven data flows with Kafka and Azure messaging, and built high-throughput telemetry pipelines with Event Hubs and MQTT.",
      "Improved platform resilience with AKS, Azure Key Vault, and asynchronous processing; recognized with a Certificate of Appreciation.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Meritech Software Pvt. Ltd.",
    period: "December 2019 - March 2022",
    location: "Mohali, Punjab, India",
    highlights: [
      "Built full-stack features and REST APIs for Centra-SD, a mobile network quality monitoring and analytics platform.",
      "Delivered network telemetry, device-management, and visualization capabilities; introduced micro-frontend patterns for more modular delivery.",
      "Optimized SQL Server and PostgreSQL workloads and contributed to AWS S3-backed data storage.",
    ],
  },
  {
    role: "Software Engineer",
    company: "PatientBond",
    period: "July 2018 - November 2019",
    location: "Mohali, Punjab, India",
    highlights: [
      "Delivered healthcare web application features across vFormity Moving, vFormity Sport, and the PB Integrated Dashboard.",
      "Built ASP.NET MVC and C# applications, REST and SOAP integrations, and responsive interfaces with HTML, CSS, Bootstrap, and jQuery.",
      "Improved SQL Server queries and stored procedures while supporting testing, troubleshooting, and production releases.",
    ],
  },
  {
    role: "Research and Development Intern",
    company: "Quark Software Inc.",
    period: "January 2018 - June 2018",
    location: "Mohali, Punjab, India",
    highlights: [
      "Contributed features to Quark XML Author, an enterprise tool for creating structured XML documentation.",
      "Built .NET and WPF functionality and XML/XSLT publishing workflows, including importing web content into structured documents.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "AngularJS",
      "JavaScript",
      "HTML5",
      "CSS",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    title: "Backend and APIs",
    skills: [
      ".NET 8",
      "C#",
      "ASP.NET Core",
      "ASP.NET MVC",
      "REST",
      "GraphQL",
      "SOAP",
      "Entity Framework",
      "LINQ",
    ],
  },
  {
    title: "Cloud and DevOps",
    skills: [
      "Microsoft Azure",
      "Azure Functions",
      "Azure Kubernetes Service",
      "Azure Event Hubs",
      "Azure Service Bus",
      "Azure Key Vault",
      "AWS S3",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Data",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "Cosmos DB",
      "Database Design",
      "Query Optimization",
      "SQL",
    ],
  },
  {
    title: "Architecture and Messaging",
    skills: [
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Apache Kafka",
      "MQTT",
      "System Design",
      "Cloud-Native Architecture",
      "Generative AI",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Agile / Scrum",
      "Technical Leadership",
      "Mentoring",
      "Performance Tuning",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Centra-SD",
    type: "Telecom · Network quality monitoring",
    description:
      "An enterprise mobile network quality platform for monitoring performance, managing distributed test devices, and analyzing network telemetry.",
    contributions: [
      "Helped modernize the monolith into cloud-native .NET microservices.",
      "Built event-driven ingestion and real-time device workflows for telecom and IoT data.",
    ],
    technologies: [
      ".NET",
      "Azure",
      "React",
      "Kafka",
      "Event Hubs",
      "MQTT",
      "PostgreSQL",
    ],
  },
  {
    name: "PatientBond platforms",
    type: "Healthcare · Digital engagement",
    description:
      "Enterprise healthcare applications supporting patient engagement, digital communication, analytics, and workflow automation.",
    contributions: [
      "Delivered features across vFormity Moving, vFormity Sport, and the PB Integrated Dashboard.",
      "Built application interfaces, service integrations, and SQL Server data operations.",
    ],
    technologies: [
      "ASP.NET MVC",
      "C#",
      "REST",
      "SOAP",
      "SQL Server",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    name: "Quark XML Author",
    type: "Enterprise content · XML publishing",
    description:
      "A desktop authoring platform used to create structured XML documentation and support enterprise publishing workflows.",
    contributions: [
      "Developed .NET and WPF product features and XML transformation workflows.",
      "Added web-content import and conversion into structured XML documents.",
    ],
    technologies: [".NET", "WPF", "XML", "XSLT"],
  },
];
