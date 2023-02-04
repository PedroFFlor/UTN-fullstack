
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MainCarpeta from '../components/carpeta/MainCarpeta';

const Carpeta = ({datosUsuario, handleSubmit, handleChange, logout}) => {
  return (
    <>
      <Header datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout}/>
      { datosUsuario.vendedor ? <MainCarpeta /> : 'No tiene autorizacion para continuar'}
      <Footer />
    </>
  );
}

export default Carpeta;
