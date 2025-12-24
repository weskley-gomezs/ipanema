
import React, { useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isHit, setIsHit] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const word = "PÉ-ESQUERDO";
  const letters = word.split("");

  const getShatterStyle = (index: number) => {
    if (!isHit) return {};
    const angle = (index / letters.length) * 360;
    const distance = 400 + Math.random() * 200;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const rotate = Math.random() * 720 - 360;
    
    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
      opacity: 0,
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };

  const handleHit = () => {
    if (isHit) return;
    setIsHit(true);
    
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 600);
    }, 1200);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 overflow-hidden ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div 
        className="relative z-10 w-full max-w-4xl text-center p-10 cursor-pointer min-h-[500px] flex flex-col items-center justify-center" 
        onClick={handleHit}
      >
        {!isHit && (
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-xl font-bold text-gray-400 uppercase tracking-[0.5em] mb-4">Ipanema</h2>
            <p className="text-gray-300 text-sm tracking-widest uppercase">Afaste o azar para começar bem</p>
          </div>
        )}

        <div className={`flex items-center justify-center flex-wrap gap-2 transition-transform duration-500 ${!isHit ? 'hover:scale-105 active:scale-95' : ''}`}>
          {letters.map((letter, index) => (
            <span 
              key={index}
              style={getShatterStyle(index)}
              className={`text-5xl md:text-9xl font-black text-gray-900 tracking-tighter uppercase select-none transition-all duration-300 inline-block
                ${letter === '-' ? 'mx-4 opacity-10' : ''}
              `}
            >
              {letter}
            </span>
          ))}
        </div>

        {isHit && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="animate-strike-hit">
               <svg width="280" height="380" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_45px_45px_rgba(0,0,0,0.3)]">
                <path d="M50 5C25 5 5 25 5 65C5 115 25 145 50 145C75 145 95 115 95 65C95 25 75 5 50 5Z" fill="#F472B6" />
                <path d="M50 15C35 15 20 30 20 60" stroke="white" strokeWidth="8" strokeLinecap="round" />
                <path d="M50 15C65 15 80 30 80 60" stroke="white" strokeWidth="8" strokeLinecap="round" />
                <text x="50" y="90" textAnchor="middle" fill="white" fontSize="10" fontWeight="black" fontFamily="Montserrat">IPANEMA</text>
                <circle cx="50" cy="15" r="4" fill="white" />
              </svg>
            </div>
            <div className="absolute w-60 h-60 bg-pink-400/10 rounded-full animate-ping"></div>
          </div>
        )}

        <div className="absolute bottom-20 left-0 right-0 text-center">
          <p className="text-pink-400 text-sm font-black tracking-[0.4em] uppercase animate-pulse">
            {isHit ? 'Pronto! Começando com o pé direito.' : 'Clique acima para entrar com o pé direito'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
