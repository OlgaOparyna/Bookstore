import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rate } from "antd";

import Button from "src/components/Button";
import {
  ArrowIcon,
  FacebookIcon,
  HeartIcon,
  HeartRedIcon,
  InstagramIcon,
  MoreDetailseIcon,
  TwitterIcon,
} from "src/assets/icons";
import Tabs from "src/components/Tabs";
import { TabsNames } from "src/components/Tabs/types";
import Title from "src/components/Title";
import Subscribe from "src/components/Subscribe";
import EmptyState from "src/components/EmptyState";
import BookList from "src/components/BookList";
import {
  BookSelectors,
  getAllBooks,
  getSingleBook,
  setFavoritesBooks,
} from "src/redux/reducers/bookSlice";
import { setSavedBooks } from "src/redux/reducers/basketSlice";
import { useAuth } from "src/utils/use-auth";
import styles from "./Book.module.scss";
import Modal from "src/components/Modal";

const Book = () => {
  const book = useSelector(BookSelectors.getSingleBook);
  const booksList = useSelector(BookSelectors.getAllBooks);
  const favoritesBooks = useSelector(BookSelectors.getFavoritesBooks);
  const similarBookList = booksList.slice(0, 3);
  const [activeTab, setActiveTab] = useState(TabsNames.Description);
  const [currentValue, setCurrentValue] = useState(book?.rating);
  const [showDetails, setShowDetails] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const params = useParams();

  const { id } = params;
  const favoritesBooksIndex = favoritesBooks.findIndex(
    (el) => el.isbn13 === book?.isbn13
  );
  useEffect(() => {
    if (id) {
      dispatch(getSingleBook(id));
    }
  }, []);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);
  const onHeartIconClick = () => {
    dispatch(setFavoritesBooks(book));
  };
  const onButtonClick = () => {
    setShowDetails(!showDetails);
  };
  const onAddToCartButtonClick = () => {
    if (book) {
      dispatch(setSavedBooks({ book, quantity: 1 }));
    }
    <Modal isVisible={true} onClose={()=>{}} children={"Cart is add"}/>
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
    navigate(-1);
  };
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
          <img className={styles.image} src={book?.image} alt={"book image"}/>
          <Button
            title={
              favoritesBooksIndex === -1 ? <HeartIcon /> : <HeartRedIcon />
            }
            onClick={onHeartIconClick}
            buttonClassName={styles.heartIcon}
            disabled={!isAuth}
          />
        </div>

        <div className={styles.leftBlock}>
          <div className={styles.leftBlockInfo}>
            <div className={styles.price}>
              {book?.price === "$0.00" ? "FREE" : book?.price}
            </div>
            <div className={styles.rating}>
              <Rate
                onChange={(value) => {
                  setCurrentValue(value);
                }}
                value={currentValue}
                className={styles.rate}
              />
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
          {showDetails && (
            <div>
              <div className={styles.leftBlockInfo}>
                <div className={styles.text}>Pages</div>
                <div className={styles.textBook}>{book?.pages}</div>
              </div>
              <div className={styles.leftBlockInfo}>
                <div className={styles.text}>Isbn13</div>
                <div className={styles.textBook}>{book?.isbn13}</div>
              </div>
              <div className={styles.leftBlockInfo}>
                <div className={styles.text}>Isbn10</div>
                <div className={styles.textBook}>{book?.isbn10}</div>
              </div>
            </div>
          )}
          <div className={styles.moreDitailse}>
            <div className={styles.textBook} onClick={onButtonClick}>
              More detailse
            </div>
            <MoreDetailseIcon />
          </div>
          <div className={styles.bookButton}>
            <Button
              title={"Add to cart"}
              onClick={onAddToCartButtonClick}
              disabled={!isAuth}
            />
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
