
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MainHome from '../components/home/MainHome';

const Home = ({datosUsuario, handleSubmit, handleChange, logout}) => {

  return (
    <>
      <Header datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout}/>
      <MainHome />
      <Footer />
    </>
  );
}

export default Home;
