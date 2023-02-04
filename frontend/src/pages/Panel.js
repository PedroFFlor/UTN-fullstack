
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MainPanel from '../components/panel/MainPanel';

const Panel = ({datosUsuario, handleSubmit, handleChange, logout}) => {
  return (
    <>
      <Header datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout}/>
      { datosUsuario.admin ? <MainPanel /> : 'No tiene autorizacion para continuar'}
      <Footer />
    </>
  );
}

export default Panel;
