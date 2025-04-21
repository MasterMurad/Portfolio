export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl: string;
  image: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    icon: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type ThemeMode = 'light' | 'dark';