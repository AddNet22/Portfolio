import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Share2, Database, Trash2, Mail, Users, FileText, ChevronLeft, AlertTriangle } from 'lucide-react';

export const PrivacyMyCirclePage: React.FC = () => {
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
        <div className="p-8 rounded-3xl bg-[#112240] border border-[#6C63FF]/40 mb-12 shadow-2xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-4 rounded-2xl bg-[#6C63FF]/20 text-[#6C63FF]">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">MyCircle</h1>
              <p className="text-[#6C63FF] font-semibold text-base">Politique de Confidentialité & Protection des Données</p>
            </div>
          </div>
          <p className="text-xs text-[#8892B0] mt-4 border-t border-white/10 pt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')} • Éditeur : Loïc Meurant (loicmeurantpro@gmail.com)
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          
          {/* Section 1 */}
          <div className="p-8 rounded-2xl bg-[#112240] border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
              <FileText className="w-6 h-6 text-[#64FFDA]" />
              <span>1. Introduction</span>
            </h2>
            <p className="text-[#8892B0] text-sm leading-relaxed">
              MyCircle est une application de gestion d'espaces privés partagés pour familles, colocataires et groupes d'amis. 
              Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos données personnelles. 
              En utilisant MyCircle, vous acceptez les pratiques décrites dans cette politique.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-8 rounded-2xl bg-[#112240] border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
              <Database className="w-6 h-6 text-[#64FFDA]" />
              <span>2. Données Collectées</span>
            </h2>
            <div className="space-y-4 text-sm text-[#8892B0]">
              <div>
                <strong className="text-white block mb-1">Informations de compte :</strong>
                <ul className="list-disc list-inside space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Photo de profil (optionnel)</li>
                  <li>Numéro de téléphone (optionnel)</li>
                </ul>
              </div>
              <div>
                <strong className="text-white block mb-1">Données d'utilisation & Contenu :</strong>
                <ul className="list-disc list-inside space-y-1">
                  <li>Messages et contenus partagés dans vos cercles</li>
                  <li>Photos et fichiers téléchargés</li>
                  <li>Événements créés et participations</li>
                  <li>Listes de courses et tâches</li>
                </ul>
              </div>
              <div>
                <strong className="text-white block mb-1">Données techniques :</strong>
                <ul className="list-disc list-inside space-y-1">
                  <li>Adresse IP & Identifiant unique de l'appareil</li>
                  <li>Type d'appareil et système d'exploitation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-8 rounded-2xl bg-[#112240] border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-[#64FFDA]" />
              <span>3. Utilisation des Données</span>
            </h2>
            <p className="text-[#8892B0] text-sm leading-relaxed mb-4">
              Nous utilisons vos données strictement pour :
            </p>
            <ul className="list-disc list-inside text-sm text-[#8892B0] space-y-2">
              <li><strong className="text-white">Fournir le service</strong> : Permettre le partage sécurisé au sein de vos cercles privés.</li>
              <li><strong className="text-white">Fonctionnalités Premium</strong> : Gérer vos abonnements et paiements via Stripe.</li>
              <li><strong className="text-white">Sécurité</strong> : Détecter et prévenir les fraudes ou accès non autorisés (Infrastructure Supabase & RLS).</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="p-8 rounded-2xl bg-[#112240] border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
              <Share2 className="w-6 h-6 text-[#64FFDA]" />
              <span>4. Partage des Données</span>
            </h2>
            <p className="text-[#8892B0] text-sm leading-relaxed">
              Vos données sont visibles uniquement par les membres des cercles auxquels vous appartenez. 
              Elles sont traitées par des prestataires certifiés (Supabase pour la base de données, Stripe pour le paiement). 
              <strong> Nous ne vendons jamais vos données personnelles à des tiers.</strong>
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-8 rounded-2xl bg-[#112240] border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
              <Lock className="w-6 h-6 text-[#64FFDA]" />
              <span>5. Sécurité & Chiffrement</span>
            </h2>
            <ul className="list-disc list-inside text-sm text-[#8892B0] space-y-2">
              <li>Chiffrement SSL/TLS pour toutes les communications HTTPS.</li>
              <li>Mots de passe sécurisés et hashés avec bcrypt.</li>
              <li>Politiques de sécurité au niveau des lignes (Row Level Security - RLS Supabase).</li>
            </ul>
          </div>

          {/* Section 6: ACCOUNT DELETION SPECIFIC SECTION */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#112240] to-[#FF6B6B]/15 border-2 border-[#FF6B6B]/40 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-[#FF6B6B]/20 text-[#FF6B6B]">
                <Trash2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-white">🗑️ Suppression de Compte MyCircle (RGPD)</h2>
            </div>
            
            <p className="text-[#CCD6F6] text-sm leading-relaxed mb-6">
              Vous avez le droit de supprimer votre compte MyCircle à tout moment. Vous disposez de deux méthodes simples :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[#0A192F] border border-white/10">
                <span className="text-xs font-bold text-[#64FFDA] uppercase block mb-1">Méthode 1 — In-App</span>
                <p className="text-xs text-[#8892B0]">Ouvrez MyCircle → Paramètres → Compte → Supprimer mon compte.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0A192F] border border-white/10">
                <span className="text-xs font-bold text-[#64FFDA] uppercase block mb-1">Méthode 2 — Email</span>
                <p className="text-xs text-[#8892B0]">Envoyez un e-mail à loicmeurantpro@gmail.com avec l'objet "Suppression de compte MyCircle".</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0A192F]/80 border border-[#FF6B6B]/30 flex items-start space-x-3 text-xs text-[#8892B0]">
              <AlertTriangle className="w-5 h-5 text-[#FF6B6B] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#FF6B6B] block mb-1">Conséquences de la suppression :</strong>
                <span>Toutes vos données (profil, messages, fichiers) seront supprimées définitivement dans un délai maximal de 30 jours.</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="p-8 rounded-2xl bg-[#112240] border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
              <Mail className="w-6 h-6 text-[#64FFDA]" />
              <span>Contact & Responsable de traitement</span>
            </h2>
            <p className="text-[#8892B0] text-sm leading-relaxed">
              Pour toute question relative à vos données personnelles : <br />
              <strong>Email :</strong> loicmeurantpro@gmail.com <br />
              <strong>Responsable :</strong> Loïc Meurant — Mons, Belgique 🇧🇪
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
