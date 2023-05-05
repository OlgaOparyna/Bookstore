import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BookSelectors } from "src/redux/reducers/bookSlice";
import { RoutesList } from "src/pages/Router";
import styles from "src/pages/Book/Book.module.scss";
import { ArrowIcon } from "src/assets/icons";
import Title from "src/components/Title";
import BookList from "src/components/BookList";
import EmptyState from "src/components/EmptyState";
import FavoritesCart from "src/components/FavoritesCart";

const FavotitesBooks = () => {
  const navigate = useNavigate();
  const favoritesList = useSelector(BookSelectors.getFavoritesBooks);
  const onArrowIconClick = () => {
    navigate(RoutesList.Home);
  };
  const booksList = useSelector(BookSelectors.getAllBooks);
  const popularBookList = booksList.slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.arrowIcon} onClick={onArrowIconClick}>
        <ArrowIcon />
      </div>
      <div className={styles.title}>
        <Title title="Favorites" />
      </div>
      {favoritesList.length > 0 ? (
        <div className={styles.container}>
          {favoritesList.map((item) => {
            return <FavoritesCart key={item.isbn13} book={item} />;
          })}
        </div>
      ) : (
        <EmptyState
          title="Sorry, there's no books"
          description="Try to add some books"
        />
      )}
      <BookList title="Popular Books" cardsList={popularBookList} />
    </div>
  );
};
export default FavotitesBooks;
