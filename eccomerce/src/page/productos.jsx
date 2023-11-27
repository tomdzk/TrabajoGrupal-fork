import React from 'react';
import TarjetaProducto from '../component/TarjetaProducto';


const Productos = () => {
  const listaDeArticulos = [
    { id: 1, nombre: 'Título 1', precio: '$10' },
    { id: 2, nombre: 'Título 2', precio: '$20' },
    { id: 3, nombre: 'Título 3', precio: '$20' },
    
   
  ];

  return (
    <>
      <h1 className="text-8xl text-center align-middle font-serif m-0 p-0 italic">Productos</h1>
      <div className="ml-20 mt-10 grid grid-flow-col justify-stretch m-0 p-20">
        {listaDeArticulos.map((articulo) => (
          <TarjetaProducto key={articulo.id} articulo={articulo} />
        ))}
      </div>

   
    </>
  );
};

export default Productos;
