import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {CardListType, CardType, SingleBook} from "src/utils/@globalTypes";
import { RootState } from "../store";
import {GetSearchedBooksPayload} from "src/redux/reducers/@types";

type initialType = {
  booksList: CardListType;
  singleBook: SingleBook | null;
  isAllBooksLoading: boolean;
  searchedBooks: CardListType;
  searchValue: string;
  searchedBooksCount: number;
  booksCount: number;
  favoritesBooks: CardListType;
};
const initialState: initialType = {
  booksList: [],
  singleBook: null,
  isAllBooksLoading: false,
  searchedBooks: [],
  searchValue: "",
  searchedBooksCount: 0,
  booksCount: 0,
  favoritesBooks: [],
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
    getSearchedBooks: (state, action: PayloadAction<GetSearchedBooksPayload >) => {
      state.searchValue = action.payload.query;
    },
    setSearchedBooks: (state, action: PayloadAction<CardListType>) => {
      state.searchedBooks = action.payload;
    },

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
    setAllBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isAllBooksLoading = action.payload;
    },
  },
});
export const {
  getAllBooks,
  setAllBooks,
  getSingleBook,
  setSingleBook,
  getSearchedBooks,
  setSearchedBooks,
  setAllBooksLoading,
  // setStatus,
} = bookSlice.actions;
export default bookSlice.reducer;
export const BookSelectors = {
  getAllBooks: (state: RootState) => state.book.booksList,
  getSingleBook: (state: RootState) => state.book.singleBook,
  getAllBooksLoading: (state: RootState) => state.book.isAllBooksLoading,
  getSearchedBooks: (state: RootState) => state.book.searchedBooks,
  getSearchValue: (state: RootState) => state.book.searchValue,
  getSearchedBooksCount: (state: RootState) => state.book.searchedBooksCount,
  getAllBooksCount: (state: RootState) => state.book.booksCount,
  // getLikeBooks: (state: RootState) => state.book.likeBooks,
};
