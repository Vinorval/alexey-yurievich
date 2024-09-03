import React from "react";
import Styles from "./ButtonScroll.module.css";
import Arrow from "../../images/arrowDownWhite.svg";

const ButtonScroll = () => {
    return (
        <button className={Styles.button} >
            <img alt="стрелка вниз" src={Arrow} className={Styles.arrow} />
        </button>
    )
};

export default ButtonScroll;