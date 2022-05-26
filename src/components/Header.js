import Brand from "./Brand";
import NavBar from './NavBar';
import '../css/header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-col">
                    <Brand />
                </div>
                <div className="header-col">
                    <NavBar />
                </div>
            </header>
        </>
    )
}

export default Header