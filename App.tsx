
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionCategories from './components/CollectionCategories';
import VideoShowcase from './components/VideoShowcase';
import ProductCard from './components/ProductCard';
import AIAssistant from './components/AIAssistant';
import LoadingScreen from './components/LoadingScreen';
import { PRODUCTS } from './constants';

export type SiteTheme = 'default' | 'pink' | 'blue';

const App: React.FC = () => {
  const [showSite, setShowSite] = useState(false);
  const [theme, setTheme] = useState<SiteTheme>('default');

  const getThemeClasses = () => {
    switch (theme) {
      case 'pink': return 'theme-pink selection:bg-pink-100 selection:text-pink-600';
      case 'blue': return 'theme-blue selection:bg-blue-100 selection:text-blue-600';
      default: return 'theme-default selection:bg-pink-100 selection:text-pink-600';
    }
  };

  return (
    <div className={`min-h-screen bg-white transition-colors duration-700 ${getThemeClasses()}`}>
      {!showSite && <LoadingScreen onComplete={() => setShowSite(true)} />}
      
      {showSite && (
        <div className="animate-in fade-in duration-1000">
          <Navbar currentTheme={theme} onThemeChange={setTheme} />
          
          <main>
            <Hero activeTheme={theme} />

            {/* Sessão: Categorias Masculino, Feminino, Unissex */}
            <CollectionCategories theme={theme} />

            {/* Nova Sessão: Vídeo da Campanha */}
            <VideoShowcase />

            {/* Product Collection - Fundo Rosa Pastel */}
            <section id="colecao" className="py-32 bg-pink-50/50">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-24">
                  <h2 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight">Escolha sua Ipanema</h2>
                  <div className={`w-24 h-1.5 mx-auto rounded-full transition-all duration-500 ${theme === 'pink' ? 'bg-pink-400' : theme === 'blue' ? 'bg-blue-400' : 'bg-pink-200'}`}></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                  {PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>

            {/* AI Assistant Section */}
            <div className="py-16">
              <AIAssistant />
            </div>

            {/* Mission / About Section */}
            <section id="sobre" className="py-40 bg-white relative overflow-hidden">
              <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-24">
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src="https://instagram.fbsb24-1.fna.fbcdn.net/v/t51.75761-15/500157301_18503879119003314_3468052909958203451_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzYzODkyNTgzOTk2NzgzODM4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=yLBS1i4y1X8Q7kNvwHdYQHh&_nc_oc=AdlK4cNyjVmObCbTlwsQjKXrJklS2QTHmXx6UX9hVRRdFu-3PeYhMI-zswTy-OTXDvfX3dFyULo1BEc_iDjjovg1&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb24-1.fna&_nc_gid=49zFTOVj0YRuyYwJ63o-4A&oh=00_Afm_u5znaaQs5mSSCjh-h9ADqaVyj-wUI_s6mbolpNtg6g&oe=6951C46D" 
                      alt="Estilo de vida Ipanema" 
                      className="rounded-[4rem] shadow-3xl relative z-10 w-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className={`absolute -top-16 -left-16 w-56 h-56 rounded-full -z-0 transition-all duration-700 blur-2xl opacity-40 group-hover:scale-125 ${theme === 'blue' ? 'bg-blue-200' : 'bg-blue-100'}`}></div>
                    <div className={`absolute -bottom-16 -right-16 w-80 h-80 rounded-full -z-0 transition-all duration-700 blur-2xl opacity-40 group-hover:scale-125 ${theme === 'pink' ? 'bg-pink-200' : 'bg-pink-100'}`}></div>
                  </div>
                </div>
                <div className="lg:w-1/2 text-left">
                  <h2 className="text-5xl font-black text-gray-900 mb-12 leading-[1.2] tracking-tight">Começar com o pé direito é uma escolha diária.</h2>
                  <div className="space-y-8">
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Na Ipanema, acreditamos que a moda deve ser leve, democrática e cheia de boas energias. Nossa nova coleção em tons pastéis foi desenhada para quem valoriza o conforto e a suavidade em cada passo.
                    </p>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Cada par é fabricado com materiais 100% recicláveis, reafirmando nosso compromisso com o planeta enquanto cuidamos dos seus passos. É a alma do Rio, para os pés do mundo.
                    </p>
                  </div>
                  <div className="mt-16">
                    <button className={`relative px-12 py-5 text-white rounded-full font-black uppercase tracking-[0.3em] text-[11px] transition-all shadow-xl hover:scale-110 active:scale-95 overflow-hidden animate-btn-shine ${theme === 'pink' ? 'bg-pink-400 shadow-pink-100 hover:shadow-pink-200' : theme === 'blue' ? 'bg-blue-400 shadow-blue-100 hover:shadow-blue-200' : 'bg-gray-900 hover:bg-pink-400 shadow-gray-100 hover:shadow-pink-200'}`}>
                      <span className="relative z-10">Nossa Sustentabilidade</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer - Fundo Azul Pastel */}
          <footer className="bg-blue-50 py-32 border-t border-blue-100">
            <div className="container mx-auto px-4 text-center">
              <span className={`text-3xl font-black tracking-[0.5em] mb-10 block transition-all duration-700 hover:scale-110 cursor-default ${theme === 'pink' ? 'text-pink-400' : theme === 'blue' ? 'text-blue-400' : 'text-pink-400'}`}>IPANEMA</span>
              <p className="text-gray-400 text-base max-w-lg mx-auto mb-12 leading-relaxed tracking-wide">A marca que leva a essência vibrante e solar do Rio de Janeiro para o mundo, com conforto, sustentabilidade e estilo incomparáveis.</p>
              <div className="flex justify-center space-x-12 mb-16">
                <a href="#" className="group relative text-gray-500 font-bold uppercase tracking-widest text-xs hover:text-pink-400 transition-all duration-300 hover:scale-110">
                  Instagram
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="group relative text-gray-500 font-bold uppercase tracking-widest text-xs hover:text-blue-400 transition-all duration-300 hover:scale-110">
                  Facebook
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="group relative text-gray-500 font-bold uppercase tracking-widest text-xs hover:text-gray-900 transition-all duration-300 hover:scale-110">
                  Pinterest
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.2em]">&copy; 2026 Ipanema - Grendene S/A. Todos os direitos reservados.</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
