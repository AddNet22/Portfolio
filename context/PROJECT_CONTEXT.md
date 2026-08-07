# PROJECT_CONTEXT.md — Portfolio React & App Privacy Hub

## 🎯 Objectif Principal
Site web portfolio responsive et moderne pour un **Développeur Mobile & SaaS (Loïc Meurant)** basé à Mons, Belgique.
Le site sert de :
1. **Vitrine professionnelle** : Présentation du profil, des compétences, du parcours et de la vision long terme d'un écosystème modulaire d'applications.
2. **Showcase de projets** : Présentation détaillée de **MyCircle**, **Easy2Order / C'est ma tournée** et **Secret Party Finder**.
3. **Hub de Confidentialité & RGPD (Exigence App Store / Google Play)** : Politiques de confidentialité exhaustives et procédure obligatoire de suppression de compte pour chaque application.
4. **Hébergement AdMob / Audience Network `app-ads.txt`** : Fichier servi à la racine du domaine pour la validation des annonces Google AdMob et Facebook Meta.

---

## 🛠️ Stack Technique & Dépendances
- **Framework UI** : React 18 (TypeScript)
- **Bundler & Dev Server** : Vite
- **Styling** : Tailwind CSS v3 + CSS Variables custom (Glassmorphism & animations)
- **Routage** : React Router DOM v6 (HashRouter pour zéro 404 sur GitHub Pages)
- **Icônes** : Lucide React icons (`lucide-react`)
- **Déploiement** : GitHub Actions -> GitHub Pages (`AddNet22/Portfolio`)

---

## 🌐 Structure des Routes
- `/` : Page d'accueil (Hero, À propos, Projets, Contact)
- `/privacy` : Hub central de confidentialité & suppression de compte RGPD
- `/privacy/mycircle` : Politique de confidentialité MyCircle & procédure suppression
- `/privacy/cestmatournee` : Politique de confidentialité C'est ma tournée
- `/privacy/easy2order` : Politique de confidentialité Easy2Order
- `/privacy/secretpartyfinder` : Politique de confidentialité Secret Party Finder
