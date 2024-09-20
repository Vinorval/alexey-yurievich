import React from "react";
import Styles from "./Services.module.css";

import services from "../../utils/services";

const Services = () => {
    return (
        <section className={Styles.services} >
            <div className={Styles.blockTitle} >
                <h2 className={Styles.title} >Услуги 1С программиста</h2>
                <p className={Styles.blockTitle__text} >Профессиональная помощь в автоматизации бизнес-процессов с использованием программ на платформе 1С:Предприятие.</p>
                <p className={Styles.blockTitle__text} >Занимаюсь разработкой, настройкой и внедрением программного обеспечения, адаптированного под потребности предприятия.</p>
            </div>
            <ul className={Styles.list} >
                { services.map(( item, index ) => {
                    return (
                        <li className={Styles.service} key={index} >
                            <h3 className={Styles.service__name} >{item.name}</h3>
                            <button className={Styles.service__button} >Подробнее</button>
                        </li>
                    )
                }) }
            </ul>
        </section>
    )
};

export default Services;