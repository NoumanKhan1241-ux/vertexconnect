export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  delivery: string[];
  process: string[];
  benefits: string[];
  tools: string[];
  qa: { question: string; answer: string }[];
  deliverables: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
};

export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  salary: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
};

export type Industry = {
  slug: string;
  name: string;
  problem: string;
  support: string;
  services: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type Testimonial = {
  quote: string;
  person: string;
  title: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const company = {
  name: "[COMPANY NAME]",
  shortName: "[SHORT NAME]",
  tagline: "[COMPANY TAGLINE]",
  description:
    "A professional telemarketing and BPO partner helping businesses improve outreach, conversion, and customer experience through thoughtful communication and measurable process design.",
  phone: "[PHONE NUMBER]",
  email: "[EMAIL ADDRESS]",
  address: "[OFFICE ADDRESS]",
  socialLinks: {
    linkedin: "#",
    facebook: "#",
    x: "#",
  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const heroStats: Stat[] = [
  { value: "XX+", label: "Clients" },
  { value: "XX%", label: "Customer Satisfaction" },
  { value: "XX+", label: "Calls Handled" },
  { value: "XX+", label: "Team Members" },
];

export const processSteps = [
  "Strategy",
  "Campaign Setup",
  "Team Deployment",
  "Execution",
  "Quality Monitoring",
  "Reporting",
  "Optimization",
];

export const qualityPillars = [
  {
    title: "Experienced Team",
    description:
      "Placeholder detail describing the value of a structured, trained team with strong communication and sales capability.",
  },
  {
    title: "Quality Assurance",
    description:
      "Placeholder detail explaining call monitoring, coaching, and consistent process oversight.",
  },
  {
    title: "Data-Driven Approach",
    description:
      "Placeholder detail emphasizing campaign tracking, insight review, and smarter performance decisions.",
  },
  {
    title: "Reliable Communication",
    description:
      "Placeholder detail describing proactive updates, visibility, and smooth client collaboration.",
  },
  {
    title: "Scalable Operations",
    description:
      "Placeholder detail covering volume-ready support and flexible campaign scaling.",
  },
  {
    title: "Client-Focused Strategy",
    description:
      "Placeholder detail focused on tailored outreach and business growth aligned to client goals.",
  },
];

export const services: Service[] = [
  {
    slug: "outbound-calling",
    title: "Outbound Calling",
    shortDescription: "Focused call programs designed to drive conversations, follow-ups, and conversions.",
    description:
      "Placeholder service description for outbound sales and outreach campaigns that require consistent, high-quality prospect engagement.",
    problem:
      "Many businesses struggle to maintain consistent outreach across larger prospect lists while keeping the experience professional and conversion-focused.",
    solution:
      "We create structured outbound calling programs that blend clear messaging, informed scripts, and disciplined follow-up workflows to support lead generation and pipeline growth.",
    delivery: [
      "Campaign planning and call flow design",
      "Script development and call monitoring",
      "Lead qualification and reporting",
      "Performance optimization and escalation support",
    ],
    process: [
      "Define target audience and buying criteria",
      "Build call structure and outreach messaging",
      "Deploy trained calling team",
      "Monitor performance and refine approach",
    ],
    benefits: [
      "More consistent lead engagement",
      "Improved outreach efficiency",
      "Stronger sales conversations",
      "Clearer pipeline visibility",
    ],
    tools: ["CRM platforms", "Call tracking tools", "Dialer systems", "Reporting dashboards"],
    deliverables: [
      "Outbound campaign plan",
      "Call scripts and QA checklist",
      "Live performance reporting",
      "Optimization recommendations",
    ],
    qa: [
      {
        question: "Is this service good for lead generation?",
        answer:
          "Yes, this is a placeholder answer explaining that outbound calling can be used for lead generation, follow-up, and pipeline development.",
      },
      {
        question: "Can the campaign be adjusted later?",
        answer:
          "Yes, placeholder guidance describing how scripts, audience lists, and reporting can evolve as campaign goals change.",
      },
    ],
  },
  {
    slug: "inbound-calling",
    title: "Inbound Calling",
    shortDescription: "Responsive inbound support for customer inquiries, sales, and service requests.",
    description:
      "Placeholder service overview for inbound teams that handle calls, questions, and conversion opportunities with a professional customer-first approach.",
    problem:
      "Businesses often lose opportunities when inbound calls are not handled quickly, clearly, or with a consistent customer experience.",
    solution:
      "We build inbound call workflows that combine responsive handling, accurate information, and conversion-focused support so prospects and customers feel heard and guided.",
    delivery: [
      "Call intake design",
      "Agent training and escalation paths",
      "Live customer support flow",
      "Call quality and conversion monitoring",
    ],
    process: [
      "Review call volume and common customer journeys",
      "Define inbound handling process and routing",
      "Train agents on calls and response protocols",
      "Track conversion and customer satisfaction signals",
    ],
    benefits: [
      "Better first-call resolution",
      "Improved customer care",
      "Higher conversion from inbound interest",
      "Consistent service quality",
    ],
    tools: ["VoIP systems", "Knowledge base tools", "Ticketing workflows", "Call analytics"],
    deliverables: [
      "Inbound process design",
      "Agent onboarding materials",
      "Performance reporting",
      "Escalation and resolution playbooks",
    ],
    qa: [
      {
        question: "What kinds of inbound calls can this support?",
        answer:
          "Placeholder answer explaining that inbound calling can support sales, service inquiries, appointment requests, and general customer assistance.",
      },
      {
        question: "How does quality stay consistent?",
        answer:
          "Placeholder answer describing monitoring, coaching, and SOPs that support a reliable customer experience.",
      },
    ],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    shortDescription: "Qualified prospect programs built to create a healthier pipeline and stronger sales conversations.",
    description:
      "Placeholder lead generation service description covering lead capture, qualification, and nurturing flows for sales teams and service-based businesses.",
    problem:
      "Without a clear lead qualification process, teams may waste time on low-fit prospects and miss the opportunities most worth pursuing.",
    solution:
      "We combine targeted outreach, qualification frameworks, and reporting to help businesses focus on high-potential opportunities and better allocate sales effort.",
    delivery: [
      "Audience targeting and qualification criteria",
      "Outreach sequencing and follow-up planning",
      "Lead scoring and review workflows",
      "Campaign reporting and optimization",
    ],
    process: [
      "Map the ideal customer profile",
      "Create structured qualification flow",
      "Launch outreach and data capture",
      "Review results and refine targeting",
    ],
    benefits: [
      "Stronger sales pipeline quality",
      "More efficient lead qualification",
      "Clearer sales handoff",
      "Improved campaign accountability",
    ],
    tools: ["Lead list management", "CRM tools", "Call tracking", "Automation workflows"],
    deliverables: [
      "Lead qualification framework",
      "Prospect reporting dashboard",
      "Outreach schedule",
      "Campaign optimization summary",
    ],
    qa: [
      {
        question: "Who is this best for?",
        answer:
          "Placeholder answer describing lead generation support for companies with growing demand, limited inside sales capacity, or a need for better lead prioritization.",
      },
      {
        question: "What does reporting include?",
        answer:
          "Placeholder answer explaining that reporting typically includes outreach volume, lead status, conversion indicators, and quality review notes.",
      },
    ],
  },
];

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    problem:
      "Lead follow-up and prospect nurturing can break down when teams have too many missed opportunities or inconsistent conversation quality.",
    support:
      "Telemarketing helps keep interest warm, support appointment booking, and maintain a consistent outreach process for new and existing prospects.",
    services: ["Lead Generation", "Appointment Setting", "Outbound Calling"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    problem:
      "Healthcare teams need professional communication without compromising trust, accuracy, and service quality.",
    support:
      "Telemarketing and BPO support can help with patient outreach, follow-up coordination, and information gathering in a carefully managed process.",
    services: ["Inbound Calling", "Customer Support", "Virtual Assistant Services"],
  },
  {
    slug: "technology",
    name: "Technology",
    problem:
      "Technology companies often need better pipeline development and early-stage qualification without creating a bloated internal sales process.",
    support:
      "Telemarketing can help with outbound engagement, meeting coordination, and lead qualification for software and services businesses.",
    services: ["B2B Outreach", "Lead Generation", "Sales & Telemarketing"],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "[TEAM MEMBER NAME]",
    role: "Operations Director",
    bio: "Placeholder bio describing the importance of thoughtful operations, scalable delivery, and strong client communication.",
  },
  {
    name: "[TEAM MEMBER NAME]",
    role: "Sales & Campaign Lead",
    bio: "Placeholder bio describing campaign planning, conversion strategy, and team coaching across high-volume call programs.",
  },
  {
    name: "[TEAM MEMBER NAME]",
    role: "Client Success Manager",
    bio: "Placeholder bio describing relationship management, reporting, and communication that keeps clients aligned and informed.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder testimonial describing how a client valued strong communication, reliable reporting, and a more organized campaign process.",
    person: "[CLIENT NAME]",
    title: "[ROLE / COMPANY]",
  },
  {
    quote:
      "Placeholder testimonial about improved outreach consistency, better lead management, and smooth collaboration with the support team.",
    person: "[CLIENT NAME]",
    title: "[ROLE / COMPANY]",
  },
  {
    quote:
      "Placeholder testimonial highlighting a more professional customer interaction experience and stronger visibility into campaign performance.",
    person: "[CLIENT NAME]",
    title: "[ROLE / COMPANY]",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What services do you provide?",
    answer:
      "Placeholder answer explaining that the company supports telemarketing, lead generation, inbound support, appointment setting, sales support, and related BPO functions.",
  },
  {
    question: "Can you support different industries?",
    answer:
      "Placeholder answer noting that campaigns and operational models can be tailored to different industries and customer types based on the business need.",
  },
  {
    question: "How quickly can a campaign launch?",
    answer:
      "Placeholder answer explaining that timing depends on planning, onboarding, data, and internal business requirements, but the process is structured to move efficiently.",
  },
  {
    question: "Do you offer custom workflows?",
    answer:
      "Placeholder answer describing the ability to tailor scripts, support routines, reporting, and team setup to the client’s goals.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "telemarketing-best-practices",
    category: "Telemarketing",
    title: "Telemarketing Best Practices for Better Lead Conversations",
    excerpt:
      "Placeholder article summary exploring how structure, clarity, and consistent follow-up can improve lead engagement and conversion quality.",
    date: "April 15, 2026",
    author: "[AUTHOR NAME]",
    readTime: "5 min read",
    content: [
      "Placeholder article paragraph one introducing the value of consistent messaging and a strong qualification process.",
      "Placeholder article paragraph two exploring how teams can improve conversations through better planning, script alignment, and performance tracking.",
      "Placeholder article paragraph three covering continuous optimization and quality review as a long-term strategy for better results.",
    ],
  },
  {
    slug: "quality-control-customer-support",
    category: "Customer Experience",
    title: "Why Quality Control Matters in Customer Support Operations",
    excerpt:
      "Placeholder article summary focusing on the importance of monitoring, coaching, and communication standards in support delivery.",
    date: "May 02, 2026",
    author: "[AUTHOR NAME]",
    readTime: "7 min read",
    content: [
      "Placeholder article paragraph one explaining why customer support quality depends on process clarity and performance review.",
      "Placeholder article paragraph two covering common support gaps and the role of coaching in building consistency.",
      "Placeholder article paragraph three describing how regular feedback loops improve customer trust and operational quality.",
    ],
  },
  {
    slug: "bpo-scaling-strategy",
    category: "BPO Strategy",
    title: "A Smarter Approach to Scaling BPO Operations",
    excerpt:
      "Placeholder article summary discussing how businesses can plan for growth while preserving communication quality and process control.",
    date: "June 11, 2026",
    author: "[AUTHOR NAME]",
    readTime: "6 min read",
    content: [
      "Placeholder article paragraph one introducing the need for clean planning when scaling operations.",
      "Placeholder article paragraph two covering team readiness, process design, and reporting discipline.",
      "Placeholder article paragraph three explaining how strong communication can support long-term successful growth.",
    ],
  },
];

export const jobs: Job[] = [
  {
    slug: "sales-agent",
    title: "Sales Agent",
    department: "Sales",
    location: "Remote",
    employmentType: "Full-Time",
    salary: "[SALARY RANGE]",
    summary:
      "Placeholder job summary for a sales agent role focused on outbound conversations, lead qualification, and conversion support.",
    responsibilities: [
      "Conduct phone-based outreach and qualify prospects",
      "Maintain call quality and customer communication standards",
      "Record outcomes and follow-up needs accurately",
    ],
    requirements: [
      "Strong communication and listening skills",
      "Comfortable working in a sales or contact environment",
    ],
    niceToHave: ["Experience in telemarketing or BPO operations"],
    benefits: ["Flexible working", "Supportive team", "Performance coaching"],
  },
  {
    slug: "customer-support-specialist",
    title: "Customer Support Specialist",
    department: "Customer Care",
    location: "Hybrid",
    employmentType: "Full-Time",
    salary: "[SALARY RANGE]",
    summary:
      "Placeholder role summary for a customer support specialist assisting with service inquiries, issue handling, and a professional customer experience.",
    responsibilities: [
      "Respond clearly and professionally to inbound customer inquiries",
      "Follow support process and escalation guidance",
    ],
    requirements: [
      "Friendly and patient communication style",
      "Comfortable handling customer issues and questions",
    ],
    niceToHave: ["Experience in customer support or service teams"],
    benefits: ["Team coaching", "Career growth", "Helpful work environment"],
  },
];

export const compareRows = [
  {
    label: "Response Time",
    ours: "Structured onboarding and responsive communication",
    others: "Slower coordination or inconsistent updates",
  },
  {
    label: "Quality Control",
    ours: "Monitoring, QA, and coaching framework",
    others: "Inconsistent checks or limited review",
  },
  {
    label: "Reporting",
    ours: "Clear performance visibility and campaign insight",
    others: "Limited or delayed reporting",
  },
];

export const companyStats = [
  { value: "XX+", label: "Clients" },
  { value: "XX%", label: "Customer Satisfaction" },
  { value: "XX+", label: "Calls Handled" },
  { value: "XX+", label: "Team Members" },
];
