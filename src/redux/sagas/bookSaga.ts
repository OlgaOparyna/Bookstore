import { takeLatest, all, call, put, takeLeading } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";

import {SingleBook} from "src/utils/@globalTypes";
import {
  getAllBooks, getSearchedBooks, getSingleBook,
  setAllBooks, setSearchedBooks, setSingleBook,
} from "../reducers/bookSlice";
import API from "../api";
import {GetSearchedBooksPayload} from "src/redux/reducers/@types";
import {AllBooksResponse, AllSearchedBooksResponse} from "src/redux/sagas/@types";

function* getAllBooksWorker() {
  const { ok, data, problem }: ApiResponse<AllBooksResponse> = yield call(API.getBooks);
  if (ok && data) {
    yield put(setAllBooks(data.books));
  } else {
    console.warn("Error getting all books", problem);
  }
}
function* getSingleBookWorker(action: PayloadAction<string>) {
  const { ok, data, problem }: ApiResponse<SingleBook> = yield call(
    API.getSingleBook,
    action.payload
  );
  if (ok && data) {
    yield put(setSingleBook(data));
  } else {
    console.warn("Error getting single Book", problem);
  }
}

function* getSearchedBooksWorker(action: PayloadAction<GetSearchedBooksPayload>
) {
  const { query} = action.payload;
  const { ok, data, problem }: ApiResponse<AllSearchedBooksResponse> = yield call(
    API.getSearchedBooks,
      query
  );
  if (ok && data) {
    yield put(
      setSearchedBooks(data.books)
    );
  } else {
    console.warn("Error getting search books", problem);
  }
}
export default function* BooksSaga() {
  yield all([
    takeLatest(getAllBooks, getAllBooksWorker),
    takeLatest(getSingleBook, getSingleBookWorker),
    takeLeading(getSearchedBooks, getSearchedBooksWorker),
  ]);
}
