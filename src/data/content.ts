import { SolutionCategory, CaseStudy, ExecutionStep, SpecialistChip, FAQItem } from '../types';

export const HERO_CONTENT = {
  headline: "The Future Doesn't Build Itself.",
  subline: "It's built by those who refuse to wait.",
  statement: "Behind every ambitious business is the ability to align the right strategy, technology, specialists, and execution. That's what Univens exists to orchestrate.",
  heroImage: "/src/assets/images/univens_hero_light_1786634598979.jpg"
};

export const CLIENT_CHIPS = [
  { name: "Spruce Lifeskills", sector: "Education", location: "Nagpur, IN", website: "www.sprucelifeskills.com" },
  { name: "Zesh Agency", sector: "Agency", location: "Pune, IN", website: "www.zeshagency.com" }
];

export const ABOUT_CONTENT = {
  headline: "Ambition rarely stops at the idea.",
  paragraphs: [
    "A new product needs technology. A growing business needs systems. A new market needs execution. A transformation needs people who can make it happen.",
    "The requirement changes with the objective. Univens brings together the expertise, technology, and execution required to move that objective forward.",
    "We connect businesses with the right capabilities to turn strategic intent into working reality."
  ]
};

export const SOLUTIONS: SolutionCategory[] = [
  {
    id: "digital-infrastructure",
    number: "01",
    title: "Digital Infrastructure",
    description: "The systems businesses need to operate, communicate, acquire customers, and scale.",
    items: [
      "Business websites",
      "Digital platforms",
      "Learning Management Systems",
      "CRM systems",
      "Business portals",
      "Digital operational infrastructure"
    ],
    icon: "Server"
  },
  {
    id: "product-development",
    number: "02",
    title: "Product Development",
    description: "From business requirements to functional digital products.",
    items: [
      "Web applications",
      "SaaS products",
      "Custom platforms",
      "APIs and integrations",
      "Product development",
      "Technical implementation"
    ],
    icon: "Code2"
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI & Automation",
    description: "Applying AI and automation where they can improve how a business works.",
    items: [
      "Workflow automation",
      "AI-enabled processes",
      "Intelligent business systems",
      "Applied AI solutions",
      "Process optimisation"
    ],
    icon: "Cpu"
  },
  {
    id: "iot-robotics",
    number: "04",
    title: "IoT & Robotics",
    description: "Connecting software, hardware, and intelligent systems to solve real operational and industrial problems.",
    items: [
      "IoT solutions",
      "Connected systems",
      "Robotics",
      "Industrial automation",
      "Embedded technology solutions"
    ],
    icon: "Bot"
  },
  {
    id: "marketing-systems",
    number: "05",
    title: "Marketing Systems",
    description: "Building the systems and execution required to support sustainable digital growth.",
    items: [
      "SEO",
      "Digital marketing",
      "Brand systems",
      "Campaign execution",
      "Marketing infrastructure"
    ],
    icon: "TrendingUp"
  },
  {
    id: "strategic-execution",
    number: "06",
    title: "Strategic Execution",
    description: "Bringing the right specialists and capabilities together around one business objective.",
    items: [
      "Technology consulting",
      "Execution planning",
      "Specialist coordination",
      "Implementation support",
      "Ongoing execution"
    ],
    icon: "Compass"
  }
];

export const HOW_WE_WORK_STEPS: ExecutionStep[] = [
  {
    step: 1,
    title: "Share the objective",
    description: "Tell us what you're trying to build, improve, launch, automate, or scale. That's where every engagement starts."
  },
  {
    step: 2,
    title: "Map what it takes",
    description: "We assess what the objective really requires — technology, systems, specialists, and execution — and what you may already have in place."
  },
  {
    step: 3,
    title: "Assemble the team",
    description: "Specialists are brought in around the objective, never around a package. The right combination moves it forward."
  },
  {
    step: 4,
    title: "Execute together",
    description: "Project-based or ongoing monthly execution, working alongside your internal team, consultants, or partners. You keep the decisions."
  }
];

