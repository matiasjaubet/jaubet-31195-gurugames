import NavBar from '../navbar/NavBar';
import Hero from '../../pages/Hero/Hero';
import Main from '../main/Main';


const App = () => {
    return (
        <>
            <NavBar />
            <Hero greeting="Pedile la tarjeta a tus viejos, es hora de viciar!" copy="Potencia tu experiencia PlayStation con multijugador en línea, juegos mensuales, descuentos exclusivos y mucho más."/>
            <Main />
        </>
    )
}

export default App