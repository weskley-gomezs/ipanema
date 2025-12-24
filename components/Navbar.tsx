
import React, { useState, useEffect } from 'react';
import { SiteTheme } from '../App';

interface NavbarProps {
  currentTheme: SiteTheme;
  onThemeChange: (theme: SiteTheme) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTheme, onThemeChange }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLogoColorClass = () => {
    switch (currentTheme) {
      case 'pink': return 'text-pink-400';
      case 'blue': return 'text-blue-400';
      default: return 'text-gray-900';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 nav-luxury shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        
        {/* Lado Esquerdo - Links */}
        <div className="hidden lg:flex flex-1 items-center space-x-10">
          <a href="#colecao" className="group relative text-[11px] font-bold uppercase tracking-[0.3em] text-gray-800 hover:text-pink-400 transition-colors">
            Coleções
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#sobre" className="group relative text-[11px] font-bold uppercase tracking-[0.3em] text-gray-800 hover:text-pink-400 transition-colors">
            Manifesto
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Logo Centralizado */}
        <div 
          className="flex flex-col items-center group cursor-pointer flex-shrink-0 mx-auto lg:mx-0 transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={() => onThemeChange('default')}
          title="Clique para resetar para o padrão"
        >
          <span className={`text-2xl font-black tracking-[0.4em] transition-colors duration-700 ${getLogoColorClass()} group-hover:opacity-80`}>
            IPANEMA
          </span>
          <div className={`w-8 h-[2px] transition-all duration-500 ${currentTheme === 'default' ? 'bg-pink-300 opacity-0 group-hover:opacity-100 group-hover:scale-x-100' : 'bg-current scale-x-100'}`}></div>
        </div>

        {/* Lado Direito - Seletores e Ícones */}
        <div className="flex flex-1 items-center justify-end space-x-8">
          <div className="hidden sm:flex items-center space-x-4 bg-white/50 backdrop-blur-md px-5 py-2 rounded-full border border-gray-100 shadow-sm">
            <button 
              onClick={() => onThemeChange('pink')}
              className={`text-[9px] font-black uppercase tracking-[0.2em] transition-all px-2 py-1 rounded-md hover:scale-110 active:scale-90 ${currentTheme === 'pink' ? 'text-pink-600 bg-pink-50 scale-110' : 'text-pink-400 hover:text-pink-600'}`}
            >
              Rosa
            </button>
            <div className="w-px h-2 bg-gray-200"></div>
            <button 
              onClick={() => onThemeChange('blue')}
              className={`text-[9px] font-black uppercase tracking-[0.2em] transition-all px-2 py-1 rounded-md hover:scale-110 active:scale-90 ${currentTheme === 'blue' ? 'text-blue-600 bg-blue-50 scale-110' : 'text-blue-400 hover:text-blue-600'}`}
            >
              Azul
            </button>
            <div className="w-px h-2 bg-gray-200"></div>
            <button 
              onClick={() => onThemeChange('default')}
              className={`text-[9px] font-black uppercase tracking-[0.2em] transition-all px-2 py-1 rounded-md hover:scale-110 active:scale-90 ${currentTheme === 'default' ? 'text-gray-900 bg-gray-100 scale-110' : 'text-gray-400 hover:text-gray-900'}`}
            >
              Padrão
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 hover:text-pink-400 transition-all duration-300 hover:scale-125 active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative text-gray-800 hover:text-pink-400 transition-all duration-300 hover:scale-125 active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-colors duration-500 animate-pulse ${currentTheme === 'blue' ? 'bg-blue-400' : 'bg-pink-400'}`}></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
