import React, { useContext, useEffect, useState } from "react";
import CartWidget from "../../widget/CartWidget/CartWidget"
import {NavLink } from "react-router-dom";
import { context } from "../../../api/CartContext/CartContext";
const Nav = () => {

    const resultado = useContext(context);
    const [carrito, setCarrito] = useState(false);
    
    const estadoCarrito = resultado.item.length;
    useEffect(() => {
      if (estadoCarrito === 0) {
        setCarrito(false)
      } else {
        setCarrito(true)
      }
    },[estadoCarrito])

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
            {carrito ? <CartWidget /> : "" }
            
        </>
    )
}

export default Nav