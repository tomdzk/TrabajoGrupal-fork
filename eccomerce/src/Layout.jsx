import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
import Carrusel from "./component/Carrusel";
import Card from "./component/Card"
import Hero from "./component/Hero"



const Layout = () => {
  return (
    <>
      <nav >
        <ul   className="flex  flex-row   bg-gray-200  space-x-6  barraNav  "         >
        
          <li  className="text-black font-serif text-2xl"    >
            <Link to="/">Inicio</Link>
          </li>
        
          <li className="text-black font-serif text-2xl"   >
            <Link to="/productos">Productos</Link>
          </li>
          <li className="text-black font-serif text-2xl"   >
            <Link to="/contacto">Contacto</Link>
          </li>
        
        </ul>
      </nav>
      <Outlet />
     
      

     
    </>
  )
};

export default Layout;
