export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade: string;
  activities?: string;
  description: string;
  skills?: string[];
}

export const educations: EducationItem[] = [
  {
    id: "aiub",
    institution: "American International University-Bangladesh",
    degree: "BSc in Computer Science and Engineering",
    period: "2022 - 2026",
    grade: "CGPA 3.90/4.00",
    activities: "Academic Scholarship, Dean’s List Honors, Science Poster Presentation Champion, Programming Contest",
    description: "Awarded an academic scholarship and made the Dean’s List for my academic success. I won the Science Poster Presentation Championship and performed well in programming contests, showing my creativity, problem-solving ability, and coding skills. These achievements demonstrate my dedication, curiosity, and desire for both academic and personal growth.",
    skills: [
      "Problem Solving",
      "Front-End Development",
      "React.js",
      "Tailwind CSS",
      "JSON",
      "JavaScript",
      "GitHub",
      "Java",
      "C#",
      "Assembly Language",
      ".NET Framework",
      "ASP.NET Web API"
    ]
  },
  {
    id: "bcpsc",
    institution: "Bogura Cantonment Public School & College",
    degree: "Higher School Secondary, Science",
    period: "2018 - 2020",
    grade: "GPA 5.00/5.00",
    description: "College was a quieter phase in my journey. I mostly focused on my studies rather than extracurricular activities or sports, which allowed me to concentrate on my personal growth and academic development."
  },
  {
    id: "bzs",
    institution: "Bogra Zilla School, Bogra",
    degree: "SSC, Science",
    period: "2010 - 2018",
    grade: "GPA 5.00/5.00",
    activities: "Cricket, Football, cycling",
    description: "I attended Bogura Zilla School from 2010 to 2018. I got admitted after competing with 3,000 students in the entrance test. During my time there, I learned from some remarkable teachers and made friends with caring classmates. I gained valuable knowledge and experiences during my childhood and successfully completed my SSC in 2018."
  }
];
