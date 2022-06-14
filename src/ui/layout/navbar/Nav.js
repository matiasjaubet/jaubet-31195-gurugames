import CartWidget from "../../pages/CartWidget/CartWidget"
import {NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <nav>
                <ul className="nav nav-pills">
                    <li className="nav-item"><NavLink className="nav-link" to="/category/accion">Acción</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/category/rol">Rol</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/category/deportes">Deportes</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/category/simulacion">Simulación</NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </>
    )
}

export default Nav