
import React from 'react';
import { STYLE_TIPS } from '../constants';
import { SiteTheme } from '../types';

interface StyleInspirationsProps {
  theme: SiteTheme;
}

const StyleInspirations: React.FC<StyleInspirationsProps> = ({ theme }) => {
  return (
    <section id="estilo" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className={`text-[10px] font-black uppercase tracking-[0.5em] mb-4 block ${theme === 'pink' ? 'text-pink-400' : theme === 'blue' ? 'text-blue-400' : 'text-gray-400'}`}>Guia de Estilo</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight font-hero italic">
              Como Brilhar com <br/> a Coleção Pastéis
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-xs font-medium italic">
            "A moda é uma conversa entre você e o mundo. Comece com leveza."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STYLE_TIPS.map((item, index) => (
            <div key={index} className="group cursor-default">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className={`absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40 ${theme === 'pink' ? 'bg-pink-300' : theme === 'blue' ? 'bg-blue-300' : 'bg-gray-900'}`}></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                      {item.tip}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 font-hero">{item.title}</h3>
              <div className={`w-12 h-1 rounded-full transition-all duration-500 group-hover:w-full ${theme === 'pink' ? 'bg-pink-200' : theme === 'blue' ? 'bg-blue-200' : 'bg-gray-100'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleInspirations;
