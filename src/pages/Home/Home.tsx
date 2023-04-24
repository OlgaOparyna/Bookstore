import React, {useEffect, useState} from 'react'
import Title from "src/components/Title";
import CardList from "src/components/CardList";
import Subscribe from "src/components/Subscribe";
import Account from "src/pages/Account";
import SearchCardList from "src/components/SearchCardList";
import {useDispatch, useSelector} from "react-redux";
import {BookSelectors, getAllBooks} from "src/redux/reducers/bookSlice";

const Home = ()=>{
    const [currentPage, setCurrentPage] = useState(1);
    const [ordering, setOrdering] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        const offset = 12 * (currentPage - 1);
        dispatch(getAllBooks({ offset, ordering }));
    }, [currentPage, ordering]);

    const bookList = useSelector(BookSelectors.getAllBooks);

    return <div>
               <CardList cardsList={bookList}/>
    </div>
}

export default Home