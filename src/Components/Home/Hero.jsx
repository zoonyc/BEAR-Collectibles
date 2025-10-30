import { useNavigate } from "react-router-dom";
import Anuncio1 from "../../assets/Anuncio1.jpeg";


const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 bg-gradient-to-br from-red-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              BEAR <span className="text-red-600">Collectibles</span>
              
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Tu lugar de confianza para encontrar <span className="font-semibold text-red-600">Comics</span>,{' '}
              <span className="font-semibold text-red-600">Videojuegos</span>,{' '}
              <span className="font-semibold text-red-600">Figuras</span> y{' '}
              <span className="font-semibold text-red-600">Ediciones de colección </span>.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              En BEAR Collectibles nos especializamos en ofrecer 
              piezas de colección únicas y de alta calidad.
              Nos apasiona brindarte un servicio amable y confiable 
              para que encuentres esos tesoros que hacen especial tu colección.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={()=> navigate("/Articulos_de_coleccion") }  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                Ver Coleccionables
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
                Contactarnos
              </button>
            </div>
            
            {/* Services Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="bg-red-100 p-2 rounded-lg mr-3 text-3xl">🤖</span>
                <span className="text-md font-medium text-gray-700">Figuras de Colección</span>
              </div>
              <div className="flex items-center">
                <span className="bg-red-100 p-2 rounded-lg mr-3 text-3xl">📚</span>
                <span className="text-md font-medium text-gray-700">Comics</span>
              </div>
              <div className="flex items-center">
                <span className="bg-red-100 p-2 rounded-lg mr-3 text-3xl">🃏</span>
                <span className="text-md font-medium text-gray-700">Tcg (Magic, Pokemon, etc.)</span>
              </div>
              <div className="flex items-center">
                <span className="bg-red-100 p-2 rounded-lg mr-3 text-3xl">🕹️</span>
                <span className="text-md font-medium text-gray-700">Videojuegos</span>
              </div>
            </div>
          </div>
          

          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xl">
              <div className="absolute -inset-4 bg-red-200 rounded-2xl rotate-3 opacity-50 "></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden ">
                <img 
                  src= {Anuncio1}
                  alt="BEAR Collectibles - Variedad de productos y servicios" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900 to-transparent p-4">
                  <p className="text-white text-md font-medium">Todo lo que necesitas en un solo lugar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
