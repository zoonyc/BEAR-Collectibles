import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo_light.webp";
import logoDos from "../../assets/images/logo_dark.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  // Efecto para cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Efecto para detectar scroll y cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-white shadow-md py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
    <div
      onClick={() => navigate("/")}
      className="flex items-center space-x-2 group cursor-pointer"
      aria-label="BEAR Collectibles - Home"
    >
      <img
        src={isScrolled ? logoDos : logo}
        alt="Logo BEAR Collectibles"
        className="h-8 md:h-16 transition-all duration-300 group-hover:scale-105"
      />
    </div>

          {/* Menú para desktop - Más compacto */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:text-red-700 ${location.pathname === '/' ? 'text-red-700 font-semibold' : isScrolled ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Home
            </Link>
          
            <Link 
              to="/Articulos_de_coleccion" 
              className={`font-medium transition-all duration-300 hover:text-red-700 ${location.pathname === '/Articulos_de_coleccion' ? 'text-red-700 font-semibold' : isScrolled ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Coleccionables
            </Link>

            <Link 
              to="/Cotizacion_de_servicios" 
              className={`font-medium transition-all duration-300 hover:text-red-700 ${location.pathname === '/Cotizacion_de_servicios' ? 'text-red-700 font-semibold' : isScrolled ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Servicios
            </Link>
            <Link 
              to="/login" 
              className={`font-medium transition-all duration-300 hover:text-red-700 ${location.pathname === '/contacto' ? 'text-red-700 font-semibold' : isScrolled ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Login
            </Link>
            <Link 
              to="/admin" 
              className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-1 text-sm ${isScrolled ? 'bg-red-700 text-white hover:bg-red-700' : 'bg-red-700 text-white hover:bg-red-700'}`}
            >
              <span>🔐</span>
              <span>Admin</span>
            </Link>

          </div>

          {/* Botón menú móvil con animación de hamburguesa a X */}
          <button 
            className="lg:hidden focus:outline-none p-2 relative w-10 h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isScrolled ? 'text-white' : 'text-gray-800'} ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isScrolled ? 'text-white' : 'text-gray-800'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isScrolled ? 'text-white' : 'text-gray-800'} ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'}`}>
          <div className={`rounded-lg shadow-lg p-3 mt-2 ${isScrolled ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <Link 
              to="/" 
              className={`block py-2 px-4 font-medium rounded-lg transition-colors duration-300 ${isScrolled ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/Articulos_de_coleccion" 
              className={`block py-2 px-4 font-medium rounded-lg transition-colors duration-300 ${isScrolled ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Coleccionables
            </Link>
            <Link 
              to="/Cotizacion_de_servicios" 
              className={`block py-2 px-4 font-medium rounded-lg transition-colors duration-300 ${isScrolled ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              to="/contacto" 
              className={`block py-2 px-4 font-medium rounded-lg transition-colors duration-300 ${isScrolled ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link 
              to="/login" 
              className="block py-2 px-4 mt-2 bg-red-700 text-white font-medium rounded-lg text-center transition-colors duration-300 hover:bg-red-700"
              onClick={() => setIsMenuOpen(false)}
            >
              🔐 Área de Administrador
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;