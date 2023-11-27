import React from 'react'
import "../styles/CardsHome.css"
import Imagen from "../public/man-5987553_1280.jpg"
import { Button } from './Button'




const CardsHome = ({imagen , titulo} ) => {
  
  
  
  return (
    <>
<div class="cardContainer ">
  <div class="cardHome">
    <p class="titulo font-serif italic ">{titulo}</p>
   <br></br>
    <img src={imagen} className=' mix-blend-color-burn   w-80 h-80'></img> <br></br>
    <Button/>
    
  </div>
</div>



    </>
  )
}

export default CardsHome