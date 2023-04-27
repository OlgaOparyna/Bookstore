import React, {useEffect, useState} from 'react';
import styles from "./Search.module.scss"
import Title from "src/components/Title";
import {useDispatch, useSelector} from "react-redux";
import SearchCardList from "src/components/SearchCardList";
import {BookSelectors, getSearchedBooks} from "src/redux/reducers/bookSlice";

const Search = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const searchValue = useSelector(BookSelectors.getSearchValue);
    const cardList = useSelector(BookSelectors.getSearchedBooks);

    useEffect(() => {
        const offset = (page - 1) * page;
        dispatch(getSearchedBooks);
    }, [page]);
    const onNextReached = () => {
        setPage(page + 1);
    };
    return (
        <div>
            <Title title={searchValue} />
                <SearchCardList cardsList={cardList} />
        </div>
    );
};

export default Search;
