import { Link } from "react-router-dom";
import { useState } from "react"
import axios from "axios";


const Footer = (props) => {
    const initialForm = {
        nombre: '',
        telefono: '',
        mail: '',
        asunto: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false)
    const [body, setBody] = useState(initialForm)
    const [msg, setMsg] = useState('')



    const handleSubmit = async e => {
        e.preventDefault()

        setMsg('')
        setSending(true)
        const res = await axios.post('http://localhost:3001/api/contacto', body);
        setSending(false)
        setMsg(res.data.mensaje)
        
        if (res.data.error === false) {
            setBody(initialForm)
        } else {
            console.log(res.data.error)
        }
    }

    const handleChange = e => {

        const { name, value } = e.target
        setBody(old => ({
            ...body,
            [name]: value
        }));
    
    }
    return (
        <footer className="bg-danger py-2 hidden_print" >
            <div className="container-sm text-center">
                <div className="row d-flex flex-row align-items-center">
                    <div className="col-sm-3 d-flex flex-column">
                        <h5>Seguinos en las redes</h5>
                        <ul className="ul-contact">
                            <li><i className="bi bi-facebook p-2"></i><Link to="#">Faccebok</Link></li>
                            <li><i className="bi bi-instagram p-2"></i><Link to="#">Instagram</Link></li>
                            <li><i className="bi bi-twitter p-2"></i><Link to="#">Twitter</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 d-flex flex-column">
                        <h5>Necesitas que enviemos un representante?</h5>
                        {sending ? <p>Enviando..</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <form action="/contacto" method="post" onSubmit={handleSubmit}>
                            <input type="text" className="form-control my-1" placeholder='Nombre' name="nombre" value={body.nombre} onChange={handleChange} />
                            <input type="text" className="form-control my-1" placeholder='Telefono' name="telefono" value={body.telefono} onChange={handleChange} />
                            <input type="text" className="form-control my-1" placeholder='Mail' name="mail" value={body.mail} onChange={handleChange} />
                            <input type="text" className="form-control my-1" placeholder='Asunto' name="asunto" value={body.asunto} onChange={handleChange} />
                            <textarea className="form-control my-1" value={body.mensaje} name="mensaje" onChange={handleChange} placeholder="Mensaje"></textarea>
                            <button className="btn btn-primary my-1" type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="col-sm-3 d-flex flex-column">
                        <ul className="ul-contact">
                            <li><i className="bi bi-telephone-inbound-fill p-2"></i><span>Telefono: 34134134134</span></li>
                            <li><i className="bi bi-envelope-fill p-2"></i><span>contacto@distribuidoraX.com.ar</span></li>
                            <li><i className="bi bi-geo-alt-fill p-2"></i><span>Cordoba 1234, Rosario, Santa Fe</span></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h6 className="container text-center">Todos los derechos reservados y la sarasa</h6>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
