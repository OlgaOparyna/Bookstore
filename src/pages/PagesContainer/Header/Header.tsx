import React from "react";
import { useNavigate } from "react-router-dom";

import { RoutesList } from "src/pages/Router";
import { Bookstore } from "src/assets/logoBookstore";
import Input from "src/components/Input";
import { BasketIcon, HeartIcon, SearchIcon, UserIcon } from "src/assets/icons";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const onLogoClick = () => {
    navigate(RoutesList.Home);
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={onLogoClick}>
        <Bookstore />
      </div>
      <div className={styles.searchContainer}>
        <Input
          value={""}
          onChange={() => {}}
          placeholder="Search"
          inputClassName={styles.input}
        />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <HeartIcon />
        </div>
        <div className={styles.icon}>
          <BasketIcon />
        </div>
        <div className={styles.icon}>
          <UserIcon />
        </div>
        {/*    TODO style search, search*/}
      </div>
    </div>
  );
};
export default Header;
