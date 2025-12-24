
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-full aspect-[4/5] bg-[#F9F9F9] rounded-[2rem] overflow-hidden mb-6 transition-transform duration-700 hover:scale-[1.05] shadow-sm hover:shadow-xl">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Hover overlay profissional */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] px-8 py-4 rounded-full shadow-2xl transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-gray-900 hover:text-white hover:scale-110 active:scale-90">
            Adicionar
          </button>
        </div>

        <div className="absolute top-6 left-6 transition-transform duration-500 group-hover:-translate-y-2">
           <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 bg-white/80 px-3 py-1 rounded-full shadow-sm">New Arrival</span>
        </div>
      </div>
      
      <div className="text-center transition-all duration-500 group-hover:translate-y-[-4px]">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-2">{product.name}</h3>
        <p className="text-[10px] font-bold text-gray-400 mb-3 tracking-widest">Coleção {product.color === 'pink' ? 'Rosa Glacê' : product.color === 'blue' ? 'Azul Sereno' : 'Branco Pérola'}</p>
        <span className="text-sm font-medium text-gray-900">R$ {product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
