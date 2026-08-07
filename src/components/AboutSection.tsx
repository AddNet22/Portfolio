import React from 'react';
import { UserCheck, Target, GraduationCap, Code, Server, Cpu } from 'lucide-react';
import { profileData } from '../data/profileData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0A192F] relative border-t border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            À propos de <span className="text-[#64FFDA]">moi & ma vision</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#64FFDA] to-[#6C63FF] rounded-full mb-6" />
          <p className="text-[#8892B0] text-base sm:text-lg max-w-2xl">
            Passioпné par la création d'outils numériques utiles, autonomes et interconnectés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Vision & Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Bio Card */}
            <div className="p-8 rounded-2xl bg-[#112240] border border-[#64FFDA]/20 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-[#64FFDA]/10 text-[#64FFDA]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mon Parcours</h3>
              </div>
              <p className="text-[#CCD6F6] text-base leading-relaxed mb-6">
                Je suis <strong>{profileData.name}</strong>, développeur d'applications et étudiant en sciences de gestion à l'UCLouvain Mons (Belgique 🇧🇪).
                Fort d'un bachelier en informatique de gestion et animé d'un esprit d'entrepreneur autodidacte, je concilie rigueur technique et vision stratégique.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-[#1D3557]">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-[#64FFDA]" />
                  <span>Formation & Cursus :</span>
                </h4>
                <ul className="space-y-2">
                  {profileData.education.map((edu, index) => (
                    <li key={index} className="text-[#8892B0] text-sm flex items-start space-x-2">
                      <span className="text-[#64FFDA] mt-1">•</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ecosystem Vision Card */}
            <div className="p-8 rounded-2xl bg-[#112240] border border-[#6C63FF]/30 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-[#6C63FF]/10 text-[#6C63FF]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">La Vision d'Écosystème</h3>
              </div>
              <blockquote className="italic text-[#64FFDA] text-lg mb-4 font-medium border-l-4 border-[#6C63FF] pl-4 py-1">
                "{profileData.mission}"
              </blockquote>
              <p className="text-[#8892B0] text-base leading-relaxed">
                {profileData.vision}
              </p>
            </div>

          </div>

          {/* Right Column: Skills Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Cpu className="w-6 h-6 text-[#64FFDA]" />
              <span>Stack Technique</span>
            </h3>

            {profileData.skills.map((category, idx) => {
              const icons = [Code, Server, Cpu];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={category.title}
                  className="p-6 rounded-2xl bg-[#112240] border border-[#64FFDA]/15 hover:border-[#64FFDA]/40 transition-all"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComp className="w-5 h-5 text-[#64FFDA]" />
                    <h4 className="text-white font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-[#0A192F] text-[#64FFDA] text-xs font-semibold border border-[#64FFDA]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
