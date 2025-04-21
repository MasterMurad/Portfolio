import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: "Backend Development",
    items: [
      { name: "C#", level: 90, icon: "csharp" },
      { name: ".NET Core", level: 85, icon: "dotnet" },
      { name: "ASP.NET Core", level: 80, icon: "dotnet" },
      { name: "Entity Framework", level: 75, icon: "database" },
      { name: "RESTful APIs", level: 80, icon: "api" }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", level: 85, icon: "html" },
      { name: "CSS", level: 80, icon: "css" },
      { name: "JavaScript", level: 75, icon: "javascript" },
      { name: "TypeScript", level: 70, icon: "typescript" },
      { name: "React", level: 70, icon: "react" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "SQL Server", level: 85, icon: "database" },
      { name: "Entity Framework", level: 80, icon: "database" },
      { name: "LINQ", level: 75, icon: "code" }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 80, icon: "git" },
      { name: "Visual Studio", level: 85, icon: "code" },
      { name: "VS Code", level: 80, icon: "code" },
      { name: "Azure DevOps", level: 70, icon: "cloud" }
    ]
  }
];