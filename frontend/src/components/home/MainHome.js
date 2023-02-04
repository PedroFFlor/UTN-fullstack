import { useState, useEffect } from 'react';
import axios from 'axios'
import News from './News'
import Welcome from './Welcome';

const MainHome = (props) => {
  
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/api/Home');
      setNews(res.data);
      setLoading(false);  
    }
    cargarNovedades()
    
  }, [])

  return (
    <main className="container-sm text-center d-flex flex-column">
      <div className="row">
        <Welcome />
      </div>
      <hr className="hr1" />
      <div className="row">
        {
          loading ?  (
            <p>Cargando noticias!</p>
          ) : (
            news.map(item =>
              <News key={item.id} titulo={item.titulo} cuerpo={item.cuerpo} imagen={item.imagen} />
            )
          )
        }
      </div>
    </main>
  );
}

export default MainHome;
