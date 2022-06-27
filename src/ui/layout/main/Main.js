import ItemDetailContainer from "../../pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../../pages/ItemListContainer/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Hero from "../../pages/Hero/Hero";
import Carrito from "../../pages/Carrito/Carrito"

const Main = () => {
  return (
    <main>

      <Routes>
        <Route exact path="/" element={ 
          <>
            <Hero greeting="Es hora de viciar!" copy="Potencia tu experiencia PlayStation con multijugador en línea, juegos mensuales, descuentos exclusivos y mucho más."/> 
            <ItemListContainer />
          </>
          } />
        <Route exact path="/category/:id" element={ <ItemListContainer /> } />
        <Route exact path="/item/:id" element={ <ItemDetailContainer /> } />
        <Route exact path="/carrito" element={ <Carrito /> } />
      </Routes>

    </main>
  )
}

export default Main