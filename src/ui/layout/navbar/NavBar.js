import { Link } from "react-router-dom";
import Brand from "../../pages/Brand/Brand";
import Nav from './Nav';
import './NavBar.css';

const NavBar = () => {
    return (
        <>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <Brand />
                </Link>
                <Nav />
            </header>
        </div>
        </>
    )
}

export default NavBar