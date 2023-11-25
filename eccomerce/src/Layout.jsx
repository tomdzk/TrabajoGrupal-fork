import { Outlet, Link } from "react-router-dom";
import "./Layout.css"




const Layout = () => {
  return (
    <>
      <nav >
        <ul   className="flex  flex-row  bg-slate-50  space-x-6  barraNav  "         >
        
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
