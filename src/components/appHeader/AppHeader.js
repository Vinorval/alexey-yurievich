import React from "react";
import Styles from "./AppHeader.module.css";

const AppHeader = () => {
    return (
        <header className={Styles.header} >
            <div className={`${Styles.arrow} ${Styles.arrow__top}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="270.11" height="649.9" overflow="visible" className={Styles.geoArrow}>
                    <g className={`${Styles.itemTo} ${Styles.bounce_1}`}>
                        <path className={`${Styles.geoArrow} ${Styles.drawIn}`} d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z" />
                    </g>
                    <circle className={`${Styles.geoArrow} ${Styles.itemTo} ${Styles.bounce_2}`} cx="194.65" cy="69.54" r="7.96" />
                    <circle className={`${Styles.geoArrow} ${Styles.drawIn}`} cx="194.65" cy="39.5" r="7.96" />
                    <circle className={`${Styles.geoArrow} ${Styles.itemTo} ${Styles.bounce_3}`} cx="194.65" cy="9.46" r="7.96" />
                    <g className={`${Styles.geoArrow} ${Styles.itemTo} ${Styles.bounce_2}`}>
                        <path className={Styles.drawIn} d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552" />
                    </g>
                </svg>
            </div>
            <div className={`${Styles.arrow} ${Styles.arrow__bottom}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="31.35" height="649.9" overflow="visible" className={Styles.geoArrow}>
                    <g className={`${Styles.itemTo} ${Styles.bounce_1}`}>
                        <circle className={`${Styles.geoArrow} ${Styles.itemTo} ${Styles.bounce_3}`} cx="15.5" cy="580.36" r="7.96" />
                        <circle className={`${Styles.geoArrow} ${Styles.drawIn}`} cx="15.5" cy="610.4" r="7.96" />
                        <circle className={`${Styles.geoArrow} ${Styles.itemTo} ${Styles.bounce_2}`} cx="15.5" cy="640.44" r="7.96" />
                        <g className={`${Styles.itemTo} ${Styles.bounce_2}`}>
                            <path className={`${Styles.geoArrow} ${Styles.drawIn}`} d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552" />
                        </g>
                    </g>
                </svg>
            </div>
            <div className={Styles.main}>
                <div className={Styles.main__textWrapper}>
                    <h1 className={Styles.main__title}>Разработчик 1С</h1>
                    <h2>Более 20-ти лет работы</h2>      
                    <svg xmlns="http://www.w3.org/2000/svg" className={Styles.dottedCircle} width="352" height="352" overflow="visible">
                        <circle cx="176" cy="176" r="174" fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeDasharray="12.921,11.9271"/>
                    </svg>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;