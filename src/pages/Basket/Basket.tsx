import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "src/assets/icons";
import Title from "src/components/Title";
import {BasketSelectors, removeAllSavedBooks} from "src/redux/reducers/basketSlice";
import Button from "src/components/Button";
import EmptyState from "src/components/EmptyState";
import BasketCart from "src/components/BasketCart";
import styles from "./Basket.module.scss";
import {useAuth} from "src/utils/use-auth";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const basketList = useSelector(BasketSelectors.getSavedBooks);
  const totalQuantity = basketList
      ?.map(item => +item.book?.price.split("").slice(1).join("") * item?.quantity)
      .reduce((sum, book) => sum + book, 0);
  const vat = (totalQuantity / 120) * 20;
  const sumTotal = totalQuantity - vat;
  const onArrowIconClick = () => {
    navigate(-1);
  };
  const onRemoveAllButtonClick = () => {
    dispatch(removeAllSavedBooks());

  };
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
                quantity={item.quantity}
              />
            );
          })}
        </div>
      ) : (
        <EmptyState
          title="Sorry, there's no books"
          description="Try to add some books"
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
        <Button title="Remove All" onClick={onRemoveAllButtonClick} />
      </div>
    </div>
  );
};

export default Basket;
