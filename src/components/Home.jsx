import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../styles/home.scss"


const Home = () => {

  const [resultado, setDataResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://geoportal.dane.gov.co/laboratorio/serviciosjson/geoportal2019/geoportal_invdev_nivel01.php?nivel_geoportal=1');
        const { resultado } = data;
        setDataResult(resultado);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log(dataInit, "hola soy los datos")

  return (
    <main className="home">
      <section className="home__section">
        <h2 className="section__title">Categorías de I+D</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="home__list">
            {resultado.map((item) => (
              <li className="home__item" key={item.COD_L1}>
                <div className="home__itemBox">
                  <div className="home__boxImage">
                    <Link to={item.URL} className="home__boxImageContent" rel="referrer" title="" >
                      <picture className="home__contentPicture">
                        <img width="100" height="100" src={`https://geoportal.dane.gov.co/${item.IMAGE_DESKTOP}`} alt="" loading="lazy" title="" />
                      </picture>
                    </Link>
                  </div>
                  <div className="home__boxText">
                    <a className="home__boxTextContent" href="">
                      <div className={`home__boxTextIcon ${item.COLOR} ${item.BACKGROUND}`}>
                        <span className={`DANE__Geovisor__icon__${item.ICONO}`}></span>
                      </div>
                      <h3 className="home__boxTextName">{item.NOMBRE}</h3>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Home;