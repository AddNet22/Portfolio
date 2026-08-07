import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Trash2, Mail, Info, FileText } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const PrivacyHubPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#0A192F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Centre RGPD & Protections des données</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Politiques de <span className="text-[#64FFDA]">Confidentialité</span>
          </h1>
          <p className="text-[#8892B0] text-base sm:text-lg leading-relaxed">
            Consultez les informations de transparence, les politiques d'utilisation des données et les procédures de gestion/suppression de compte pour chaque application de l'écosystème.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projectsData.map((app) => (
            <div
              key={app.id}
              className="p-8 rounded-2xl bg-[#112240] border border-[#64FFDA]/20 hover:border-[#64FFDA]/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#64FFDA]/10 text-[#64FFDA]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{app.name}</h2>
                    <span className="text-xs text-[#64FFDA] font-semibold">{app.tagline}</span>
                  </div>
                </div>
                <p className="text-[#8892B0] text-sm leading-relaxed mb-6">
                  Engagement sur le respect de la vie privée, le cryptage des informations et la conformité aux exigences des stores.
                </p>
              </div>

              <Link
                to={app.privacyRoute}
                className="inline-flex items-center justify-between px-5 py-3 rounded-xl bg-[#0A192F] hover:bg-[#64FFDA] hover:text-[#0A192F] text-[#64FFDA] font-bold text-sm border border-[#64FFDA]/30 transition-all group"
              >
                <span>Lire la politique complète</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Global Account Deletion Section (RGPD) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#112240] via-[#112240] to-[#FF6B6B]/10 border-2 border-[#FF6B6B]/40 shadow-2xl">
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 rounded-2xl bg-[#FF6B6B]/20 text-[#FF6B6B] shrink-0">
              <Trash2 className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                🗑️ Suppression de Compte & Droit à l'Oubli (RGPD)
              </h2>
              <p className="text-[#CCD6F6] text-sm sm:text-base leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et aux exigences Google Play / Apple App Store, tout utilisateur d'une application (MyCircle, Easy2Order, etc.) dispose du droit absolu d'obtenir l'effacement complet de son compte et de ses données.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 rounded-2xl bg-[#0A192F]/80 border border-[#FF6B6B]/20">
              <h3 className="text-white font-bold text-lg mb-2 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#FF6B6B] text-[#0A192F] flex items-center justify-center font-bold text-xs">1</span>
                <span>Via l'Application</span>
              </h3>
              <p className="text-[#8892B0] text-sm leading-relaxed">
                Ouvrez l'application concernée → <strong>Paramètres</strong> → <strong>Compte</strong> → <strong>Supprimer mon compte</strong>. La demande est enregistrée instantanément.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A192F]/80 border border-[#FF6B6B]/20">
              <h3 className="text-white font-bold text-lg mb-2 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#FF6B6B] text-[#0A192F] flex items-center justify-center font-bold text-xs">2</span>
                <span>Par Email</span>
              </h3>
              <p className="text-[#8892B0] text-sm leading-relaxed">
                Envoyez un e-mail à <strong>loicmeurantpro@gmail.com</strong> avec pour objet <em>"Suppression de compte"</em> en précisant l'adresse mail liée à votre compte.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0A192F]/60 border border-white/10 flex items-center space-x-3 text-xs text-[#8892B0]">
            <Info className="w-5 h-5 text-[#64FFDA] shrink-0" />
            <span>
              Toutes les données associées (profil, messages, fichiers) seront supprimées définitivement dans un délai maximal de 30 jours.
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-[#FF6B6B] text-white font-bold text-sm shadow-[0_0_20px_rgba(255,107,107,0.4)] hover:bg-[#E55353] transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Demander la suppression via formulaire</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
