import React from 'react'
import "../styles/CardsHome.css"
import Imagen from "../public/man-5987553_1280.jpg"

const CardsHome = () => {
  return (
    <>
<div class="cardContainer ">
  <div class="cardHome">
    <p class="titulo font-serif italic text-9xl">Estilo Noche</p>
   <br></br>
    <img src={Imagen} className=' mix-blend-color-burn   w-80 h-80'></img>
   
    
  </div>
</div>



    </>
  )
}

export default CardsHome