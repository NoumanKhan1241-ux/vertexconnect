export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  salary?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
};

// Vertex Connect currently has no confirmed openings; do not create fake jobs.
export const jobs: Job[] = [];

export const careersEmptyState = {
  heading: "We're building our team.",
  subheading: "New opportunities will appear here as Vertex Connect grows.",
  description:
    "We are always interested in connecting with talented, driven communicators and operations specialists. Feel free to submit a general application below and our team will review your profile when relevant positions open.",
};
