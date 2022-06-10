import CartWidget from "../../pages/CartWidget/CartWidget"

const Nav = () => {
    return (
        <>
            <nav>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Tirador</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Terror</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Deportes</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Acción</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">RPG</a></li>
                </ul>
            </nav>
            <CartWidget />
        </>
    )
}

export default Nav