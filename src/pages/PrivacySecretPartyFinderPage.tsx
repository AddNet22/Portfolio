import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ShieldCheck, ChevronLeft, CheckCircle } from 'lucide-react';

export const PrivacySecretPartyFinderPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#0A192F] min-h-screen text-[#CCD6F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <RouterLink
          to="/privacy"
          className="inline-flex items-center space-x-2 text-sm text-[#64FFDA] hover:underline mb-8 font-semibold"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Retour au Centre de Confidentialité</span>
        </RouterLink>

        {/* Page Header */}
        <div className="p-8 rounded-3xl bg-[#112240] border border-[#FF6B6B]/40 mb-12 shadow-2xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-4 rounded-2xl bg-[#FF6B6B]/20 text-[#FF6B6B]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Secret Party Finder</h1>
              <p className="text-[#FF6B6B] font-semibold text-base">Politique de Confidentialité & Géolocalisation</p>
            </div>
          </div>
          <p className="text-xs text-[#8892B0] mt-4 border-t border-white/10 pt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')} • Éditeur : Loïc Meurant (loicmeurantpro@gmail.com)
          </p>
        </div>

        {/* Content Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#112240] border border-white/10 space-y-8 text-sm leading-relaxed text-[#8892B0]">
          
          <div className="p-4 rounded-xl bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 text-[#FF6B6B] font-semibold flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span>
              Secret Party Finder utilise la géolocalisation uniquement pour afficher les événements à proximité de l'utilisateur avec son consentement explicite.
            </span>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">1. Données de localisation</h2>
            <p>
              Les données GPS ne sont traitées que lorsque l'application est active et ne sont jamais enregistrées en continu à votre insu.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">2. Droits RGPD & Contact</h2>
            <p>
              Pour toute demande relative à vos données personnelles ou pour demander la suppression de votre compte Secret Party Finder, contactez-nous à <a href="mailto:loicmeurantpro@gmail.com" className="text-[#64FFDA] underline">loicmeurantpro@gmail.com</a>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
