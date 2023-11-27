import React from 'react'
import "../styles/FormContacto.css"

const FormContacto = () => {
  return (
    <>
    <div id= "idForm">
    <form class="form">
    <div id="title" className="text-black font-serif text--2.456l2xl">Contáctenos:</div>
    <input type="email" placeholder="Tu email" class="input" required/>
    <textarea placeholder="Tu mensaje" required></textarea>
    
     
    <button class="botonEnviar">Enviar</button>
</form>
</div>
    
    </>
  )
}

export default FormContacto