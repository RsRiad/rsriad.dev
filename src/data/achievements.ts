export interface AchievementItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
  tag?: string;
}

export const achievements: AchievementItem[] = [
  {
    id: 1,
    title: "Science Poster Presentation Champion",
    issuer: "American International University-Bangladesh",
    date: "2024",
    imageSrc: "https://ik.imagekit.io/glowaura/physics%202%20Poster.png",
    tag: "Competition",
  },
  {
    id: 2,
    title: "Academic Scholarship Recipient",
    issuer: "American International University-Bangladesh",
    date: "2022 - 2026",
    imageSrc: "https://ik.imagekit.io/glowaura/physics%202%20Poster.png",
    tag: "Scholarship",
  },
  {
    id: 3,
    title: "Dean's List Honors",
    issuer: "American International University-Bangladesh",
    date: "2022 - 2026",
    imageSrc: "https://ik.imagekit.io/glowaura/physics%202%20Poster.png",
    tag: "Academic",
  },
  {
    id: 4,
    title: "Programming Contest Finalist",
    issuer: "American International University-Bangladesh",
    date: "2023",
    imageSrc: "https://ik.imagekit.io/glowaura/physics%202%20Poster.png",
    tag: "Competition",
  },
  {
    id: 5,
    title: "Certified Full Stack Developer",
    issuer: "Software Engineering Credential",
    date: "2025",
    imageSrc: "https://ik.imagekit.io/glowaura/physics%202%20Poster.png",
    tag: "Certification",
  },
];
