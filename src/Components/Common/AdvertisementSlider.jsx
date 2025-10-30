import React, { useState, useEffect } from "react";
import anuncioComics from "../../assets/Anuncio_comics.jpg";
import anuncioLegos from "../../assets/Anuncio_lego.jpg";
import anuncioCartas from "../../assets/Anuncio_cartas.jpg";

const AdvertisementSlider = () => {
  const sliderData = [
       {
      id: 1,
      title: "Comics - Descubre los titulos mas recientes de Marvel y DC",
      offer: "Obten 25% de descuento en tu primera compra",
      buttonText1: "Comprar Ahora",
      buttonText2: "Ver Colección",
      imgSrc: anuncioComics,
    },
    {
      id: 2,
      title: "Lego - Una nueva linea de coleccionables se une a BEAR Collectibles",
      offer: "Nuevos Lanzamientos Disponibles",
      buttonText1: "Descubrir",
      buttonText2: "Ver Colección",
      imgSrc: anuncioLegos,
    },
    {
      id: 3,
      title: "Mtg y Tcg - Explora lo mas nuevo dentro del mundo de las cartas",
      offer: "Lo mas nuevo de tus Tcg favoritos",
      buttonText1: "Explorar",
      buttonText2: "Más Información",
      imgSrc: anuncioCartas,
    },

  ];

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [sliderData.length]);



  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-red-300 to-gray-100 py-8 md:px-14 px-5 rounded-2xl min-w-full shadow-lg"
            >
              <div className="md:pl-8 mt-10 md:mt-0 flex-1">
                <p className="md:text-lg text-red-600 pb-2 font-semibold">{slide.offer}</p>
                <h1 className="max-w-lg md:text-4xl md:leading-[48px] text-2xl font-bold text-gray-900 mb-4">
                  {slide.title}
                </h1>
                <div className="flex items-center mt-4 md:mt-6 gap-4">
                  <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 transform hover:-translate-y-1">
                    {slide.buttonText1}
                  </button>
                  <button className="group flex items-center gap-2 px-6 py-3 font-semibold text-red-600 hover:text-red-700 transition duration-300">
                    {slide.buttonText2}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center flex-1">
                <img
                  className="md:w-100 w-60 rounded-xl shadow-md"
                  src={slide.imgSrc}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de slide */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-3 w-3 rounded-full transition duration-300 ${
                currentSlide === index 
                  ? "bg-red-600 scale-125" 
                  : "bg-red-300 hover:bg-red-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisementSlider;