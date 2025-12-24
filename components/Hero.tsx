
import React, { useState, useEffect, useMemo } from 'react';
import { SiteTheme } from '../types';

interface HeroProps {
  activeTheme?: SiteTheme;
}

const Hero: React.FC<HeroProps> = ({ activeTheme = 'default' }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Imagem de alta qualidade com cores pastéis e clima solar
  const HERO_IMG_URL = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop';

  useMemo(() => {
    const img = new Image();
    img.src = HERO_IMG_URL;
    img.onload = () => setImgLoaded(true);
  }, []);

  const phrases = [
    "com leveza.",
    "com o pé direito.",
    "com frescor."
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const getOverlayColor = () => {
    switch (activeTheme) {
      case 'pink': return 'bg-pink-50/20';
      case 'blue': return 'bg-blue-50/20';
      case 'mint': return 'bg-green-50/20';
      case 'lavender': return 'bg-purple-50/20';
      default: return 'bg-white/10';
    }
  };

  const getButtonColor = () => {
    switch (activeTheme) {
      case 'pink': return 'bg-pink-400';
      case 'blue': return 'bg-blue-400';
      case 'mint': return 'bg-green-400';
      case 'lavender': return 'bg-purple-400';
      default: return 'bg-gray-900';
    }
  };

  return (
    <section id="home" className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-32 pb-40 bg-gray-50">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${HERO_IMG_URL})` }}
        />
        
        {/* Camada de Opacidade Branca Leve (Mist Layer) */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        
        {/* Camada de Cor do Tema */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${getOverlayColor()}`} />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-pink-200/40 rounded-full blur-[100px] animate-floating" />
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-blue-200/40 rounded-full blur-[120px] animate-floating" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h1 className="flex flex-col items-center mb-10">
            <div className="flex items-baseline gap-4 md:gap-6 animate-fade-in">
              <span className="text-gray-900 font-hero text-5xl md:text-7xl lg:text-8xl leading-none">
                Comece
              </span>
              <span className="text-gray-900 font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter italic">
                2026
              </span>
            </div>
            <div className="relative mt-2 min-h-[1.2em]">
              <span className="text-brazil-gradient font-hero text-5xl md:text-7xl lg:text-8xl font-black drop-shadow-xl">
                {text}
              </span>
              <span className={`inline-block w-1.5 h-[0.8em] ml-2 bg-yellow-400 animate-pulse align-middle`} />
            </div>
          </h1>

          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium drop-shadow-sm px-4">
            A essência solar do Rio traduzida em uma paleta suave e acolhedora. Desenhamos cada passo para que seu dia comece com a calma do horizonte.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#colecao" className={`group relative px-12 py-5 text-white rounded-full font-bold text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all shadow-2xl hover:scale-105 active:scale-95 animate-btn-shine ${getButtonColor()}`}>
              <span className="relative z-10">Explorar Modelos</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-60 animate-bounce text-gray-800 cursor-pointer" onClick={() => document.getElementById('colecao')?.scrollIntoView()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
