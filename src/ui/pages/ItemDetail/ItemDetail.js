import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';


const ItemDetail = ({id, nombre, precio, stock, portada, descripcion, categoria}) => {
  return (

    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
                    <div className="col-auto d-none d-lg-block">
                        <img src={portada} className="cover" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
                    <div className="col p-4 pt-10 d-flex flex-column text-left">
                        <h3 className="fs-2 tmb-0 text-left">{nombre } <small>({stock})</small></h3>
                        <small className="fs-7 display-block mb-2">Categoria: <a href="">{categoria}</a></small>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
                    <div className="col p-4 pt-10 d-flex flex-column text-left">
                        <p className="card-text mb-auto precio font-weight-bold">{precio}</p>
                        <ItemCount stock={stock} initial={1} onAdd="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail