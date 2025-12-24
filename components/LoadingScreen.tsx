
import React, { useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isHit, setIsHit] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const word = "LACRAÇÃO";
  const letters = word.split("");

  // Mapeamento de classes de animação para cada letra
  const shatterClasses = [
    "shatter-L",
    "shatter-A1",
    "shatter-C",
    "shatter-R",
    "shatter-A2",
    "shatter-Ç",
    "shatter-Ã",
    "shatter-O"
  ];

  const handleHit = () => {
    if (isHit) return;
    setIsHit(true);
    
    // Tempo para ver as letras voando e a sandalha batendo
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 500);
    }, 1200);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 overflow-hidden ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center p-10 cursor-crosshair h-[500px] flex items-center justify-center" onClick={handleHit}>
        
        {/* Container das Letras */}
        <div className={`flex items-center justify-center space-x-1 ${!isHit ? 'animate-cockroach' : ''}`}>
          {letters.map((letter, index) => (
            <span 
              key={index}
              className={`text-6xl md:text-8xl font-black text-black tracking-tighter uppercase select-none transition-all duration-300 inline-block
                ${isHit ? shatterClasses[index] : ''}
              `}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* A Sandalha Ipanema que cai do céu */}
        {isHit && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="animate-strike-hit">
               <svg width="200" height="300" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                <path d="M50 5C25 5 5 25 5 65C5 115 25 145 50 145C75 145 95 115 95 65C95 25 75 5 50 5Z" fill="#F472B6" />
                <path d="M50 15C35 15 20 30 20 60" stroke="white" strokeWidth="6" strokeLinecap="round" />
                <path d="M50 15C65 15 80 30 80 60" stroke="white" strokeWidth="6" strokeLinecap="round" />
                <text x="50" y="90" textAnchor="middle" fill="white" fontSize="10" fontWeight="black" fontFamily="Montserrat">IPANEMA</text>
              </svg>
            </div>
          </div>
        )}

        {/* Feedback visual para o usuário */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase animate-pulse">
            {isHit ? 'Iniciando com o pé direito...' : 'Acerte o alvo para entrar'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
