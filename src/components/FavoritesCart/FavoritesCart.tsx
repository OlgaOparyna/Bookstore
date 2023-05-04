import React, { FC } from "react";
import classNames from "classnames";
import {BookProps} from "src/utils/@globalTypes";
import { HeartRedIcon } from "src/assets/icons";
import styles from "./FavoritesCart.module.scss";
import {useNavigate} from "react-router-dom";
import {removeSavedBooks} from "src/redux/reducers/basketSlice";
import {useDispatch} from "react-redux";
import {removeFavoritesCart} from "src/redux/reducers/bookSlice";

const FavoritesCart: FC<BookProps> = ({book} ) => {
  const { title, subtitle, isbn13, price, image } = book;
  const priceWithoutDollar: string = price.split("").slice(1).join("");
  const priceNumber = parseInt(priceWithoutDollar);
  const isBlue = priceNumber <= 30;
  const isGreen = priceNumber > 30 && priceNumber <= 40;
  const isPurple = priceNumber > 40 && priceNumber <= 50;
  const isOrange = priceNumber > 50;
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/${isbn13}`);
  };
  const dispatch = useDispatch()
  const onHeartIconClick = () => {
    dispatch(removeFavoritesCart(book));
  };
  return (
    <div className={styles.container} >
      <div className={styles.wrapper}>
        <div className={styles.mainInfoContainer}>
          <div onClick={onCardClick}
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
            <div onClick={onCardClick} className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.price}>
              {price === "$0.00" ? "FREE" : price}
            </div>
          </div>
        </div>
        <div className={styles.icon} onClick={onHeartIconClick}>
          <HeartRedIcon />
        </div>
      </div>
    </div>
  );
};

export default FavoritesCart;
