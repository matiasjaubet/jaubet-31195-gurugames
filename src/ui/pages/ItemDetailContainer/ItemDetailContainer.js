
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from '../ItemListContainer/productos';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();
    const idToNumber = parseInt(id);

    useEffect(() => {

        const MocAsync = new Promise((res) => {
            setTimeout(() => {
                const productoDeDB = productos
                res(productoDeDB.find(prod => prod.id === idToNumber))
            }, 2000)
        })

        MocAsync.then(item => {
            setItem(item)
        })
        
    },[idToNumber])

  return (
        <ItemDetail item={item} />
  )
}

export default ItemDetailContainer