
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
    setResponse(advice || "Opa! Não consegui pensar em nada agora.");
    setLoading(false);
  };

  return (
    <section id="dicas" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-blue-100 border border-blue-100 transform transition-all duration-500 hover:shadow-blue-200">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Consultor de Moda Ipanema</h2>
              <p className="text-gray-500">Pergunte à nossa IA como combinar suas Ipanemas pastéis para qualquer ocasião.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative group">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Como usar minha Ipanema Azul Pastel num jantar na praia?"
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 focus:border-blue-300 focus:outline-none transition-all pr-16 text-gray-700 group-hover:border-blue-100"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-blue-400 text-white px-6 rounded-xl hover:bg-blue-500 transition-all duration-300 disabled:opacity-50 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg overflow-hidden animate-btn-shine"
              >
                <span className="relative z-10">{loading ? '...' : 'Enviar'}</span>
              </button>
            </div>
          </form>

          {response && (
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 animate-fade-in shadow-inner">
              <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Sugestão da Ipanema:
              </h4>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
