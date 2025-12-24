
import React, { useState, useEffect, useMemo } from 'react';
// Correcting the import path for SiteTheme to point to types.ts
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

  const HERO_IMG_URL = 'https://i.imgur.com/xqxbWbK.png';

  // Pré-carregamento imediato no ciclo de renderização
  useMemo(() => {
    const img = new Image();
    img.src = HERO_IMG_URL;
    img.onload = () => setImgLoaded(true);
  }, [HERO_IMG_URL]);

  const phrases = [
    "2026 com Ipanema",
    "com o pé direito"
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

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const renderStyledText = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <span className="text-gray-900 font-hero text-5xl md:text-7xl lg:text-8xl leading-none drop-shadow-sm">
            Comece
          </span>
          <span className="relative inline-block mt-4 py-2 text-center font-hero">
            <span className="text-brazil-gradient text-5xl md:text-7xl lg:text-8xl font-black transform-gpu tracking-tight drop-shadow-md">
              {text}
            </span>
            
            {text.length > 10 && (
              <>
                <div className="absolute -top-4 -right-8 star-flicker">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.5 9.5H24L16.5 14.5L19 24L12 19L5 24L7.5 14.5L0 9.5H9.5L12 0Z" fill="#FFDF00" />
                  </svg>
                </div>
              </>
            )}
          </span>
        </div>
      </div>
    );
  };

  const getCursorColor = () => {
    if (activeTheme === 'pink') return 'bg-pink-300';
    if (activeTheme === 'blue') return 'bg-blue-300';
    return 'bg-pink-200';
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Camada de Gradiente de Fallback (aparece instantaneamente) */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-pink-50 via-white to-blue-50"></div>

      {/* Imagem de Fundo Otimizada com Transição Suave */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-700 ipanema-branded-bg ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${HERO_IMG_URL})` }}
      >
        <div className={`absolute inset-0 transition-colors duration-1000 ${
          activeTheme === 'pink' ? 'bg-pink-200/30' : 
          activeTheme === 'blue' ? 'bg-blue-200/30' : 
          'bg-white/10'
        }`}></div>
        <div className="ipanema-pattern absolute inset-0"></div>
        
        {/* Soft Blobs */}
        <div className={`absolute top-1/4 left-1/4 w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-10 transition-all duration-1000 ${activeTheme === 'pink' ? 'bg-pink-300' : activeTheme === 'blue' ? 'bg-blue-300' : 'bg-pink-100'}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-10 transition-all duration-1000 ${activeTheme === 'pink' ? 'bg-blue-200' : activeTheme === 'blue' ? 'bg-pink-200' : 'bg-blue-50'}`}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 flex flex-col items-center">
        <div className="text-center relative flex flex-col justify-center w-full max-w-5xl">
          <h1 className="mb-10 flex flex-col items-center">
            <div className="inline-flex items-center">
              {renderStyledText()}
              <span className={`inline-block w-1 h-[0.7em] ml-2 animate-pulse align-middle shrink-0 transition-colors duration-500 ${getCursorColor()}`}></span>
            </div>
          </h1>

          <p className="text-white text-base md:text-xl max-w-2xl mx-auto mt-8 mb-16 leading-relaxed font-semibold animate-fade-in px-4 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            A essência do Rio em tons pastéis. Uma coleção desenhada para trazer calma e sofisticação a cada passo do seu novo ano, inspirada no horizonte da praia.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="#colecao" className={`group animate-btn-shine relative px-12 py-5 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.4em] overflow-hidden transition-all shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 ${activeTheme === 'pink' ? 'bg-pink-400' : activeTheme === 'blue' ? 'bg-blue-400' : 'bg-gray-900'}`}>
              <span className="relative z-10">Ver Coleção</span>
            </a>
            
            <a href="#sobre" className="group relative text-[10px] font-bold uppercase tracking-[0.4em] text-white hover:text-white transition-all py-2 overflow-hidden drop-shadow-md">
              <span className="relative z-10">Nossa História</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-60 animate-bounce text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
