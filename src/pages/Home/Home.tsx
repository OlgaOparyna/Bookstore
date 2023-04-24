import React from 'react'
import Title from "src/components/Title";
import CardList from "src/components/CardList";
import Subscribe from "src/components/Subscribe";
import Account from "src/pages/Account";
import SearchCardList from "src/components/SearchCardList";

const Home = ()=>{
    const MOCK_ARRAY =   [    {
        title: "Designing Across Senses",
        subtitle: "A Multimodal Approach to Product Design",
        isbn13: 9781491954249,
        price: "$27.59",
        image: "https://itbook.store/img/books/9781491954249.png",
        url: "https://itbook.store/books/9781491954249"
    },
        {
            title: "Web Scraping with Python, 2nd Edition",
            subtitle: "Collecting More Data from the Modern Web",
            isbn13: 9781491985571,
            price: "$33.99",
            image: "https://itbook.store/img/books/9781491985571.png",
            url: "https://itbook.store/books/9781491985571",
        },
        {
            title: "Programming iOS 11",
            subtitle: "Dive Deep into Views, View Controllers, and Frameworks",
            isbn13: 9781491999226,
            price: "$59.17",
            image: "https://itbook.store/img/books/9781491999226.png",
            url: "https://itbook.store/books/9781491999226"
        },
    ]
    return <div>
        {/*<Title title="New Releases Books"/>*/}
        {/*<CardList cardsList={MOCK_ARRAY}/>*/}
        {/*<Subscribe/>*/}
        <SearchCardList cardsList={MOCK_ARRAY}/>
    </div>
}

export default Home