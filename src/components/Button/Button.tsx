import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

type ButtonProps = {
  title: string | ReactNode;
  onClick: () => void;
  disabled?: boolean;
  buttonClassName?: string;
  mailto?: string;
};
const Button: FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  buttonClassName,
}) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={classNames(styles.primaryButton, buttonClassName, {
        [styles.disabledButton]: disabled,
      })}
    >
      {title}
    </div>
  );
};
export default Button;
