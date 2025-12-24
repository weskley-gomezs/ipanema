
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getThemeColor = () => {
    switch(product.color) {
      case 'pink': return 'bg-pink-50/50';
      case 'blue': return 'bg-blue-50/50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <div className="group flex flex-col items-center">
      <div className={`relative w-full aspect-[4/5] ${getThemeColor()} rounded-[3.5rem] overflow-hidden mb-10 transition-all duration-1000 group-hover:rounded-[2rem] group-hover:shadow-2xl group-hover:-translate-y-4`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-12 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6"
        />
        
        {/* New Arrival Tag */}
        <div className="absolute top-8 left-8">
           <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-900 bg-white px-4 py-2 rounded-full shadow-sm">Nova Coleção</span>
        </div>

        {/* Hover Action */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.4em] px-10 py-5 rounded-full shadow-2xl transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110 active:scale-95">
            Eu quero
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-900 mb-2 group-hover:text-pink-400 transition-colors">{product.name}</h3>
        <p className="text-[11px] font-semibold text-gray-400 mb-4 tracking-widest italic">{product.description}</p>
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-gray-200"></span>
          <span className="text-lg font-bold text-gray-900">R$ {product.price.toFixed(2)}</span>
          <span className="w-8 h-[1px] bg-gray-200"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
