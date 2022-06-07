import brand from '../images/brand.jpg';
import '../css/hero.css';

const Hero = ({greeting, copy}) => {
    return (
        <div className="container">
            <div className="px-4 pt-5 text-center">    
                <img src={brand} className="play" alt="" />
                <h2 className="display-6 fw-bold">{greeting}</h2>
                <div className="col-lg-8 mx-auto">
                    <p className="lead mb-4">{copy}</p>
                </div>
            </div>
        </div>
  )
}

export default Hero