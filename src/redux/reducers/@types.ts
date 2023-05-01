import {CardListType} from "src/utils/@globalTypes";

export type GetSearchedBooksPayload = {
    query: string;
    page: number;
}
export type SetSearchedBooksPayload = {
    cardList: CardListType,
    booksCount : number
}