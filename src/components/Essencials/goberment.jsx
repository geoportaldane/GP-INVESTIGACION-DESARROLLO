import React, { Fragment } from 'react';

const GobermentHeader = () => {
	return(
<div className="Header__goberment">
        <div className="goberment__container">
            <div className="goberment__logo">
                <a className="goberment__link" href="https://www.gov.co" target="_blank" rel="noopener noreferrer">
                    <img className="goberment__img"src="https://www.dane.gov.co/files/images/nuevaImg/header_govco.png" alt="logo gobierno nacional" />
                </a>
            </div>
            <div className="goberment__pages">
                <ul className="goberment__list" title="Transparencia">
                    <li className="goberment__item">
                        <a className="goberment__item__link" href="https://www.dane.gov.co/index.php/transparencia" target="_blank">Transparencia</a>
                    </li>
                    <li className="goberment__item" title="Atención y servicio a la ciudadania">
                        <a className="goberment__item__link" href="https://www.dane.gov.co/index.php/servicios-al-ciudadano" target="_blank">Atención y servicio a la ciudadania</a>
                    </li>
                    <li className="goberment__item" title="Participa">
                        <a className="goberment__item__link" href="https://www.dane.gov.co/index.php/servicios-al-ciudadano/tramites/participacion-ciudadana" target="_blank">Participa</a>
                    </li>
                    <li className="goberment__item" title="Sala de prensa">
                        <a className="goberment__item__link" href="https://www.dane.gov.co/index.php/sala-de-prensa" target="_blank">Sala de prensa</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
	);

}

export default GobermentHeader;

