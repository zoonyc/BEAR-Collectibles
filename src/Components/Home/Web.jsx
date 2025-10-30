import { useState, useEffect } from "react";
import Loading from "../Loading";
import Breadcrumb from "../Common/Breadcrumb";
import WebQuoteForm from "../Common/WebQuoteForm";
import TrabajoRestauracion from "../../assets/Trabajo_Restauracion.webp"
import TrabajoCustom from "../../assets/Trabajo_Custom.webp"
import TrabajoReparacion from "../../assets/Trabajo_Reparacion.webp"


const Web = () => {
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de contenido
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Restauración y Mantenimiento de Consola Retro",
      description: "Proyecto completo de reparación y restauración de una consola de videojuegos, incluyendo diagnóstico, cambio de piezas, limpieza profunda y mantenimiento electrónico para devolverla a su funcionamiento original.",
      technologies: ["Electrónica", "Soldadura", "Limpieza ultrasónica", "Diagnóstico técnico"],
      image: TrabajoRestauracion,
      demoUrl: "#",
      features: [
         "Reemplazo de componentes dañados",
         "Limpieza y restauración estética",
         "Mantenimiento preventivo de hardware",
         "Pruebas de funcionamiento y calibración",
         "Documentación del proceso completo"
        ]
    },
    {
      id: 2,
      title: "Customización de Batman Azrael de McFarlane Toys",
      description: "Batman Azrael personalizado con un trabajo de pintura detallado inspirado en el cómic original. Se aplicaron técnicas de sombreado, envejecido y acabado metálico para lograr un aspecto más realista y llamativo.",
      technologies: ["Pintura acrílica", "Pincel seco", "Aerógrafo", "Sellado protector"],
      image: TrabajoCustom,
      demoUrl: "#",
      features: [
         "Repaint completo con detalles fieles al cómic",
         "Sombras y luces para mayor realismo",
         "Acabado metálico en la armadura",
         "Protección final con barniz mate",
         "Presentación fotográfica profesional"
        ]
    },
    {
      id: 3,
      title: "Reparación de una figura de Mario Kart",
      description: "Restauración completa de un vehículo de colección de Mario Kart con daño estructural en la cabeza del personaje. Se realizó la reconstrucción, unión de piezas y repintado para recuperar su apariencia original.",
      technologies: ["Resina epóxica", "Lijado fino", "Pintura acrílica", "Sellado protector"],
      image: TrabajoReparacion,
      demoUrl: "#",
      features: [
         "Reconstrucción de la pieza dañada",
         "Reparación invisible con resina epóxica",
         "Repintado y retoque de color original",
         "Acabado brillante tipo fábrica",
         "Conservación del valor coleccionable"
        ]
    }
  ];

  const services = [
  {
    icon: "🧰",
    title: "Reparación y Restauración",
    description:
      "Devolvemos el brillo original a tus coleccionables con técnicas precisas y materiales de alta calidad."
  },
  {
    icon: "💎",
    title: "Valuación de Coleccionables",
    description:
      "Conoce el valor real de tus piezas según su estado, rareza y demanda actual en el mercado."
  },
  {
    icon: "📚",
    title: "Asesoría e Información",
    description:
      "Te brindamos información confiable sobre el origen, autenticidad e historia de tus artículos de colección."
  },
  {
    icon: "🛍️",
    title: "Compra y Adquisición",
    description:
      "Adquirimos figuras, cómics y otros objetos de colección con procesos transparentes y justos."
  },
  {
    icon: "🎨",
    title: "Personalización de Piezas",
    description:
      "Ofrecemos retoques artísticos y restauraciones parciales para resaltar los detalles únicos de cada colección."
  }
  ];

  const technologies = [
  { name: "Restauración Premium", icon: "🏆", color: "bg-amber-100 text-amber-800" },
  { name: "Valuación Certificada", icon: "💰", color: "bg-emerald-100 text-emerald-800" },
  { name: "Asesoría Personalizada", icon: "🤝", color: "bg-sky-100 text-sky-800" },
  { name: "Conservación de Piezas", icon: "🧴", color: "bg-lime-100 text-lime-800" },
  { name: "Documentación Histórica", icon: "📜", color: "bg-indigo-100 text-indigo-800" },
  { name: "Adquisición de Coleccionables", icon: "🛍️", color: "bg-pink-100 text-pink-800" }
];

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 pt-24 pb-8">
        <Loading />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            
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

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios adicionales de BEAR Collectibles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Damos nueva vida y valor a tus coleccionables.
            Restauramos, reparamos, valuamos y asesoramos sobre piezas únicas 
            para que sigan brillando en tu colección a pesar del paso del tiempo.
          </p>
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">🚀 Transformando tu pasión en una experiencia unica</h2>
            <p className="text-red-100">
              Cada pieza cuenta una historia, y nosotros te ayudamos a conservarla.
              Reparamos, restauramos y cuidamos tus coleccionables con la misma pasión 
              con la que fueron creados.
            </p>
          </div>
        </div>

        {/* Servicios */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Servicios personalizados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 border-2 border-gray-100 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tecnologías */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Servicios mas solicitados 
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className={`flex items-center space-x-2 px-4 py-2 rounded-full ${tech.color} border`}>
                  <span>{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proyectos Destacados */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                {/* Imagen del proyecto */}
                <div className="relative h-98 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    Vista
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Tecnologías utilizadas */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Características */}
                  <ul className="space-y-1 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Botones de acción */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-center">
                      Ver Demo
                    </button>
                    <button className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-center">
                      Solicitar Cotización
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso de Trabajo */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
  <div className="p-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
      Nuestro Proceso de Trabajo en reparaciones y restauraciones
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Paso 1 */}
      <div className="text-center">
        <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">💬</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Consulta Inicial</h3>
        <p className="text-gray-600 text-sm">
          Evaluamos tu petición y conversamos sobre el tipo de servicio que necesitas.
        </p>
      </div>

      {/* Paso 2 */}
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔎</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Evaluación Detallada</h3>
        <p className="text-gray-600 text-sm">
          Analizamos el estado del coleccionable y realizamos una valuación o diagnóstico profesional.
        </p>
      </div>

      {/* Paso 3 */}
      <div className="text-center">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🧰</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Restauración y Cuidado</h3>
        <p className="text-gray-600 text-sm">
          Procedemos con la reparación, limpieza o personalización, cuidando cada detalle de la pieza.
        </p>
      </div>

      {/* Paso 4 */}
      <div className="text-center">
        <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">💎</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Entrega y Asesoría</h3>
        <p className="text-gray-600 text-sm">
          Entregamos tu pieza restaurada y te brindamos recomendaciones para conservar su valor y autenticidad.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar tu cotización?</h2>
          <p className="text-red-100 mb-6">
            Contáctanos hoy mismo y atenderemos tu solicitud a la brevedad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-semibold py-3 px-8 rounded-lg transition duration-300 hover:bg-gray-100">
              📞 Contactar Ahora
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition duration-300 hover:bg-white hover:text-red-600">
              💬 Cotizar servicio
            </button>
          </div>
        </div>
        <div className="mt-12">
        <WebQuoteForm/>
        </div>
      </div>
    </section>
  )
}

export default Web
