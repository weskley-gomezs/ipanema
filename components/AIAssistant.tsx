import React, { useState } from 'react';
import { getFashionAdvice } from '../services/geminiService';
import { SiteTheme } from '../types';

interface AIAssistantProps {
  theme: SiteTheme;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ theme }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Look de Linho & Ipanema",
    "Menta vs Lavanda: como combinar?",
    "Estilo Pôr do Sol no Arpoador",
    "Conforto Chic para o dia a dia",
  ];

  const handleSubmit = async (e?: React.FormEvent, manualPrompt?: string) => {
    if (e) e.preventDefault();
    const finalPrompt = manualPrompt || prompt;
    if (!finalPrompt.trim()) return;

    setLoading(true);
    if (manualPrompt) setPrompt(manualPrompt);
    
    const advice = await getFashionAdvice(finalPrompt);
    setResponse(advice || "Nossa IA está pegando uma onda agora. Tente novamente em um instante!");
    setLoading(false);
  };

  const getAccentClass = () => {
    switch(theme) {
      case 'pink': return 'bg-pink-100 text-pink-500 hover:text-pink-400 border-pink-200';
      case 'blue': return 'bg-blue-100 text-blue-500 hover:text-blue-400 border-blue-200';
      case 'mint': return 'bg-green-100 text-green-600 hover:text-green-500 border-green-200';
      case 'lavender': return 'bg-purple-100 text-purple-500 hover:text-purple-400 border-purple-200';
      default: return 'bg-pink-100 text-pink-500 hover:text-pink-400 border-pink-200';
    }
  };

  const getFocusClass = () => {
    switch(theme) {
      case 'pink': return 'focus:border-pink-200 focus:ring-pink-100';
      case 'blue': return 'focus:border-blue-200 focus:ring-blue-100';
      case 'mint': return 'focus:border-green-200 focus:ring-green-100';
      case 'lavender': return 'focus:border-purple-200 focus:ring-purple-100';
      default: return 'focus:border-pink-200 focus:ring-pink-100';
    }
  };

  const getButtonClass = () => {
    switch(theme) {
      case 'pink': return 'hover:bg-pink-500 bg-pink-400';
      case 'blue': return 'hover:bg-blue-500 bg-blue-400';
      case 'mint': return 'hover:bg-green-600 bg-green-500';
      case 'lavender': return 'hover:bg-purple-500 bg-purple-400';
      default: return 'bg-gray-900 hover:bg-gray-800';
    }
  };

  return (
    <section id="dicas" className="py-32 relative">
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white transition-colors duration-700 ${
        theme === 'pink' ? 'via-pink-50/20' : 
        theme === 'blue' ? 'via-blue-50/20' : 
        theme === 'mint' ? 'via-green-50/20' : 
        theme === 'lavender' ? 'via-purple-50/20' : 
        'via-pink-50/20'
      } to-white -z-10`} />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="glass-card rounded-[4rem] p-10 md:p-16 shadow-2xl relative border-white/50 border">
          <div className="text-center mb-12">
            <div className={`inline-block px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-6 transition-colors duration-500 ${getAccentClass().split(' ').slice(0, 2).join(' ')}`}>
              Ipanema Stylist IA
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight font-hero">
              Consultor de Estilo
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mx-auto italic font-medium">
              "A beleza está nos detalhes e no conforto de ser quem você é."
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSubmit(undefined, s)}
                className={`px-5 py-2 rounded-full border border-gray-100 bg-white/50 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all shadow-sm ${
                  theme === 'pink' ? 'hover:border-pink-200 hover:text-pink-400' :
                  theme === 'blue' ? 'hover:border-blue-200 hover:text-blue-400' :
                  theme === 'mint' ? 'hover:border-green-200 hover:text-green-500' :
                  theme === 'lavender' ? 'hover:border-purple-200 hover:text-purple-400' :
                  'hover:border-pink-200 hover:text-pink-400'
                } hover:bg-white`}
              >
                {s}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative mb-12 group">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva seu momento ou peça de roupa..."
              className={`w-full bg-white border-2 border-gray-100 rounded-[2rem] py-6 px-10 focus:outline-none transition-all shadow-sm text-lg text-gray-800 placeholder:text-gray-300 ${getFocusClass()}`}
            />
            <button
              type="submit"
              disabled={loading}
              className={`absolute right-3 top-3 bottom-3 text-white px-10 rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 shadow-xl disabled:opacity-50 overflow-hidden ${getButtonClass()}`}
            >
              {loading ? 'Sincronizando...' : 'Consultar'}
            </button>
          </form>

          {response && (
            <div className={`bg-white/90 rounded-[3rem] p-10 md:p-14 border animate-fade-in shadow-xl relative transition-colors duration-500 ${
              theme === 'pink' ? 'border-pink-50' :
              theme === 'blue' ? 'border-blue-50' :
              theme === 'mint' ? 'border-green-50' :
              theme === 'lavender' ? 'border-purple-50' :
              'border-pink-50'
            }`}>
               <div className="absolute top-8 left-8 text-3xl opacity-20">✨</div>
               <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap font-medium">
                 {response}
               </div>
               <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                 <span className={`text-[9px] font-black uppercase tracking-widest transition-colors duration-500 ${
                   theme === 'pink' ? 'text-pink-300' :
                   theme === 'blue' ? 'text-blue-300' :
                   theme === 'mint' ? 'text-green-300' :
                   theme === 'lavender' ? 'text-purple-300' :
                   'text-pink-300'
                 }`}>Inspirado pelo Rio</span>
                 <button onClick={() => setResponse(null)} className="text-[9px] font-bold text-gray-300 uppercase hover:text-gray-500 transition-colors">Fechar</button>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;