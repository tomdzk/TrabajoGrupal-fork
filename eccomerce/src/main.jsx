import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from "./component/Card.jsx"
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./page/productos.jsx"
import Contacto from "./page/contacto"
import Error from "./page/error.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
 
<React.StrictMode>
<BrowserRouter>
   <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Card />}/>
          <Route path="productos" element={<Productos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Route>
   </Routes>
</BrowserRouter>
</React.StrictMode>

)
