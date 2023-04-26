import React, {FC, ReactNode} from "react";
import { Link } from "react-router-dom";
import styles from "src/components/Button/Button.module.scss";
import classNames from "classnames";

type ButtonProps = {
    mailto: string;
    label: string;
    buttonClassName: string,
};
const ButtonMailto: FC<ButtonProps> = ({ mailto, label, buttonClassName }) => {
    return (
        <Link
            className={classNames(styles.primaryButton, buttonClassName)}
            target="_blank"
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;