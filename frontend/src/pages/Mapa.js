
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MainMapa from '../components/mapa/MainMapa';

const Mapa = ({datosUsuario, handleSubmit, handleChange, logout}) => {
  return (
    <>
      <Header datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout}/>
      { datosUsuario.vendedor ? <MainMapa /> : 'No tiene autorizacion para continuar'}
      <Footer />
    </>
  );
}

export default Mapa;
