import {createContext, useState} from 'react'

export const context = createContext();
const Provider = context.Provider;

const CartContext = ({children}) => {
    const [cantidad_total, setCantidad_total] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const addGame = (item, quantity) => {

        const nuevoJuego = { item, quantity };
        if (carrito.length === 0) {

            setCarrito(current => [...current, nuevoJuego]);
            setCantidad_total(cantidad_total + quantity);

        } else {

            if(carrito.find(x => x.item.id === nuevoJuego.item.id)) {
                
                const cantidadAnterior = carrito.find(x => x.item.id === nuevoJuego.item.id);

                if(cantidadAnterior.quantity + quantity <= cantidadAnterior.item.stock) {
                    cantidadAnterior.quantity += quantity;
                    setCantidad_total(cantidad_total + quantity)
                } else {
                    alert("No hay suficiente stock...");
                }
            
            } else {
                setCarrito(current => [...current, nuevoJuego]);
                setCantidad_total(cantidad_total + quantity)
            }

        }
        
    }

    const removeItem = (id, quantity ) => {
        const newList = carrito.filter((x) => x.item.id !== id);
        setCarrito(newList);
        setCantidad_total(cantidad_total - quantity)
    }

    const totalPrice = () => {
        const costoProducto = carrito.map((prod) => {
            const cadaProducto = prod.quantity * prod.item.precio;
            return cadaProducto;
        })

        let total = 0;
        for (let i = 0; i < costoProducto.length; i++) {
            total += costoProducto[i];
        }
        return total
    }

    const deleteAll = () => setCarrito([])

    const valorDelContexto = {
        quantity: cantidad_total,
        item: carrito,
        addGame    : addGame,
        removeItem : removeItem,
        deleteAll  : deleteAll,
        totalPrice : totalPrice,
    }



    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartContext