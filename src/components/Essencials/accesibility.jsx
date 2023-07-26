import React, { Fragment, useState } from 'react';
// import decrease from '../images/decrease.svg';
// import increase from '../images/increase.svg';
// import grayscale from '../images/grayscale.svg';

const AccessibilityTool = () => {
    const [fontSize, changeFontSize] = useState("16px");
    const [active, setActive] = useState(localStorage.getItem("accesibility") === "grayscale" ? true : false);

    function changeClickPlus() {
        let count = `${parseInt(fontSize) + 1}px`
        document
            .getElementById('section').style.fontSize = count
        changeFontSize(fontSize => `${parseInt(fontSize) + 1}px`);
    }

    function changeClickLess() {
        let count = `${parseInt(fontSize) - 1}px`
        // console.log(count, "contador font")
        document
            .getElementById('section').style.fontSize = count
        changeFontSize(fontSize => `${parseInt(fontSize) - 1}px`);
    }

    const handleClick = () => {
        if (active === false) {
            localStorage.setItem("accesibility", "grayscale");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", localStorage.getItem("accesibility"));
            setActive(true);
        } else {
            localStorage.setItem("accesibility", "");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", localStorage.getItem("accesibility"));
            setActive(false);
        }
    }

    return (
        <Fragment>
            <div className="accessibility__pannel">
                <ul className="accessibility__list">
                    <li style={{ fontSize }} onClick={changeClickLess} className="accessibility__list__item" title="Reducir el tamaño de la letra">
                        <div className="accessibility__list__item__icon">
                            <span className="DANE__Geovisor__icon__fontDecrease"></span>
                        </div>
                    </li>
                    <li style={{ fontSize }} onClick={changeClickPlus} className="accessibility__list__item" title="Aumentar el tamaño de la letra">
                        <div className="accessibility__list__item__icon">
                            <span className="DANE__Geovisor__icon__fontIncrease"></span>
                        </div>
                    </li>
                    <li className="accessibility__list__item" title="Convertir a escala de grises" defaultChecked={active}
                        onClick={() => handleClick()}>
                        <div className="accessibility__list__item__icon">
                            <span className="DANE__Geovisor__icon__grayscale" ></span>
                        </div>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default AccessibilityTool;

