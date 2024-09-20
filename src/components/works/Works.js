import React from "react";
import Styles from "./Works.module.css";

const Works = () => {
    return (
        <section className={Styles.works} >
            <h2 className={Styles.works__title} >Примеры работ</h2>
            <ul className={Styles.company} >
                <li className={Styles.company__name} >ООО “Название компании”</li>
                <li className={Styles.company__name} >ООО “Название компании”</li>
                <li className={Styles.company__name} >ООО “Название компании”</li>
                <li className={Styles.company__name} >ООО “Название компании”</li>
                <li className={Styles.company__name} >ООО “Название компании”</li>
            </ul>
            <div className={Styles.experience} >
                <div className={Styles.work}>
                    <h3 className={Styles.work__name} >Период сотрудничества:</h3>
                    <p className={Styles.work__text} >01.01.2000 - 01.1.2000</p>
                </div>
                <div className={Styles.work}>
                    <h3 className={Styles.work__name} >Что было сделано:</h3>
                    <ul className={Styles.work__list}>
                        <li className={Styles.work__text} >описание какого-либо действия</li>
                        <li className={Styles.work__text} >описание какого-либо действия</li>
                        <li className={Styles.work__text} >описание какого-либо действия</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Works;