import React from "react";

import styles from "./Header.module.scss";
import { Bookstore } from "src/assets/logoBookstore";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { BasketIcon, HeartIcon, SearchIcon, UserIcon } from "src/assets/icons";
import classNames from "classnames";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Bookstore />
      </div>
      <div className={styles.searchContainer}>
        <Input
          value={""}
          onChange={() => {}}
          placeholder="Search"
          inputClassName={styles.input}
        />
        <Button
          title={<SearchIcon />}
          onClick={() => {}}
          butonClassName={styles.inputButton}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          title={<HeartIcon />}
          onClick={() => {}}
          butonClassName={styles.button}
        />
        <Button
          title={<BasketIcon />}
          onClick={() => {}}
          butonClassName={styles.button}
        />
        <Button
          title={<UserIcon />}
          onClick={() => {}}
          butonClassName={styles.button}
        />
      {/*    TODO style button*/}
      </div>
    </div>
   );
};
export default Header;
