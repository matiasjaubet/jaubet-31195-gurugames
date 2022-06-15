import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import {productos} from './productos';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../widget/Spinner/Spinner';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const cambiarEstado = () => {
        setLoading(false);
    }

    const resultado = useParams();

    useEffect(() => {
     
        if(resultado.id === undefined) {
            const MocAsync = new Promise((res) => {
                setTimeout(() => {
                    const productosDeDB = productos
                    res(productosDeDB)
                    cambiarEstado()
                }, 2000)
            })
            MocAsync.then(items => {
                setItems(items)
            })
        } else {
            const MocAsync = new Promise((res) => {
                setTimeout(() => {
                    const productosDeDB = productos.filter((item) => item.categoria === resultado.id);
                    res(productosDeDB)
                    cambiarEstado()
                }, 2000)
            })
            MocAsync.then(items => {
                setItems(items)
            })
        }

    },[resultado.id])

    if(loading) {
        return (
            <Spinner mensaje="Paciencia, cargando juegos para vos..." />
        )
    } else {
        return (
            <>
            {items.length === 0 
            ?
            <div className="container">
                <div className="row my-5 py-4 text-center">
                   
                    <p className='mensaje'><span className="icon">😕 </span>No hay productos para mostrar...<br />Pero no llores, tienen muchas más opciones para elegir. <br />Solo debés saber <b>cuál</b> elegir.</p>
                    <Link to="/" className="btn btn-primary btn-volver" >Ir al Inicio</Link>
                </div>
            </div>
            :
            <div className="container">
                <div className="row my-5 py-4 text-center">
                    {/* {
                        items?.length < 0 ? <p>No hay nada che</p> : <ItemList productos={items} />
                    } */}
                    <ItemList productos={items} />
                </div>
            </div>
            }
            </>
            )
    }
}

export default ItemListContainer