
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../../../api/CartContext/CartContext";
import Form from "../Form/Form";
import './Carrito.css';

const Carrito = () => {

  const resultado = useContext(context);
  const todos = resultado.item;


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
    <div className="container">
    <div className="row my-5 py-4 text-center">
        
        <h2 className="mb-4"><b>Carrito</b></h2>
        
        {carrito ?

        <>
            <h3>Tienes <b>{resultado.quantity}</b> productos.</h3>
            <h2 className="mb-4">{resultado.item.portada}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Portada</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio (u.)</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>
                <tbody>

                {
                    todos.map((juego) => {
                        return (
                        <tr key={juego.item.id}>
                            <td className="align-middle">{juego.quantity}</td>
                            <td className="align-middle"><Link to={`/item/${juego.item.id}`}><img src={juego.item.portada} alt="" className="portada" /></Link></td>
                            <td className="align-middle">{juego.item.nombre}</td>
                            <td className="align-middle">{juego.item.precio}</td>
                            <td className="align-middle"><Link to="" onClick={() => resultado.removeItem(juego.item.id, juego.quantity)}><i className="bi bi-x-lg"></i></Link></td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <Form />
        </>

        : 
        <>
            <h3>No tienes productos.</h3>
            <Link to="/" className="btn btn-primary display-inline-block">Ir al catálogo</Link>
        </>

        }

    </div>
</div>
    
  )
}

export default Carrito