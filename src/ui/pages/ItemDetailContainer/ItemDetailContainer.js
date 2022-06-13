
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { producto } from '../ItemListContainer/productos';

const ItemDetailContainer = ({id, nombre, categoria, descripcion, precio, stock, portada}) => {

    const [item, setItem] = useState({});

    useEffect(() => {

        const MocAsync = new Promise((res) => {
            setTimeout(() => {
                const productoDeDB = producto
                res(productoDeDB)
            }, 2000)
        })

        MocAsync.then(item => {
            setItem(item)
        })
        
    },[])

    console.log(item)

  return (
        <ItemDetail item={item} />
  )
}

export default ItemDetailContainer