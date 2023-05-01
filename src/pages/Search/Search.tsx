import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import Title from "src/components/Title";
import { useDispatch, useSelector } from "react-redux";
import SearchCardList from "src/components/SearchCardList";
import { BookSelectors, getSearchedBooks } from "src/redux/reducers/bookSlice";
import ReactPaginate from "react-paginate";
import classNames from "classnames";

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(BookSelectors.getSearchValue);
  const cardList = useSelector(BookSelectors.getSearchedBooks);
  const total = useSelector(BookSelectors.getSearchedBooksCount);
  const [currentPage, setCurrentPage] = useState(1);
  const postsCount = useSelector(BookSelectors.getSearchedBooksCount);
  const pagesCount = Math.ceil(postsCount / 10);
  const onPageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };
  useEffect(() => {
    const page = currentPage;
    if (query !== null) {
      dispatch(getSearchedBooks({ query, page }));
    }
  }, [currentPage, query]);

  return (
    <div>
      <Title title={`'${query}' Search results`} />
      <div>"Found ${total} books"</div>
      <SearchCardList cardsList={cardList} />
      <ReactPaginate
        pageCount={pagesCount}
        onPageChange={onPageChange}
        containerClassName={styles.pagesContainer}
        pageClassName={styles.pageNumber}
        breakClassName={styles.pageNumber}
        breakLinkClassName={styles.linkPage}
        activeLinkClassName={styles.linkPage}
        pageLinkClassName={styles.linkPage}
        activeClassName={styles.activePageNumber}
        nextClassName={classNames(styles.arrowButton, {
          [styles.blockedButton]: currentPage === pagesCount,
        })}
        previousClassName={classNames(styles.arrowButton, {
          [styles.blockedButton]: currentPage === 1,
        })}
        previousLinkClassName={styles.linkPage}
        nextLinkClassName={styles.linkPage}
      />
    </div>
  );
};

export default Search;
