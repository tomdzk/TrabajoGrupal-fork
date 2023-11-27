import React from 'react'
import "../styles/CardOferta.css"
import Imagen from "../public/pexels-вальдемар-7643772.jpg"
import { Button } from './Button'

const CardOferta = () => {
  return (
    <>
   
   <div className="card lg:card-side bg-base-100 shadow-xl w-1/2 mx-96 my-20 h-96 ">
  <figure><img src={Imagen} alt="Modelo"/></figure>
  <div className="card-body">
    <h2 className="card-title font-serif italic justify-center pt-16">Nuevo Conjunto</h2> <br></br>
    <p className='font-serif italic font-bold'>"Viste tu historia, define tu estilo. Encuentra la distinción en cada detalle."</p>
    <div className="card-actions justify-end">
      <Button/>
    </div>
  </div>
</div>
   
    
    
    
    </>
  )
}

export default CardOferta