export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProfileInfo {
  name: string;
  role: string;
  tagline: string;
  age: number;
  location: string;
  education: string[];
  mission: string;
  vision: string;
  email: string;
  github: string;
  linkedin: string;
  skills: SkillCategory[];
}

export const profileData: ProfileInfo = {
  name: "Loïc Meurant",
  role: "Développeur Mobile & Architecte SaaS",
  tagline: "Construire un écosystème d'applications modulaires, utiles et scalables.",
  age: 23,
  location: "Mons, Belgique 🇧🇪",
  education: [
    "Sciences de gestion — UCLouvain Mons (Passerelle)",
    "Bachelier en Informatique de Gestion (Promsoc)"
  ],
  mission: "Construire aujourd'hui les outils que j'aimerais utiliser demain.",
  vision: "À la façon d'un écosystème modulaire à la Odoo, créer une suite d'applications interconnectées qui partagent données, services et identité visuelle pour simplifier le quotidien.",
  email: "loicmeurantpro@gmail.com",
  github: "https://github.com/AddNet22",
  linkedin: "https://linkedin.com",
  skills: [
    {
      title: "Frontend & Mobile",
      skills: ["Flutter & Dart", "React & TypeScript", "Tailwind CSS", "GetX / State Management", "UI/UX Design Responsive"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Supabase", "Firebase", "API REST", "PostgreSQL", "RLS & Security Policies"]
    },
    {
      title: "Architecture & Integrations",
      skills: ["Architecture Modulaire (Style Odoo)", "Stripe Monétisation & Abonnements", "Git & CI/CD GitHub Actions", "Google AdMob & Meta Audience"]
    }
  ]
};
