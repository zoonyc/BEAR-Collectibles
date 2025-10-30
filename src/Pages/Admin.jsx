import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import Breadcrumb from '../Components/Common/Breadcrumb';


const Admin = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imageUrl: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  
  const navigate = useNavigate();

  const categories = [
    'Figuras estaticas',
    'Figuras articuladas',
    'Autos a escala',
    'Armables',
    'Juegos de cartas',
    'Comics',
    'Videojuegos'
  ];

  // Verificar si el usuario está logueado al cargar el componente
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
      return;
    }
    // Simular carga de datos
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [navigate]);

  const handleLogout = () => {
    // Eliminar la sesión y redirigir al login
    sessionStorage.removeItem('isLoggedIn');
    navigate('/login', { replace: true });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Editar producto existente
      setProducts(products.map(product => 
        product.id === editingProduct.id 
          ? { ...formData, id: editingProduct.id }
          : product
      ));
      setEditingProduct(null);
    } else {
      // Agregar nuevo producto
      const newProduct = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleDateString()
      };
      setProducts([...products, newProduct]);
    }
    
    // Resetear formulario
    setFormData({
      name: '',
      category: '',
      price: '',
      description: '',
      imageUrl: ''
    });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl
    });
  };

  const handleDelete = (productId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      setProducts(products.filter(product => product.id !== productId));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isLoading) {
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

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb />
        </div>

        {/* Header con botón de logout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Panel de Administración
            </h1>
            <p className="text-gray-600">
              Gestiona los productos y servicios de BEAR Collectibles
            </p>
          </div>

          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center"
          >
            <span className="mr-2 text-2xl">↩️</span>
            Cerrar Sesión
          </button>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {editingProduct ? 'Editar Producto' : 'Agregar Nuevo Producto'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del Producto *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    placeholder="Ej: Cuaderno profesional"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoría *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Seleccionar categoría</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Precio (MXN) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    placeholder="Describe el producto o servicio..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL de la Imagen *
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    {editingProduct ? 'Actualizar' : 'Agregar'} Producto
                  </button>
                  
                  {editingProduct && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingProduct(null);
                        setFormData({
                          name: '',
                          category: '',
                          price: '',
                          description: '',
                          imageUrl: ''
                        });
                      }}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Tabla de Coleccionables */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Coleccionables Registrados ({products.length})
              </h2>
              
              {products.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📦</div>
                  <p className="text-gray-500">No hay productos registrados</p>
                  <p className="text-gray-400 text-sm">Agrega tu primer producto usando el formulario</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left text-sm font-semibold text-gray-700 py-3">Producto</th>
                        <th className="text-left text-sm font-semibold text-gray-700 py-3">Categoría</th>
                        <th className="text-left text-sm font-semibold text-gray-700 py-3">Precio</th>
                        <th className="text-left text-sm font-semibold text-gray-700 py-3">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(product => (
                        <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3">
                            <div className="flex items-center">
                              <img 
                                src={product.imageUrl} 
                                alt={product.name}
                                className="w-10 h-10 object-cover rounded-lg mr-3"
                                onError={(e) => {
                                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGIi8+CjxwYXRoIGQ9Ik0yMCAxMEMyMi43NjE0IDEwIDI1IDcuNzYxNDIgMjUgNUMyNSA0LjU2MjUgMjQuOTM3NSA0LjE0NTgzIDI0LjgxMjUgMy43NWgyLjA2MjVjLTAuMDYyNSAwLjI5MTY3LTAuMTI1IDAuNTgzMzMtMC4xODc1IDAuODc1QzI2LjM3NSA2LjA4MzMzIDI1Ljg5NTgzIDguMDQxNjcgMjUgMTBIMjBaIiBmaWxsPSIjOUI5QjlCIi8+CjxwYXRoIGQ9Ik0xNSAxMEMxMi4yMzg2IDEwIDEwIDcuNzYxNDIgMTAgNUMxMCA0LjU2MjUgMTAuMDYyNSA0LjE0NTgzIDEwLjE4NzUgMy43NUg4LjEyNWMwLjA2MjUgMC4yOTE2NyAwLjEyNSAwLjU4MzMzIDAuMTg3NSAwLjg3NUM4LjYyNSA2LjA4MzMzIDkuMTA0MTcgOC4wNDE2NyAxMCAxMEgxNVoiIGZpbGw9IiM5QjlCOUIiLz4KPHJlY3QgeD0iMTAiIHk9IjE1IiB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHJ4PSIyIiBmaWxsPSIjRUZFREVGIi8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMjIiIHI9IjQiIGZpbGw9IiM5QjlCOUIiLz4KPC9zdmc+';
                                }}
                              />
                              <div>
                                <div className="font-medium text-gray-900">{product.name}</div>
                                <div className="text-sm text-gray-500 truncate max-w-xs">
                                  {product.description}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3">
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                              {product.category}
                            </span>
                          </td>
                          <td className="py-3 font-semibold text-gray-900">
                            Q{parseFloat(product.price).toFixed(2)}
                          </td>
                          <td className="py-3">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleEdit(product)}
                                className="text-red-600 hover:text-red-800 transition duration-300"
                                title="Editar"
                              >
                                ✏️
                              </button>
                              <button
                                onClick={() => handleDelete(product.id)}
                                className="text-red-600 hover:text-red-800 transition duration-300"
                                title="Eliminar"
                              >
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <span className="text-3xl">📦</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{products.length}</div>
                  <div className="text-gray-600">Coleccionables totales</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <span className="text-3xl">📚</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {products.filter(p => p.category === 'Útiles Escolares').length}
                  </div>
                  <div className="text-gray-600">Comics</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <div className="bg-pink-100 p-3 rounded-lg mr-4">
                  <span className="text-3xl">🕹️</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {products.filter(p => p.category === 'Accesorios para Teléfonos').length}
                  </div>
                  <div className="text-gray-600">Videojuegos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;