import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {CardListType, CardType} from "src/utils/@globalTypes";
import {RootState} from "src/redux/store";

type initialType = {
    savedBooks: CardListType;
};
const initialState: initialType = {
    savedBooks: [],
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers:     {
        setSavedBooks: (state, action: PayloadAction<CardType>) => {
            const card = action.payload;
            const savedBooksIndex = state.savedBooks.findIndex(
                (book) => book.isbn13 === card.isbn13
            );
            if (savedBooksIndex === -1) {
                state.savedBooks.push(action.payload);
            } else {
                state.savedBooks.splice(savedBooksIndex, 1);
            }
        },
    }}
    )

    export const {
        setSavedBooks,
    } = basketSlice.actions;
    export default basketSlice.reducer;
export const BasketSelectors = {
    getSavedBooks: (state: RootState) => state.basket.savedBooks,
};