export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  targetAudience: string;
  status: string;
  badgeColor: string;
  privacyRoute: string;
  features: string[];
  techStack: string[];
  gradient: string;
}

export const projectsData: Project[] = [
  {
    id: "mycircle",
    name: "MyCircle",
    tagline: "Application communautaire de partage privé",
    description: "Un espace privé pour les familles, amis ou groupes afin de partager des activités, listes de courses, événements, documents et albums photos en toute sécurité.",
    targetAudience: "Familles, colocataires, groupes d'amis, associations",
    status: "Développement actif",
    badgeColor: "bg-[#6C63FF]/20 text-[#6C63FF] border-[#6C63FF]/30",
    privacyRoute: "/privacy/mycircle",
    features: [
      "Architecture modulaire dynamique inspirée d'Odoo",
      "Partage sécurisé de fichiers, photos et agendas",
      "Abonnements Premium & Monétisation SaaS via Stripe",
      "Cryptage des communications et stockage Supabase"
    ],
    techStack: ["Flutter", "React", "Supabase", "Stripe", "Firebase"],
    gradient: "from-[#6C63FF]/20 to-[#5A52D5]/10 border-[#6C63FF]/40"
  },
  {
    id: "easy2order",
    name: "Easy2Order (C'est ma tournée)",
    tagline: "Solution de commande rapide pour bars & événements",
    description: "Simplifie la gestion des commandes de boissons lors de soirées ou rassemblements. Permet de centraliser les choix et de calculer les totaux en temps réel sans erreurs.",
    targetAudience: "Clients d'établissements, gérants de bars et organisateurs d'événements",
    status: "Version Bêta",
    badgeColor: "bg-[#64FFDA]/20 text-[#64FFDA] border-[#64FFDA]/30",
    privacyRoute: "/privacy/cestmatournee",
    features: [
      "Prise de commande rapide et intuitive de boissons",
      "Calcul des prix et totaux en temps réel",
      "Respect strict de la vie privée sans collecte de données personnelles",
      "Monétisation non-intrusive avec Google AdMob"
    ],
    techStack: ["Flutter", "Supabase", "Firebase", "Google AdMob"],
    gradient: "from-[#64FFDA]/20 to-[#48BB78]/10 border-[#64FFDA]/40"
  },
  {
    id: "secretpartyfinder",
    name: "Secret Party Finder",
    tagline: "Découverte et partage d'événements exclusifs",
    description: "Application sociale permettant de découvrir, réserver et partager des événements privés ou exclusifs dans sa ville grâce à une carte interactive et des notifications ciblées.",
    targetAudience: "Jeunes adultes et étudiants à la recherche de soirées uniques",
    status: "En conception",
    badgeColor: "bg-[#FF6B6B]/20 text-[#FF6B6B] border-[#FF6B6B]/30",
    privacyRoute: "/privacy/secretpartyfinder",
    features: [
      "Carte interactive temps réel basée sur Google Maps API",
      "Système social d'invitations et de recommandations",
      "Notifications de proximité géolocalisées",
      "Gestion des billets et badges d'accès"
    ],
    techStack: ["Flutter", "Supabase", "Google Maps API", "Firebase"],
    gradient: "from-[#FF6B6B]/20 to-[#E53E3E]/10 border-[#FF6B6B]/40"
  }
];
