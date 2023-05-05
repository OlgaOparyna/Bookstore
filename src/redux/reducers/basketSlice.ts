import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  BasketCartProps,
  SingleBook,
} from "src/utils/@globalTypes";
import { RootState } from "src/redux/store";

type initialType = {
  savedBooks: BasketCartProps[];
};
const initialState: initialType = {
  savedBooks: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setSavedBooks: (state, action: PayloadAction<BasketCartProps>) => {
      const book = action.payload;
      const newSavedBooks = state.savedBooks.find(
        (el) => el.book.isbn13 === book?.book.isbn13
      );
      if (newSavedBooks && newSavedBooks.quantity) {
        newSavedBooks.quantity++;
        newSavedBooks.book.price.substring(1)
      } else {
        state.savedBooks.push({ ...book, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<BasketCartProps>) => {
        const book = action.payload;
       const newSavedBooks = state.savedBooks.find((item) => item.book.isbn13 === book.book?.isbn13);
      if (newSavedBooks && newSavedBooks.quantity) {
        {newSavedBooks.quantity++;
      }}
    },
    decrementQuantity: (state, action: PayloadAction<BasketCartProps>) => {
      const book = action.payload;
      const newSavedBooks  = state.savedBooks.find((item) => item.book.isbn13 === book.book?.isbn13);
      if (newSavedBooks && newSavedBooks.quantity) {
          newSavedBooks.quantity--
        } else if (newSavedBooks?.quantity === 0){
        const savedBooksIndex = state.savedBooks.findIndex(
            (item) => item.book.isbn13 === book.book?.isbn13
        );
        state.savedBooks.splice(savedBooksIndex, 1);
        }
    },
    removeSavedBooks: (state, action: PayloadAction<SingleBook | null>) => {
      const book = action.payload;
      const savedBooksIndex = state.savedBooks.findIndex(
        (item) => item.book.isbn13 === book?.isbn13
      );
      state.savedBooks.splice(savedBooksIndex, 1);
    },
    removeAllSavedBooks: (state) => {
      state.savedBooks = initialState.savedBooks
    }
  },
});

export const { setSavedBooks,
  incrementQuantity,
  decrementQuantity,
  removeSavedBooks,
  removeAllSavedBooks} = basketSlice.actions;
export default basketSlice.reducer;
export const BasketSelectors = {
  getSavedBooks: (state: RootState) => state.basket.savedBooks,
};
