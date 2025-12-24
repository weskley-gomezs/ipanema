
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
      image: 'https://instagram.fbsb24-1.fna.fbcdn.net/v/t39.30808-6/600347808_1167664028908370_459852217892285797_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzc4OTg0ODg5MjcxMjQ3NjgzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=fOTAQrIKEbkQ7kNvwH0szkP&_nc_oc=AdmwvlawgVlx_ZpHqI2iLaxcIG0FffYMTGy4RsQT8EMC5tmAqu3ilf-_6QhT6bJVfoEd-avPOisiyWhtuf5Qrz8b&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb24-1.fna&_nc_gid=kP3LdX7mY19cHlcDWOutpA&oh=00_AfnzGULEKwCy_C_cl2-4_-V9sI3-tbu3h50WMTmc1Ra5EA&oe=6951D9A7',
      accentColor: 'bg-pink-300'
    },
    {
      title: 'Masculino',
      description: 'Conforto essencial para o dia a dia.',
      image: 'https://i.imgur.com/ADl6g6E.jpeg',
      accentColor: 'bg-blue-300'
    },
    {
      title: 'Unissex',
      description: 'Estilo sem fronteiras para todos.',
      image: 'https://i.imgur.com/nzLlBfF.jpeg', 
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
