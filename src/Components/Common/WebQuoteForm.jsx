import { useState } from "react";

const WebQuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Paso 1: Información básica
    articuloName: "",
    servicioName: "",
    contactName: "",
    email: "",
    phone: "",
    
    // Paso 2: Requerimientos del sitio web
    websiteType: "",
    pages: 1,
    features: [],
    deadline: "",
    
    // Paso 3: Presupuesto y contacto
    budget: "",
    message: "",
    contactMethod: "email"
  });

  const serviciosName = [
    "Venta",
    "Compra",
    "Intercambio",
    "Preventas",
    "Reparación",
    "Restauración",
    "Información de una coleccionable",
    "Cotización de un coleccionable",
    "Otro"
  ];

  const websiteTypes = [
    { value: "landing", label: "Venta y preventas de coleccionables", description: "Informacion de stock de piezas y preventas disponibles" },
    { value: "portfolio", label: "Intercambio de coleccionables", description: "Ideal si te interesa un articulo en stock y deseas dar algun coleccionable a cuenta" },
    { value: "corporate", label: "Compra de coleccionables", description: "Si deseas vender alguna pieza de tu coleccion la valuamos y te hacemos una oferta" },
    { value: "ecommerce", label: "Reparación y restauracón", description: "Servicio completo para tus coleccionables que se encuentren desgastados o dañados" },
    { value: "blog", label: "Información y valuación", description: "Para saber el origen o el valor de una pieza de tu colección nosotros la valuamos y te informamos acerca de la marca del articulo, año de fabricación, etc." }
  ];

  const featuresList = [
    "Pruebas de funcionamiento de mi producto",
    "Mantenimiento general",
    "Restauración de pintura o partes rotas",
    "Coleccionables bajo pedido",
    "Fecha de entrega de preventa",
    "Información de mi pedido",
    "Apartado de piezas en stock",
    "Valuación de lote de articulos"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        features: checked 
          ? [...prev.features, value]
          : prev.features.filter(feature => feature !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí enviarías los datos a tu backend
    console.log("Datos del formulario:", formData);
    alert("¡Gracias por tu solicitud! Te contactaremos pronto.");
    // Resetear formulario
    setCurrentStep(1);
    setFormData({
      articuloName: "",
      servicioName: "",
      contactName: "",
      email: "",
      phone: "",
      websiteType: "",
      pages: 1,
      features: [],
      deadline: "",
      budget: "",
      message: "",
      contactMethod: "email"
    });
  };

  const isStep1Valid = () => {
    return formData.articuloName && formData.servicioName && formData.contactName && formData.email;
  };

  const isStep2Valid = () => {
    return formData.websiteType;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-12">
      <div className="p-8">
        {/* Header del formulario */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Solicita tu Cotización
          </h2>
          <p className="text-gray-600">
            Completa este formulario de 3 pasos y recibe una propuesta personalizada
          </p>
        </div>

        {/* Indicador de pasos */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map(step => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 mx-2 ${
                    currentStep > step ? 'bg-red-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Paso 1: Información básica */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Información de solicitud</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del producto *
                  </label>
                  <input
                    type="text"
                    name="articuloName"
                    value={formData.articuloName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    placeholder="Ej: Hulk marvel select"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Servicio *
                  </label>
                  <select
                    name="servicioName"
                    value={formData.servicioName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecciona un tipo</option>
                    {serviciosName.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    placeholder="Ej: Javier León"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    placeholder="servicio@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+502 1234 5678"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStep1Valid()}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente →
                </button>
              </div>
            </div>
          )}

          {/* Paso 2: Requerimientos del sitio web */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Requerimientos especificos de tu servicio</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Selección de servicios *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {websiteTypes.map(type => (
                    <label key={type.value} className="relative">
                      <input
                        type="radio"
                        name="websiteType"
                        value={type.value}
                        checked={formData.websiteType === type.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`border-2 rounded-lg p-4 cursor-pointer transition duration-200 ${
                        formData.websiteType === type.value
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="font-semibold text-gray-900">{type.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{type.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de articulos para los cuales requiere el servicio
                  </label>
                  <input
                    type="number"
                    name="pages"
                    value={formData.pages}
                    onChange={handleInputChange}
                    min="1"
                    max="50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de entrega deseada
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Si buscas algo mas especifico seleccionalo a continuación
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {featuresList.map(feature => (
                    <label key={feature} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        value={feature}
                        checked={formData.features.includes(feature)}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  ← Anterior
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStep2Valid()}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente →
                </button>
              </div>
            </div>
          )}

          {/* Paso 3: Presupuesto y contacto */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Observaciones y Contacto</h3>
              
              {/*
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Presupuesto estimado (opcional)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="1000-2500">1,000 - 2,500</option>
                  <option value="2500-5000">2,500 - 5,000</option>
                  <option value="5000-10000">5,000 - 10,000</option>
                  <option value="10000+">Más de 10,000</option>
                </select>
              </div>
              */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferencia de contacto
                </label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="email">Email</option>
                  <option value="phone">Llamada telefónica</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje adicional (opcional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Cuéntame más sobre tu proyecto, ideas específicas, o cualquier requerimiento especial..."
                />
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  ← Anterior
                </button>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  🗹 Enviar Solicitud
                </button>
              </div>
            </div>
          )}
        </form>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default WebQuoteForm;