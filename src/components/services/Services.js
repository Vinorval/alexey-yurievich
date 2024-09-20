import React from "react";
import Styles from "./Services.module.css";

import services from "../../utils/services";

import Product from "../../images/monitor.svg";
import Gear from "../../images/gears.svg";
import Integration from "../../images/illustration-jigsaw-icon.svg";

const Services = () => {
    return (
        <section className={Styles.services} >
            {/*<h2 className={Styles.services__title}>Услуги 1С программиста</h2>
            <ul className={Styles.list} >
                <li className={Styles.service} >
                    <img alt="экран монитора" src={Product} className={Styles.service__image} />
                    <h3 className={Styles.service__type} >Готовые продукты 1С</h3>
                    <p className={Styles.service__text} >Возможность приобрести необходимые вашему бизнесу продукты 1С</p>
                </li>
                <li className={Styles.service} >
                    <img alt="две шестеренки" src={Gear} className={Styles.service__image} />
                    <h3 className={Styles.service__type} >Доработка 1С</h3>
                    <p className={Styles.service__text} >Основная цель доработки - довести автоматизацию процессов до требуемого уровня, повысить эффективность продукта и удобства его использования</p>
                </li>
                <li className={Styles.service} >
                    <img alt="кусочки пазла" src={Integration} className={Styles.service__image} />
                    <h3 className={Styles.service__type} >Интеграция 1С</h3>
                    <p className={Styles.service__text} >Интеграция 1С позволит автоматизировать бизнес-процессы, повысить точность получаемой информации и минимизировать ошибки</p>
                </li>
            </ul>*/}
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