import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';
import Spinner from '../../widget/Spinner/Spinner';

import { context } from "../../../api/CartContext/CartContext";

const ItemDetail = ({item}) => {

    const resultado = useContext(context);    
    const [cantidad, setCantidad] = useState("");

    const onAdd = (quantity) => {
        setCantidad(quantity);
        resultado.addGame(item, quantity);
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setLoading(false);
        }, 2000)
    },[setCantidad])


    if(loading) {
        return (
        <Spinner mensaje="Cargando información del juego..." />
        )
    } else {

        return (

        <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
                    <div className="col-auto">
                        <img src={item.portada} className="cover" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
                    <div className="col p-4 pt-10 d-flex flex-column text-left">
                        <h3 className="fs-2 tmb-0 text-left">{item.nombre } <small>({item.stock})</small></h3>
                        <small className="fs-7 display-block mb-2">Categoria: <Link to="{item.categoria}">{item.categoria}</Link></small>
                        <p>{item.descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
                    <div className="col p-4 pt-10 d-flex flex-column text-left">
                        <p className="card-text mb-auto precio font-weight-bold">${item.precio}</p>
                     
                        {cantidad.length !== 0  
                        ?
                        <Link to="/carrito" className="btn btn-primary mt-5">Terminar mi compra</Link>
                        :
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
}

export default ItemDetail