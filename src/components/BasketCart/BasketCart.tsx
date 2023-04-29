import React, { FC } from "react";
import { BasketCartProps } from "src/utils/@globalTypes";
import styles from "./BasketCart.module.scss";
import classNames from "classnames";
import { CloseIcon, MinusIcon, PlusIcon } from "src/assets/icons";

const BasketCart: FC<BasketCartProps> = () => {
  const MOCK_CARD = {
    title: "Designing Across Senses",
    subtitle: "A Multimodal Approach to Product Design",
    isbn13: 9781491954249,
    price: "$27.59",
    image: "https://itbook.store/img/books/9781491954249.png",
    url: "https://itbook.store/books/9781491954249",
  };
  const { title, subtitle, isbn13, price, image } = MOCK_CARD;
  const priceWithoutDollar: string = price.split("").slice(1).join("");
  const priceNumber = parseInt(priceWithoutDollar);
  const isBlue = priceNumber <= 30;
  const isGreen = priceNumber > 30 && priceNumber <= 40;
  const isPurple = priceNumber > 40 && priceNumber <= 50;
  const isOrange = priceNumber > 50;
  const quantity = 1;
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
      <div className={styles.mainInfoContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        <div className={styles.count}>
          <MinusIcon />
          <div className={styles.quantity}>{quantity}</div>
          <PlusIcon />
        </div>
      </div>
      <div className={styles.price}>{price === "$0.00" ? "FREE" : price}</div>
      <div>
        <CloseIcon />
      </div>
    </div>
  );
};

export default BasketCart;
