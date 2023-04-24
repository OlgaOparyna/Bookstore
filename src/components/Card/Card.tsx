import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";
import {CardProps} from "src/utils/@globalTypes";

const Card: FC<CardProps> = ({ card}) => {
  const { title, subtitle, isbn13, price,  image, url } = card;
  const priceWithoutDollar: string = price.split('').slice(1).join('')
    const priceNumber = parseInt(priceWithoutDollar)
    const isBlue = priceNumber <= 20
    const isGreen = priceNumber > 20 && priceNumber <=35
    const isOrange = priceNumber > 35 && priceNumber <=45
    const isPurple = priceNumber > 45
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.imageContainer, {
          [styles.blueImageContainer]: isBlue,
          [styles.greenImageContainer]: isGreen,
          [styles.orangeImageContainer]: isOrange,
          [styles.purpleImageContainer]: isPurple,
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
