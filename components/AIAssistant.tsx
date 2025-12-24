
import React, { useState } from 'react';
import { getFashionAdvice } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    const advice = await getFashionAdvice(prompt);
    setResponse(advice || "Nossa IA está pegando uma onda agora. Tente novamente em um instante!");
    setLoading(false);
  };

  return (
    <section id="dicas" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-blue-50/30 to-white -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-100/50 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="glass-card rounded-[4rem] p-8 md:p-16 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-tr from-pink-200 to-blue-200 rounded-3xl rotate-12 flex items-center justify-center shadow-lg animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">✨</span>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Estilo Sob Medida</h2>
              <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
                Nossa IA inteligente conhece cada detalhe da Coleção Pastéis. Pergunte como elevar seu look para aquela ocasião especial.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative mb-12 group">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Look romântico com Ipanema Rosa Glacê?"
              className="w-full bg-white border-2 border-gray-100 rounded-3xl py-6 px-10 focus:border-blue-200 focus:outline-none transition-all shadow-sm text-lg text-gray-800 placeholder:text-gray-300 group-hover:border-pink-100"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-3 top-3 bottom-3 bg-gray-900 text-white px-10 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-blue-400 transition-all duration-500 shadow-xl disabled:opacity-50 overflow-hidden animate-btn-shine group-hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">{loading ? 'Analisando...' : 'Perguntar'}</span>
            </button>
          </form>

          {response && (
            <div className="bg-white/80 rounded-3xl p-8 md:p-12 border border-blue-50 animate-fade-in shadow-inner relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-300" />
               <div className="flex items-center gap-4 mb-6">
                 <span className="text-2xl">🐚</span>
                 <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs">Curadoria Ipanema</h4>
               </div>
               <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap font-medium italic">
                 "{response}"
               </div>
            </div>
          )}
          
          <div className="mt-12 flex justify-center gap-4">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">IA em tons pastéis v1.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
