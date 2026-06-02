export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  points: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "credosis",
    company: "CREDOSIS",
    role: "Frontend Developer (Part-Time | Remote)",
    period: "May 2026 - Present",
    description: "Contributing to the development of next-generation web applications, focusing on scalable architecture, seamless user experiences, and modern frontend technologies.",
    points: [
      "Building and maintaining responsive user interfaces using Next.js, React.js, TypeScript, and TailwindCSS.",
      "Optimizing application performance and state management to ensure fast load times and a seamless user experience.",
      "Collaborating on core features from the ground up, maintaining clean code standards, and minimizing external dependencies."
    ]
  },
  {
    id: "sed-tech",
    company: "SEDS TECH",
    role: "Full-Stack Developer (Intern)",
    period: "Nov 2025 - Jan 2026",
    description: "Contributed to full-stack web application development during an on-site internship in Dhaka, Bangladesh, focusing on robust architecture and seamless integration.",
    points: [
      "Developed and maintained full-stack functionalities, ensuring clean code delivery and optimal performance across the application layer.",
      "Collaborated closely with on-site development teams to implement features from database schema design to frontend presentation.",
      "Participated actively in agile sprints, code reviews, and system debugging to optimize platform reliability and user experience."
    ]
  },
  {
    id: "aiub-research",
    company: "AIUB",
    role: "Research Student",
    period: "Jun 2025 - Jan 2026",
    description: "Conducted academic research specializing in advanced algorithms, artificial intelligence, machine learning, data science, and Large Language Models (LLMs).",
    points: [
      "Completed my Thesis on Online, Randomized and Greedy Algorithms and their applications.",
      "Explored data science techniques and fine-tuned Large Language Models (LLMs) to enhance performance on specialized NLP tasks.",
      "Analyzed complex datasets and designed computational models, contributing to the academic evaluation of novel AI/ML solutions."
    ]
  }
];
