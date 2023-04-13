import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

type ButtonProps = {
  title: string | ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};
const Button: FC<ButtonProps> = ({ title, onClick, disabled, className }) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={classNames(
          styles.primaryButton,
          className, {
        [styles.disabledButton]: disabled,
      })}
    >
      {title}
    </div>
  );
};
export default Button;
