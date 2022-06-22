import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { context } from "../../../api/CartContext/CartContext";
import './CartWidget.css'

const CartWidget = () => {
  
  const resultado = useContext(context);

  return (
    <Link to="/carrito" className="CartWidgetBox"><span className="material-symbols-outlined">shopping_cart</span><span className="quantity">{resultado.cantidadSeleccionada}</span></Link>
  )
}

export default CartWidget