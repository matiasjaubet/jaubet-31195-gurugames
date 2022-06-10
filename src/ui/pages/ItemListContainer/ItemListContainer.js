import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import {productos} from './productos';


const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        // fetch("https://fakestoreapi.com/products")
        //     .then((respuesta)=> {
        //         const p = respuesta.json();
        //         return p
        //     })
        //     .then((productos) => {
        //         console.log(productos)
        //         setItems(productos)
        //     })
        //     .catch((error => {
        //         console.log("Cagaste hermano...")
        //     }))


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


    if(items.length > 0) {
        return (
            <>
            <div className="container">
                <div className="row mb-2">
                    <ItemList productos={items} />
                </div>
            </div>
            </>
            )
    } else {
        return (
            <>
             <div className="container">
                <div className="row my-5 py-4 text-center">
                    <h3>Cargando productos...</h3>
                </div>
            </div>
            </>
        )
    }
}

export default ItemListContainer