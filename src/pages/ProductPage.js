import React from "react";
import products from "../utils/products";
import { useLocation } from "react-router";
import Styles from "./ProductPage.module.css";

const ProductPage = () => {
    const location = useLocation();
    const nameServiceLink = location.pathname.split("/")[2];
    const item = products.find((item) => item.link === nameServiceLink && item);

    return (
        <section className={Styles.info}>
            <div className={Styles.description}>
                <img alt="фотография товара" src={item.img} className={Styles.photo} />
                <p className={`${Styles.text} ${Styles.definition}`}>{item.definition}</p>
            </div>
            <div>
                <h3 className={Styles.text}>С чем программа может помочь</h3>
                <ul>
                    {item.list.map((item, key) => (<li key={key}>{item}</li>))}
                </ul>
            </div>
            <p className={Styles.text}>{item.text}</p>
        </section>
    )
};

export default ProductPage;