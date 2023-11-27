import React from 'react'
import "../styles/Card.css"

export const Card = () => {
  return (
    <>
<div  className="text-3xl font-bold object-none object-center mt-0"  >
 
    <div className="cards ">
    <div class="card black">
    <a href='../page/productos.jsx'>
        <p class="tip">Deportivo</p>
        <p class="second-text">Ropa deportiva</p></a>
    </div>
    <div class="card black">
    <a href='../page/productos.jsx'>
        <p class="tip">Casual</p>
        <p class="second-text">Ropa casual</p></a>
    </div>
    <div class="card black">
    <a href='../page/productos.jsx'>
        <p class="tip">Vestir</p>
        <p class="second-text">Ropa de vestir</p>
        </a>
    </div>
    </div>


</div>






    </>
 
 )
}

export default Card