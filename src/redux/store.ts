import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import bookReducer from "./reducers/bookSlice";
import rootSaga from "src/redux/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        book: bookReducer,
    },
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export default store;
