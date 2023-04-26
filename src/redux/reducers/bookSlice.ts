import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {CardListType, CardType, SingleBook} from "src/utils/@globalTypes";
import {
    GetAllBooksPayload,
    GetSearchedBooksPayload,
    SetAllBooksPayload,
    SetSearchedBooksPayload,
} from "src/redux/reducers/@types";
import { RootState } from "../store";

type initialType = {
    booksList: CardListType;
    singleBook: SingleBook | null;
    // selectedBook: CardType | null;
    // isVisibleSelectedModal: boolean;
    // likeBooks: CardListType;
    // savedBooks: CardListType;
    // searchedBooks: CardListType;
    // searchValue: string;
    // booksCount: number;
    // searchedBooksCount: number;
    // isAllBooksLoading: boolean;
};
// export enum LikeStatus {
//     Like = "like",
// }
const initialState: initialType = {
    booksList: [],
    singleBook: null,
    // selectedBook: null,
    // isVisibleSelectedModal: false,
    // likeBooks: [],
    // savedBooks: [],
    // searchedBooks: [],
    // searchValue: "",
    // booksCount: 0,
    // searchedBooksCount: 0,
    // isAllBooksLoading: false,
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getAllBooks: (_, __: PayloadAction<undefined>) => {},
        setAllBooks: (state, action: PayloadAction<CardListType>) => {
                state.booksList = action.payload;
            },
        // getAllBooks: (_, __: PayloadAction<GetAllBooksPayload>) => {},
        // setAllBooks: (
        //     state,
        //     { payload: { BooksCount, cardList } }: PayloadAction<SetAllBooksPayload>
        // ) => {
        //     state.BooksList = cardList;
        //     state.BooksCount = BooksCount;
        // },
        getSingleBook: (_, __: PayloadAction<string>) => {},
        setSingleBook: (state, action: PayloadAction<SingleBook>) => {
            state.singleBook = action.payload;
        },
        // setSelectedBook: (state, action: PayloadAction<CardType | null>) => {
        //     state.selectedBook = action.payload;
        // },
        // setBookVisibility: (state, action: PayloadAction<boolean>) => {
        //     state.isVisibleSelectedModal = action.payload;
        // },
        // setStatus(
        //     state,
        //     action: PayloadAction<{ status: LikeStatus; card: CardType }>
        // ) {
        //     const { status, card } = action.payload;
        //
        //     const likeIndex = state.likeBooks.findIndex(
        //         (Book) => Book.isbn13 === card.isbn13
        //     );
        //    const isLike = status === LikeStatus.Like;
        //
        //     const mainKey = isLike ? "likeBooks" : null;
        //     const mainIndex = isLike ? likeIndex : null;

            // if (mainIndex === -1) {
            //     state[mainKey].push(card);
            // } else {
            //     state[mainKey].splice(mainIndex, 1);
            // }
        // },
        // getSearchedBooks: (
        //     state,
        //     action: PayloadAction<GetSearchedBooksPayload>
        // ) => {
        //     state.searchValue = action.payload.searchValue;
        // },
        // setSearchedBooks: (
        //     state,
        //     action: PayloadAction<SetSearchedBooksPayload>
        // ) => {
        //     const { isOverwrite, cardList, BooksCount } = action.payload;
        //     state.searchedBooksCount = BooksCount;
        //     if (isOverwrite) {
        //         state.searchedBooks = cardList;
        //     } else {
        //         state.searchedBooks.push(...cardList);
        //     }
        // },
        // setAllBooksLoading: (state, action: PayloadAction<boolean>) => {
        //     state.isAllBooksLoading = action.payload;
        // },
        // setSavedBooks: (state, action: PayloadAction<CardType>) => {
        //     const card = action.payload;
        //     const savedBooksIndex = state.savedBooks.findIndex(
        //         (Book) => Book.isbn13 === card.isbn13
        //     );
        //
        //     if (savedBooksIndex === -1) {
        //         state.savedBooks.push(action.payload);
        //     } else {
        //         state.savedBooks.splice(savedBooksIndex, 1);
        //     }
        // },
    },
});
export const {
    getAllBooks,
    setAllBooks,
    getSingleBook,
    setSingleBook,
    // setSelectedBook,
    // setBookVisibility,
    // setStatus,
    // setSavedBooks,
    //
    // getSearchedBooks,
    // setSearchedBooks,
    // setAllBooksLoading,
} = bookSlice.actions;
export default bookSlice.reducer;
export const BookSelectors = {
    getAllBooks: (state: RootState) => state.book.booksList,
    getSingleBook: (state: RootState) => state.book.singleBook,
    // getSelectedBook: (state: RootState) => state.book.selectedBook,
    // getVisibleSelectedModal: (state: RootState) =>
    //     state.book.isVisibleSelectedModal,
    // getLikeBooks: (state: RootState) => state.book.likeBooks,
    // getSavedBooks: (state: RootState) => state.book.savedBooks,
    // getSearchedBooks: (state: RootState) => state.book.searchedBooks,
    // getSearchValue: (state: RootState) => state.book.searchValue,
    // getAllBooksCount: (state: RootState) => state.book.booksCount,
    // getAllBooksLoading: (state: RootState) => state.book.isAllBooksLoading,
    // getSearchedBooksCount: (state: RootState) => state.book.searchedBooksCount,
};
