import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Pedile la tarjeta a tus viejos, es hora de viciar!" copy="Potencia tu experiencia PlayStation con multijugador en línea, juegos mensuales, descuentos exclusivos y mucho más." />
        </>
    )
}

export default App