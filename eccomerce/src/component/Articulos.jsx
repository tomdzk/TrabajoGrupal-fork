
import React from 'react';

const Articulos = ({ nombre, precio }) => {
  return (
    <div>
      <p>{nombre}</p>
      <p>{precio}</p>
    </div>
  );
};

export default Articulos;
