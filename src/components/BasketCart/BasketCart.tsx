import React, { FC } from "react";
import classNames from "classnames";
import { BasketCartProps } from "src/utils/@globalTypes";
import { CloseIcon, MinusIcon, PlusIcon } from "src/assets/icons";
import styles from "./BasketCart.module.scss";

const BasketCart: FC<BasketCartProps> = ({card}) => {
  const { title, subtitle, isbn13, price, image } = card;
  const priceWithoutDollar: string = price.split("").slice(1).join("");
  const priceNumber = parseInt(priceWithoutDollar);
  const isBlue = priceNumber <= 30;
  const isGreen = priceNumber > 30 && priceNumber <= 40;
  const isPurple = priceNumber > 40 && priceNumber <= 50;
  const isOrange = priceNumber > 50;
  const quantity = 1;
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
      <div className={styles.mainInfoContainer}>
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
          <div className={styles.count}>
            <MinusIcon />
            <div className={styles.quantity}>{quantity}</div>
            <PlusIcon />
          </div>
        </div>
      </div>
      <div className={styles.price}>{price === "$0.00" ? "FREE" : price}</div>
      <div>
        <CloseIcon />
      </div>
    </div>
    </div>
  );
};

export default BasketCart;
