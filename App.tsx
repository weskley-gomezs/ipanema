import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionCategories from './components/CollectionCategories';
import VideoShowcase from './components/VideoShowcase';
import ProductCard from './components/ProductCard';
import StyleInspirations from './components/StyleInspirations';
import AIAssistant from './components/AIAssistant';
import LoadingScreen from './components/LoadingScreen';
import { PRODUCTS } from './constants';
import { SiteTheme } from './types';

const App: React.FC = () => {
  const [showSite, setShowSite] = useState(false);
  const [theme, setTheme] = useState<SiteTheme>('default');

  const getThemeClasses = () => {
    switch (theme) {
      case 'pink': return 'theme-pink selection:bg-pink-100 selection:text-pink-600';
      case 'blue': return 'theme-blue selection:bg-blue-100 selection:text-blue-600';
      case 'mint': return 'theme-mint selection:bg-green-100 selection:text-green-600';
      case 'lavender': return 'theme-lavender selection:bg-purple-100 selection:text-purple-600';
      default: return 'theme-default selection:bg-pink-100 selection:text-pink-600';
    }
  };

  const getGlobalAccent = () => {
    switch(theme) {
      case 'pink': return 'bg-pink-400';
      case 'blue': return 'bg-blue-400';
      case 'mint': return 'bg-green-500';
      case 'lavender': return 'bg-purple-400';
      default: return 'bg-gray-900';
    }
  };

  const getButtonHoverClass = () => {
    switch(theme) {
      case 'pink': return 'hover:bg-pink-500';
      case 'blue': return 'hover:bg-blue-500';
      case 'mint': return 'hover:bg-green-600';
      case 'lavender': return 'hover:bg-purple-500';
      default: return 'hover:bg-gray-800';
    }
  };

  const getFocusRingClass = () => {
    switch(theme) {
      case 'pink': return 'focus:ring-pink-200';
      case 'blue': return 'focus:ring-blue-200';
      case 'mint': return 'focus:ring-green-200';
      case 'lavender': return 'focus:ring-purple-200';
      default: return 'focus:ring-gray-200';
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

            <div className="bg-waves">
              <CollectionCategories theme={theme} />
              
              <VideoShowcase />

              {/* AI Assistant Section - A Helping Foot */}
              <AIAssistant theme={theme} />

              {/* Style Inspirations Section */}
              <StyleInspirations theme={theme} />
            </div>

            {/* Product Collection */}
            <section id="colecao" className={`py-40 transition-colors duration-700 ${
              theme === 'blue' ? 'bg-blue-50/20' : 
              theme === 'pink' ? 'bg-pink-50/20' : 
              theme === 'mint' ? 'bg-green-50/20' : 
              theme === 'lavender' ? 'bg-purple-50/20' :
              'bg-gray-50/20'
            }`}>
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-32">
                  <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Escolha seu par</span>
                  <h2 className="text-6xl font-black text-gray-900 mb-8 tracking-tighter font-hero italic">A Coleção Pastéis</h2>
                  <div className={`w-32 h-1 mx-auto rounded-full transition-all duration-500 ${
                    theme === 'pink' ? 'bg-pink-300' : 
                    theme === 'blue' ? 'bg-blue-300' : 
                    theme === 'mint' ? 'bg-green-300' : 
                    theme === 'lavender' ? 'bg-purple-300' :
                    'bg-gray-200'
                  }`}></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                  {PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-32 bg-white relative overflow-hidden">
               <div className="container mx-auto px-6 max-w-5xl">
                  <div className={`rounded-[4rem] p-16 text-center transition-colors duration-700 ${
                    theme === 'pink' ? 'bg-pink-50' : 
                    theme === 'blue' ? 'bg-blue-50' : 
                    theme === 'mint' ? 'bg-green-50' : 
                    theme === 'lavender' ? 'bg-purple-50' :
                    'bg-gray-50'
                  }`}>
                    <h2 className="text-4xl font-black text-gray-900 mb-6 font-hero">Ipanema Club</h2>
                    <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">Receba novidades, dicas de estilo e promoções exclusivas diretamente no seu email.</p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                      <input 
                        type="email" 
                        placeholder="Seu melhor e-mail" 
                        className={`flex-1 px-8 py-5 rounded-full border-none focus:ring-2 outline-none shadow-sm ${getFocusRingClass()}`}
                      />
                      <button className={`px-10 py-5 text-white rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-xl ${getGlobalAccent()} ${getButtonHoverClass()}`}>
                        Assinar
                      </button>
                    </form>
                  </div>
               </div>
            </section>

            {/* Manifesto Section */}
            <section id="sobre" className="py-40 bg-white relative">
              <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-24">
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1590673885247-aa7f509ddfa4?q=80&w=2070&auto=format&fit=crop" 
                      alt="Estilo de vida Ipanema" 
                      className="rounded-[4rem] shadow-3xl relative z-10 w-full object-cover aspect-[4/5] transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 rounded-[4rem] -rotate-3 -z-0 transition-colors duration-700 ${
                      theme === 'pink' ? 'bg-pink-100/30' :
                      theme === 'blue' ? 'bg-blue-100/30' :
                      theme === 'mint' ? 'bg-green-100/30' :
                      theme === 'lavender' ? 'bg-purple-100/30' :
                      'bg-pink-100/30'
                    }`}></div>
                  </div>
                </div>
                <div className="lg:w-1/2 text-left">
                  <h2 className="text-6xl font-black text-gray-900 mb-12 leading-[1.1] tracking-tighter font-hero">O amanhã começa com leveza.</h2>
                  <div className="space-y-10">
                    <p className="text-gray-500 text-xl leading-relaxed font-medium">
                      A Ipanema nasceu nas areias do Rio para ganhar o mundo. Nossa missão é democratizar a moda, trazendo conforto e as cores do verão para o seu cotidiano, não importa onde você esteja.
                    </p>
                    <p className="text-gray-500 text-xl leading-relaxed font-medium">
                      Compromisso real: Nossas sandálias são 100% veganas e recicláveis. Porque para começar com o pé direito, precisamos cuidar do chão que pisamos.
                    </p>
                  </div>
                  <div className="mt-16">
                    <button className={`px-12 py-6 text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] transition-all shadow-2xl ${getGlobalAccent()} ${getButtonHoverClass()} hover:scale-105`}>
                      Conheça nossa Jornada
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className={`py-32 border-t transition-colors duration-700 ${
            theme === 'blue' ? 'bg-blue-50 border-blue-100' : 
            theme === 'pink' ? 'bg-pink-50 border-pink-100' : 
            theme === 'mint' ? 'bg-green-50 border-green-100' : 
            theme === 'lavender' ? 'bg-purple-50 border-purple-100' :
            'bg-gray-50 border-gray-100'
          }`}>
            <div className="container mx-auto px-4 text-center">
              <span className={`text-4xl font-black tracking-[0.5em] mb-12 block transition-all duration-700 hover:scale-110 cursor-default ${
                theme === 'pink' ? 'text-pink-400' : 
                theme === 'blue' ? 'text-blue-400' : 
                theme === 'mint' ? 'text-green-400' : 
                theme === 'lavender' ? 'text-purple-400' :
                'text-pink-400'
              }`}>IPANEMA</span>
              <div className="flex flex-wrap justify-center gap-12 mb-20 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                <a href="#" className="hover:text-gray-900 transition-colors">Produtos</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Sustentabilidade</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Lojas</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Fale Conosco</a>
              </div>
              <div className="flex justify-center space-x-12 mb-16">
                {['Instagram', 'Facebook', 'Pinterest', 'YouTube'].map(social => (
                  <a key={social} href="#" className="group relative text-gray-400 font-bold uppercase tracking-widest text-[10px] hover:text-gray-900 transition-all">
                    {social}
                  </a>
                ))}
              </div>
              <p className="text-gray-300 text-[10px] font-medium uppercase tracking-[0.2em]">&copy; 2026 Ipanema - Grendene S/A. Inspirado pelo Sol do Rio.</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;