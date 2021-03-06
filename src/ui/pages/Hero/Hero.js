import brand from '../../../assets/img/brand.jpg';
import './Hero.css';

const Hero = ({greeting, copy}) => {
    return (
        <div className="container">
            <div className="px-2 text-center">    
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