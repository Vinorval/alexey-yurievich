import React from "react";
import Styles from "./Works.module.css";

const Works = () => {
    return (
        <section className={Styles.works} >
            <h2 className={Styles.works__title} >Примеры работ</h2>
            <ul className={Styles.company} >
                <li className={Styles.companyName} >ООО “Название компании”</li>
                <li className={Styles.companyName} >ООО “Название компании”</li>
                <li className={Styles.companyName} >ООО “Название компании”</li>
                <li className={Styles.companyName} >ООО “Название компании”</li>
                <li className={Styles.companyName} >ООО “Название компании”</li>
            </ul>
            <div className={Styles.experience} >
                <div className={Styles.work}>
                    <h3 className={Styles.work__name} >Задачи:</h3>
                    <ul className={Styles.work__list}>
                        <li className={`${Styles.work__text} ${Styles.work__text_type_element}`} >что-то требуется сделать</li>
                        <li className={`${Styles.work__text} ${Styles.work__text_type_element}`} >что-то требуется сделать</li>
                        <li className={`${Styles.work__text} ${Styles.work__text_type_element}`} >что-то требуется сделать</li>
                    </ul>
                </div>
                <div className={Styles.work}>
                    <h3 className={Styles.work__name} >Выполненые работы:</h3>
                    <ul className={Styles.work__list}>
                        <li className={`${Styles.work__text} ${Styles.work__text_type_element}`} >Что было сделано для достижение поставленной задачи</li>
                        <li className={`${Styles.work__text} ${Styles.work__text_type_element}`} >Что было сделано для достижение поставленной задачи</li>
                        <li className={`${Styles.work__text} ${Styles.work__text_type_element}`} >Что было сделано для достижение поставленной задачи</li>
                    </ul>
                </div>
                <div className={Styles.work}>
                    <h3 className={Styles.work__name} >Результат:</h3>
                    <p className={Styles.work__text} >Вывод из проделонной работы и как выполнение задачи повлияло на работоспособность бизнеса/программы 1С</p>
                </div>
                <div className={Styles.work}>
                    <h3 className={Styles.work__name} >Период сотрудничества:</h3>
                    <p className={Styles.work__text} >01.01.2000 - 01.1.2000</p>
                </div>
            </div>
        </section>
    )
};

export default Works;