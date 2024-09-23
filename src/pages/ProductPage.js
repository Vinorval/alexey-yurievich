import React from "react";
import products from "../utils/products";
import { useLocation } from "react-router";

const ProductPage = () => {
    const location = useLocation();
    const nameServiceLink = location.pathname.split("/")[2];
    const item = products.find((item) => item.link === nameServiceLink && item);

    return (
        <section>
            <div>
                <img alt="фотография товара" />
                <p>{item.definition}</p>
            </div>
            <div>
                <h3>С чем программа может помочь</h3>
                <ul>
                    {item.list.map((item, key) => (<li key={key}>{item}</li>))}
                </ul>
            </div>
            <p>{item.text}</p>
        </section>
    )
};

export default ProductPage;