import { Fragment, useEffect, useState } from "react";
import axios from "axios";


const MainCarpeta = (props) => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            let res = await axios.get('http://localhost:3001/api/carpeta/productos');
            setProductos(old => res.data);
            setLoading(false);
        }
        cargarNovedades()
    }, [])

    const rubros = productos.reduce((allRubros, producto) => {
        return Array.from(new Set([...allRubros, producto.rubro]));
    }, []);

    return (
        <main className="container-sm text-center">
            {
                loading ? 'Cargando novedades' : <>
                    <div className="row justify-content-evenly">
                        {
                            rubros.map((rubro, index) => {
                                return (
                                    <Fragment key={index}>
                                        <h2 key={index}>{rubro}</h2>
                                        {
                                            productos.map((prod, i) => {
                                                return prod.rubro === rubro && (                                                
                                                    <div key={i} className="col-sm-3 d-flex flex-column no_break" >
                                                        <span>{prod.desc}</span>
                                                        <img src={`/img/carpeta/${prod.rutaImg}`} alt={prod.desc} className="img_carpeta" />
                                                        <h6>Embalaje:<strong>{prod.embalaje}</strong></h6>
                                                        <h3>${prod.precio}</h3>
                                                    </div>                                                    
                                                )
                                            })
                                        }
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </>
            }
        </main>
    );
}

export default MainCarpeta;
