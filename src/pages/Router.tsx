import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesContainer from "src/pages/PagesContainer";
import Page404 from "src/pages/Page404";
import ResetPassword from "src/pages/ResetPassword/ResetPassword";
import NewPassword from "src/pages/NewPassword/NewPassword";
import SignIn from "src/components/SingIn";
import SignUp from "src/components/SignUp";
import Book from "src/pages/Book";
import Home from "src/pages/Home";
import Search from "src/pages/Search";
import Basket from "src/pages/Basket";
import RegistrationForm from "src/pages/RegistrationForm";
import FavoritesBooks from "src/pages/FavoritesBooks";
import Account from "src/pages/Account";

export enum RoutesList {
    Home = "/",
    Book = "/:id",
    Search = "/search/:query",
    Account = "/account",
    Basket = "/basket",
    FavoritesBooks = "/favorites-books",
    RegistrationForm = "/registration",
    ResetPassword = "/sign-up/reset-password",
    NewPassword = "/sign-up/new-password",
    Default = "*",
}
const Router = () => {
        return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesList.Home} element={<PagesContainer />}>
                    <Route path={RoutesList.Home} element={<Home/>} />
                    <Route path={RoutesList.Search} element={<Search/>} />
                    <Route
                        path={RoutesList.Account}
                        element={<Account/>} />
                    <Route path={RoutesList.Book} element={<Book/>} />
                    <Route path={RoutesList.Basket} element={<Basket/>} />
                    <Route path={RoutesList.RegistrationForm} element={<RegistrationForm/>} />
                    <Route
                        path={RoutesList.FavoritesBooks}
                        element={<FavoritesBooks/>}
                    />
                    <Route path={RoutesList.ResetPassword} element={<ResetPassword/>} />
                    <Route path={RoutesList.NewPassword} element={<NewPassword/>} />
                    <Route path={RoutesList.Default} element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
