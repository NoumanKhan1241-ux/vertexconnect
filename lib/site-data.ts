export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
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

export type CompareRow = {
  label: string;
  ours: string;
  others: string;
};

// Re-export modular datasets
export * from "./company";
export * from "./services";
export * from "./process";
export * from "./principles";
export * from "./industries";
export * from "./faqs";
export * from "./jobs";
export * from "./blog";

// Main Navigation
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// Meaningful non-numerical brand statements (No fake numbers)
export const heroStats: Stat[] = [
  { value: "Global Reach", label: "Worldwide Service Availability" },
  { value: "Flexible Models", label: "CPL & CPA Campaigns" },
  { value: "Full-Service Calling", label: "Inbound & Outbound Solutions" },
  { value: "Business Focus", label: "Communication Built Around Your Goals" },
];

export const companyStats: Stat[] = heroStats;

// Authentic comparison factors
export const compareRows: CompareRow[] = [
  {
    label: "Campaign Alignment",
    ours: "Every campaign is built around your specific goals, audience, and qualification criteria.",
    others: "Pre-packaged, rigid calling approaches with limited client tailoring.",
  },
  {
    label: "Pricing Structure",
    ours: "Performance-oriented CPL (Cost Per Lead) & CPA (Cost Per Acquisition) models.",
    others: "Fixed long-term retainers with ambiguous return on investment.",
  },
  {
    label: "Reporting Transparency",
    ours: "Clear daily or weekly activity and disposition reporting so you always know what is happening.",
    others: "Delayed, high-level summaries with minimal detail on actual conversations.",
  },
  {
    label: "Execution Focus",
    ours: "Quality-focused execution with active monitoring, agent coaching, and brand voice alignment.",
    others: "High-churn calling without dedicated quality checks or continuous calibration.",
  },
];

// Empty arrays for fake-credibility sections (kept typed for future expansion)
export const teamMembers: TeamMember[] = [];
export const testimonials: Testimonial[] = [];
export const clientLogos: string[] = [];
