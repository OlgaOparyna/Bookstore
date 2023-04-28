import React, {useEffect, useState} from 'react';
import styles from "./Search.module.scss"
import Title from "src/components/Title";
import {useDispatch, useSelector} from "react-redux";
import SearchCardList from "src/components/SearchCardList";
import {BookSelectors, getSearchedBooks} from "src/redux/reducers/bookSlice";

const Search = () => {
    const dispatch = useDispatch();
    const query = useSelector(BookSelectors.getSearchValue);
    const cardList = useSelector(BookSelectors.getSearchedBooks);
    const total = useSelector(BookSelectors.getSearchedBooksCount)

    useEffect(() => {
        dispatch(getSearchedBooks({query}));
    }, []);

    return (
        <div>
            <Title title={`'${query}' Search results`} />
            <div>
                "Found ${total} books"
            </div>
                <SearchCardList cardsList={cardList} />
        </div>
    );
};

export default Search;
