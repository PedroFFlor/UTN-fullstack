import { useState } from "react"
import axios from "axios";


const PanelNewsAgregar = props => {

    const {setError, setMensaje, setAgregar} = props

    const [body, setBody] = useState({ titulo: '', cuerpo: '' });

    const handleChange = (e) => {

        const { name, value } = e.target
        setBody(old => ({
            ...body,
            [name]: value
        }));

    }

    const handleChangeImg = (e) => {

        const name = e.target.name
        const value = e.target.files[0]
        setBody(old => ({
            ...body,
            [name]: value
        }));

    }

    const handleSubmitAgregar = async (e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost:3001/api/panel/agregar', body, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        
        setError(res.data.error || false)
        setMensaje(res.data.mensaje || false) 
        setAgregar(false)
    
    }

    return (
        <form
            action="/panel/agregar"
            method="post"
            encType="multipart/form-data"
            className="row border border-primary rounded p-2 m-1 width100"
            onSubmit={handleSubmitAgregar}>
            <div className="col-3 text-start">
                <label className="d-inline">Titulo Noticia:</label>
                <input className="form-control d-inline" type="text" name="titulo" placeholder="Ingrese titulo" onChange={handleChange} />
                <label className="d-inline">Imagen:</label>
                <input className="form-control d-inline" type="file" name="imagen" onChange={handleChangeImg} />
            </div>
            <div className="col-6">
                <label className="d-block">Descripcion:</label>
                <textarea className="form-control" name="cuerpo" defaultValue="Ingrese deascripcion de la noticia." onChange={handleChange} />
            </div>
            <div className="col-3 d-flex flex-column justify-content-evenly" >
                <button className="btn  btn-primary form-control d-block" type="submit" >Agregar Noticia</button>
            </div>
        </form>
    )
}


export default PanelNewsAgregar;
