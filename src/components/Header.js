import Brand from "./Brand";
import NavBar from './NavBar';
import '../css/header.css';

const Header = () => {
    return (
        <>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
                <NavBar />
            </header>
        </div>
        </>
    )
}

export default Header