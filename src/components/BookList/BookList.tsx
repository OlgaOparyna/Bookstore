import React, {FC} from 'react';
import CardList from "src/components/CardList";
import {CardListType} from "src/utils/@globalTypes";
import styles from "./BookList.module.scss";

type BookListProps = {
    title: string;
    cardsList: CardListType;
}
const BookList: FC<BookListProps> = ({title, cardsList}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <CardList cardsList={cardsList} />
        </div>
    );
};

export default BookList;
