import React from 'react'
import "../styles/Botones.css"
export const Button = () => {
  
    const CompraClick = () => {
        alert("Próximamente abrimos");
      };
  
  
  
    return (
    <>
    
    <button
             className='font-serif italic'
              type="button"
              onClick={CompraClick}
            >
             Comprar
            </button>
    
    
    
    
    
    </>
  )
}
