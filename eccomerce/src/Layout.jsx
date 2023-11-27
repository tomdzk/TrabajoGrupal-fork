import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
import { BotonEncendido } from "./component/BotonEncendido";




const Layout = () => {
  return (
    <>
      <nav >
        <ul   className="flex  flex-row  bg-slate-50  space-x-6  barraNav  "         >
        
          <li  className="text-black font-serif text-2xl li-bg"    >
            <Link to="/">Inicio</Link>
          </li>
        
          <li className="text-black font-serif text-2xl li-bg"   >
            <Link to="/productos">Productos</Link>
          </li>
          <li className="text-black font-serif text-2xl li-bg"   >
            <Link to="/contacto">Contacto</Link>
          </li>

          <li className="text-black font-serif text-2xl li-bg"   >
            <Link to="/iniciarSesion">Iniciar Sesión</Link>
          </li>
          
        </ul>
        <div className=" fixed top-0 right-0 "><BotonEncendido/>  </div>
      </nav>
      <Outlet />
     
    

     
    </>
  )
};

export default Layout;
