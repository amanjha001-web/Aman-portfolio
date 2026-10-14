export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive, reusable user interfaces.",
    skills: [
      { name: "HTML5", level: "Proficient" },
      { name: "CSS3", level: "Proficient" },
      { name: "JavaScript", level: "Proficient" },
      { name: "React", level: "Proficient" },
      { name: "Redux Toolkit", level: "Working knowledge" },
      { name: "Context API", level: "Working knowledge" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "React Router", level: "Working knowledge" },
      { name: "React Hook Form", level: "Working knowledge" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Developing APIs and connecting applications to data.",
    skills: [
      { name: "Node.js", level: "Working knowledge" },
      { name: "Express.js", level: "Working knowledge" },
      { name: "MongoDB", level: "Working knowledge" },
      { name: "Mongoose", level: "Working knowledge" },
      { name: "REST APIs", level: "Working knowledge" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Tools used for development, debugging, and collaboration.",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "Postman", level: "Proficient" },
      { name: "VS Code", level: "Daily use" },
    ],
  },
];

export const skills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.id,
  })),
);

export default skillCategories;
