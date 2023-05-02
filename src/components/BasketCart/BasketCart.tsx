import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { BasketCartProps } from "src/utils/@globalTypes";
import { CloseIcon, MinusIcon, PlusIcon } from "src/assets/icons";
import {removeSavedBooks} from "src/redux/reducers/basketSlice";
import styles from "./BasketCart.module.scss";

const BasketCart: FC<BasketCartProps> = ({ book }) => {
  const { title, subtitle, isbn13, price, image } = book;
  const priceWithoutDollar: string = price.split("").slice(1).join("");
  const priceNumber = +priceWithoutDollar;
  const isBlue = priceNumber <= 30;
  const isGreen = priceNumber > 30 && priceNumber <= 40;
  const isPurple = priceNumber > 40 && priceNumber <= 50;
  const isOrange = priceNumber > 50;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCardClick = () => {
    navigate(`/${isbn13}`);
  };
  const onCloseIconClick = () => {
    dispatch(removeSavedBooks(book));
  };
  const [quantity, setQuantity] = useState(1);
  const [basketPrice, setBasketPrice] = useState(priceNumber);

  const onPlusIconClick = () =>{
    if (book) {
      //dispatch(incrementQuantity({book, quantity:1}))
      setBasketPrice(priceNumber * (quantity+1))
      setQuantity(quantity + 1);
    }}
  const onMinusIconClick = () =>{
    if (book && quantity > 1) {
      //dispatch(decrementQuantity({book, quantity:1}))
      setBasketPrice(priceNumber * (quantity-1))
      setQuantity(quantity - 1);
    } else{
      dispatch(removeSavedBooks(book));
    }
  }

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
            onClick={onCardClick}
          >
            <img src={image} alt=" " className={styles.image} />
          </div>
          <div className={styles.infoContainer}>
            <div onClick={onCardClick} className={styles.title}>
              {title}
            </div>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.counter}>
              <div onClick={onMinusIconClick}>
                <MinusIcon />
              </div>
              <div className={styles.quantity}>{quantity}</div>
              <div onClick={onPlusIconClick}>
                <PlusIcon />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.price}>{price === "$0.00" ? "FREE" : "$" + basketPrice.toFixed(2)}</div>
        <div onClick={onCloseIconClick}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default BasketCart;