export const ENGAGEMENT_MODELS = [
  { title: "Project-based", desc: "Targeted milestones & fixed-deliverable technology deployments." },
  { title: "Ongoing monthly", desc: "Dedicated execution velocity and continuous technical evolution." },
  { title: "White-label partner", desc: "Reliable technical backing for agencies and strategy consultants." },
  { title: "Alongside your team", desc: "Direct integration into your existing operational workflows." }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "spruce-lifeskills",
    fileNumber: "File 01 / 03",
    client: "Spruce Lifeskills",
    status: "Active Deployment",
    sector: "Education & EdTech",
    location: "Nagpur, IN",
    website: "www.sprucelifeskills.com",
    engagement: "MoM + Revenue Sharing",
    challenge: "Spruce Lifeskills operated through decentralised, manual workflows across learning delivery, student progress tracking, administration, and partner institution onboarding.",
    univensRole: "Long-term technology and strategic execution partner, centralising operations into a unified digital ecosystem and building scalable IT infrastructure.",
    tags: ["LMS Platform", "CRM Integration", "Centralised Operations", "IT Infrastructure", "HR Systems", "Partnership Portal"],
    quote: "From technology infrastructure to recruitment and partnerships, this engagement extends beyond a single service because our objective required an end-to-end execution team.",
    image: "/src/assets/images/spruce_light_case_1786634615844.jpg",
    logoIcon: "GraduationCap",
    brandColor: "from-emerald-500 to-teal-600",
    impactStat: "+320%",
    impactLabel: "Operational Efficiency & Student Throughput"
  },
  {
    id: "zesh-agency",
    fileNumber: "File 02 / 03",
    client: "Zesh Agency",
    status: "Active Technical Partner",
    sector: "Creative & Digital Agency",
    location: "Pune, IN",
    website: "www.zeshagency.com",
    engagement: "Ongoing MoM Retainer",
    challenge: "Zesh Agency executes high-tier creative and digital marketing campaigns, but client requirements routinely demanded complex backend engineering and custom web application infrastructure.",
    univensRole: "Dedicated IT execution engine, serving as the technical delivery backbone for Zesh's high-scale client engagements.",
    tags: ["Headless CMS", "Next.js 14", "WordPress Engine", "Custom APIs", "Performance Tuning"],
    quote: "Zesh focuses on strategic brand relationships and creative excellence. Univens provides the robust engineering horsepower to execute them reliably.",
    image: "/src/assets/images/zesh_light_case_1786634626897.jpg",
    logoIcon: "Boxes",
    brandColor: "from-blue-500 to-indigo-600",
    impactStat: "100%",
    impactLabel: "On-Time Technical Delivery Rate"
  },
  {
    id: "aether-automation",
    fileNumber: "File 03 / 03",
    client: "Aether Industrial AI",
    status: "Completed & Handed Over",
    sector: "Enterprise AI & Automation",
    location: "Bengaluru, IN",
    website: "www.aether-ai.io",
    engagement: "Project-Based Scale Sprint",
    challenge: "Aether required automated pipeline orchestrators to digest industrial IoT sensor data and deliver real-time predictive maintenance insights for multi-site factories.",
    univensRole: "Architected high-throughput MQTT broker integration, real-time Gemini LLM anomaly classification, and responsive telemetry dashboards.",
    tags: ["IoT Telemetry", "Gemini 2.5 Pro", "Real-Time MQTT", "React Dashboard", "Edge Compute"],
    quote: "Univens assembled the exact cross-disciplinary squad needed to bridge hardware telemetry with generative AI analytics in under 6 weeks.",
    image: "/src/assets/images/univens_hero_light_1786634598979.jpg",
    logoIcon: "Cpu",
    brandColor: "from-teal-500 to-emerald-600",
    impactStat: "1.2ms",
    impactLabel: "Edge Processing & Anomaly Alert Latency"
  }
];

