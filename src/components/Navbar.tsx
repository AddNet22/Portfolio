import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, ShieldCheck, User, FolderKanban, Mail, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Accueil', href: '/', icon: Code2 },
    { name: 'À propos', href: isHome ? '#about' : '/#about', icon: User },
    { name: 'Projets', href: isHome ? '#projects' : '/#projects', icon: FolderKanban },
    { name: 'Confidentialité', href: '/privacy', icon: ShieldCheck },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/85 backdrop-blur-md border-b border-[#64FFDA]/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#64FFDA] to-[#6C63FF] p-0.5 shadow-lg group-hover:shadow-[0_0_15px_rgba(100,255,218,0.5)] transition-all">
              <div className="w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-[#6C63FF] text-lg">LM</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg group-hover:text-[#64FFDA] transition-colors">Loïc Meurant</span>
              <span className="text-xs text-[#8892B0]">Développeur SaaS & Mobile</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30'
                      : 'text-[#8892B0] hover:text-white hover:bg-[#112240]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-[#8892B0] hover:text-[#64FFDA] hover:bg-[#112240] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#112240] border-b border-[#64FFDA]/20 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-[#CCD6F6] hover:text-[#64FFDA] hover:bg-[#0A192F] transition-all"
              >
                <Icon className="w-5 h-5 text-[#64FFDA]" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};
