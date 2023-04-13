import React, { FC } from "react";

import styles from "./Subtitle.module.scss";
import classNames from "classnames";


type SubtitleProps = {
    subtitle: string;
};
const Subtitle: FC<SubtitleProps> = ({ subtitle }) => {
    return (
        <div className={styles.title}>{ subtitle }</div>
    );
};
export default Subtitle;