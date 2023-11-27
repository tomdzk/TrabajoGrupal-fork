import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'

import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./page/productos.jsx"
import Contacto from "./page/contacto"
import Error from "./page/error.jsx"
import Footer from './component/Footer.jsx';
import Home from "./page/home.jsx"
import { BotonEncendido } from './component/BotonEncendido.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 
<React.StrictMode>
<BrowserRouter>
   <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
          <Route path="productos" element={<Productos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Route>
   </Routes>
   <Footer/>
</BrowserRouter>
         
    
</React.StrictMode>
  
)
