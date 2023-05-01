import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {BookListType, CardListType, CardType, SingleBook} from "src/utils/@globalTypes";
import { RootState } from "../store";
import {GetSearchedBooksPayload} from "src/redux/reducers/@types";
import card from "src/components/Card";

type initialType = {
  booksList: CardListType;
  singleBook: SingleBook | null;
  isAllBooksLoading: boolean;
  searchedBooks: CardListType;
  searchValue: string;
  searchedBooksCount: number;
  booksCount: number;
  card: CardType | null;
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
  card: null,
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
    setFavoritesBooks: (state, action: PayloadAction<CardType>) => {
     state.card = action.payload;
     state.favoritesBooks.push(action.payload);
    },
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
  setFavoritesBooks,
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
  getFavoritesBooks: (state: RootState) => state.book.favoritesBooks,
};
