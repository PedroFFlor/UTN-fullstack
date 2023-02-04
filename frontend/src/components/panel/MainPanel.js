import { useState } from 'react';
import PanelOfertas from './PanelOfertas';
import PanelCondiciones from './PanelCondiciones';
import PanelNews from './PanelNews';


const MainPanel = (props) => {
    const [showOfertas, setShowOfertas] = useState(false);
    const [showCondiciones, setShowCondiciones] = useState(false);
    const [showHome, setShowHome] = useState(false);

    const handleClick = (e) => {
        if (e === "ofertas") {
            if (showOfertas === false) {
                setShowOfertas(true)
            } else {
                setShowOfertas(false)
            }
        }
        if (e === "condiciones") {
            if (showCondiciones === false) {
                setShowCondiciones(true)
            } else {
                setShowCondiciones(false)
            }
        }
        if (e === "home") {
            if (showHome === false) {
                setShowHome(true)
            } else {
                setShowHome(false)
            }
        }
    }
    
    return (
        <main className="container-sm text-center d-flex flex-column">
            <div className="d-flex flex-column align-items-center my-2">
                <button type="button" className="btn btn-primary btn-lg my-2" onClick={e => handleClick("ofertas")} >OFERTAS</button>
                {
                    showOfertas ? <PanelOfertas /> : ""
                }
            </div>
            <div className="d-flex flex-column align-items-center my-2">
                <button type="button" className="btn btn-primary btn-lg my-2" onClick={e => handleClick("condiciones")}>CONDICIONES</button>
                {
                    showCondiciones ? <PanelCondiciones /> : ""
                }

            </div>
            <div className="d-flex flex-column align-items-center my-2">
                <button type="button" className="btn btn-primary btn-lg my-2" onClick={e => handleClick("home")}>HOME</button>
                {
                    showHome ? <>
                        <h3>Noticias</h3>
                        <PanelNews />
                    </> 
                    : ""
                }
            </div>
        </main>
    );
}

export default MainPanel;
