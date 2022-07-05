import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../../../api/CartContext/CartContext";
import Form from "../Form/Form";
import './Carrito.css';
import { db } from '../../../api/firebase/firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Carrito = () => {
  const [orderId, setOrderId] = useState('');
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

  const [usuario, setUsuario] = useState({
    nombre: "",
    telefono: "",
    email: ""
  })

  const handleChange = (e) => {
      const copia = {...usuario}
      copia[e.target.id] = e.target.value
      setUsuario(copia)
  }

  const handleSubmit = (e) => {

    const detalle = todos.map((prod) => {
      return {
        id: prod.item.id,
        nombre: prod.item.nombre,
        cantidad: prod.quantity,
        precio: prod.item.precio
      }
    })
    e.preventDefault();

    const objOrden = {
      Cliente:{
        nombre: usuario.nombre,
        telefono: usuario.telefono,
        email: usuario.email
      },
      detalle,
      Total: `$ ${resultado.totalPrice()}`,
      Fecha: serverTimestamp()
    }



    const ref = collection(db, 'orders');
    addDoc(ref, objOrden)
    .then((response) => {
      setOrderId(response.id)
      resultado.deleteAll()
    })

  }

  if(orderId !== "") {
    return (
      <>
      <div className="container py-5 text-center">
        <h1 className="pt-4">Gracias por tu compra, {usuario.nombre}.</h1>
        <h2 className="pb-4">Tu número de envío es: {orderId}</h2>
        <Link to="/" className="btn btn-primary display-inline-block">Comprar otro juego</Link>
      </div>
      </>
    )
  }

  return (
    <div className="container">
    <div className="row my-5 py-4 text-center">
        
        <h2 className="mb-4"><b>Carrito</b></h2>
        
        {carrito ?

        <>
            <h3>Tienes <b>{resultado.quantity}</b> productos.</h3>
            <p className="mb-4">{resultado.item.portada}</p>
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
                            <td className="align-middle">$ {juego.item.precio}</td>
                            <td className="align-middle"><Link to="" onClick={() => resultado.removeItem(juego.item.id, juego.quantity)}><i className="bi bi-x-lg"></i></Link></td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <div className="container pt-4">
              <p>El precio final de tu compra es: <b>$ {resultado.totalPrice()}</b></p>
            </div>

            <Form
            handleChange={handleChange}
            usuario={usuario}
            handleSubmit={handleSubmit} />
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