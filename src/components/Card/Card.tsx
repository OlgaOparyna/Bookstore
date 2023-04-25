import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";
import { CardProps } from "src/utils/@globalTypes";
import { useNavigate } from "react-router-dom";

const Card: FC<CardProps> = ({ card }) => {
  const { title, subtitle, isbn13, price, image } = card;
  const priceWithoutDollar: string = price.split("").slice(1).join("");
  const priceNumber = parseInt(priceWithoutDollar);
  const isBlue = priceNumber <= 30;
  const isGreen = priceNumber > 30 && priceNumber <= 40;
  const isPurple = priceNumber > 40 && priceNumber <= 50;
  const isOrange = priceNumber > 50;
  const navigate = useNavigate();
  const onTitleClick = () => {
    navigate(`/${isbn13}`);
  };
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
        <div className={styles.title} onClick={onTitleClick}>
          {title}
        </div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};
export default Card;
