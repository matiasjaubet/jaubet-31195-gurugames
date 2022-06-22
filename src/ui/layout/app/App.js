import NavBar from '../navbar/NavBar';
import Main from '../main/Main';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../footer/Footer';
import CartContext from '../../../api/CartContext/CartContext';

const App = () => {
    return (
        <BrowserRouter>
        <CartContext>
            <NavBar />
            <Main />
        </CartContext>
        <Footer />
        </BrowserRouter>
    )
}

export default App