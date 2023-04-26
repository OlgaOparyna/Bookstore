import React, { FC } from "react";
import styles from "./MoreDetailse.module.scss";
import { MoreDetailseIcon } from "src/assets/icons";

type MoreDetailseProps = {
  disabled?: boolean;
};
const onClick = () => {};
const MoreDetailse: FC<MoreDetailseProps> = (disabled) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.text}>More detailse</div>
      <MoreDetailseIcon />
    </div>
  );
};

export default MoreDetailse;
