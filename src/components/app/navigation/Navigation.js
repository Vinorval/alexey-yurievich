import React from "react";
import Styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={Styles.navigation} >
            <a className={Styles.logo} >VA</a>
            <ul className={Styles.listLinks} >
                <a className={Styles.link} >Программы 1С</a>
                <a className={Styles.link} >Услуги</a>
                <a className={Styles.link} >Портфолио</a>
                <a className={Styles.link} >Контакты</a>
            </ul>
            <a className={Styles.partner} >
                <img className={Styles.partner__logo} alt="логотип 1С" />
                <p className={Styles.partner__name} >Официальный<br />Партнер</p>
            </a>
        </nav>
    )
}

export default Navigation;