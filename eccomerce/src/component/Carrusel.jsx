import React from 'react'
import a from "../public/pexels-furkanfdemir-6207023.jpg"
import b from "../public/pexels-furkanfdemir-6207048.jpg"
import c from "../public/man-5987553_1280.jpg"
import "../styles/Carrusel.css"

export const Carrusel = () => {
  return (
    <>
<div className="carousel w-3/5 largo mt-0 ml-80 m-0 p-0">
  
  <div id="slide1" className="carousel-item relative w-full h-1/2 items-center ml-96 p-0">
    <img src={a} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-1/2 items-center ml-96 p-0">
    <img src={b} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-1/2 items-center ml-96 p-0 ">
    <img src={c} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-1/2 items-center ml-96 p-0">
    <img src={c} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full h-1/2 items-center ml-96 p-0">
    <img src={c} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>




    </>
  )
}

export default Carrusel