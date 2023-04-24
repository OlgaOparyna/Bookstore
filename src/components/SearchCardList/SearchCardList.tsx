import React, {FC} from "react";

import {CardListType} from "src/utils/@globalTypes";
import Card from "src/components/Card";
import EmptyState from "src/components/EmptyState";
import styles from "./SearchCardList.module.scss";

type SearchCardListProps = {
    cardsList: CardListType;
};
const MOCK_CARD = {
    title: "Designing Across Senses",
    subtitle: "A Multimodal Approach to Product Design",
    isbn13: 9781491954249,
    price: "$27.59",
    image: "https://itbook.store/img/books/9781491954249.png",
    url: "https://itbook.store/books/9781491954249"
}
const SearchCardList: FC<SearchCardListProps> = ({ cardsList }) => {
    return cardsList.length > 0 ? (
        <div className={styles.container}>
            {cardsList.map((item, index) => {
                return <Card key={item.isbn13} card={MOCK_CARD}  />;
            })}
        </div>
    ) : (
        <EmptyState
            title="Sorry, there's no Books"
            description="Try to use another search request"
        />
    );
};
export default SearchCardList;