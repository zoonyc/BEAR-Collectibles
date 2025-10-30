import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo_dark.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoDark} 
                alt="Logo BEAR Collectibles" 
                className="h-12 md:h-16 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed text-sm">
                Tu lugar de confianza para encontrar 
                Comics, Videojuegos, Figuras y Ediciones de colección .
              </p>
            </div>
            
            {/* Redes Sociales */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition duration-300"
                aria-label="Facebook"
              >
                <span className="text-lg">🤖</span>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition duration-300"
                aria-label="Facebook"
              >
                <span className="text-lg">📚</span>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-red-400 text-white p-3 rounded-full transition duration-300"
                aria-label="Twitter"
              >
                <span className="text-lg">🃏</span>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-pink-600 text-white p-3 rounded-full transition duration-300"
                aria-label="Instagram"
              >
                <span className="text-lg">🕹️</span>
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Articulos_de_coleccion" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Coleccionables
                </Link>
              </li>
               <li>
                <Link to="/Cotizacion_de_servicios" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Información 
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Nuestros Productos y Servicios
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-red-400 mr-2">✓</span>
                <span className="text-gray-300">Comics</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-400 mr-2">✓</span>
                <span className="text-gray-300">Videojuegos</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-400 mr-2">✓</span>
                <span className="text-gray-300">Figuras estaticas y articuladas</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-400 mr-2">✓</span>
                <span className="text-gray-300">Autos a escala</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-400 mr-2">✓</span>
                <span className="text-gray-300">Compra de articulos</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-400 mr-2">✓</span>
                <span className="text-gray-300">Reparación y restauración</span>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-400 mr-3 text-lg">📍</span>
                <div>
                  <p className="text-gray-300 text-sm">
                    direccion 1<br />
                    direccion 2<br />
                    direccion 3
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-red-400 mr-3 text-lg">📞</span>
                <a 
                  href="tel:50245984510" 
                  className="text-gray-300 hover:text-red-400 transition duration-300"
                >
                  +52 Numero telefonico
                </a>
              </div>
              
              
              <div className="pt-4">
                <a 
                  href="https://wa.me/502000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  <span className="mr-2">💬</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Horario */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h5 className="text-lg font-semibold text-white mb-4">🕒 Horario de Atención</h5>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-300">
              <div>
                <span className="font-medium">Lunes a Viernes:</span> 10:00 AM - 8:00 PM
              </div>
              <div>
                <span className="font-medium">Sábado y Domingo:</span> 12:00 PM - 6:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              
              © {new Date().getFullYear()} BEAR Collectibles. Todos los derechos reservados.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-red-400 text-sm transition duration-300">
                Términos y Condiciones
              </Link>
              <Link to="#" className="text-gray-400 hover:text-red-400 text-sm transition duration-300">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;