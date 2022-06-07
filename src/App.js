import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero';

const App = () => {
    return (
        <>
            <NavBar />
            <Hero greeting="Pedile la tarjeta a tus viejos, es hora de viciar!" copy="Potencia tu experiencia PlayStation con multijugador en línea, juegos mensuales, descuentos exclusivos y mucho más."/>
            <ItemListContainer />
        </>
    )
}

export default App