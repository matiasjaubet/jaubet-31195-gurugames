import NavBar from '../navbar/NavBar';
import Main from '../main/Main';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Main />
        </BrowserRouter>
    )
}

export default App