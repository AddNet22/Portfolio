# APP_STYLE.md — Charte Graphique & UI System (React + Tailwind CSS)

## 🎨 Palette de Couleurs (Dark Cyberpunk / Steam Modern)

- **Fond Principal (Background)** : `#0A192F` (Deep Navy Dark)
- **Fond de Carte (Card Surface)** : `#112240` (Navy Dark Surface)
- **Accent Cyan Néon (Primary)** : `#64FFDA` (Emerald Cyan Glow)
- **Accent Indigo/Violet (Secondary)** : `#6C63FF` (Deep Electric Indigo)
- **Accent Rose/Rouge (Alert/Delete)** : `#FF6B6B` (Soft Coral Red)
- **Texte Principal** : `#CCD6F6` (Light Silver Blue)
- **Texte Secondaire** : `#8892B0` (Muted Slate Blue)
- **Bordures & Dividers** : `rgba(100, 255, 218, 0.2)`

---

## 💎 Effets Visuels & Design Tokens
- **Glassmorphism** : `bg-[#112240]/80 backdrop-blur-md border border-[#64FFDA]/20`
- **Glow Effects** : `shadow-[0_0_25px_rgba(100,255,218,0.15)]`
- **Border Radius** :
  - Cartes & Modales : `rounded-2xl` (`1rem`)
  - Boutons & Inputs : `rounded-xl` (`0.75rem`)
  - Badges & Tags : `rounded-full` (`9999px`)
- **Transitions** : `transition-all duration-300 ease-in-out`

---

## ✒️ Typographie & Hiérarchie
- **Police globale** : System sans-serif / Inter UI
- **Titre H1 / Hero** : `text-4xl sm:text-6xl font-extrabold tracking-tight`
- **Titre H2 / Section** : `text-2xl sm:text-4xl font-bold`
- **Sous-titres H3** : `text-xl font-semibold`
- **Corps de texte** : `text-base text-[#8892B0] leading-relaxed`
