import { useState } from 'react';


const ItemCount = ({stock, initial, onAdd}) => {
  
  const [contador, setContador] = useState(initial);
  const aumentarContador = () => {
    if (contador < stock) {
        setContador(contador + 1);
    }
  }

  const bajarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }
  const confirmarContador = () => {
    alert('Haría lo que haga falta, chequear si esta Ok o no.')
  }
  
  return (
    <>
    <div className="px-4 py-5 my-5 text-center">
        <button onClick={bajarContador}>-</button>
        <p>El contador es {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={onAdd}>Confirmar</button>
    </div>
  </>
  )
}

export default ItemCount