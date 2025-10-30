import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { Productos } from "../../Types/Productos";


const RelatedProducts = ({currentProductId,  category, currentProductType  }) => {
    
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = Productos;
        
        // Filtrar productos relacionados (excluyendo el producto actual)
        const filteredProducts = data.filter(product => 
          product.id !== currentProductId && 
          (product.categoria === category || product.tipo === currentProductType)
        );
        
        // Limitar a 4 productos máximo
        setRelatedProducts(filteredProducts.slice(0, 4));
      } catch (err) {
        setError(err.message || "Error al cargar productos relacionados");
      } finally {
        setLoading(false);
      }
    };
    
    fetchRelatedProducts();
  }, [currentProductId, category, currentProductType]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loading/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>Error al cargar productos relacionados: {error}</p>
      </div>
    );
  }

  if (relatedProducts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No hay productos relacionados disponibles</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Coleccionables Relacionados</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Imagen del producto */}
            <div className="relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.nombre} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300/2563eb/ffffff?text=Imagen+No+Disponible';
                }}
              />
            </div>

            {/* Contenido */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                {product.nombre}
              </h3>

              <p className="text-2xl font-bold text-red-600 mb-4">
                ${typeof product.precio === 'number' ? product.precio.toFixed(2) : product.precio}
              </p>

              <Link
                to={`/producto/${product.id}`}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-center block text-sm"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;