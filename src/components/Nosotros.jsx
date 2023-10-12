

const Nosotros = () => {
    return(
        <div id="contenedor_git">{/* Contenido---------------------------------------- */}
            
            
            <div class="tipografia_titulo1_git verde_dane_texto">Nosotros</div>
            <div class="linea_titulo1_git verde_dane_background"></div>

            <div id="caja_git" class=" Tipografia_cuerpo_git">{/* caja---------------------------------------- */}

            <div class="texto_principal_nosotros_git gris_dane_texto">
                El Grupo Interno de Trabajo de Investigación y Desarrollo (GIT I+D) hace parte de la Dirección Técnica de Geoestadística del DANE. Está compuesto por talento humano de profesionales y especialistas en diferentes disciplinas, con el propósito de obtener y difundir nuevos conocimientos a partir de la integración de información estadística y espacial, soportado en la exploración y ejecución de métodos y procesos de investigación e innovación geo-estadística, y la implementación de tecnologías y desarrollos para la generación de valor agregado en la producción de información estadística.
            </div>


            <div>{/* misión visión---------------------------------------- */}
                
                <div class="texto_cont_M_V_nosotros_git">{/* misión ---------------------------------------- */}
                    <div >
                     <img class="imagen_M_V_nosotros_git" src="https://geoportal.dane.gov.co/src/images/git/git_mision.webp"/>
                    </div>

                    <div class="texto_M_V_nosotros_git gris_dane_texto">
                        Promover y desarrollar la integración de la información estadística y geoespacial, mediante la investigación aplicada, la innovación de procesos y apropiación de nuevas tecnologías, con el fin de potenciar el alcance y difusión de la información geo-estadística a todos los usuarios, para la toma de decisiones y la generación de nuevo conocimiento.
                    </div>
                </div>

                    
                
                    <div class="linea_separar_git verde_dane_background">{/* Linea---------------------------------------- */}</div>




                <div class="texto_cont_M_V_nosotros_git">{/* visión---------------------------------------- */}
                    <div >
                     <img class="imagen_M_V_nosotros_git" src="https://geoportal.dane.gov.co/src/images/git/git_vision.webp"/>
                    </div>

                    <div class="texto_M_V_nosotros_git gris_dane_texto">
                        En el año 2025 el GIT I+D geoestadístico será un grupo de investigación reconocido y clasificado en el Sistema Nacional de Ciencia y Tecnología, gracias a la generación de productos de investigación e innovación con impacto en los diferentes usuarios de la información geo-estadística, que permitan una mejor comprensión del país.                    
                    </div>
                </div>

            </div>{/* FIN misión visión---------------------------------------- */}

            
            
            <div class="linea_separar_git magenta_dane_background">{/* Linea---------------------------------------- */}</div>


            <div class="pdf_ilustracion">{/* boton PDF y ilustración---------------------------------------- */}


                <div class="boton_nosotros">{/* boton PDF---------------------------------------- */}

                    <a href="https://geoportal.dane.gov.co/src/images/git/Participantes_GIT_I+D_2023.pdf" target="_blank">
                        <img class="boton_nosotros_tamano" src="https://geoportal.dane.gov.co/src/images/git/git_participantes_2.webp" alt="" />
                        <img class="top boton_nosotros_tamano" src="https://geoportal.dane.gov.co/src/images/git/git_participantes_1.webp" alt="" />
                    </a>

                </div>
                
                
                <div>{/* ilustración---------------------------------------- */}
                    <img class="imagen_M_V_nosotros_ilustracion_git" src="https://geoportal.dane.gov.co/src/images/git/git_nosotroscomic.webp"/>
                </div>


            </div>



            </div>{/* FIN caja---------------------------------------- */}

        



        </div>/* FIN Contenido---------------------------------------- */
    );
}

export default Nosotros;