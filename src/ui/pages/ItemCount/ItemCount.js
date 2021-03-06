import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
  
  const [contador, setContador] = useState(initial);
  
  const aumentarContador = () => {
    if (contador < stock) {
        setContador(contador + 1);
    }
  }

  const bajarContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  const confirmarContador = (e) => {
    onAdd(contador)
  }
  
  return (
    <>
    <div className="ItemListContainer text-center">
        <div className="ItemListContainer__box px-1 py-2 my-2">
            <button onClick={bajarContador} className="btn">-</button>
            <p>{contador}</p>
            <button onClick={aumentarContador} className="btn">+</button>
        </div>
        <button onClick={confirmarContador} className="btn btn-primary">Comprar</button>
    </div>
  </>
  )
}

export default ItemCount