import { Link } from 'react-router-dom';

const item = ({nombre, precio, stock, portada, id}) => {
  return (
    <div className="col-md-3">
        <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
            <div className="mt-5 col-auto">
              <Link to={`/item/${id}`}>
                <img src={portada} className="cover" alt="" />
              </Link>
            </div>
            <div className="col p-4 pt-1 d-flex flex-column position-static producto">
                <h3 className="fs-5 tmb-0 mt-2">{nombre } <small>({stock})</small></h3>
                <p className="card-text mb-auto"><b>{precio}</b></p>
                <Link to={`/item/${id}`} className="btn btn-primary mt-3">Ver detalle </Link>
            </div>
        </div>
    </div>
  )
}

export default item