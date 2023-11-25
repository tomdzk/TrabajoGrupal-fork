import React from 'react'
import carrusel from "../public/carrusel.jpg"
import "../styles/Botones.css"

const Hero = () => {
  return (
    <>
 <div className="hero min-h-screen" style={{backgroundImage: `url(${carrusel})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-black   italic">Vestirío Magnético</h1>
      <p className="mb-5 italic">Encuentra tu inspiración diaria en cada paso que das y vístete no solo con ropa, sino con la confianza de quien sabe que la autenticidad es la clave del estilo</p>
      <button className="btn btn-current">Comprar</button>
    </div>
  </div>
</div>
    
    
    
    </>
  )
}

export default Hero