import React from 'react'
import "../styles/TarjetaProducto.css"
import Imagenes from './Imagen'
import { useState } from 'react'


const TarjetaProducto = () => {
  
    const [texto, setTexto] = useState("Comprar");
  
    return (
    <>
    {/*codigo de trajeta de uiverso.io*/}
    
    <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
               
                <Imagenes className="title"/>
                <p>REMERA NEGRA</p>
            </div>
            <div className="backSide">
                <p className="title">PRECIO $::::</p>
                <p>Descripcion</p>
                <p>SKU</p>
                <p>Stok</p>
                <button   className="bg-slate-200 inset-x-0 bottom-0 h-19 rounded-lg   "
                
                type="button"
                onClick={() => setTexto("Gracias")}
                
                
                >{texto}</button>
            </div>
        </div>
    </div>
   
    
    </>
  )
}

export default TarjetaProducto