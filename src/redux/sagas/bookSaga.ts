import { takeLatest, all, call, put, takeLeading } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";

import { CardType } from "src/utils/@globalTypes";
// import {
//   GetAllBooksPayload,
//   GetSearchedBooksPayload,
// } from "src/redux/reducers/@types";
import {
  getAllBooks,
  setAllBooks,
  getSingleBook,
  setSingleBook,
  // setSearchedBooks,
  // getSearchedBooks,
  // setAllBooksLoading,
} from "../reducers/bookSlice";
import API from "../api";
// import { AllBooksResponse } from "./@types";

function* getAllBooksWorker() {
  const { ok, data, problem }: ApiResponse<any> = yield call(API.getBooks);
  if (ok) {
    yield put(setAllBooks(data.results));
  } else {
    console.warn("Error getting all books", problem);
  }
}
// function* getAllPostsWorker(action: PayloadAction<GetAllPostsPayload>) {
//     yield put(setAllPostsLoading(true));
//     const { offset, ordering } = action.payload;
//     const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
//         API.getPosts,
//         offset,
//         "",
//         ordering
//     );
//     if (ok && data) {
//         yield put(setAllPosts({ cardList: data.results, postsCount: data.count }));
//     } else {
//         console.warn("Error getting all posts", problem);
//     }
//     yield put(setAllPostsLoading(false));
// }

function* getSingleBookWorker(action: PayloadAction<string>) {
  const { ok, data, problem }: ApiResponse<CardType> = yield call(
    API.getSingleBook,
    action.payload
  );
  if (ok && data) {
    yield put(setSingleBook(data));
  } else {
    console.warn("Error getting single Book", problem);
  }
}
// function* getSearchedBooksWorker(
//   action: PayloadAction<GetSearchedBooksPayload>
// ) {
//   const { searchValue, isOverwrite, offset } = action.payload;
//   const { ok, data, problem }: ApiResponse<AllBooksResponse> = yield call(
//     API.getBooks,
//     offset,
//     searchValue
//   );
//   if (ok && data) {
//     yield put(
//       setSearchedBooks({
//         cardList: data.results,
//         BooksCount: data.count,
//         isOverwrite,
//       })
//     );
//   } else {
//     console.warn("Error getting search Books", problem);
//   }
// }
export default function* BooksSaga() {
  yield all([
    takeLatest(getAllBooks, getAllBooksWorker),
    takeLatest(getSingleBook, getSingleBookWorker),
    // takeLeading(getSearchedBooks, getSearchedBooksWorker),
  ]);
}
