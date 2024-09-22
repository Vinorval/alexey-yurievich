import React from "react";
import Styles from "./Styles.module.css";
import { useLocation } from "react-router";
import services from "../utils/services";

const ServicePage = () => {
    const location = useLocation();
    const nameServiceLink = location.pathname.split("/")[2];
    const item = services.find((item) => item.link === nameServiceLink && item);

    const returnListElement = (arrey) => arrey.map((item, key) => (<li className={Styles.info} key={key} >{item}</li>));

    return (
        <section className={Styles.page} >
            <p className={Styles.description} >{item.description}</p>
            <div className={Styles.infoBlock} >
                <h3 className={Styles.infoBlock__title} >{item.subheadings.privilege}</h3>
                <ul className={Styles.infoList} >
                    {returnListElement(item.privilege)}
                </ul>
            </div>
            <div className={Styles.infoBlock} >
                <h3 className={Styles.infoBlock__title} >{item.subheadings.subServices}</h3>
                <ul className={Styles.infoList} >
                    {returnListElement(item.subServices)}
                </ul>
            </div>
        </section>
    )
};

export default ServicePage;