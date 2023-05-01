import { takeLatest, all, call, put, takeLeading } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";

import {SingleBook} from "src/utils/@globalTypes";
import {
  getAllBooks, getSearchedBooks, getSingleBook,
  setAllBooks, setAllBooksLoading, setSearchedBooks, setSingleBook,
} from "../reducers/bookSlice";
import API from "../api";
import {GetSearchedBooksPayload} from "src/redux/reducers/@types";
import {AllBooksResponse, AllSearchedBooksResponse} from "src/redux/sagas/@types";
import cardList from "src/components/CardList";

function* getAllBooksWorker() {
  yield put(setAllBooksLoading(true));
  const { ok, data, problem }: ApiResponse<AllBooksResponse> = yield call(API.getBooks);
  if (ok && data) {
    yield put(setAllBooks(data.books));
  } else {
    console.warn("Error getting all books", problem);
  }
  yield put(setAllBooksLoading(false));
}
function* getSingleBookWorker(action: PayloadAction<string>) {
  yield put(setAllBooksLoading(true));
  const { ok, data, problem }: ApiResponse<SingleBook> = yield call(
    API.getSingleBook,
    action.payload
  );
  if (ok && data) {
    yield put(setSingleBook(data));
  } else {
    console.warn("Error getting single Book", problem);
  }
  yield put(setAllBooksLoading(false));
}

function* getSearchedBooksWorker(action: PayloadAction<GetSearchedBooksPayload>
) {
  yield put(setAllBooksLoading(true));
  const { query, page} = action.payload;
  const { ok, data, problem }: ApiResponse<AllSearchedBooksResponse> = yield call(
    API.getSearchedBooks,
      query, page
  );
  if (ok && data) {
    yield put(
      setSearchedBooks({cardList: data.books, booksCount: data.total})
    );
  } else {
    console.warn("Error getting search books", problem);
  }
  yield put(setAllBooksLoading(false));
}
export default function* BooksSaga() {
  yield all([
    takeLatest(getAllBooks, getAllBooksWorker),
    takeLatest(getSingleBook, getSingleBookWorker),
    takeLeading(getSearchedBooks, getSearchedBooksWorker),
  ]);
}
