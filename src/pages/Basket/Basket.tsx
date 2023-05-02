import React from "react";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "src/assets/icons";
import Title from "src/components/Title";
import {BasketSelectors} from "src/redux/reducers/basketSlice";
import Button from "src/components/Button";
import EmptyState from "src/components/EmptyState";
import BasketCart from "src/components/BasketCart";
import styles from "./Basket.module.scss";

const Basket = () => {
  const navigate = useNavigate();
  const basketList = useSelector(BasketSelectors.getSavedBooks);
  const onArrowIconClick = () => {
    navigate(-1);
  };
  const onCheckOutButtonClick = () => {};
  // const totalQuantity = basketList.reduce((sum, book) => {
  //   const priceWithoutDollar: string = book.price.split("").slice(1).join("");
  //   const priceNumber = parseInt(priceWithoutDollar);
  //   console.log(priceNumber)
  //   return sum + (priceNumber * quantity);
  // }, 0.00);

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
                    return <BasketCart key={item.book.isbn13} book ={item.book} quantity={1} />;
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
            <div className={styles.numbers}>5</div>
          </div>
          <div className={styles.sum}>
            <div className={styles.text}>VAT</div>
            <div className={styles.numbers}>10</div>
          </div>
        </div>
        <div className={styles.sum}>
          <div className={styles.total}>Total: </div>
          <div className={styles.total}>$</div>
        </div>
        <Button title="Check out" onClick={onCheckOutButtonClick} />
      </div>
    </div>
  );
};

export default Basket;
