import Hero from "../component/Hero"
import Card from "../component/Card"
import Carrusel from "../component/Carrusel";


const Home = () => {
    return <>

<Hero/>
      
      <div className="mt-2 flex ">
      <span className=" font-serif text-2xl mt-56 ml-10 mb-0 italic">"...no solo es una cuestión de estilo..." </span>
      <Carrusel/>
      </div>
<div className="mt-0">
<Card/>


</div>



    </>;
  };
  
  export default Home;