export type Principle = {
  title: string;
  description: string;
  shortLabel?: string;
};

export const whyVertexConnect: Principle[] = [
  {
    title: "Conversations with Purpose",
    description: "Every call should have a clear purpose and contribute toward a meaningful business objective.",
  },
  {
    title: "Built Around Your Campaign",
    description: "Campaigns should be structured around the client's goals, audience, and requirements.",
  },
  {
    title: "Clear Communication",
    description: "Clients should always have a clear understanding of what is happening and what comes next.",
  },
  {
    title: "Flexible Engagement",
    description: "Different businesses have different requirements. Our approach is designed to adapt to the campaign.",
  },
  {
    title: "Quality-Focused Execution",
    description: "Focus on professional communication, campaign consistency, monitoring, and quality.",
  },
  {
    title: "Transparent Reporting",
    description: "Provide regular reporting so clients can understand campaign activity and progress.",
  },
  {
    title: "Global Outlook",
    description: "Based in Rawalpindi, Pakistan and built to work with businesses around the world.",
  },
];

// Alias for backwards compatibility with qualityPillars
export const qualityPillars = whyVertexConnect;
