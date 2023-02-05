
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import PanelNewsModificar from "./PanelNewsModificar";
import PanelNewsAgregar from "./PanelNewsAgregar";

const PanelNews = props => {
    
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);
    const [modificarNews, setModificarNews] = useState({});
    const [agregar, setAgregar] = useState(false);
    const [modificar, setModificar] = useState(false);
    const [error, setError] = useState(false);
    const [mensaje, setMensaje] = useState('');
    
    useEffect(() => {
        cargarNovedades()
    }, [agregar, modificar])
    const cargarNovedades = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:3001/api/Home');
        setNews(old => res.data);
        setLoading(false);
    }
    

    const handleClickAgregar = () => {
        setModificar(false)
        agregar ? setAgregar(false) : setAgregar(true)
    }

    const handleClickModificar = async (id) => {

        let res = await axios.get(`http://localhost:3001/api/panel/modificarNoticia/${id}`); //trae el img_id

        setModificarNews(old => res.data);

        setAgregar(false)
        setModificar(true)

    }

    const handleClickEliminar = async (id) => {

        await axios.get(`http://localhost:3001/api/panel/eliminarNoticia/${id}`);
        setModificar(false)
        setAgregar(false)
        cargarNovedades()

    }

    return (
        <>
            <hr />
            <Link className="btn  btn-primary" to="/panel/agregarNoticia" onClick={handleClickAgregar}><h3>AGREGAR NOTICIA</h3></Link>
            {agregar ?
                <PanelNewsAgregar setError={setError} setMensaje={setMensaje} setAgregar={setAgregar} />
                : modificar ?
                    <PanelNewsModificar modificarNews={modificarNews} cargarNovedades={cargarNovedades} setModificar={setModificar}/>
                    : ''
            }
            {error ? <p>{mensaje}</p> : ''}
            {
                loading ? 'Cargando novedades' : <>
                    {
                        news.map((item, i) => {
                            let hayImg = true
                            if (item.imagen === '') { hayImg = false }
                            return (
                                <>
                                    <div className="row border border-primary rounded p-2 m-1 width100" key={i}>
                                        <div className="col-sm-10 d-flex new_height_max">
                                            {
                                                hayImg ? <>
                                                    <div className="col-sm-6">
                                                        <h3>{item.titulo}</h3>
                                                        <p>{item.cuerpo}</p>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <img src={item.imagen} className="float-start m-2" alt="Noticia" />
                                                    </div>
                                                </> : <>
                                                    <div className="col-sm-10">
                                                        <h3>{item.titulo}</h3>
                                                        <p>{item.cuerpo}</p>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                        <input type="hidden" id="img_original" name="img_original" value={`${item.img_id}`} />
                                        <div className="col-sm-2 d-flex flex-column justify-content-evenly" >
                                            <button className="form-control d-block btn btn-primary" onClick={e => handleClickEliminar(item.id)}>Eliminar</button>
                                            <button className="form-control d-block btn btn-primary" onClick={e => handleClickModificar(item.id)}>Modificar</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </>
            }
        </>
    )
}

export default PanelNews;
