import React, { useEffect, useState } from "react";
import Button from "src/components/Button";
import {
  ArrowIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  TwitterIcon,
} from "src/assets/icons";

import styles from "./Book.module.scss";
import Tabs from "src/components/Tabs";
import { TabsNames } from "src/components/Tabs/types";
import Title from "src/components/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {BookSelectors, getAllBooks, getSingleBook} from "src/redux/reducers/bookSlice";
import Subscribe from "src/components/Subscribe";
import { RoutesList } from "src/pages/Router";
import MoreDetailse from "src/components/MoreDetailse";
import EmptyState from "src/components/EmptyState";
import Subtitle from "src/components/Subtitle";
import CardList from "src/components/CardList";
const Book = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.Description);
  const navigate = useNavigate();

  const onTabClick = (key: TabsNames) => () => {
    setActiveTab(key);
  };
  const onArrowIconClick = () => {
    navigate(RoutesList.Home);
  };


  const params = useParams();
  const { id } = params;
  console.log("Id from URL", params?.id);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getSingleBook(id));
    }
  }, []);
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  const booksList = useSelector(BookSelectors.getAllBooks);
  const similarBookList = booksList.slice(0, 3)
  const book = useSelector(BookSelectors.getSingleBook);
  const TABS_BOOK_LIST = [
    {
      title: "Description",
      key: TabsNames.Description,
      content: book?.desc,
    },
    {
      title: "Authors",
      key: TabsNames.Authors,
      content: book?.authors,
    },
    {
      title: "Reviews",
      key: TabsNames.Reviews,
      content: book?.desc,
    },
  ];
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
            title={<HeartIcon />}
            onClick={() => {}}
            buttonClassName={styles.heartIcon}
          />
        </div>

        <div className={styles.leftBlock}>
          <div className={styles.leftBlockInfo}>
            <div className={styles.price}>{book?.price} </div>
            <div className={styles.rating}>{book?.rating} </div>
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
          <div className={styles.previewBook}>Preview book</div>
        </div>
      </div>

      <div className={styles.centerBlock}>
        <Tabs
          tabsListArray={TABS_BOOK_LIST}
          activeTab={activeTab}
          onClick={onTabClick}
          tabsClassName = {styles.tabs}
        />
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/"  target="_blank">
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
        <Subtitle subtitle={"Similar Books"}/>
        <CardList cardsList={similarBookList}/>
      </div>
          </div>
  ) : <EmptyState title={"Sorry"} description={"Something wrong"}/>
};
export default Book;
