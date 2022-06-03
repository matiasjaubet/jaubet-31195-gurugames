import portada from '../images/covers/deathloop.jpg';
import portada2 from '../images/covers/returnal.jpg';
import portada3 from '../images/covers/uncharted.jpg';
import portada4 from '../images/covers/death.jpg';
import brand from '../images/brand.jpg';
import '../css/hero.css';
import '../css/producto.css';

import ItemCount from './ItemCount';


const ItemListContainer = ({greeting, copy}) => {

const confirmarContador = () => {
alert('Haría lo que haga falta, chequear si esta Ok o no.')
}

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
                    <div className="mt-5 col-auto d-none d-lg-block">
                        <img src={portada} className="cover" alt="" />
                    </div>
                    <div className="col p-4 pt-1 d-flex flex-column position-static producto">
                        <h3 className="fs-5 tmb-0 mt-2">Deathloop</h3>
                        <p className="card-text mb-auto">$8.900.-</p>
                        <ItemCount stock={5} initial={1} onAdd={confirmarContador} />
                    </div>
                </div>
                
            </div>

            <div className="col-md-3">

                <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
                    <div className="mt-5 col-auto d-none d-lg-block">
                        <img src={portada2} className="cover" alt="" />
                    </div>
                    <div className="col p-4 pt-1 d-flex flex-column position-static producto">
                        <h3 className="fs-5 tmb-0 mt-2">Returnal</h3>
                        <p className="card-text mb-auto">$12.900.-</p>
                        <ItemCount stock={5} initial={1} onAdd={confirmarContador} />
                    </div>
                </div>

                </div>

                <div className="col-md-3">

                <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
                    <div className="mt-5 col-auto d-none d-lg-block">
                        <img src={portada3} className="cover" alt="" />
                    </div>
                    <div className="col p-4 pt-1 d-flex flex-column position-static producto">
                        <h3 className="fs-5 tmb-0 mt-2">Uncharted</h3>
                        <p className="card-text mb-auto">$7.100.-</p>
                        <ItemCount stock={5} initial={1} onAdd={confirmarContador} />
                    </div>
                </div>

                </div>

                <div className="col-md-3">

                <div className="row g-0 rounded overflow-hidden mb-4 h-md-250 position-relative">
                    <div className="mt-5 col-auto d-none d-lg-block">
                        <img src={portada4} className="cover" alt="" />
                    </div>
                    <div className="col p-4 pt-1 d-flex flex-column position-static producto">
                        <h3 className="fs-5 tmb-0 mt-2">Death Stranding</h3>
                        <p className="card-text mb-auto">$2.500.-</p>
                        <ItemCount stock={5} initial={1} onAdd={confirmarContador} />
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