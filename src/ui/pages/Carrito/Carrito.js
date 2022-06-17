import { Link } from "react-router-dom"


const Carrito = () => {
  return (
    <div className="container">
    <div className="row my-5 py-4 text-center">
        <p>Hola! Estás en tu Carrito. Estamos procesando tu pedido, pero va a demorar unos días más. <br /> 
        Pasate la semana que viene. <br />
        Gracias!</p>
        <div className="col-md-5"></div>
        <div className="col-md-2">
        <Link to="/" className="btn btn-primary mt-5">Ir al incio</Link>
        </div>
        <div className="col-md-5"></div>
    </div>
</div>
    
  )
}

export default Carrito