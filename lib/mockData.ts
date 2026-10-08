export const learnerProfile = {
  name: "Anurag Kumar",
  role: "Aspiring Data Analyst",
  earnings: 2450,
  tasksCompleted: 12,
  skills: [
    { name: "Python", level: 85 }, // Changed to percentages for progress bars
    { name: "SQL", level: 60 },
    { name: "Pandas", level: 90 },
    { name: "Machine Learning", level: 40 }
  ],
  passportId: "SF-2026-8901X",
  joinDate: "August 2026"
};

export const availableTasks = [
  {
    id: "TASK#4821",
    category: "Data Cleaning Pipeline",
    difficulty: "Intermediate",
    reward: 250,
    timeEstimate: "45 mins",
    skills: ["Python", "Pandas"],
    description: "Identify and remove duplicate customer records from a synthetic dataset of 5,000 entries.",
    matchScore: 92 // Advanced Feature: AI Match Score
  },
  {
    id: "TASK#4822",
    category: "SQL Query Optimization",
    difficulty: "Advanced",
    reward: 450,
    timeEstimate: "1.5 hours",
    skills: ["SQL", "Database Design"],
    description: "Optimize a slow-running JOIN query fetching data across 4 synthetic tables.",
    matchScore: 65
  }
];