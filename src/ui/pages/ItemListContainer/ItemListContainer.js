import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../widget/Spinner/Spinner';

import { collectionProd } from '../../../api/firebase/firebase';
import { getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const resultado = useParams();

    useEffect(() => {
     
        const ref = resultado.id
        ? query(collectionProd, where('categoria', '==', resultado.id))
        : collectionProd;

        getDocs(ref).then((response) => {
            const products = response.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            });
            setItems(products)
            setLoading(false);
        })        
        .catch( (error) => {
            console.log(error)
        })

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
                <div className="row mb-5 py-4 text-center">
                   
                    <p className='mensaje'><span className="icon">😕 </span>No hay productos para mostrar...<br />Pero no llores, tienen muchas más opciones para elegir. <br />Solo debés saber <b>cuál</b> elegir.</p>
                    <Link to="/" className="btn btn-primary btn-volver" >Ir al Inicio</Link>
                </div>
            </div>
            :
            <div className="container">
                <div className="row text-center">
                    <ItemList productos={items} />
                </div>
            </div>
            }
            </>
            )
    }
}

export default ItemListContainer