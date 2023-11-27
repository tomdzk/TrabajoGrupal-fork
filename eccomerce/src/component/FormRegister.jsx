import React from 'react'
import "../styles/FormRegStyle.css"

const FormRegister = () => { 
  return (
    <>
    <div>
        <form class="form">
    <p class="title">Registrarse </p>
    <p class="message">Regístrese y obtenga acceso total. </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Nombre</span>
        </label>

        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Apellido</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Contraseña</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Confirme contraseña</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">¿Ya posee una cuenta? <a href="#">Iniciar Sesión</a> </p>
</form>
        
        </div>
    </>
  )
}

export default FormRegister