import React from "react";
import Styles from "./Navigation.module.css";
import Logo1C from "../../images/logo1C.svg";

const Navigation = () => {
    return (
        <nav className={Styles.navigation} >
            <a className={Styles.logo} >VA</a>
            <ul className={Styles.listLinks} >
                <a className={Styles.link} >Программы1C</a>
                <a className={Styles.link} >Услуги</a>
                <a className={Styles.link} >Портфолио</a>
                <a className={Styles.link} >Контакты</a>
            </ul>
            <a className={Styles.partner} >
                <img className={Styles.partner__logo} alt="логотип 1C" src={Logo1C} />
                <p className={Styles.partner__name} >Официальный<br />Партнер</p>
            </a>
        </nav>
    )
}

export default Navigation;