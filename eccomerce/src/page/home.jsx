import Hero from "../component/Hero"
import Card from "../component/Card"
import Carrusel from "../component/Carrusel";
import CardsHome from "../component/CardsHome";
import Cubo from "../component/Cubo"


const Home = () => {
    return <>

<Hero/>
      
      <div className="mt-6 flex flex-col mx-0 pb-0 relative  ">
      <span className=" font-serif text-4xl mt-6 ml-10 mb-10 italic">"...  reservado para los auténticos conocedores...." </span>
      <br></br>
      <Carrusel/>
      </div>
      <div className="flex flex-wrap space-x-16 ml-80 ">
        <CardsHome/>
        <CardsHome/>
      </div>

<div className="flex flex-col space-y-4 bg-black space-x-30 m-44 py-40 pl-40 border-r-8"  >
<Cubo/>

<span className=" font-serif text-2xl mt-6 ml-0 mb-10 italic text-center">"En la penumbra de la elegancia, <br></br>se desvela el arte de vestir con sutileza y poder. " </span>


</div>

      <div className=" bg-slate-200 my-10">
          <Card />
      </div>





    </>;
  };
  
  export default Home;