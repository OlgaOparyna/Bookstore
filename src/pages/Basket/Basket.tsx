import React from "react";
import { useSelector } from "react-redux";
import CardList from "src/components/CardList";
import styles from "./Basket.module.scss";
import { ArrowIcon } from "src/assets/icons";
import Title from "src/components/Title";
import { RoutesList } from "src/pages/Router";
import { useNavigate } from "react-router-dom";
import { BasketSelectors } from "src/redux/reducers/basketSlice";
import Button from "src/components/Button";

const Basket = () => {
  const navigate = useNavigate();
  const basketList = useSelector(BasketSelectors.getSavedBooks);
  const onArrowIconClick = () => {
    navigate(RoutesList.Home);
  };
  const onCheckOutButtonClick = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.arrowIcon} onClick={onArrowIconClick}>
        <ArrowIcon />
      </div>
      <div className={styles.title}>
        <Title title="Your cart" />
      </div>
      <CardList cardsList={basketList} />
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
          <div className={styles.total}>15</div>
        </div>
        <Button title="Check out" onClick={onCheckOutButtonClick} />
      </div>
    </div>
  );
};

export default Basket;
