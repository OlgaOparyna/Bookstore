import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "src/assets/icons";
import Title from "src/components/Title";
import { BasketSelectors } from "src/redux/reducers/basketSlice";
import Button from "src/components/Button";
import EmptyState from "src/components/EmptyState";
import BasketCart from "src/components/BasketCart";
import styles from "./Basket.module.scss";
import { BasketCartProps } from "src/utils/@globalTypes";
import book from "src/pages/Book";

const Basket = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const basketList = useSelector(BasketSelectors.getSavedBooks);
  const onArrowIconClick = () => {
    navigate(-1);
  };
  const onCheckOutButtonClick = () => {};
  const totalQuantity = basketList.reduce((sum, book) => {
    const priceWithoutDollar = book.book?.price.split("").slice(1).join("");
    const priceNumber = +priceWithoutDollar;
    return sum + priceNumber * quantity;
  }, 0);
  const vat = (totalQuantity / 120) * 20;
  const sumTotal = totalQuantity - vat;
  return (
    <div className={styles.container}>
      <div className={styles.arrowIcon} onClick={onArrowIconClick}>
        <ArrowIcon />
      </div>
      <div className={styles.title}>
        <Title title="Your cart" />
      </div>
      {basketList.length > 0 ? (
        <div className={styles.container}>
          {basketList.map((item) => {
            return (
              <BasketCart
                key={item.book.isbn13}
                book={item.book}
                quantity={quantity}
              />
            );
          })}
        </div>
      ) : (
        <EmptyState
          title="Sorry, there's no Books"
          description="Try to check out another category"
        />
      )}
      <div className={styles.sumBlock}>
        <div className={styles.sumLittleBlock}>
          <div className={styles.sum}>
            <div className={styles.text}>Sum total</div>
            <div className={styles.numbers}>${sumTotal.toFixed(2)}</div>
          </div>
          <div className={styles.sum}>
            <div className={styles.text}>VAT</div>
            <div className={styles.numbers}>${vat.toFixed(2)}</div>
          </div>
        </div>
        <div className={styles.sum}>
          <div className={styles.total}>Total: </div>
          <div className={styles.total}>${totalQuantity.toFixed(2)}</div>
        </div>
        <Button title="Check out" onClick={onCheckOutButtonClick} />
      </div>
    </div>
  );
};

export default Basket;
