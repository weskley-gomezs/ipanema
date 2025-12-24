
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
            <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-walking-on-the-beach-at-sunset-1314-large.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
            <span className="text-white font-hero text-2xl md:text-5xl opacity-90 drop-shadow-lg italic">
              Sinta a Leveza do Rio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
