import Brand from "./Brand";
import Nav from './Nav';
import '../css/header.css';

const NavBar = () => {
    return (
        <>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <Brand />
                </a>
                <Nav />
            </header>
        </div>
        </>
    )
}

export default NavBar