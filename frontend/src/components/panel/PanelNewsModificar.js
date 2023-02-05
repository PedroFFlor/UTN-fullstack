
import { useState } from "react"
import axios from "axios";


const PanelNewsModificar = props => {
    const { modificarNews, cargarNovedades, setModificar } = props
    const [body, setBody] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target

        setBody(old => ({
            ...modificarNews,
            [name]: value
        }));

    }

    const handleChangeImg = (e) => {

        const name = e.target.name
        const value = e.target.files[0]

        setBody(old => ({
            ...modificarNews,
            [name]: value
        }));

    }

    const handleChangeDelImg = (e) => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name;

        setBody(old => ({
            ...modificarNews,
            [name]: value
        }));

    }

    const handleSubmitModificar = async (e) => { 
        e.preventDefault()

        await axios.post('http://localhost:3001/api/panel/modificarNoticia',
            body,
            {headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        setModificar(false)
        cargarNovedades()
    }

    return (
        <form
            action="/panel/modificarNoticia"
            method="post"
            encType="multipart/form-data"
            className="row border border-primary rounded p-2 m-1 width100"
            onSubmit={handleSubmitModificar}>
            <input type="hidden" name="id" value={`${modificarNews.id}`} />
            <input type="hidden" name={`${modificarNews.img_id}`} id="img_original" value={`${modificarNews.img_id}`} />
            <div className="col-3 text-start">
                <label className="d-inline">Titulo Noticia:</label>
                <input className="form-control d-inline" type="text" name="titulo" defaultValue={`${modificarNews.titulo}`} onChange={handleChange} />
                <label className="d-inline">Imagen:</label>
                <input className="form-control d-inline" type="file" name="imagen" onChange={handleChangeImg} />
                <label>Eliminar imagen<input type="checkbox" name="img_delete" onChange={handleChangeDelImg} ></input></label>
            </div>
            <div className="col-6">
                <label className="d-block">Descripcion:</label>
                <textarea className="form-control" name="cuerpo" defaultValue={`${modificarNews.cuerpo}`} onChange={handleChange} />
            </div>
            <div className="col-3 d-flex flex-column justify-content-evenly" >
                <button className="form-control d-block btn btn-primary" type="submit" >Modificar Noticia</button>
            </div>
        </form>
    )
}

export default PanelNewsModificar;
