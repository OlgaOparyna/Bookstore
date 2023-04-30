import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BookSelectors } from "src/redux/reducers/bookSlice";
import { RoutesList } from "src/pages/Router";
import styles from "src/pages/Book/Book.module.scss";
import { ArrowIcon } from "src/assets/icons";
import Title from "src/components/Title";
import CardList from "src/components/CardList";
import Subtitle from "src/components/Subtitle";
import BookList from "src/components/BookList";

const FavotitesBooks = () => {
  const navigate = useNavigate();
  const favoritesList = useSelector(BookSelectors.getFavoritesBooks);
  const onArrowIconClick = () => {
    navigate(RoutesList.Home);
  };
  const booksList = useSelector(BookSelectors.getAllBooks);
  const similarBookList = booksList.slice(0, 3);
  return (
    <div className={styles.container}>
      <div className={styles.arrowIcon} onClick={onArrowIconClick}>
        <ArrowIcon />
      </div>
      <div className={styles.title}>
        <Title title="Favorites" />
      </div>
      <CardList cardsList={favoritesList} />
      <BookList title="Popular Books" cardsList={similarBookList} />
    </div>
  );
};

export default FavotitesBooks;
