import { useState } from 'react';

const ListaOfertas = props => {
    return (
        <>
            <div className="text-center">
                <iframe src="/files/ListaPreciosOferta.pdf" width="600"
                    height="800" title="Ofertas" className="border-0"></iframe>
            </div>
        </>
    )
}
const CatalogoOfertas = props => {
    return (
        <>
            <div className="text-center">
                <iframe src="/files/CatalogoOfertas.pdf" width="600"
                    height="800" title="Ofertas" className="border-0"></iframe>
            </div>
        </>
    )
}

const DescuentosPorCantidad = props => { 
    return (
        <>
            <div className="text-center">
                <iframe src="/files/DescuentosPorCantidad.pdf" width="600"
                    height="800" title="Ofertas" className="border-0"></iframe>
            </div>
        </>
    )
}


const MainOfertas = (props) => {
    const [lista, setLista] = useState(false);
    const [catalogo, setCatalogo] = useState(false);
    const [descuentos, setDescuentos] = useState(false); 


    const handleClick = (e) => {
        if (e === "ListaOfertas") {
            setLista(true)
            setCatalogo(false)
            setDescuentos(false)
        }
        if (e === "CatalogoOfertas") {
            setLista(false)
            setCatalogo(true)
            setDescuentos(false)
        }
        if (e === "DescuentosPorCantidad") {
            setLista(false)
            setCatalogo(false)
            setDescuentos(true)
        }
    }

    return (
        <main className="container-sm text-center d-flex flex-column">
            <div className="btn-group my-3" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={e => handleClick("ListaOfertas")}>Lista de precios Ofertas</button>
                <button type="button" className="btn btn-outline-primary" onClick={e => handleClick("CatalogoOfertas")}>Catalogo de Ofertas</button>
                <button type="button" className="btn btn-outline-primary" onClick={e => handleClick("DescuentosPorCantidad")}>Descuentos por cantidad</button>
            </div>
            {
                lista ? <ListaOfertas /> : catalogo ? <CatalogoOfertas /> : descuentos ? <DescuentosPorCantidad /> : ""
            }

        </main>
    );
}

export default MainOfertas;
