import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import '../css/producto.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const MocAsync = new Promise((res) => {
            setTimeout(() => {
                const productosDeDB = [
                    { id: 1, nombre: 'Deathloop', precio: "$8.900.-", stock: 12, portada: '../images/covers/deathloop.jpg'},
                    { id: 2, nombre: 'Returnal', precio: "$5.000.-", stock: 10, portada: '../images/covers/returnal.jpg'},
                    { id: 3, nombre: 'Uncharted', precio: "$5.200.-", stock: 20, portada: '../images/covers/uncharted.jpg'},
                    { id: 4, nombre: 'Death Stranding', precio: "$12.000.-", stock: 2, portada: '../images/covers/death.jpg'},
                ]
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