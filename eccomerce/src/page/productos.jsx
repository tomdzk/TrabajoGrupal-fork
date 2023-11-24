
import TarjetaProducto from "../component/TarjetaProducto";

const Productos = () => {
    return <>
    <h1 className=" text-2xl text-center align-middle font-serif ...">Productos</h1>
    <div className="ml-40 mt-40 grid grid-flow-col justify-stretch ...">
    <TarjetaProducto/>
    <TarjetaProducto/>
    <TarjetaProducto/>
    <TarjetaProducto/>
    </div>
    
    
    </>;
  };
  
  export default Productos;