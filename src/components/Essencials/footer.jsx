// import location from '../images/location.svg'
// import clock from '../images/clock.svg'
// import phone from '../images/phone.svg'

const Footer = () => {
    return (
        <div className="Footer__container">
            <div className="Footer__container__titleBox">
                <h3 className="Footer__container__titleBox__name">Departamento Administrativo Nacional de Estadística (DANE)
                </h3>
            </div>
            <div className="Footer__container__AboutMore">
                <ul className="Footer__container__AboutMore__list">
                    <li className="Footer__container__AboutMore__list__item">
                        <div className="Footer__container__AboutMore__list__item__icon">
                            <span className="DANE__Geovisor__icon__phone2"></span>
                        </div>
                        <div className="Footer__container__AboutMore__list__item__textBox">
                            <h4 className="Footer__container__AboutMore__list__item__textBox__title">CALL CENTER</h4>
                            <p className="Footer__container__AboutMore__list__item__textBox__text">
                            <span className="Footer__container__AboutMore__list__item__textBox__text__bold" >Conmutador:</span>
                            <a className="Footer__container__AboutMore__list__item__textBox__text__link" href="tel:(+571) 597 8300"> (571) 597 8300</a> ó
                            <a className="Footer__container__AboutMore__list__item__textBox__text__link" href="tel:(+571) 597 8398"> (571) 597 8398</a>
                            </p>
                            <p className="Footer__container__AboutMore__list__item__textBox__text"><span className="Footer__container__AboutMore__list__item__textBox__text__bold" >Línea gratuita de atención:</span>  <a className="Footer__container__AboutMore__list__item__textBox__text__link" href="tel:01 8000 912002">01 8000 912002</a></p>
                    
                            <p className="Footer__container__AboutMore__list__item__textBox__text"><span
                                className="Footer__container__AboutMore__list__item__textBox__text__bold">Línea gratuita de
                                atención:</span> <a
                                    className="Footer__container__AboutMore__list__item__textBox__text__link"
                                    href="tel:01 8000 912002">01 8000 912002</a></p>
                        </div>
                    </li>
                    <li className="Footer__container__AboutMore__list__item">
                        <div className="Footer__container__AboutMore__list__item__icon">
                            <span className="DANE__Geovisor__icon__clock2"></span>
                        </div>
                        <div className="Footer__container__AboutMore__list__item__textBox">
                        <h4 className="Footer__container__AboutMore__list__item__textBox__title">HORARIO DE ATENCIÓN</h4>
                        <p className="Footer__container__AboutMore__list__item__textBox__text"><span className="Footer__container__AboutMore__list__item__textBox__text__bold">Lunes a viernes</span> 8:00 - 17:00</p>
                        </div>
                    </li>
                    <li className="Footer__container__AboutMore__list__item">
                        <div className="Footer__container__AboutMore__list__item__icon">
                            <span className="DANE__Geovisor__icon__LocationLine"></span>
                        </div>
                        <div className="Footer__container__AboutMore__list__item__textBox">
                            <h4 className="Footer__container__AboutMore__list__item__textBox__title">DIRECCIÓN</h4>
                            <p className="Footer__container__AboutMore__list__item__textBox__text"><span
                                className="Footer__container__AboutMore__list__item__textBox__text__bold">Carrera 59 No.
                                26-70 Interior I - CAN</span></p>
                            <p className="Footer__container__AboutMore__list__item__textBox__text">
                                <span className="Footer__container__AboutMore__list__item__textBox__text__bold">Código
                                    postal:</span>111321
                            </p>
                            <p className="Footer__container__AboutMore__list__item__textBox__text">
                                <span className="Footer__container__AboutMore__list__item__textBox__text__bold">Apartado
                                    Aéreo:</span>80043
                            </p>
                            <p className="Footer__container__AboutMore__list__item__textBox__text"><span
                                className="Footer__container__AboutMore__list__item__textBox__text__bold">Bogotá D.C.,
                                Colombia - Suramérica</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;