import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Navigation.module.css";
import Logo1C from "../../images/logo1C.svg";
import Arrow from "../../images/arrowDownWhite.svg";
import { arrProducts, arrServices } from "../../utils/typesProducts";

const Navigation = () => {
    return (
        <nav className={Styles.navigation} >
            <a className={Styles.logo} >VA</a>
            <ul className={Styles.listLinks} >
                <li className={Styles.link} >
                    <p className={Styles.margin_none} >Программы 1C</p>
                    <img alt="стрелка вниз" className={Styles.link__arrow} src={Arrow} />
                    <ul className={Styles.link__namesList} >{
                        arrProducts.map((name, index) => <li key={index} className={Styles.product} >{name}</li>)
                    }</ul>
                </li>
                <li className={Styles.link} >
                    <p className={Styles.margin_none} >Услуги</p>
                    <img alt="стрелка вниз" className={Styles.link__arrow} src={Arrow} />
                    <ul className={Styles.link__namesList} >{
                        arrServices.map((name, index) => <li key={index} ><NavLink className={Styles.product} >{name}</NavLink></li>)
                    }</ul>
                </li>
                <li className={Styles.link} ><p className={Styles.margin_none} >Портфолио</p></li>
                <li className={Styles.link} ><p className={Styles.margin_none} >Контакты</p></li>
            </ul>
            <a className={Styles.partner} >
                <img className={Styles.partner__logo} alt="логотип 1C" src={Logo1C} />
                <p className={Styles.partner__name} >Официальный<br />Партнер</p>
            </a>
        </nav>
    )
}

export default Navigation;