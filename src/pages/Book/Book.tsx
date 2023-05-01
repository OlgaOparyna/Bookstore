import React, { useEffect, useState } from "react";
import Button from "src/components/Button";
import {
  ArrowIcon,
  FacebookIcon,
  HeartIcon,
  HeartRedIcon,
  InstagramIcon,
  TwitterIcon,
} from "src/assets/icons";

import styles from "./Book.module.scss";
import Tabs from "src/components/Tabs";
import { TabsNames } from "src/components/Tabs/types";
import Title from "src/components/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BookSelectors,
  getAllBooks,
  getSingleBook,
  setFavoritesBooks,
} from "src/redux/reducers/bookSlice";
import Subscribe from "src/components/Subscribe";
import { RoutesList } from "src/pages/Router";
import MoreDetailse from "src/components/MoreDetailse";
import EmptyState from "src/components/EmptyState";
import BookList from "src/components/BookList";
import { Rate } from 'antd';

const Book = () => {
  const book = useSelector(BookSelectors.getSingleBook);
  const booksList = useSelector(BookSelectors.getAllBooks);
  const favoritesBooks = useSelector(BookSelectors.getFavoritesBooks);
  const similarBookList = booksList.slice(0, 3);
  const [activeTab, setActiveTab] = useState(TabsNames.Description);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      dispatch(getSingleBook(id));
    }
  }, []);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  // const onAddCartClick = () => {
  //   dispatch(setSavedBooks(card));
  //   navigate(RoutesList.Basket)
  // };
  const favoritesBooksIndex = favoritesBooks.findIndex(
    (book) => book.isbn13 === book.isbn13
  );
  const TABS_BOOK_LIST = [
    {
      title: "Description",
      key: TabsNames.Description,
    },
    {
      title: "Authors",
      key: TabsNames.Authors,
    },
  ];
  const tabActiveContent = () => {
    switch (activeTab) {
      case TabsNames.Description:
        return book?.desc;
      case TabsNames.Authors:
        return book?.authors;
      default:
        return book?.desc;
    }
  };
  const valuesArray = !!book?.pdf ? Object.values(book?.pdf) : [];
  const value = valuesArray[0];
  const onTabClick = (key: TabsNames) => () => {
    setActiveTab(key);
  };
  const onArrowIconClick = () => {
    navigate(RoutesList.Home);
  };
  const [currentValue, setCurrentValue] = useState(book?.rating)
  return book ? (
    <div className={styles.container}>
      <div className={styles.arrowIcon} onClick={onArrowIconClick}>
        <ArrowIcon />
      </div>
      <div className={styles.title}>
        <Title title={book?.title} />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.rightBlock}>
          <img className={styles.image} src={book?.image} alt={"book image"} />
          <Button
            title={
              favoritesBooksIndex === -1 ? <HeartIcon /> : <HeartRedIcon />
            }
            onClick={() => {}}
            buttonClassName={styles.heartIcon}
          />
        </div>

        <div className={styles.leftBlock}>
          <div className={styles.leftBlockInfo}>
            <div className={styles.price}>
              {book?.price === "$0.00" ? "FREE" : book?.price}
            </div>
            <div className={styles.rating}>
              <Rate onChange={(value) => {
                setCurrentValue(value)
              }} value={currentValue}
                    className={styles.rate}/>
            </div>
          </div>
          <div className={styles.leftBlockInfo}>
            <div className={styles.text}>Authors</div>
            <div className={styles.textBook}>{book?.authors} </div>
          </div>
          <div className={styles.leftBlockInfo}>
            <div className={styles.text}>Publisher</div>
            <div className={styles.textBook}>{book?.publisher} </div>
          </div>
          <div className={styles.leftBlockInfo}>
            <div className={styles.text}>Year</div>
            <div className={styles.textBook}>{book?.year} </div>
          </div>
          <div className={styles.leftBlockInfo}>
            <div className={styles.text}>Format</div>
            <div className={styles.textBook}>Paper book / ebook (PDF)</div>
          </div>
          <MoreDetailse />
          <div className={styles.bookButton}>
            <Button title={"Add to cart"} onClick={() => {}} />
          </div>
          {book.pdf && (
            <a href={value} className={styles.previewBook} target="_blank">
              Preview book
            </a>
          )}
        </div>
      </div>

      <div className={styles.centerBlock}>
        <Tabs
          tabsListArray={TABS_BOOK_LIST}
          activeTab={activeTab}
          onClick={onTabClick}
          tabsClassName={styles.tabs}
        />
        <div>{tabActiveContent()}</div>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <Subscribe />
      <div>
        <BookList title="Similar Books" cardsList={similarBookList} />
      </div>
    </div>
  ) : (
    <EmptyState title={"Sorry"} description={"Something wrong"} />
  );
};
export default Book;
