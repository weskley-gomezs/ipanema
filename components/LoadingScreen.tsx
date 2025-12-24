
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isHit, setIsHit] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const word = "PÉ-ESQUERDO";
  const letters = word.split("");

  const getShatterStyle = (index: number) => {
    if (!isHit) {
      // Flutuação suave antes do clique
      return {
        animation: `floating ${3 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${index * 0.1}s`
      };
    }
    
    const angle = (index / letters.length) * 360;
    const distance = 400 + Math.random() * 200;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const rotate = Math.random() * 540 - 270;
    
    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
      opacity: 0,
      transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
    };
  };

  const handleHit = () => {
    if (isHit) return;
    setIsHit(true);
    
    // Feedback tátil visual e transição
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 600);
    }, 1200);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-1000 overflow-hidden ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background Soft Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-pink-50 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-blue-50 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      </div>

      <div 
        className="relative z-10 w-full max-w-2xl text-center p-6 cursor-pointer flex flex-col items-center justify-center" 
        onClick={handleHit}
      >
        <div className={`mb-8 transition-all duration-1000 ${showPrompt && !isHit ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.6em] mb-3">Ipanema</h2>
          <p className="text-gray-300 text-[10px] font-bold tracking-[0.4em] uppercase">Deixe para trás o que pesa</p>
        </div>

        <div className={`flex items-center justify-center flex-wrap gap-1 transition-transform duration-500 ${!isHit ? 'hover:scale-105 active:scale-95' : ''}`}>
          {letters.map((letter, index) => (
            <span 
              key={index}
              style={getShatterStyle(index)}
              className={`text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase select-none transition-all duration-300 inline-block
                ${letter === '-' ? 'mx-2 opacity-10' : ''}
              `}
            >
              {letter}
            </span>
          ))}
        </div>

        {isHit && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="animate-strike-hit scale-75 md:scale-100">
               <svg width="200" height="300" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_25px_25px_rgba(244,114,182,0.3)]">
                <path d="M50 5C25 5 5 25 5 65C5 115 25 145 50 145C75 145 95 115 95 65C95 25 75 5 50 5Z" fill="#F472B6" />
                <path d="M50 15C35 15 20 30 20 60" stroke="white" strokeWidth="6" strokeLinecap="round" />
                <path d="M50 15C65 15 80 30 80 60" stroke="white" strokeWidth="6" strokeLinecap="round" />
                <text x="50" y="90" textAnchor="middle" fill="white" fontSize="8" fontWeight="900" fontFamily="Montserrat" letterSpacing="2">IPANEMA</text>
                <circle cx="50" cy="15" r="3" fill="white" />
              </svg>
            </div>
          </div>
        )}

        <div className="mt-12">
          <p className={`text-[9px] font-black tracking-[0.5em] uppercase transition-colors duration-500 ${isHit ? 'text-pink-400' : 'text-gray-300'}`}>
            {isHit ? 'Tudo certo! Entrando com o pé direito.' : 'Toque para começar com o pé direito'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
