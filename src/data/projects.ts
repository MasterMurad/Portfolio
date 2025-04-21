import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    title: "Inventory Management System",
    description: "A full-stack inventory management application built with ASP.NET Core and React. Features include product tracking, order management, and reporting dashboards.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework", "React", "TypeScript"],
    githubUrl: "https://github.com/yourusername/inventory-management",
    image: "https://images.pexels.com/photos/7654048/pexels-photo-7654048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "2",
    title: "Task Management API",
    description: "A RESTful API for task management built with .NET 6. Features include user authentication, task CRUD operations, and team collaboration.",
    technologies: ["C#", ".NET 6", "ASP.NET Core", "Entity Framework", "SQL Server", "JWT Authentication"],
    githubUrl: "https://github.com/yourusername/task-api",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description: "An e-commerce website with product catalog, shopping cart, user accounts, and payment processing integration.",
    technologies: ["C#", "ASP.NET MVC", "SQL Server", "Entity Framework", "JavaScript", "Bootstrap"],
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather data and forecasts for multiple locations using external weather APIs.",
    technologies: ["C#", ".NET Core", "Blazor", "REST API", "JavaScript"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];