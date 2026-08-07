import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Github, Mail } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071120] border-t border-[#64FFDA]/15 pt-12 pb-8 text-[#8892B0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#112240]">
          
          {/* Col 1: Bio */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Loïc Meurant</h3>
            <p className="text-sm leading-relaxed mb-4">
              Développeur d'applications modulaires et SaaS. Basé à Mons, Belgique 🇧🇪.
            </p>
            <div className="flex space-x-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#112240] hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] text-[#CCD6F6] flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-10 h-10 rounded-xl bg-[#112240] hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] text-[#CCD6F6] flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-[#64FFDA] transition-colors">À propos & Vision</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#64FFDA] transition-colors">Mes Applications</a>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#64FFDA] transition-colors flex items-center space-x-1 text-[#64FFDA]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Centre de Confidentialité (RGPD)</span>
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#64FFDA] transition-colors">Me contacter</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Politiques d'Apps */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Politiques des Applications</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy/mycircle" className="hover:text-[#64FFDA] transition-colors">MyCircle — Confidentialité & Suppression</Link>
              </li>
              <li>
                <Link to="/privacy/cestmatournee" className="hover:text-[#64FFDA] transition-colors">C'est ma tournée — Confidentialité</Link>
              </li>
              <li>
                <Link to="/privacy/easy2order" className="hover:text-[#64FFDA] transition-colors">Easy2Order — Confidentialité</Link>
              </li>
              <li>
                <Link to="/privacy/secretpartyfinder" className="hover:text-[#64FFDA] transition-colors">Secret Party Finder — Confidentialité</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8892B0]">
          <p>© {new Date().getFullYear()} Loïc Meurant. Tous droits réservés.</p>
          <p className="flex items-center space-x-1 mt-2 sm:mt-0">
            <span>Conçu avec React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
