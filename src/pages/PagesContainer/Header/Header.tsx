import React, { useState, KeyboardEvent } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { RoutesList } from "src/pages/Router";
import { Bookstore } from "src/assets/logoBookstore";
import Input from "src/components/Input";

import {
  BasketIcon,
  BasketIconActive,
  HeartIcon,
  HeartIconActive,
  SearchIcon,
  UserIcon, UserIconActive,
} from "src/assets/icons";
import styles from "./Header.module.scss";
import {BookSelectors, getSearchedBooks} from "src/redux/reducers/bookSlice";
import {useAuth} from "src/utils/use-auth";
import {BasketSelectors} from "src/redux/reducers/basketSlice";

const Header = () => {
  const [query, setQuery] = useState("");
  const [isHeartOpened, setHeartOpened] = useState(false);
  const [isBasketOpened, setBasketOpened] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const onLogoClick = () => {
    navigate(RoutesList.Home);
  };
  const favoritesList = useSelector(BookSelectors.getFavoritesBooks);
  const favoritesIndex = favoritesList.find((book) => book.isbn13);
  const basketList = useSelector(BasketSelectors.getSavedBooks);
  const basketIndex = basketList.find((book) => book.book.isbn13);
  const onHeartClick = () => {
    navigate(RoutesList.FavoritesBooks)
    setHeartOpened(true);
  };
  const onBasketClick = () => {
    navigate(RoutesList.Basket);
    setBasketOpened(true);
  };
  const onUserClick = () => {
    if (!isAuth) {
      navigate(RoutesList.RegistrationForm);
    } else {
      navigate(RoutesList.Account);
    }
  };
  const onClickSearchButton = () => {
    dispatch(getSearchedBooks({query, page:1}));
    setQuery("");
    navigate(`/search/${query}`);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearchButton();
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.logo} onClick={onLogoClick}>
          <Bookstore />
        </div>
        <div className={styles.searchContainer}>
          <Input
            value={query}
            onChange={setQuery}
            placeholder="Search"
            onKeyDown={onKeyDown}
            inputClassName={styles.input}
          />
          <div className={styles.searchIcon} onClick={onClickSearchButton}>
            <SearchIcon />
          </div>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.icon} onClick={onHeartClick}>
            {favoritesIndex ? <HeartIconActive /> : <HeartIcon />}
          </div>
          <div className={styles.icon} onClick={onBasketClick}>
            {basketIndex ? <BasketIconActive /> : <BasketIcon />}
          </div>
          <div className={styles.icon} onClick={onUserClick}>
            {isAuth ? <UserIconActive/> : <UserIcon/>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
