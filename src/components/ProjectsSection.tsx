import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowUpRight, Smartphone } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0D213D] relative border-t border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#112240] border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-4 h-4" />
            <span>Applications & Solutions SaaS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Écosystème de <span className="text-[#64FFDA]">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#64FFDA] to-[#6C63FF] rounded-full mb-6" />
          <p className="text-[#8892B0] text-base sm:text-lg max-w-2xl">
            Découvrez mes applications majeures et accédez directement à leurs politiques de confidentialité.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between p-8 rounded-3xl bg-[#112240]/90 border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 shadow-xl ${project.gradient}`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${project.badgeColor}`}>
                    {project.status}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#0A192F] border border-white/10 flex items-center justify-center text-[#64FFDA]">
                    <Smartphone className="w-5 h-5" />
                  </div>
                </div>

                {/* Project Name & Tagline */}
                <h3 className="text-2xl font-extrabold text-white mb-2">{project.name}</h3>
                <p className="text-[#64FFDA] text-sm font-semibold mb-4">{project.tagline}</p>
                <p className="text-[#8892B0] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Audience Target */}
                <div className="mb-6 p-3 rounded-xl bg-[#0A192F]/60 border border-white/5">
                  <span className="text-xs text-[#8892B0] block mb-1">Public cible :</span>
                  <span className="text-xs text-[#CCD6F6] font-medium">{project.targetAudience}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Points Clés :</h4>
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[#CCD6F6]">
                      <CheckCircle2 className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Action */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-[#0A192F] text-[11px] text-[#8892B0] font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Privacy Policy Link */}
                <Link
                  to={project.privacyRoute}
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#0A192F] hover:bg-[#64FFDA] hover:text-[#0A192F] text-[#64FFDA] text-xs font-bold border border-[#64FFDA]/30 transition-all group"
                >
                  <span className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Politique de confidentialité</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
