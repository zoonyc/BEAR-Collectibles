const Contact = () => {
  const phoneNumber = "5024324510";
  const whatsappMessage = "Hola, me interesa conocer más sobre sus servicios";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
 const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15049.957362124596!2d-99.14220147566859!3d19.434457979313578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1761721188533!5m2!1ses!2smx";
  
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Visítanos en <span className="text-red-600">BEAR Collectibles</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a encontrar ese coleccionable que tanto anelas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
           
           
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de BEAR Collectibles"
              className="w-full h-80 md:h-96 lg:h-full"
            ></iframe>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Dirección */}
            <div className="bg-red-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-red-600 mr-3">📍</span>
                Dirección
              </h3>
              <p className="text-gray-700">
                 direccion 1<br />
                 direccion 2<br />
                 direccion 3
              </p>
            </div>

            {/* Horarios */}
            <div className="bg-red-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-red-600 mr-3">🕒</span>
                Horario de Atención
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Lunes a Viernes:</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Sábado y Domingo:</span>
                  <span className="text-gray-600">12:00 PM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Contacto Directo */}
            <div className="bg-red-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-red-600 mr-3">📞</span>
                Contacto Directo
              </h3>
              
              {/* Teléfono */}
              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">Teléfono:</p>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="text-red-600 hover:text-red-700 text-lg font-semibold transition duration-300"
                >
                  +52 Numero telefonico
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <p className="text-gray-700 font-medium mb-2">Escríbenos por WhatsApp:</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-xl mr-2">💬</span>
                  Chatear por WhatsApp
                </a>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-red-600 mr-2">💡</span>
                ¿Necesitas ayuda?
              </h4>
              <p className="text-gray-700 text-sm">
                No dudes en contactarnos por teléfono o WhatsApp. Estamos disponibles 
                para responder todas tus preguntas sobre nuestros productos.
              </p>
            </div>
          </div>
        </div>

        {/* Nota importante sobre el mapa */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-md">
            💡 <strong>Nota:</strong> El mapa muestra la ubicación aproximada. Para direcciones exactas, 
            utiliza el código postal <strong>56334</strong> como referencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;