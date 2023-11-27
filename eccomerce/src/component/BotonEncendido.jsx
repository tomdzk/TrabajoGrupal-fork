import "../styles/BotonEncendido.css"
import React, { useState } from 'react'
import Audio from "../assets/Y2meta.app - Jósean Log - Beso (Audio Oficial) (128 kbps).mp3"
export const BotonEncendido = () => {
 
 const [encender, setEncender] = useState(false);
  
 const handleEnciendaAudio = ()=>{
   setEncender (!encender)
 }
 

 
    return (
    <>



<input type="checkbox" checked={encender} onChange={handleEnciendaAudio} id="checkbox"></input>
    <label htmlFor="checkbox" className="switch">
        <div className="powersign"></div>
    </label>

    {encender && (
        <audio autoPlay>
          <source src={Audio} type="audio/mp3" />
          
        </audio>
      )}

</>
  )
}

export default BotonEncendido