
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MainOfertas from '../components/ofertas/MainOfertas';

const Ofertas = ({datosUsuario, handleSubmit, handleChange, logout}) => {
  return (
    <>
      <Header datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout}/>
      { datosUsuario.vendedor ? <MainOfertas /> : 'No tiene autorizacion para continuar'}
      <Footer />
    </>
  );
}

export default Ofertas;
