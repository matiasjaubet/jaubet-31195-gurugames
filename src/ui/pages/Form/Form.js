import { useState } from "react"

const Form = () => {

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = { nombre, telefono, email }
        console.log(usuario)
    }

    const handleNombreChange = (e) => {
        setNombre(e.target.value)
    }

    const handleTelefonoChange = (e) => {
        setTelefono(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }


    return (
    <>
        <div className="container mt-5">
            <h3>Checkout</h3>
            <p>Epa! Será una excelente compra! Ahora Solo necesitamos tus datos para seguir con el proceso del checkout.</p>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-4 mb-3">
                            <input onChange={handleNombreChange} name="nombre" type="text" className="form-control" placeholder="Nombre y Apellido" />
                        </div>
                        <div className="col-12 col-sm-4 mb-3">
                            <input onChange={handleTelefonoChange} name="telefono" type="text" className="form-control" placeholder="Teléfono" />
                        </div>
                        <div className="col-12 col-sm-4 mb-3">
                            <input onChange={handleEmailChange} name="" type="email" className="form-control" placeholder="E-Mail" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary display-inline-block">Enviar datos</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Form