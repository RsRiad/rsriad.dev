export interface PublicationItem {
  id: string;
  title: string;
  type: "Thesis" | "Conference";
  authors: string;
  isFirstAuthor: boolean;
  status?: string;
  venue: string;
  location: string;
  year: string;
  link: string;
  linkText: string;
  featured?: boolean;
}

export const publications: PublicationItem[] = [
  {
    id: "aiub-thesis",
    title: "Some Greedy and Randomized Algorithms for the Online Facility Assignment Problem with Competitive Ratio and Expected Cost",
    type: "Thesis",
    authors: "Md. Rawha Siddiqi Riad et al.",
    isFirstAuthor: true,
    venue: "AIUB: American International University-Bangladesh",
    location: "Dhaka, Bangladesh",
    year: "2026",
    link: "https://drive.google.com/file/d/1uL-50uKlLeIxaGP6eWB0KXaVL0OUfvTs/view?usp=sharing",
    linkText: "View Thesis (PDF)",
    featured: true,
  },
  {
    id: "isco-2026",
    title: "Expected Cost of Greedy Online Facility Assignment on Regular Polygons",
    type: "Conference",
    authors: "Md. Rawha Siddiqi Riad et al.",
    isFirstAuthor: true,
    status: "Accepted",
    venue: "ISCO 2026: 12th International Symposium on Combinatorial Optimization",
    location: "Kuşadası, Türkiye",
    year: "2026",
    link: "https://arxiv.org/abs/2512.00506",
    linkText: "arXiv Paper",
    featured: true,
  },
  {
    id: "qpain-2026-clustering",
    title: "Mapping the Landscape of Machine Learning Research through Clustering",
    type: "Conference",
    authors: "Md. Rawha Siddiqi Riad et al.",
    isFirstAuthor: true,
    status: "Accepted",
    venue: "QPAIN 2026: International Conference on Quantitative Problems in AI & Networks",
    location: "Chattogram, Bangladesh",
    year: "2026",
    link: "https://doi.org/10.1109/QPAIN69676.2026.11545567",
    linkText: "IEEE Xplore (DOI)",
    featured: false,
  },
  {
    id: "qpain-2026-ml-domain",
    title: "Scientific Paper Domain Prediction Using Classical Machine Learning Models",
    type: "Conference",
    authors: "Md. Rawha Siddiqi Riad et al.",
    isFirstAuthor: true,
    status: "Accepted",
    venue: "QPAIN 2026: International Conference on Quantitative Problems in AI & Networks",
    location: "Chattogram, Bangladesh",
    year: "2026",
    link: "https://doi.org/10.1109/QPAIN69676.2026.11546047",
    linkText: "IEEE Xplore (DOI)",
    featured: false,
  },
];
