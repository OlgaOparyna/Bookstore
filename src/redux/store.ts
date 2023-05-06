import {combineReducers, configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from "src/redux/sagas/rootSaga";
import bookReducer from "src/redux/reducers/bookSlice";
import basketReducer from "src/redux/reducers/basketSlice";
import userReducer from "src/redux/reducers/UserSlice";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    book: bookReducer,
    basket: basketReducer,
    user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducers,
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga)
export let persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
