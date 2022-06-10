
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from '../ItemListContainer/productos';

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const MocAsync = new Promise((res) => {
            setTimeout(() => {
                const productosDeDB = productos
                res(productosDeDB)
            }, 2000)
        })

        MocAsync.then(items => {
            setItems(items)
        })

    },[])

  return (
    <div>
        {
            items.map(({ nombre, precio, stock, portada, id, descripcion, categoria }) => {
                if (id === 3) {
                    return <ItemDetail id={id} nombre={nombre} categoria={categoria} descripcion={descripcion} precio={precio} stock={stock} portada={portada} />
                }
            })
        }
    </div>
  )
}

export default ItemDetailContainer