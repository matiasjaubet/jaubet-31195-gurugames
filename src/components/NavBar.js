import Brand from './Brand';
import Nav from './Nav';

const NavBar = () => {
    return (
        <>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <Brand />
        </a>
        <Nav />
        </>
    )
}

export default NavBar