import { CardListType } from "src/utils/@globalTypes";

export type GetAllBooksPayload = {
    offset: number;
    search?: string;
};
export interface SetAllBooksPayload {
    cardList: CardListType;
    BooksCount: number;
}
export type GetSearchedBooksPayload = {
    searchValue: string;
    isOverwrite: boolean;
    offset: number;
};
export interface SetSearchedBooksPayload extends SetAllBooksPayload {
    isOverwrite: boolean;
}
