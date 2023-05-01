import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  BookListType,
  CardListType,
  CardType,
  SingleBook,
} from "src/utils/@globalTypes";
import { RootState } from "../store";
import {
  GetSearchedBooksPayload,
  SetSearchedBooksPayload,
} from "src/redux/reducers/@types";
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
  favoritesBooks: BookListType;
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
    getSearchedBooks: (
      state,
      action: PayloadAction<GetSearchedBooksPayload>
    ) => {
      state.searchValue = action.payload.query;
    },
    setSearchedBooks: (
      state,
      {
        payload: { booksCount, cardList },
      }: PayloadAction<SetSearchedBooksPayload>
    ) => {
      state.searchedBooks = cardList;
      state.searchedBooksCount = booksCount;
    },

    setFavoritesBooks: (state, action: PayloadAction<SingleBook | null>) => {
      const book = action.payload;
      const favoritesBooksIndex = state.favoritesBooks.findIndex(
        (el) => el.isbn13 === book?.isbn13
      );

      if (favoritesBooksIndex === -1 && book) {
        state.favoritesBooks.push(book);
      } else {
        state.favoritesBooks.splice(favoritesBooksIndex, 1);
      }
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
  getFavoritesBooks: (state: RootState) => state.book.favoritesBooks,
};
