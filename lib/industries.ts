export type Industry = {
  slug: string;
  name: string;
  problem: string;
  support: string;
  services: string[];
};

export const industriesIntro =
  "Every business has different customers, challenges, and goals. Vertex Connect is built to adapt its communication solutions around the requirements of each campaign.";

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    problem:
      "Real estate teams frequently struggle with inconsistent prospect follow-up, lead qualification delays, and time spent on unvetted inquiries.",
    support:
      "Vertex Connect can support property firms and agents with lead qualification, follow-up calls, and appointment scheduling for buyer and seller opportunities.",
    services: ["Lead Generation", "Appointment Setting", "Outbound Calling"],
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    problem:
      "Online retailers need responsive customer assistance, order verification, and proactive outreach during peak demand periods.",
    support:
      "Vertex Connect can support e-commerce operations with responsive inbound inquiries, order support, and customer care workflows.",
    services: ["Inbound Calling", "Customer Support", "Outbound Calling"],
  },
  {
    slug: "technology",
    name: "Technology",
    problem:
      "Technology companies require structured pipeline development and early-stage prospect qualification without overburdening internal engineering or sales leaders.",
    support:
      "Vertex Connect can support tech providers through targeted outbound outreach, decision-maker discovery, and sales qualification calls.",
    services: ["Outbound Calling", "Lead Generation", "Appointment Setting"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    problem:
      "Healthcare and wellness organizations need respectful, confidential, and prompt communication for patient inquiries and scheduling.",
    support:
      "Vertex Connect can assist with responsive inbound call reception, appointment reminders, and courteous general support.",
    services: ["Inbound Calling", "Customer Support", "Appointment Setting"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    problem:
      "Financial service providers require clear, compliant, and professional customer engagement that instills trust and maintains privacy.",
    support:
      "Vertex Connect can assist with lead intake qualification, document submission follow-ups, and inbound customer assistance.",
    services: ["Lead Generation", "Inbound Calling", "Customer Support"],
  },
  {
    slug: "education",
    name: "Education",
    problem:
      "Educational institutions and training providers often manage seasonal spikes in student enrollment inquiries and course applications.",
    support:
      "Vertex Connect can handle prospective student inquiry calls, program information delivery, and admissions consultation bookings.",
    services: ["Inbound Calling", "Appointment Setting", "Lead Generation"],
  },
  {
    slug: "travel",
    name: "Travel & Hospitality",
    problem:
      "Travel companies require responsive booking assistance, customer support across time zones, and fast handling of itinerary questions.",
    support:
      "Vertex Connect can provide courteous inbound support, reservation confirmation calls, and post-travel feedback collection.",
    services: ["Inbound Calling", "Customer Support", "Cold Calling"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    problem:
      "Dealerships and automotive services struggle to follow up on test drive requests, service reminders, and finance inquiries consistently.",
    support:
      "Vertex Connect can assist automotive businesses with appointment setting for test drives, service follow-ups, and customer inquiries.",
    services: ["Appointment Setting", "Outbound Calling", "Customer Support"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    problem:
      "Consulting, legal, and accounting firms need discreet, polished outreach and meeting coordination with high-level corporate decision-makers.",
    support:
      "Vertex Connect can support professional service firms with tailored appointment setting, B2B lead generation, and client inquiry handling.",
    services: ["Appointment Setting", "Lead Generation", "Inbound Calling"],
  },
  {
    slug: "home-services",
    name: "Home Services",
    problem:
      "Contractors and home maintenance businesses often miss incoming inquiries while working on-site, losing jobs to responsive competitors.",
    support:
      "Vertex Connect can provide responsive inbound call answering, quote request capture, and appointment dispatch coordination.",
    services: ["Inbound Calling", "Appointment Setting", "Lead Generation"],
  },
  {
    slug: "saas",
    name: "SaaS",
    problem:
      "Software companies need consistent pipeline generation, demo booking, and prompt user onboarding support to maintain growth momentum.",
    support:
      "Vertex Connect can execute cold calling, outbound lead qualification, and product demo scheduling under performance-oriented CPL or CPA models.",
    services: ["Cold Calling", "Lead Generation", "Appointment Setting", "Sales & Telemarketing"],
  },
  {
    slug: "other-businesses",
    name: "Other Businesses",
    problem:
      "Every company has unique customer touchpoints, outreach targets, and operational challenges that require a flexible partner.",
    support:
      "Vertex Connect is built to design custom calling, sales, and support campaigns configured around your exact business requirements.",
    services: ["Outbound Calling", "Inbound Calling", "Customer Support", "Sales & Telemarketing"],
  },
];
