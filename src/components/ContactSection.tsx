import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldAlert, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Question Générale',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Automatically launch mailto: with pre-filled inputs
    const subjectLine = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Bonjour Loïc,\n\nNom: ${formData.name}\nEmail: ${formData.email}\nObjet: ${formData.subject}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:loicmeurantpro@gmail.com?subject=${subjectLine}&body=${bodyContent}`;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A192F] relative border-t border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#112240] border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-4 h-4" />
            <span>Contact & Demandes RGPD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Me <span className="text-[#64FFDA]">Contacter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#64FFDA] to-[#6C63FF] rounded-full mb-6" />
          <p className="text-[#8892B0] text-base sm:text-lg max-w-2xl">
            Une question sur une application ou une demande de suppression de compte ? Remplissez le formulaire pour m'envoyer directement un e-mail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-[#112240] border border-[#64FFDA]/20 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Coordonnées Directes</h3>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-[#64FFDA]/10 text-[#64FFDA]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#8892B0] block">Email Professionnel</span>
                  <a href={`mailto:${profileData.email}`} className="text-white font-semibold hover:text-[#64FFDA] transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4 border-t border-[#1D3557]">
                <div className="p-3 rounded-xl bg-[#FF6B6B]/10 text-[#FF6B6B]">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#FF6B6B] font-bold block">Demande de suppression de compte</span>
                  <p className="text-xs text-[#8892B0] mt-1 leading-relaxed">
                    Conformément aux directives Google Play & RGPD, vous pouvez faire valoir votre droit à l'oubli pour MyCircle ou Easy2Order. Traitement garanti sous 30 jours.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#112240] border border-[#64FFDA]/20 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#64FFDA]/20 text-[#64FFDA] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application email ouverte !</h3>
                  <p className="text-[#8892B0] text-sm max-w-md mx-auto">
                    Votre client mail a été ouvert pré-rempli pour envoyer votre message à <strong>{profileData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#0A192F] text-[#64FFDA] text-sm font-semibold border border-[#64FFDA]/30 hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all cursor-pointer"
                  >
                    Rédiger un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center space-x-2">
                    <MessageSquare className="w-6 h-6 text-[#64FFDA]" />
                    <span>Envoyer un e-mail</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-[#CCD6F6] uppercase mb-2">Votre Nom</label>
                    <input
                      type="text"
                      required
                      placeholder="Votre Nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A192F] border border-[#64FFDA]/20 text-white placeholder-[#8892B0]/50 focus:outline-none focus:border-[#64FFDA] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#CCD6F6] uppercase mb-2">Votre Adresse Email</label>
                    <input
                      type="email"
                      required
                      placeholder="nom@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A192F] border border-[#64FFDA]/20 text-white placeholder-[#8892B0]/50 focus:outline-none focus:border-[#64FFDA] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#CCD6F6] uppercase mb-2">Objet du message</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A192F] border border-[#64FFDA]/20 text-white focus:outline-none focus:border-[#64FFDA] transition-colors text-sm"
                    >
                      <option value="Question Générale">Question générale / Information</option>
                      <option value="Demande de Suppression RGPD">Demande de suppression de compte (MyCircle / Apps)</option>
                      <option value="Collaboration / Projet">Proposition de projet / Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#CCD6F6] uppercase mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Bonjour Loïc, je vous contacte concernant..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A192F] border border-[#64FFDA]/20 text-white placeholder-[#8892B0]/50 focus:outline-none focus:border-[#64FFDA] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#64FFDA] to-[#6C63FF] text-[#0A192F] font-bold text-base hover:shadow-[0_0_25px_rgba(100,255,218,0.4)] transition-all cursor-pointer"
                  >
                    <span>Envoyer l'e-mail</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
