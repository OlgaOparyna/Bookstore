import { CardListType } from "src/utils/@globalTypes";

export type AllBooksResponse = {
    total: number;
    books: CardListType;
}

export type AllSearchedBooksResponse = {
    total: number;
    page: number;
    books: CardListType;
}