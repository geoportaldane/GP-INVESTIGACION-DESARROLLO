import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../styles/home.scss"
import "../styles/git_styles_design.scss"


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
        <div id="contenedor_git">
              <div class="tipografia_titulo1_git verde_dane_texto">Categorías de I + D</div>
              <div class="linea_titulo1_git verde_dane_background"></div>
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
              
          
            <div id="caja_git" class=" Tipografia_cuerpo_git">{/* ANEXO---------------------------------------- */}

              <div class="espacio_logros_git ">{/* LOGROS---------------------------------------- */}

                  <div class="titulo_logros_git tipografia_titulo2_git blanco_dane_texto">

                     <img class="corona_logros_git" src="https://geoportal.dane.gov.co/src/images/git/git_corona.svg" alt="" />
                      
                      
                      Logros GIT I+D
                  
                  </div>

                  <div class="visor_logros_git">
                      <div class="visor_secundario_logros_git">
                          
                          {/* Logro 1---------------------------------------- */}
                          <a href="https://revistas.unal.edu.co/index.php/rcg/article/view/98039" target="_blank"><div class="contenedor_x_logros_git">

                              <div class="imagen_x_logros_git"><img src="https://geoportal.dane.gov.co/src/images/git/git_logro_1.webp" alt="" /></div>
                              <div class="texto_x_logros_git">
                                  <p class="tipografia_titulo3_git blanco_dane_texto">Integración de información estadística y observaciones de la Tierra para el cálculo de indicadores ODS</p>
                                  <p class="Tipografia_cuerpo_git blanco_dane_texto">Integración de información estadística y observaciones de la Tierra para el cálculo de indicadores ODS 11.3.1 y 11.7.1</p>
                              </div>

                          </div></a>
                          <div class="linea_separar_git blanco_dane_background">{/* linea---------------------------------------- */}</div>
                          
                          {/* Logro 2---------------------------------------- */}
                          <a href="https://revistas.uptc.edu.co/index.php/perspectiva/article/view/determinacion-areas-concentracion-economica-rural-acer" target="_blank"><div class="contenedor_x_logros_git">

                              <div class="imagen_x_logros_git"><img src="https://geoportal.dane.gov.co/src/images/git/git_logro_2.webp" alt="" /></div>
                              <div class="texto_x_logros_git">
                                  <p class="tipografia_titulo3_git blanco_dane_texto">Determinación de Áreas de Concentración Económica Rural (ACER) mediante análisis espacial para la conformación</p>
                                  <p class="Tipografia_cuerpo_git blanco_dane_texto">Artículo publicado en la Revista Perspectiva Geográfica, Volumen 28, Número 1, Año 2023.</p>
                              </div>

                          </div></a>
                          <div class="linea_separar_git blanco_dane_background">{/* linea---------------------------------------- */}</div>

                          {/* Logro 3---------------------------------------- */}
                          <a href="https://earthobservations.org/geo_blog_obs.php?id=536" target="_blank"><div class="contenedor_x_logros_git">

                              <div class="imagen_x_logros_git"><img src="https://geoportal.dane.gov.co/src/images/git/git_logro_3.webp" alt="" /></div>
                              <div class="texto_x_logros_git">
                                  <p class="tipografia_titulo3_git blanco_dane_texto">2021 GEO SDG Award</p>
                                  <p class="Tipografia_cuerpo_git blanco_dane_texto">Launched in 2019, the GEO SDG Awards, led by the EO4SDG initiative, recognize institutions, organizations, and countries that are applying Earth observations towards the achievement of the Sustainable Development Goals.</p>
                              </div>

                          </div></a>
                          <div class="linea_separar_git blanco_dane_background">{/* linea---------------------------------------- */}</div>

                      </div>
                  </div>

              </div>{/* FIN LOGROS---------------------------------------- */}
              
              <div>{/* contactos GIT I+D---------------------------------------- */}

                    <div class="linea_separar_git magenta_dane_background">{/* linea---------------------------------------- */}</div>


                        <div id="espacio_contactos_git">

                            <div class="espacio_icono_contactos_git">
                                <img src="https://geoportal.dane.gov.co/src/images/git/git_contactos.svg" alt="" />
                            </div>

                            <div class="espacio_texto_contactos_git magenta_dane_texto Tipografia_cuerpo_git ">
                                <ul>
                                    <li><strong>Correo de contacto:</strong> cadurang@dane.gov.co</li>
                                    <li><strong>Conmutador:</strong> (+ 57) 597830 Ext 3627</li>
                                </ul>
                            </div>

                        </div>
              </div>{/* FIN contactos GIT I+D---------------------------------------- */}

              
            </div>{/* FIN ANEXO---------------------------------------- */}

       
       
        </div>{/* FIN---------------------------------------- */}
        
      </section>
    </main>
  );
};

export default Home;