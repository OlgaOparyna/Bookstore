import React, { useState, KeyboardEvent } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";

import { RoutesList } from "src/pages/Router";
import { Bookstore } from "src/assets/logoBookstore";
import Input from "src/components/Input";
import {
  BasketIcon,
  BasketIconActive,
  HeartIcon,
  HeartIconActive,
  SearchIcon,
  UserIcon,
} from "src/assets/icons";
import styles from "./Header.module.scss";
// import { getSearchedBooks } from "src/redux/reducers/bookSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isHeartOpened, setHeartOpened] = useState(false);
  const [isBasketOpened, setBasketOpened] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogoClick = () => {
    navigate(RoutesList.Home);
    setBasketOpened(false);
    setHeartOpened(false);
  };
  const onHeartClick = () => {
    navigate(RoutesList.FavoritesBooks)
    setHeartOpened(true);
    setBasketOpened(false);
  };
  // TODO снимать эктив
  const onBasketClick = () => {
    navigate(RoutesList.Basket);
    setBasketOpened(true);
    setHeartOpened(false);
  };
  const onUserClick = () => {
    navigate(RoutesList.SignIn);
    setBasketOpened(false);
    setHeartOpened(false);
  };
  const onClickSearchButton = () => {
    // dispatch(getSearchedBooks({ searchValue, isOverwrite: true, offset: 0 }));
    setSearchValue("");
    navigate(RoutesList.Search);
    setBasketOpened(false);
    setHeartOpened(false);
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
            value={searchValue}
            onChange={setSearchValue}
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
            {!isHeartOpened ? <HeartIcon /> : <HeartIconActive />}
          </div>
          <div className={styles.icon} onClick={onBasketClick}>
            {!isBasketOpened ? <BasketIcon /> : <BasketIconActive />}
          </div>
          <div className={styles.icon} onClick={onUserClick}>
            <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
