import React from "react";
import Styles from "./Form.module.css";

const Form = () => {
    return (
        <section className={Styles.contact}>
            <div className={Styles.contact__texts}>
                <h2 className={Styles.contact__title}>Интересно сотрудничество?</h2>
                <p className={Styles.contact__text}>Тогда заполните форму или свяжитесь со мной по телефону:</p>
                <p className={Styles.contact__phone}>+7 (999) 999-99-99</p>
            </div>
            <form className={Styles.form}>
                <fieldset className={Styles.inputs}>
                    <input className={Styles.input} id="name" placeholder="Ваше имя"></input>
                    <input className={Styles.input} id="phone" placeholder="Номер телефона"></input>
                    <input className={Styles.input} id="email" placeholder="Email"></input>
                    <input className={Styles.input} id="theme" placeholder="Тема сообщения"></input>
                    <textarea className={Styles.input} id="text" placeholder="Сообщение"></textarea>
                </fieldset>
                <button className={Styles.button} type="submit" >Связаться</button>
            </form>
        </section>
    );
};

export default Form;