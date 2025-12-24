
import React from 'react';

const VideoShowcase: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://storage.googleapis.com/grendene-digital-commerce-landingpages/Ipanema/202511_VM_LG_Ipanema_AtualizacaoHome_Pluma_BannerHome_D.webm" type="video/webm" />
            Seu navegador não suporta vídeos.
          </video>
          
          {/* Subtle Overlay to match site aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Optional: Floating Brand Element */}
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
            <span className="text-white font-hero text-2xl md:text-4xl opacity-90 drop-shadow-lg">
              Sinta a Leveza
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
