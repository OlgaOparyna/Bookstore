import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "src/redux/sagas/rootSaga";
import bookReducer from "src/redux/reducers/bookSlice";
import basketReducer from "src/redux/reducers/basketSlice";
import userReducer from "src/redux/reducers/UserSlice";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        book: bookReducer,
        basket: basketReducer,
        user: userReducer,
    },
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export default store;
