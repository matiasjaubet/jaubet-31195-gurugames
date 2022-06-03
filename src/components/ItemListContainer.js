import portada from '../images/covers/assasin.jpg';
import brand from '../images/brand.jpg';
import '../css/producto.css';

import ItemCount from './ItemCount';


const ItemListContainer = ({greeting, copy}) => {
  

  return (
    <>
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
          <img src={brand} className="play" alt="" />
          <h2 className="display-5 fw-bold">{greeting}</h2>
          <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">{copy}</p>
          </div>
          <div className="row mb-2">
            <div className="col-md-3">
              <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
                  <img src={portada} className="cover" alt="" />
                </div>
                <div className="col p-4 d-flex flex-column position-static producto">
                  <strong className="d-inline-block mb-2 text-primary">Acción</strong>
                  <h3 className="mb-0">Assassin's Creed - Valhalla</h3>
                  <p className="card-text mb-auto">$8.900.-</p>
                  <ItemCount stock={5} initial={1} onAdd={confirmarContador()} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </>
  )
}

export default ItemListContainer