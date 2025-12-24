
import React from 'react';
import { SiteTheme } from '../App';

interface CollectionCategoriesProps {
  theme: SiteTheme;
}

const CollectionCategories: React.FC<CollectionCategoriesProps> = ({ theme }) => {
  const categories = [
    {
      title: 'Feminino',
      description: 'Leveza e elegância em cada passo.',
      image: 'https://instagram.fbsb24-1.fna.fbcdn.net/v/t39.30808-6/600347808_1167664028908370_459852217892285797_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzc4OTg0ODg5MjcxMjQ3NjgzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=fOTAQrIKEbkQ7kNvwH0szkP&_nc_oc=AdmwvlawgVlx_ZpHqI2iLaxcIG0FffYMTGy4RsQT8EMC5tmAqu3ilf-_6QhT6bJVfoEd-avPOisiyWhtuf5Qrz8b&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb24-1.fna&_nc_gid=TwjfDThUjn0m6gVwELTPcg&oh=00_AfnkNX1AErFVo0cGq2YdnzKTxSYYz0luleTyeDJzDU0K3Q&oe=6951D9A7',
      color: 'bg-pink-100',
      textColor: 'text-pink-600'
    },
    {
      title: 'Masculino',
      description: 'Conforto essencial para o dia a dia.',
      image: 'https://i.imgur.com/ADl6g6E.jpeg',
      color: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Unissex',
      description: 'Estilo sem fronteiras para todos.',
      image: 'https://i.imgur.com/nzLlBfF.jpeg', 
      color: 'bg-gray-100',
      textColor: 'text-gray-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2`}
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90`}></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end items-center text-center">
                <h3 className="font-hero text-4xl md:text-5xl text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  {cat.title}
                </h3>
                <p className="text-white/90 text-sm font-medium tracking-widest uppercase mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  {cat.description}
                </p>
                <div className={`w-12 h-1 rounded-full bg-white transform origin-center transition-all duration-500 scale-x-50 group-hover:scale-x-100`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionCategories;
