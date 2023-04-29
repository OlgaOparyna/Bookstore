import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {BookSelectors} from "src/redux/reducers/bookSlice";
import {RoutesList} from "src/pages/Router";
import styles from "src/pages/Book/Book.module.scss";
import {ArrowIcon} from "src/assets/icons";
import Title from "src/components/Title";
import CardList from "src/components/CardList";

const FavotitesBooks = () => {
    const navigate = useNavigate();
    const favoritesList = useSelector(BookSelectors.getFavoritesBooks);
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
            <CardList cardsList={favoritesList} />
        </div>
    );
};

export default FavotitesBooks;
