import {createContext, useState} from 'react'

export const context = createContext();
const Provider = context.Provider;

const CartContext = ({children}) => {

    // VALOR INICIAL DEL CARRITO Y CANTIDAD

    const [cantidad_total, setCantidad_total] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [costoTotal, setCostoTotal] = useState([]);


    // AGREGAR PRODUCTO Y CHEQUEAR QUE NO ESTE REPETIDO

    const addGame = (item, quantity) => {

        const nuevoJuego = { item, quantity };

        // SI EL CARRITO ESTA VACIO...
        if (carrito.length === 0) {

            // AGREGAMOS EL PRODUCTO DE UNA Y SUMAMOS LA CANTIDAD AL WIDGETCART
            setCarrito(current => [...current, nuevoJuego]);
            setCantidad_total(cantidad_total + quantity);

        // SI NO ESTÁ VACIO...
        } else {

            // BUSCAMOS SI YA LO HABIAMOS AGREGADO...
            if(carrito.find(x => x.item.id === nuevoJuego.item.id)) {
                
                //ENCONTRAMOS EL MISMO PRODUCTO. ES HORA DE VALIDAR EL STOCK...
                const cantidadAnterior = carrito.find(x => x.item.id === nuevoJuego.item.id);

                if(cantidadAnterior.quantity + quantity <= cantidadAnterior.item.stock) {
                    cantidadAnterior.quantity += quantity;
                    setCantidad_total(cantidad_total + quantity)
                } else {
                    alert("No hay suficiente stock...");
                }
            
            // PERO SI NO ENCONTRAMOS EL PRODUCTO AGREGADO, LO AGREGAMOS DE UNA...
            } else {
                setCarrito(current => [...current, nuevoJuego]);
                setCantidad_total(cantidad_total + quantity)
            }

        }
        
    }

    // BORRAR PRODUCTO POR ID Y RESTAR CANTIDAD DEL WIDGET CART

    const removeItem = (id, quantity ) => {
        const newList = carrito.filter((x) => x.item.id !== id);
        setCarrito(newList);
        setCantidad_total(cantidad_total - quantity)
    }

    // SUMAR EL TOTAL DE PEDIDO

    const totalPrice = () => {
        const costoProducto = carrito.map((prod) => {
            const cadaProducto = prod.quantity * prod.item.precio;
            return cadaProducto;
        })

        let total = 0;
        // console.log("ASDsadas : ", costoProducto);

        for (let i = 0; i < costoProducto.length; i++) {
            total += costoProducto[i];
        }
        // setCostoTotal(total);
        return total
    }



    // VACIAR CARRITO

    const deleteAll = () => setCarrito([])

    // VALOR DEL CONTEXTO (PROPS)

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