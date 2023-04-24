import React from "react";
import styles from "./PagesContainer.module.scss";
import Header from "./Header";
import {Outlet} from "react-router-dom";

const PagesContainer = () => {
    return (
        <div
            className={styles.container}
            id="scrollableDiv"
        >
            <div><Header/></div>
            <div className={styles.mainInfo}>
                <Outlet/>
                <div className={styles.footer}>
                    <div>©2022 Bookstore</div>
                    <div>All rights reserved</div>
                </div>
            </div>
        </div>
    );
};

export default PagesContainer;
