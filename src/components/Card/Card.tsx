import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";
import { CardProps } from "./types";
import {CardColor} from "src/utils/@globalTypes";

const Card: FC<CardProps> = ({ card, color }) => {
  const { title, subtitle, isbn13, price, image, url } = card;
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.imageContainer, {
          [styles.blueImageContainer]: CardColor.Blue,
          [styles.greenImageContainer]: CardColor.Green,
          [styles.orangeImageContainer]: CardColor.Orange,
          [styles.purpleImageContainer]: CardColor.Purple,
        })}
      >
        <img src={image} alt=" " className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};
export default Card;
