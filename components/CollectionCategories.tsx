import React from 'react';
import { SiteTheme } from '../types';

interface CollectionCategoriesProps {
  theme: SiteTheme;
}

const CollectionCategories: React.FC<CollectionCategoriesProps> = ({ theme }) => {
  const categories = [
    {
      title: 'Feminino',
      description: 'Leveza e elegância em cada passo.',
      image: 'https://images.unsplash.com/photo-1515377662630-6c75cc922190?q=80&w=2070&auto=format&fit=crop',
      accentColor: 'bg-pink-300'
    },
    {
      title: 'Masculino',
      description: 'Conforto essencial para o dia a dia.',
      image: 'https://images.unsplash.com/photo-1534105151522-86f78479e0a0?q=80&w=1974&auto=format&fit=crop',
      accentColor: 'bg-blue-300'
    },
    {
      title: 'Unissex',
      description: 'Estilo sem fronteiras para todos.',
      image: 'https://images.unsplash.com/photo-1523381235312-3f182e0f9510?q=80&w=2071&auto=format&fit=crop', 
      accentColor: 'bg-gray-300'
    }
  ];

  const getGlobalAccent = () => {
    switch(theme) {
      case 'pink': return 'bg-pink-400';
      case 'blue': return 'bg-blue-400';
      case 'mint': return 'bg-green-400';
      case 'lavender': return 'bg-purple-400';
      default: return 'bg-white';
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group relative h-[600px] rounded-[3.5rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-1000 hover:-translate-y-4 hover:shadow-2xl"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end items-center text-center">
                <h3 className="font-hero text-5xl text-white mb-4 drop-shadow-2xl">
                  {cat.title}
                </h3>
                <p className="text-white/90 text-xs font-bold tracking-[0.3em] uppercase mb-8 drop-shadow-md">
                  {cat.description}
                </p>
                <div className={`w-16 h-1 rounded-full transition-all duration-700 ${theme === 'default' ? 'bg-white' : getGlobalAccent()} transform scale-x-50 group-hover:scale-x-125`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionCategories;