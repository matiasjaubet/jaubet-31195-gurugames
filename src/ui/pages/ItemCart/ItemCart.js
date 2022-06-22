import { Link } from 'react-router-dom';
import './ItemCart.css';
import React, { useContext } from "react";
import { context } from "../../../api/CartContext/CartContext";


const ItemCart = ({id, nombre, portada, precio}) => {
    const resultado = useContext(context);
  return (
    <tr key={id}>
        <td className="align-middle"><img src={portada} alt="" className="portada" /></td>
        <td className="align-middle">{nombre}</td>
        <td className="align-middle">{precio}</td>
        <td className="align-middle"><Link to="" onClick={() => resultado.removeItem(id)}><i class="bi bi-x-lg"></i></Link></td>
    </tr>
  )
}

export default ItemCart