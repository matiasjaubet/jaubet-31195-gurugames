import {createContext, useState} from 'react'

export const context = createContext();
const Provider = context.Provider;

const CartContext = ({children}) => {

    // VALOR INICIAL DEL CARRITO Y CANTIDAD

    const [cantidad_total, setCantidad_total] = useState(0);
    const [carrito, setCarrito] = useState([]);

    // AGREGAR SOLO CANTIDAD

    const addItem = (cantidadSeleccionada) => {
        setCantidad_total( cantidad_total + cantidadSeleccionada);
    }

    // AGREGAR PRODUCTO Y CHEQUEAR QUE NO ESTE REPETIDO

    const addGame = (item) => {
        if(carrito.find(x => x.id === item.id)) {
            alert('No podés comprar dos productos iguales.')
        } else {
            setCarrito(current => [...current, item])
        }
    }

    // BORRAR PRODUCTO POR ID

    const removeItem = (id) => {
        const newList = carrito.filter((item) => item.id !== id);
        setCarrito(newList);
    }

    // VALOR DEL CONTEXTO (PROPS)

    const valorDelContexto = {
        addItem : addItem,
        cantidadSeleccionada: cantidad_total,

        addGame : addGame,
        item: carrito,

        removeItem : removeItem,

    }

    console.log("Valor del contexto", valorDelContexto)

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
  )
}

export default CartContext