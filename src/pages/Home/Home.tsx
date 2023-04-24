import React, {useEffect, useState} from 'react'
import Title from "src/components/Title";
import CardList from "src/components/CardList";
import Subscribe from "src/components/Subscribe";
import Account from "src/pages/Account";
import SearchCardList from "src/components/SearchCardList";
import {useDispatch, useSelector} from "react-redux";
import {BookSelectors, getAllBooks} from "src/redux/reducers/bookSlice";

const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getAllBooks())
}, []);

    const booksList = useSelector(BookSelectors.getAllBooks);

    return <div>
               <CardList cardsList={booksList}/>
    </div>
}

export default Home