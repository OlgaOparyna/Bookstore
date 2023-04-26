import React, { FC } from "react";

import styles from "./Title.module.scss";
import classNames from "classnames";


type TitleProps = {
    title?: string;
};
const Title: FC<TitleProps> = ({ title }) => {
    return (
        <div className={styles.title}>{ title }</div>
    );
};
export default Title;