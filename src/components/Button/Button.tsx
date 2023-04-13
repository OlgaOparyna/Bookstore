import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

type ButtonProps = {
  title: string | ReactNode;
  onClick: () => void;
  disabled?: boolean;
  butonClassName?: string;
};
const Button: FC<ButtonProps> = ({ title, onClick, disabled, butonClassName }) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={classNames(
          styles.primaryButton,
          butonClassName, {
        [styles.disabledButton]: disabled,
      })}
    >
      {title}
    </div>
  );
};
export default Button;
