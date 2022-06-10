import ItemCount from '../ItemCount/ItemCount';

const confirmarContador = () => {
    alert('Haría lo que haga falta, chequear si esta Ok o no.')
}

const item = ({nombre, precio, stock, portada}) => {
  return (
    <div className="col-md-3">
        <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
            <div className="mt-5 col-auto d-none d-lg-block">
                <img src={portada} className="cover" alt="" />
            </div>
            <div className="col p-4 pt-1 d-flex flex-column position-static producto">
                <h3 className="fs-5 tmb-0 mt-2">{nombre } <small>({stock})</small></h3>
                <p className="card-text mb-auto">{precio}</p>
                <ItemCount stock={stock} initial={1} onAdd={confirmarContador} />
            </div>
        </div>
    </div>
  )
}

export default item