export const SPECIALIST_CHIPS: SpecialistChip[] = [
  {
    id: "it-developers",
    title: "IT & Full-Stack Developers",
    description: "Full-stack web & mobile engineers, cloud architects, resilient API endpoints & distributed backend systems builders.",
    icon: "Code",
    stackTags: ["React / Next.js", "Node.js / Express", "PostgreSQL / Redis", "AWS & Cloud Run"],
    badgeText: "Dev Ops & Cloud",
    gradient: "from-emerald-500 to-teal-600",
    logoBadges: ["React", "TypeScript", "NodeJS", "Docker", "AWS"]
  },
  {
    id: "ai-specialists",
    title: "AI & LLM Engineers",
    description: "Applied Machine Learning, Gemini & OpenAI LLM orchestrations, RAG pipelines, agentic workflows & computer vision.",
    icon: "Sparkles",
    stackTags: ["Gemini 2.5 Pro", "LangChain / LlamaIndex", "Vector DBs (Pinecone)", "Python / PyTorch"],
    badgeText: "AI & Neural Systems",
    gradient: "from-blue-500 to-indigo-600",
    logoBadges: ["Gemini", "Python", "PyTorch", "TensorFlow", "LangChain"]
  },
  {
    id: "ui-ux-designers",
    title: "UI/UX & Product Designers",
    description: "Interface architects crafting high-converting design systems, micro-interactions, and frictionless user journeys.",
    icon: "Layout",
    stackTags: ["Figma Systems", "Tailwind CSS", "Framer / Motion", "User Testing & Wireframes"],
    badgeText: "Design Systems",
    gradient: "from-teal-500 to-emerald-600",
    logoBadges: ["Figma", "Tailwind", "Framer", "Adobe XD"]
  },
  {
    id: "iot-robotics",
    title: "IoT & Robotics Engineers",
    description: "Embedded hardware, connected sensor telemetry, microcontrollers, MQTT brokers & industrial automation.",
    icon: "Cpu",
    stackTags: ["C++ / Embedded", "MQTT Telemetry", "ESP32 & Raspberry Pi", "Edge Compute"],
    badgeText: "Hardware & Edge",
    gradient: "from-cyan-500 to-blue-600",
    logoBadges: ["Arduino", "RaspberryPi", "MQTT", "C++", "Cisco"]
  },
  {
    id: "digital-marketers",
    title: "Digital Growth & Marketers",
    description: "Performance acquisition, technical SEO engines, conversion rate optimization & multi-channel attribution.",
    icon: "Target",
    stackTags: ["Google Analytics 4", "SEO Engineering", "Meta & Ads API", "Funnel Automation"],
    badgeText: "Growth Engine",
    gradient: "from-emerald-600 to-green-600",
    logoBadges: ["GA4", "MetaAds", "HubSpot", "Semrush"]
  },
  {
    id: "product-specialists",
    title: "Product Strategists",
    description: "Agile roadmap direction, feature prioritization, technical scoping, KPI tracking & rapid release cycles.",
    icon: "Layers",
    stackTags: ["Linear / Jira", "Agile Sprints", "Product Specs", "Data Analytics"],
    badgeText: "Roadmap & Strategy",
    gradient: "from-indigo-500 to-purple-600",
    logoBadges: ["Linear", "Jira", "Mixpanel", "Notion"]
  },
  {
    id: "content-strategists",
    title: "Technical Content & Docs",
    description: "Brand storytelling, developer documentation, API spec guides, copy architecture & technical messaging.",
    icon: "FileText",
    stackTags: ["API Documentation", "MDX / Docusaurus", "Technical Whitepapers", "Copywriting"],
    badgeText: "Docs & Copy",
    gradient: "from-teal-600 to-cyan-600",
    logoBadges: ["MDX", "GitBook", "Docusaurus", "Markdown"]
  },
  {
    id: "business-ops",
    title: "Business Ops & Workflows",
    description: "Process auditing, enterprise system integrations, automated operational workflows & ERP alignment.",
    icon: "Briefcase",
    stackTags: ["Zapier / Make", "Salesforce / CRM", "ERP Integrations", "Workflow Audit"],
    badgeText: "Enterprise Ops",
    gradient: "from-emerald-600 to-blue-600",
    logoBadges: ["Zapier", "Salesforce", "Make", "Airtable"]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "What exactly does Univens do?",
    answer: "Univens helps businesses turn strategic objectives into execution by bringing together the technology, specialists, systems, and capabilities required to achieve them.",
    category: "Overview"
  },
  {
    id: 2,
    question: "Is Univens a technology company or a growth agency?",
    answer: "Univens operates at the intersection of strategy and execution. We provide technology, digital infrastructure, product development, AI, automation, IoT, robotics, marketing systems, and specialised execution based on what the business objective requires.",
    category: "Overview"
  },
  {
    id: 3,
    question: "Do you work with existing internal teams?",
    answer: "Yes. Univens can work alongside internal teams, consultants, agencies, or other specialists. The engagement model is structured around the existing business environment.",
    category: "Engagement"
  },
  {
    id: 4,
    question: "Can you work as a technical partner for another agency or consultant?",
    answer: "Yes. We can operate as a technical execution partner, including white-label and ongoing engagement models, while the existing partner retains its client relationship.",
    category: "Engagement"
  },
  {
    id: 5,
    question: "Do you only work on individual projects?",
    answer: "No. Our engagements can include project-based implementation as well as ongoing monthly execution and strategic support.",
    category: "Engagement"
  },
  {
    id: 6,
    question: "How do you decide which specialists are involved?",
    answer: "The team is assembled according to the business objective, technical requirements, and scope of the engagement. We do not force every requirement into a fixed team structure.",
    category: "Capabilities"
  },
  {
    id: 7,
    question: "What technologies do you work with?",
    answer: "Our technology capabilities include platforms and frameworks such as WordPress, Next.js, Headless CMS architectures, AI systems, automation technologies, IoT, robotics, and related digital infrastructure. The technology choice depends on the requirements of the business.",
    category: "Tech Stack"
  },
  {
    id: 8,
    question: "Do you work with startups and growing businesses?",
    answer: "Yes. Univens works with startups, growing businesses, institutions, consultants, agencies, and leadership teams that require additional execution capability.",
    category: "Clients"
  }
];

export const CONTACT_INFO = {
  phone: "+91 91727 25217",
  web: "www.univens.in",
  email: "hello@univens.in",
  locations: ["Nagpur, IN", "Pune, IN"]
};
