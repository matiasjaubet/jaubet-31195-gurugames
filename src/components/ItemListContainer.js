import brand from '../images/brand.jpg';
import '../css/hero.css';

const ItemListContainer = ({greeting, copy}) => {
  return (
    <>
    <div className="px-4 py-5 my-5 text-center">
        <img src={brand} className="play" alt="" />
        <h2 className="display-5 fw-bold">{greeting}</h2>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{copy}</p>
        </div>
    </div>
  </>
  )
}

export default ItemListContainer