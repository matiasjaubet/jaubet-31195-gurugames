
import React, { useContext } from "react";
import { context } from "../../../api/CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";


const Carrito = () => {

  const resultado = useContext(context);
  console.log("Resultado....", resultado.item)
  console.log("cantidad nene....", resultado.cantidadSeleccionada)

  return (
    <div className="container">
    <div className="row my-5 py-4 text-center">
        <p>Hola! Estás en tu Carrito. </p>
        <h3>Tienes <b>{resultado.cantidadSeleccionada}</b> productos.</h3>
        <h2>{resultado.item.portada}</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Portada</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio (u.)</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>
          <tbody>
        {
        resultado.item.map(({ id, nombre, precio, portada }) => {
            return (
            <>
              <ItemCart id={id} portada={portada} precio={precio} nombre={nombre} />
            </>
            )
        })
        }
          </tbody>
      </table>
    </div>
</div>
    
  )
}

export default Carrito