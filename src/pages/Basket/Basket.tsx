import React from "react";
import { useSelector } from "react-redux";
import { BookSelectors } from "src/redux/reducers/bookSlice";
import CardList from "src/components/CardList";
import styles from "src/pages/Book/Book.module.scss";
import {ArrowIcon} from "src/assets/icons";
import Title from "src/components/Title";
import {RoutesList} from "src/pages/Router";
import {useNavigate} from "react-router-dom";
import {BasketSelectors} from "src/redux/reducers/basketSlice";

const Basket = () => {
    const navigate = useNavigate();
  const basketList = useSelector(BasketSelectors.getSavedBooks);
    const onArrowIconClick = () => {
        navigate(RoutesList.Home);
    };
  return (
    <div className={styles.container}>
            <div className={styles.arrowIcon} onClick={onArrowIconClick}>
                <ArrowIcon />
            </div>
            <div className={styles.title}>
                <Title title="Your cart" />
            </div>
      <CardList cardsList={basketList} />
    </div>
  );
};

export default Basket;
