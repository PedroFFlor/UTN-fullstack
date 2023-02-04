
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MainCondiciones from '../components/condiciones/MainCondiciones';

const Condiciones = ({datosUsuario, handleSubmit, handleChange, logout}) => {
  return (
    <>
      <Header datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout}/>
      { datosUsuario.vendedor ? <MainCondiciones /> : 'No tiene autorizacion para continuar'}
      <Footer />
    </>
  );
}

export default Condiciones;
