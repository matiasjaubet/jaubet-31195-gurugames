import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import {productos} from './productos';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const resultado = useParams();
    console.log(resultado.id)

    useEffect(() => {
     
        if(resultado.id === undefined) {
            alert('hi')
            const MocAsync = new Promise((res) => {
                setTimeout(() => {
                    const productosDeDB = productos
                    res(productosDeDB)
                }, 2000)
            })
            MocAsync.then(items => {
                setItems(items)
            })
        } else {
            const MocAsync = new Promise((res) => {
                setTimeout(() => {
                    const productosDeDB = productos.filter((item) => item.categoria === resultado.id);
                    if (productosDeDB.length > 0) {
                        res(productosDeDB)
                    } else {
                        alert('Nothing')
                    }
                    
                }, 2000)
            })
            MocAsync.then(items => {
                setItems(items)
            })
        }

        console.log(resultado.id)

    },[resultado.id])


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