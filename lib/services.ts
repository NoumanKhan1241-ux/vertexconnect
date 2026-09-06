export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  approach: string[];
  process: string[];
  benefits: string[];
  reporting: string[];
  tools: string[];
  qa: { question: string; answer: string }[];
  deliverables: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "outbound-calling",
    title: "Outbound Calling",
    shortDescription: "Targeted outreach programs designed to start conversations, re-engage prospects, and support business development.",
    description:
      "Vertex Connect provides professional outbound calling solutions that help businesses initiate meaningful conversations with targeted prospects, follow up on opportunities, and build reliable pipeline momentum.",
    problem:
      "Consistent outbound outreach requires dedicated calling agents, structured messaging, and disciplined follow-up schedules. When handled ad-hoc, sales teams lose time, lead follow-ups lapse, and market reach remains limited.",
    solution:
      "We design and execute custom outbound calling campaigns tailored to your specific audience criteria, market proposition, and conversion goals, ensuring each interaction is professional, purposeful, and brand-aligned.",
    approach: [
      "Audience segmentation and prospect list validation",
      "Purpose-driven call structures and conversational guidelines",
      "Trained communication agents focused on active listening and qualification",
      "Systematic disposition tracking and timely follow-up scheduling",
    ],
    process: [
      "Campaign briefing & target profile definition",
      "Call framework, FAQs, and value proposition calibration",
      "Agent training and simulated roleplay sessions",
      "Outreach execution across scheduled calling windows",
      "Call logging, qualification tagging, and disposition review",
      "Regular reporting delivery and campaign performance alignment",
    ],
    benefits: [
      "Consistent, structured outbound sales coverage",
      "Direct market feedback and prospect response clarity",
      "More qualified conversations for your internal team",
      "Scalable outreach capacity without internal overhead",
    ],
    reporting: [
      "Total outreach volume and connect rates",
      "Call disposition breakdown (interested, callback requested, not a fit)",
      "Qualified prospect handoff logs and follow-up notes",
      "Scheduled campaign reviews (daily or weekly summaries)",
    ],
    tools: ["CRM integration", "Call logging systems", "Lead disposition dashboards"],
    deliverables: [
      "Campaign outreach structure and call guides",
      "Verified prospect disposition records",
      "Scheduled activity reporting (daily or weekly)",
      "Campaign refinement recommendations",
    ],
    qa: [
      {
        question: "Can our internal scripts and brand tone be used?",
        answer:
          "Yes. We align call guidelines and conversation flows directly with your brand tone, customer guidelines, and specific campaign requirements.",
      },
      {
        question: "What pricing models apply to outbound calling?",
        answer:
          "Vertex Connect operates primarily using CPL (Cost Per Lead) or CPA (Cost Per Acquisition) campaign structures depending on the project scope and qualification criteria.",
      },
      {
        question: "How frequently do we receive campaign reports?",
        answer:
          "Reporting can be delivered daily or weekly based on your preferred arrangement, giving you complete visibility into call activity and outcomes.",
      },
    ],
    icon: "PhoneOutgoing",
  },
  {
    slug: "inbound-calling",
    title: "Inbound Calling",
    shortDescription: "Responsive, professional inbound call handling for customer inquiries, lead capture, and service requests.",
    description:
      "Vertex Connect manages inbound call handling to ensure that prospective buyers and existing customers always reach a courteous, knowledgeable, and responsive representative.",
    problem:
      "Unanswered calls, long hold times, and hurried customer handling damage brand credibility and waste valuable marketing spend. Customers who cannot reach a live representative often turn immediately to competitors.",
    solution:
      "We provide prompt, courteous inbound support teams trained on your product guidelines, qualification criteria, and escalation workflows so every inbound opportunity is captured and handled with care.",
    approach: [
      "Dedicated response protocols tailored to your customer journey",
      "Knowledge base onboarding and comprehensive FAQ training",
      "Accurate inquiry classification, lead capture, and issue resolution",
      "Clear escalation pathways for complex inquiries",
    ],
    process: [
      "Inbound call flow mapping and routing setup",
      "Brand voice, FAQ, and response script onboarding",
      "Representative calibration and quality testing",
      "Live call queue coverage across agreed operating hours",
      "Detailed call recording, outcome tagging, and notes",
      "Regular call review and resolution tracking",
    ],
    benefits: [
      "Zero missed inbound inquiries or prospective leads",
      "Professional brand representation on every call",
      "Higher first-contact resolution rates",
      "Immediate inquiry logging and CRM synchronization",
    ],
    reporting: [
      "Inbound call volume and answer rate metrics",
      "Inquiry category breakdowns (sales inquiries, service requests, general)",
      "First-call resolution and escalation tracking",
      "Regular activity summaries and quality monitoring notes",
    ],
    tools: ["VoIP telephony", "CRM ticket sync", "Inbound queue routing"],
    deliverables: [
      "Inbound call handling SOP documentation",
      "Inquiry logging and capture reports",
      "Performance and volume summaries",
      "Ongoing quality assurance logs",
    ],
    qa: [
      {
        question: "Can you handle both sales inquiries and customer care calls?",
        answer:
          "Yes. Inbound calling can be configured for lead capture, appointment booking, order status updates, or general customer support according to your workflow.",
      },
      {
        question: "How are urgent calls or complex issues escalated?",
        answer:
          "During setup, we define clear escalation rules so critical issues or specialized questions are routed immediately to your designated team members.",
      },
      {
        question: "How is agent quality monitored?",
        answer:
          "We implement structured quality monitoring and call review routines to maintain consistency, accuracy, and professional courtesy.",
      },
    ],
    icon: "PhoneIncoming",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    shortDescription: "Structured prospect identification and qualification programs built to feed your sales pipeline with verified interest.",
    description:
      "Vertex Connect helps B2B and B2C organizations generate qualified sales opportunities through systematic outreach, criteria validation, and performance-based campaign models.",
    problem:
      "Sales teams spend too many hours reaching out to poorly targeted contacts, chasing unverified lists, or talking to non-decision makers, which drives up customer acquisition costs and stalls revenue growth.",
    solution:
      "We design targeted lead generation campaigns that identify prospective buyers, evaluate their current interest and fit, and deliver qualified leads under transparent CPL (Cost Per Lead) or CPA (Cost Per Acquisition) models.",
    approach: [
      "Strict Ideal Customer Profile (ICP) alignment and qualification criteria",
      "Multi-touch phone and follow-up outreach workflows",
      "Discipline-focused qualification rather than superficial contact collection",
      "Prompt handoff of verified lead information to your sales workflow",
    ],
    process: [
      "Campaign discovery: defining qualified lead criteria and parameters",
      "Target list curation or client database verification",
      "Outreach execution and multi-attempt contact sequences",
      "In-depth lead qualification conversation and data confirmation",
      "Real-time lead verification and handoff delivery",
      "Reporting review and targeting refinement",
    ],
    benefits: [
      "Healthier sales pipeline packed with verified decision-makers",
      "Risk-aligned commercial models (CPL & CPA)",
      "Increased sales team efficiency focused on closing instead of prospecting",
      "Predictable and scalable opportunity generation",
    ],
    reporting: [
      "Delivered qualified lead logs with complete contact & qualification data",
      "Prospect engagement ratios and qualification pass rates",
      "Campaign efficiency benchmarks and cost-per-lead tracking",
      "Regular lead review summaries",
    ],
    tools: ["Lead validation databases", "CRM integration", "Campaign tracking dashboards"],
    deliverables: [
      "Agreed Lead Qualification Framework (LQF)",
      "Verified lead delivery records",
      "Campaign performance reports",
      "Audience optimization insights",
    ],
    qa: [
      {
        question: "How do you define a qualified lead?",
        answer:
          "Qualification criteria are customized together with you during the campaign setup phase, covering parameters such as role, authority, specific business need, and purchase intent.",
      },
      {
        question: "What is your pricing structure for lead generation?",
        answer:
          "We operate using performance-focused CPL (Cost Per Lead) and CPA (Cost Per Acquisition) campaign structures. Pricing is quoted based on audience difficulty and qualification criteria.",
      },
      {
        question: "Can we review lead details before approving them?",
        answer:
          "Yes. Every lead is documented with agreed qualification criteria and verification notes for transparent client review.",
      },
    ],
    icon: "Target",
  },
  {
    slug: "appointment-setting",
    title: "Appointment Setting",
    shortDescription: "High-conversion scheduling services that place qualified prospects directly onto your sales team's calendar.",
    description:
      "Vertex Connect connects with verified prospects, verifies their purchasing interest, and books confirmed sales meetings directly onto your account executives' calendars.",
    problem:
      "Even when interest exists, coordinating schedules, navigating gatekeepers, and securing confirmed meeting times consumes immense sales bandwidth and often ends in no-shows.",
    solution:
      "Our specialized appointment setters initiate the dialogue, qualify prospect fit against your criteria, manage calendar coordination, and send confirmation reminders to maximize attendance rates.",
    approach: [
      "Qualification-first booking to ensure sales reps only meet valid prospects",
      "Direct integration with your team's calendar and booking workflows",
      "Professional meeting confirmation protocols to reduce cancellation rates",
      "Rescheduling coordination when prospect availability shifts",
    ],
    process: [
      "Calendar integration and sales team availability alignment",
      "Target criteria, objection handling, and booking script design",
      "Targeted prospect outreach and appointment pitching",
      "Live qualification verification and meeting booking",
      "Calendar invite transmission and confirmation follow-up",
      "Show-up rate tracking and pipeline reporting",
    ],
    benefits: [
      "Sales calendars consistently filled with ready-to-talk prospects",
      "Substantially reduced meeting no-show rates",
      "Accelerated sales velocity and deal cycle progression",
      "Clear attribution under CPL or CPA campaign models",
    ],
    reporting: [
      "Booked meeting log with prospect profiles and qualification notes",
      "Meeting confirmation and attendance tracking",
      "Outreach to appointment conversion percentages",
      "Weekly booking summary and schedule projections",
    ],
    tools: ["Calendly / calendar sync", "CRM integration", "Confirmation notification workflows"],
    deliverables: [
      "Confirmed calendar appointments with complete prospect profiles",
      "Appointment qualification checklists",
      "Daily/weekly meeting summary reports",
      "Show-up and reschedule tracking logs",
    ],
    qa: [
      {
        question: "How do appointments get added to our calendars?",
        answer:
          "We integrate directly with your scheduling links or calendar software (Google Calendar, Outlook, Calendly, etc.) so bookings appear instantly in your schedule.",
      },
      {
        question: "What happens if a prospect does not attend the scheduled meeting?",
        answer:
          "We track attendance closely and initiate polite rescheduling follow-ups to get interested prospects back onto your calendar.",
      },
      {
        question: "What qualification standards are applied prior to booking?",
        answer:
          "Meetings are only scheduled once prospects satisfy your agreed criteria, ensuring your team only spends time with relevant decision-makers.",
      },
    ],
    icon: "CalendarCheck",
  },
  {
    slug: "cold-calling",
    title: "Cold Calling",
    shortDescription: "Direct, respectful, and objective-driven outbound phone outreach to introduce your offerings to new prospective buyers.",
    description:
      "Vertex Connect conducts professional cold calling campaigns focused on purposeful conversations, identifying pain points, and uncovering genuine interest without aggressive or spammy tactics.",
    problem:
      "Cold outreach often fails due to generic scripts, unprepared callers, and high rejection burnout. Without conversational expertise and resilience, businesses miss vast segments of potential buyers.",
    solution:
      "We replace scripted robotic calls with structured, consultative conversations that respect the prospect's time, present clear value, and discover real business requirements.",
    approach: [
      "Value-first opening propositions that capture attention immediately",
      "Constructive objection management that guides conversations naturally",
      "Professional conversational pacing and empathetic listening",
      "Compliance-conscious calling practices and data hygiene",
    ],
    process: [
      "Offer analysis and ideal prospect persona review",
      "Conversation framework and objection response map development",
      "Calling team training and pronunciation/tone calibration",
      "Execution across targeted business hours and geographical zones",
      "Detailed disposition tagging and prospect interest documentation",
      "Daily progress review and message iteration",
    ],
    benefits: [
      "Direct market penetration into previously untapped accounts",
      "Immediate, real-world customer feedback on your value proposition",
      "Polite, respectful brand representation on every contact",
      "Performance transparency with clear metrics and reporting",
    ],
    reporting: [
      "Dial counts, connect numbers, and reach rates",
      "Conversation disposition categorization",
      "Identified prospect interest and follow-up timelines",
      "Comprehensive weekly campaign activity summaries",
    ],
    tools: ["Outbound dialer workflows", "Disposition tagging platforms", "Performance tracking"],
    deliverables: [
      "Cold calling playbook and objection cheat-sheets",
      "Full disposition logs and verified prospect notes",
      "Daily/weekly activity reports",
      "Market feedback and objection insights",
    ],
    qa: [
      {
        question: "How do your callers handle objections?",
        answer:
          "Our callers use respectful, consultative objection-handling frameworks that address prospect concerns thoughtfully rather than relying on high-pressure tactics.",
      },
      {
        question: "Can we supply our own calling list or do you build one?",
        answer:
          "We can work with your existing target list or help structure campaign audience criteria depending on your requirements.",
      },
      {
        question: "How do you maintain brand reputation during cold calls?",
        answer:
          "Every conversation is conducted with courtesy, professionalism, and respect for the prospect's time, safeguarding your brand reputation in the market.",
      },
    ],
    icon: "PhoneCall",
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    shortDescription: "Dependable customer care and issue resolution that safeguards your brand reputation and builds customer loyalty.",
    description:
      "Vertex Connect provides reliable customer support solutions tailored to B2B and B2C businesses that require responsive, empathetic, and organized customer service across phone and digital channels.",
    problem:
      "Slow support response times, inconsistent answers, and unresolved issues lead to customer churn, negative public reviews, and heavy operational stress on core internal teams.",
    solution:
      "We supply dedicated and shared support agents trained in your workflows, standard operating procedures (SOPs), and product knowledge to resolve customer questions quickly and accurately.",
    approach: [
      "Empathetic, clear, and patient customer communication",
      "Rigorous adherence to your brand guidelines and support SOPs",
      "Systematic ticket management, escalation pathways, and status updates",
      "Ongoing quality assurance and customer experience auditing",
    ],
    process: [
      "Support workflow, SLA definition, and ticketing tool onboarding",
      "Knowledge base compilation, FAQ mapping, and response guidelines",
      "Agent training and simulation on common and edge-case scenarios",
      "Live support queue coverage and inquiry resolution",
      "Quality assurance scoring and ticket auditing",
      "Regular reporting on ticket volume, resolution times, and customer trends",
    ],
    benefits: [
      "Consistent, professional support availability for your customers",
      "Faster resolution times and lower support backlog",
      "Protection of customer retention and brand reputation",
      "Scalable support capacity that grows alongside your business",
    ],
    reporting: [
      "Handled inquiry volume and average handle/response times",
      "Categorization of support issues and escalation frequencies",
      "Resolution rates and customer satisfaction feedback indicators",
      "Weekly operational summary and knowledge base improvement suggestions",
    ],
    tools: ["Ticketing systems (Zendesk, Freshdesk, etc.)", "Knowledge bases", "CRM tools"],
    deliverables: [
      "Customer support standard operating procedures",
      "Ticket logs and resolution documentation",
      "Weekly support performance reports",
      "Customer sentiment and recurring issue insights",
    ],
    qa: [
      {
        question: "Which channels can your customer support team handle?",
        answer:
          "We specialize in phone-based voice support and can also integrate with your ticketing, email, and live messaging workflows as required by your campaign.",
      },
      {
        question: "How do you learn our product or service details?",
        answer:
          "We conduct an onboarding and documentation phase where our team reviews your product materials, FAQs, common questions, and escalation procedures.",
      },
      {
        question: "Can support hours be customized to our timezone?",
        answer:
          "Yes. We support businesses worldwide and configure coverage hours according to your target market and operational needs.",
      },
    ],
    icon: "Headset",
  },
  {
    slug: "sales-telemarketing",
    title: "Sales & Telemarketing",
    shortDescription: "End-to-end telemarketing and direct sales execution designed to present offers, nurture prospects, and drive acquisitions.",
    description:
      "Vertex Connect delivers comprehensive sales and telemarketing campaigns focused on presenting your offers persuasively, following up persistently, and generating measurable customer acquisitions.",
    problem:
      "Converting prospects into paying customers requires strong sales communication, disciplined follow-through, and performance accountability that many internal teams lack the capacity to execute consistently.",
    solution:
      "We provide trained sales communicators who understand value-based selling, objection handling, and transaction closing, operating under transparent CPL and CPA campaign arrangements.",
    approach: [
      "Consultative sales conversations that focus on real customer needs",
      "Performance-aligned execution models (CPL & CPA)",
      "Strict compliance with sales regulations and disclosure requirements",
      "Continuous pitch refinement based on live conversion data",
    ],
    process: [
      "Value proposition, offer mechanics, and target market review",
      "Sales script, objection responses, and compliance guideline development",
      "Sales agent training, product certification, and pitch practice",
      "Campaign rollout with disciplined outreach and follow-up loops",
      "Conversion tracking, transaction validation, and disposition logging",
      "Daily and weekly reporting on conversion metrics and sales milestones",
    ],
    benefits: [
      "Performance-driven sales execution tied to verified leads or acquisitions",
      "Direct boost in sales pipeline and customer acquisition capacity",
      "Professional sales representatives representing your brand values",
      "Complete visibility into every campaign metric and outcome",
    ],
    reporting: [
      "Acquisition and conversion volume logs",
      "Cost Per Acquisition (CPA) and Cost Per Lead (CPL) performance data",
      "Sales conversation disposition breakdowns",
      "Detailed periodic sales activity and revenue contribution reports",
    ],
    tools: ["Sales CRM platforms", "Call recording & QA systems", "Transaction tracking"],
    deliverables: [
      "Telemarketing playbooks and sales call guides",
      "Verified acquisition and lead records",
      "Comprehensive daily/weekly sales reporting",
      "Conversion optimization recommendations",
    ],
    qa: [
      {
        question: "How do CPL and CPA models work for sales campaigns?",
        answer:
          "In a CPL arrangement you pay per qualified lead generated, while in a CPA arrangement compensation aligns with verified customer acquisitions or agreed sales milestones.",
      },
      {
        question: "How is sales quality and compliance ensured?",
        answer:
          "We maintain structured call monitoring, quality checklists, and transparent reporting to ensure every sale is conducted ethically, accurately, and professionally.",
      },
      {
        question: "Can campaigns scale up after initial validation?",
        answer:
          "Yes. Our flexible campaign structure allows businesses to begin with a defined test phase and scale outreach volume once conversion benchmarks are established.",
      },
    ],
    icon: "TrendingUp",
  },
];
