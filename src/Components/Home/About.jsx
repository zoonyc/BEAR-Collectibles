
import Anuncio2 from "../../assets/Anuncio2.jpeg";

const About = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre <span className="text-red-600">Nosotros</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre BEAR Collectibles y descubre porque somos tu mejor opcion para hacer crecer tu colección.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Imagen */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-100 rounded-2xl -rotate-2 opacity-60"></div>
              <img 
                src= {Anuncio2} 
                alt="Equipo de BEAR Collectibles" 
                className="relative rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nuestra <span className="text-red-600">Misión</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                En BEAR Collectibles nos apasiona el mundo del coleccionismo y por eso 
                ofrecemos a los aficionados y coleccionistas un espacio donde puedan 
                descubrir y adquirir productos únicos de colección. Nos comprometemos a brindar 
                atención personalizada, autenticidad en cada artículo y una experiencia que conecte 
                la pasión de nuestros clientes con los tesoros que buscan.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Lo que <span className="text-red-600">Ofrecemos</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Figuras de Colección</h4>
                    <p className="text-gray-600 text-sm">Figuras estaticas y articuladas de diferentes escalas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <span className="text-3xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Comics</h4>
                    <p className="text-gray-600 text-sm">Titulos viejos y recientes de Marvel y DC</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <span className="text-3xl">🃏</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tcg (Magic, Pokemon, etc.)</h4>
                    <p className="text-gray-600 text-sm">Sets completos, decks y singles de tus colecciones favoritas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <span className="text-3xl">🕹️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Videojuegos</h4>
                    <p className="text-gray-600 text-sm">Consolas, juegos y accesorios</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Compromiso de Calidad
              </h4>
              <p className="text-gray-700 text-sm">
                Nos comprometemos a ofrecer solo productos de la más alta calidad. 
                Tu satisfacción es nuestra prioridad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;