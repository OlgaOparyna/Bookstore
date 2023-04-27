import React from "react";
import Lottie from "lottie-react";

import loader from "src/assets/loader.json";
import styles from "./Loader.module.scss"

const Loader = () => {
    return (
        <Lottie
            className={styles.loader}
            animationData={loader}
            loop={true}
        />
    );
};

export default Loader;