export type ProcessStep = {
  stepNumber: string;
  title: string;
  description: string;
};

export const clientProcess: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Submit Your Inquiry",
    description: "The client tells us about their campaign, audience, target market, and operational requirements.",
  },
  {
    stepNumber: "02",
    title: "Discuss Your Campaign",
    description: "We contact the client to understand the campaign goals, target audience, qualification criteria, and timeline.",
  },
  {
    stepNumber: "03",
    title: "Receive Your Quote",
    description: "We prepare a clear, transparent quote structured around your campaign scope and preferred CPL or CPA model.",
  },
  {
    stepNumber: "04",
    title: "Campaign Approval",
    description: "The client reviews the proposed campaign framework, outreach guidelines, and terms to give final approval.",
  },
  {
    stepNumber: "05",
    title: "Campaign Setup",
    description: "Vertex Connect prepares the campaign infrastructure, call workflows, guidelines, and agent onboarding.",
  },
  {
    stepNumber: "06",
    title: "Campaign Launch",
    description: "Our trained agents begin executing the campaign according to the agreed schedule and operating protocols.",
  },
  {
    stepNumber: "07",
    title: "Reporting",
    description: "Daily or weekly reports are provided according to the campaign arrangement to ensure complete operational visibility.",
  },
];

// Flat array of titles for backwards compatibility with existing views
export const processSteps = clientProcess.map((step) => step.title);
