import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BookSelectors, getSingleBook } from "src/redux/reducers/bookSlice";
import EmptyState from "src/components/EmptyState";
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

  const params = useParams();
  const { isbn13 } = params;

  const dispatch = useDispatch();
  useEffect(() => {
    if (isbn13) {
      dispatch(getSingleBook(isbn13));
    }
  }, []);
  const book = useSelector(BookSelectors.getSingleBook);
  return book ? (
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
  ) : null;
};
export default Book;
