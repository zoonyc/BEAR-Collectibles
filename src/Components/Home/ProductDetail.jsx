import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../Common/Breadcrumb";
import Loading from "../Loading";
import RelatedProducts from "./RelatedProducts";
import { Productos } from "../../Types/Productos";


const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = Productos.find(p => String(p.id) === String(id));
           if (!data) throw new Error("Producto no encontrado");
           setProducto(data);

      } catch (err) {
        console.error("Error al cargar producto:", err);
        setError(err.message || "Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducto();
  }, [id]);

  const incrementarCantidad = () => setCantidad(prev => prev + 1);
  const decrementarCantidad = () => setCantidad(prev => prev > 1 ? prev - 1 : 1);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            <Loading />
          </div>
        </div>
      </section>
    );
  }

  if (error || !producto) {
    return (
      <section className="min-h-screen bg-gray-50 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
            <p className="text-gray-600 mb-8">{error}</p>
            <Link 
              to="/Articulos_de_coleccion" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Volver a Coleccionables
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        
        {/* Contenedor principal del producto */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            
            {/* Sección de Imagen */}
            <div className="space-y-4">
              {/* Imagen principal */}
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={producto.image} 
                  alt={producto.nombre}
                  className="w-full h-80 md:h-96 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x600/2563eb/ffffff?text=Imagen+No+Disponible';
                  }}
                />
              </div>
              
              {/* Miniaturas */}
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer border-2 border-red-500">
                  <img 
                    src={producto.image} 
                    alt={producto.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Sección de Información */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Nombre y Categoría */}
              <div>
                <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {producto.categoria || "General"}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {producto.nombre}
                </h1>
              </div>

              {/* Precio */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-red-600">
                  ${typeof producto.precio === 'number' ? producto.precio.toFixed(2) : producto.precio}
                </span>
                {producto.precioOriginal && (
                  <span className="text-xl text-gray-500 line-through">
                    ${producto.precioOriginal.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Descripción */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
                <p className="text-gray-700 leading-relaxed">
                  {producto.descripcion || "Este producto no tiene descripción disponible."}
                </p>
              </div>

              {/* Stock */}
              <div className="flex items-center space-x-2">
                <span className={`inline-block w-3 h-3 rounded-full ${producto.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm font-medium text-gray-700">
                  {producto.stock > 0 ? `${producto.stock} unidades disponibles` : "Agotado"}
                </span>
              </div>

              {/* Selector de Cantidad y Botones */}
              <div className="space-y-4">
                {/* Selector de Cantidad */}
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-medium text-gray-700">Cantidad:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={decrementarCantidad}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition duration-200"
                      disabled={cantidad <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-lg font-medium">{cantidad}</span>
                    <button 
                      onClick={incrementarCantidad}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition duration-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={producto.stock <= 0}
                  >
                    {producto.stock > 0 ? `Agregar al Carrito - $${(producto.precio * cantidad).toFixed(2)}` : "Agotado"}
                  </button>
                  <button className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-4 px-6 rounded-lg transition duration-300">
                    Comprar Ahora
                  </button>
                </div>
              </div>

              {/* Información Adicional */}
              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-2">🚚</span>
                    Envío gratis en compras mayores a $50
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">↩️</span>
                    Devolución gratuita en 30 días
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🛡️</span>
                    Garantía del producto incluida
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">💳</span>
                    Pago seguro con tarjeta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de productos relacionados */}
        <RelatedProducts 
         currentProductId={producto.id}
         category={producto.categoria}
         currentProductType={producto.tipo}
        />
      </div>
    </section>
  );
};

export default ProductDetail;