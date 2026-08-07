import React from 'react';
import { ArrowRight, ShieldCheck, Layers, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profileData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0A192F] via-[#0D213D] to-[#0A192F]">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#64FFDA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#6C63FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#112240] border border-[#64FFDA]/30 text-[#64FFDA] text-xs sm:text-sm font-semibold mb-8 shadow-lg backdrop-blur-md">
            <MapPin className="w-4 h-4 text-[#64FFDA]" />
            <span>Mons, Belgique 🇧🇪 • {profileData.role}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Développeur d'applications <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#64FFDA] via-[#6C63FF] to-[#FF6B6B] text-transparent bg-clip-text">
              modulaires & scalables
            </span>
          </h1>

          {/* Tagline / Pitch */}
          <p className="text-lg sm:text-xl text-[#8892B0] leading-relaxed max-w-2xl mb-10">
            {profileData.tagline} Création de solutions mobiles et web haute performance (MyCircle, Easy2Order) articulées autour d'une architecture modulaire robuste.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#64FFDA] to-[#6C63FF] text-[#0A192F] font-bold text-base shadow-[0_0_25px_rgba(100,255,218,0.4)] hover:shadow-[0_0_35px_rgba(100,255,218,0.6)] hover:scale-105 transition-all"
            >
              <span>Découvrir les projets</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              to="/privacy"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-[#112240] hover:bg-[#1A365D] border border-[#64FFDA]/30 text-[#64FFDA] font-semibold text-base transition-all"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Espace Confidentialité (RGPD)</span>
            </Link>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 w-full text-left">
            <div className="p-6 rounded-2xl bg-[#112240]/80 border border-[#64FFDA]/20 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/10 flex items-center justify-center mb-4 text-[#64FFDA]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Architecture Modulaire</h3>
              <p className="text-sm text-[#8892B0]">
                Conception modulaire inspirée des principes Odoo pour une interconnectivité totale.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#112240]/80 border border-[#6C63FF]/20 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center mb-4 text-[#6C63FF]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Design Néon Cyberpunk</h3>
              <p className="text-sm text-[#8892B0]">
                Interfaces fluides, thèmes sombres soignés et micro-interactions immersives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#112240]/80 border border-[#FF6B6B]/20 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center mb-4 text-[#FF6B6B]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Sécurité & RGPD</h3>
              <p className="text-sm text-[#8892B0]">
                Protection stricte des données personnelles et droits d'accès/suppression transparents.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
