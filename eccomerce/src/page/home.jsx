import Hero from "../component/Hero"
import Card from "../component/Card"
import Carrusel from "../component/Carrusel";
import CardsHome from "../component/CardsHome";
import Cubo from "../component/Cubo"
import CardOferta from "../component/CardOferta";
import { Button } from "../component/Button";
import { BotonEncendido } from "../component/BotonEncendido";
import imagenA from "../public/pexels-furkanfdemir-6207023.jpg"
import imagenB from "../public/man-5987553_1280.jpg"


const Home = () => {
    return <>

<Hero/>
      
      <div className="mt-6 flex flex-col mx-0 pb-0 relative  ">
      <span className=" font-serif text-4xl mt-6 ml-10 mb-10 italic">"...  reservado para los auténticos conocedores...." </span>
      <br></br>
      <Carrusel/>
      <CardOferta/>
      </div>
      
      <div className="flex flex-wrap space-x-16 ml-80 ">
        <CardsHome imagen={imagenB} titulo="Estilo Noche"/>
        <span style={{marginTop: 50, fontStyle: "italic", fontSize: 25, fontFamily: "serif"}}  >"La verdadera elegancia reside en la simplicidad,<hr></hr> la confianza y la atención a los detalles." - Christian Dior</span>
      </div>
     

<div className="flex flex-col space-y-4 bg-black space-x-30 m-full mt-10 py-40 pl-40 border-r-8"  >
<Cubo/>

<span className=" font-serif text-2xl mt-6 ml-0 mb-10 italic text-center">"En la penumbra de la elegancia, <br></br>se desvela el arte de vestir con sutileza y poder. " </span>


</div>
 <br></br>
      <div className="flex flex-wrap space-x-20 ml-80 ">
        <CardsHome imagen={imagenA} titulo="Estilo Urbano"/>
        <span style={{marginTop: 100, fontStyle: "italic", fontSize: 25, fontFamily: "serif"}}>"La elegancia no es sobre ser notado, <hr></hr> es sobre ser recordado." - Giorgio Armani</span>
      
      </div>
      
      <div className=" bg-slate-200 my-10">
          <Card />
      </div>




    </>;
  };
  
  export default Home;