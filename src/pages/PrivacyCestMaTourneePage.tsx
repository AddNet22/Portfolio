import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronLeft, CheckCircle } from 'lucide-react';

export const PrivacyCestMaTourneePage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#0A192F] min-h-screen text-[#CCD6F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/privacy"
          className="inline-flex items-center space-x-2 text-sm text-[#64FFDA] hover:underline mb-8 font-semibold"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Retour au Centre de Confidentialité</span>
        </Link>

        {/* Page Header */}
        <div className="p-8 rounded-3xl bg-[#112240] border border-[#64FFDA]/40 mb-12 shadow-2xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-4 rounded-2xl bg-[#64FFDA]/20 text-[#64FFDA]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">C'est ma tournée</h1>
              <p className="text-[#64FFDA] font-semibold text-base">Politique de Confidentialité & Mentions Légales</p>
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
              Nous vous remercions d'utiliser notre application. Aucune donnée personnelle n'est collectée lors de votre utilisation de l'application.
            </span>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">1. Présentation de l'application</h2>
            <p>
              L’application "C’est ma tournée" est un outil destiné à faciliter la gestion des commandes de boissons lors de soirées, événements ou rassemblements. Elle permet aux utilisateurs de noter les boissons de leur choix afin d’optimiser la prise de commande et d’éviter les oublis.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">2. Absence de promotion ou de vente d'alcool</h2>
            <p>
              L’application ne vend pas, ne promeut pas et n’encourage pas la consommation d’alcool. Son objectif est uniquement de fournir un service d’organisation et de gestion des commandes. Les utilisateurs sont libres d’ajouter les boissons de leur choix.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">3. Public concerné et responsabilité</h2>
            <p>
              L’utilisation de l’application est destinée aux personnes majeures dans les pays où la consommation d’alcool est autorisée. Il appartient à chaque utilisateur de respecter la législation en vigueur.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">4. Publicité et affichage des annonces (Google AdMob)</h2>
            <p>
              Afin de financer son développement gratuit, l’application peut afficher des publicités via des services tiers tels que Google AdMob. Les annonces affichées sont générées automatiquement selon les standards Google AdMob.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">5. Protection des données et vie privée (RGPD)</h2>
            <p>
              Nous ne collectons ni ne stockons aucune donnée personnelle identifiable (nom, email, etc.). Étant donné qu'aucune donnée personnelle n'est conservée, il n'y a aucun risque de fuite de données.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">6. Mentions Légales & Contact</h2>
            <p className="text-white font-medium">
              Éditeur : Loïc Meurant <br />
              Email de contact : <a href="mailto:loicmeurantpro@gmail.com" className="text-[#64FFDA] underline">loicmeurantpro@gmail.com</a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
