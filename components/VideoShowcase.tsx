
import React from 'react';

const VideoShowcase: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 group">
          <img 
            src="https://instagram.fbsb24-1.fna.fbcdn.net/v/t39.30808-6/588038155_1148406390834134_342401320865412344_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc3MDc5NDQzMjQwNTQ5MTcyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=UyIF6zCuyKsQ7kNvwFWYLNo&_nc_oc=Adm0tiAwHWaAYx-EzbDqrhlIDU9PXaNMr427Zel0wSf8U7dDqbbDHRX7SP6pOYPhmUSjj2oxKj1lsKK6lavrYG40&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb24-1.fna&_nc_gid=W7og6bWWb_pHPX49nftOyw&oh=00_Afn4ZFQ9wTth7GOLfPX8ibhvNHaySOGpVrdNeC5i5b9BYA&oe=6951E0EC" 
            alt="Estilo de vida Ipanema"
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-70"></div>
          
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 flex flex-col gap-2">
            <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.6em] drop-shadow-md">Inspiração</span>
            <span className="text-white font-hero text-3xl md:text-6xl opacity-95 drop-shadow-2xl italic">
              Sinta a Leveza do Rio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
