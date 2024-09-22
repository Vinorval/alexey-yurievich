import React from "react";
import Styles from "./Works.module.css";

const Works = () => {
    const [ id, setId ] = React.useState(1);

    //const clickOnCompanyName = (id) => setId(id);

    return (
        <section className={Styles.works} >
            <h2 className={Styles.works__title} >Примеры работ</h2>
            <ul className={Styles.company} >
                <li onClick={() => setId(1)} className={`${Styles.company__name} ${ (id === 1) && Styles.company__name_active }`} >ООО “Название компании”</li>
                <li onClick={() => setId(2)} className={`${Styles.company__name} ${ (id === 2) && Styles.company__name_active }`} >ООО “Название компании”</li>
                <li onClick={() => setId(3)} className={`${Styles.company__name} ${ (id === 3) && Styles.company__name_active }`} >ООО “Название компании”</li>
                <li onClick={() => setId(4)} className={`${Styles.company__name} ${ (id === 4) && Styles.company__name_active }`} >ООО “Название компании”</li>
                <li onClick={() => setId(5)} className={`${Styles.company__name} ${ (id === 5) && Styles.company__name_active }`} >ООО “Название компании”</li>
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