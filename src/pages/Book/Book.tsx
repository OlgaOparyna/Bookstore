import React, { useState } from "react";
import classNames from "classnames";
import Button from "src/components/Button";
import {
  ArrowIcon,
  FacebookIcon,
  MoreDetailseIcon,
  MorePointsIcon,
  TwitterIcon,
} from "src/assets/icons";

import styles from "./Book.module.scss";
import Tabs from "src/components/Tabs";
import { TabsNames } from "src/components/Tabs/types";
import Title from "src/components/Title";
const Book = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.Description);
  const onTabClick = (key: TabsNames) => () => {
    setActiveTab(key);
  };
  const TABS_BOOK_LIST = [
    {
      title: "Description",
      key: TabsNames.Description,
    },
    {
      title: "Authors",
      key: TabsNames.Authors,
    },
    {
      title: "Reviews",
      key: TabsNames.Reviews,
    },
  ];
  const book = {
    error: 0,
    title: "Securing DevOps",
    subtitle: "Security in the Cloud",
    authors: "Julien Vehent",
    publisher: "Manning",
    isbn10: 1617294136,
    isbn13: 9781617294136,
    pages: 384,
    year: 2018,
    rating: 5,
    desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
    price: "$26.98",
    image: "https://itbook.store/img/books/9781617294136.png",
    url: "https://itbook.store/books/9781617294136",
    pdf: {
      "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
      "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf",
    },
  };

  return (
    // book ?
    <div className={styles.container}>
      <div>
        <div className={styles.arrowIcon}>
          <ArrowIcon />
        </div>
        <div className={styles.title}>
          <Title title={book?.title} />
        </div>
      </div>

      <div className={styles.rightBlock}>
        <img className={styles.image} src={book?.image} alt={"book image"} />
        <div>
          <div className={styles.price}>{book?.price} </div>
          <div className={styles.rating}>{book?.rating} </div>
        </div>
        <div>
          <div>Authors</div>
          <div className={styles.text}>{book?.authors} </div>
          <div>Publisher</div>
          <div className={styles.text}>{book?.publisher} </div>
          <div>Year</div>
          <div className={styles.text}>{book?.year} </div>
          <div>Format</div>
          <div className={styles.text}>Paper book / ebook (PDF)</div>
        </div>
        <div>
          <div>More detailse</div>
          <MoreDetailseIcon />
        </div>
        <div className={styles.bookButton}>
          <Button title={"Add to cart"} onClick={() => {}} />
        </div>
        <div>Preview book</div>
      </div>

      <div className={styles.centerBlock}>
        <Tabs
          tabsListArray={TABS_BOOK_LIST}
          activeTab={activeTab}
          onClick={onTabClick}
        />
        <p>{book?.desc}</p>
        <div className={styles.socialIcons}>
          <div>
            <FacebookIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
          <div>
            <MorePointsIcon />
          </div>
        </div>
      </div>
    </div>
  );
  //: null;
};
export default Book;
