
import React, { useState } from 'react';
import { getFashionAdvice } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Look para o pôr do sol",
    "Estilo casual chic",
    "Como usar com linho?",
    "Cores que combinam com azul"
  ];

  const handleSubmit = async (e?: React.FormEvent, manualPrompt?: string) => {
    if (e) e.preventDefault();
    const finalPrompt = manualPrompt || prompt;
    if (!finalPrompt.trim()) return;

    setLoading(true);
    setPrompt(finalPrompt);
    const advice = await getFashionAdvice(finalPrompt);
    setResponse(advice || "Nossa IA está pegando uma onda agora. Tente novamente em um instante!");
    setLoading(false);
  };

  return (
    <section id="dicas" className="py-32 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-pink-50/20 to-white -z-10" />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="glass-card rounded-[4rem] p-10 md:p-16 shadow-2xl relative border-white/50 border">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-pink-100 text-pink-500 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              Ipanema Stylist IA
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight font-hero">
              Consul de Estilo
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mx-auto italic font-medium">
              "A beleza está nos detalhes e no conforto de ser quem você é."
            </p>
          </div>

          {/* Suggestion Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSubmit(undefined, s)}
                className="px-5 py-2 rounded-full border border-gray-100 bg-white/50 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:border-pink-200 hover:text-pink-400 hover:bg-white transition-all shadow-sm"
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
              className="w-full bg-white border-2 border-gray-100 rounded-[2rem] py-6 px-10 focus:border-pink-200 focus:outline-none transition-all shadow-sm text-lg text-gray-800 placeholder:text-gray-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-3 top-3 bottom-3 bg-gray-900 text-white px-10 rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-pink-400 transition-all duration-500 shadow-xl disabled:opacity-50 overflow-hidden"
            >
              {loading ? 'Sincronizando...' : 'Consultar'}
            </button>
          </form>

          {response && (
            <div className="bg-white/90 rounded-[3rem] p-10 md:p-14 border border-pink-50 animate-fade-in shadow-xl relative">
               <div className="absolute top-8 left-8 text-3xl opacity-20">✨</div>
               <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap font-medium">
                 {response}
               </div>
               <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                 <span className="text-[9px] font-black text-pink-300 uppercase tracking-widest">Inspirado pelo Rio</span>
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
