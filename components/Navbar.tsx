import React, { useState, useEffect } from 'react';
import { SiteTheme } from '../types';

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
      case 'mint': return 'text-green-400';
      default: return 'text-gray-900';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Lado Esquerdo - Links */}
        <div className="hidden lg:flex items-center space-x-10 flex-1">
          <a href="#colecao" className="group relative text-[11px] font-bold uppercase tracking-[0.3em] text-gray-800 hover:text-pink-400 transition-colors">
            Coleções
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#dicas" className="group relative text-[11px] font-bold uppercase tracking-[0.3em] text-gray-800 hover:text-pink-400 transition-colors">
            Dicas IA
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Logo Centralizado */}
        <div 
          className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 mx-auto lg:mx-0"
          onClick={() => onThemeChange('default')}
        >
          <span className={`text-2xl font-black tracking-[0.4em] transition-colors duration-700 ${getLogoColorClass()} group-hover:opacity-80`}>
            IPANEMA
          </span>
          <div className={`w-8 h-[2px] transition-all duration-500 ${currentTheme === 'default' ? 'bg-pink-300 opacity-0 group-hover:opacity-100 group-hover:scale-x-100' : 'bg-current scale-x-100'}`}></div>
        </div>

        {/* Lado Direito - Seletores e Ícones */}
        <div className="flex items-center justify-end space-x-8 flex-1">
          <div className="hidden sm:flex items-center space-x-2 bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100/50 shadow-sm">
            <button 
              onClick={() => onThemeChange('pink')}
              className={`w-6 h-6 rounded-full bg-pink-200 border-2 transition-all hover:scale-125 ${currentTheme === 'pink' ? 'border-pink-500 scale-110' : 'border-transparent'}`}
              title="Tema Rosa"
            />
            <button 
              onClick={() => onThemeChange('blue')}
              className={`w-6 h-6 rounded-full bg-blue-200 border-2 transition-all hover:scale-125 ${currentTheme === 'blue' ? 'border-blue-500 scale-110' : 'border-transparent'}`}
              title="Tema Azul"
            />
            <button 
              onClick={() => onThemeChange('mint')}
              className={`w-6 h-6 rounded-full bg-green-100 border-2 transition-all hover:scale-125 ${currentTheme === 'mint' ? 'border-green-400 scale-110' : 'border-transparent'}`}
              title="Tema Menta"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 hover:text-pink-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative text-gray-800 hover:text-pink-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;