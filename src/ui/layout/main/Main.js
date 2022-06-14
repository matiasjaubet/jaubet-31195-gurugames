import ItemDetailContainer from "../../pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../../pages/ItemListContainer/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Hero from "../../pages/Hero/Hero";

const Main = () => {
  return (
    <main>

      <Routes>
        <Route exact path="/" element={ 
          <>
            <Hero greeting="Pedile la tarjeta a tus viejos, es hora de viciar!" copy="Potencia tu experiencia PlayStation con multijugador en línea, juegos mensuales, descuentos exclusivos y mucho más."/> 
            <ItemListContainer />
          </>
          } />
        <Route exact path="/category/:id" element={ <ItemListContainer /> } />
        <Route exact path="/item/:id" element={ <ItemDetailContainer /> } />
      </Routes>
  
      {/* <ItemListContainer />
      <hr />
      <h4 className="text-center my-5">(Desafío: Mostramos un solo producto)</h4>
      <ItemDetailContainer /> */}
    

    </main>
  )
}

export default Main