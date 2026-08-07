import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ShieldCheck, ChevronLeft, CheckCircle } from 'lucide-react';

export const PrivacyEasy2OrderPage: React.FC = () => {
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
        <div className="p-8 rounded-3xl bg-[#112240] border border-[#64FFDA]/40 mb-12 shadow-2xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-4 rounded-2xl bg-[#64FFDA]/20 text-[#64FFDA]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Easy2Order</h1>
              <p className="text-[#64FFDA] font-semibold text-base">Politique de Confidentialité & Traitement des Données</p>
            </div>
          </div>
          <p className="text-xs text-[#8892B0] mt-4 border-t border-white/10 pt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')} • Éditeur : Loïc Meurant (loicmeurantpro@gmail.com)
          </p>
        </div>

        {/* Content Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#112240] border border-white/10 space-y-8 text-sm leading-relaxed text-[#8892B0]">
          
          <div className="p-4 rounded-xl bg-[#64FFDA]/10 border border-[#64FFDA]/30 text-[#64FFDA] font-semibold flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span>
              Easy2Order s'engage à respecter la vie privée des utilisateurs et la confidentialité de leurs données conformément au RGPD.
            </span>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">1. Présentation de la solution</h2>
            <p>
              Easy2Order (anciennement C'est ma tournée) est une solution digitale de prise de commande interactive pour les établissements de restauration, bars et événements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">2. Données collectées et finalités</h2>
            <p>
              Les données techniques de commande sont transmises en temps réel via Supabase afin d'assurer l'affichage du panier au barman ou serveur. Aucune donnée nominative ou bancaire n'est revendue à des tiers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">3. Suppression de compte et données</h2>
            <p>
              Pour toute demande de suppression d'identifiant ou d'historique de commande, contactez-nous par email à <a href="mailto:loicmeurantpro@gmail.com" className="text-[#64FFDA] underline">loicmeurantpro@gmail.com</a>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
