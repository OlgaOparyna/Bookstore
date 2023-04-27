import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesContainer from "src/pages/PagesContainer";
import Page404 from "src/pages/Page404";
import ResetPassword from "src/pages/ResetPassword/ResetPassword";
import NewPassword from "src/pages/NewPassword/NewPassword";
import SignIn from "src/pages/SingIn";
import SignUp from "src/pages/SignUp";
import Book from "src/pages/Book";
import Home from "src/pages/Home";
import Search from "src/pages/Search";

export enum RoutesList {
    Home = "/",
    Book = "/:id",
    Search = "/search",
    Account = "/account",
    Basket = "/basket",
    FavoritesBooks = "/favorites-books",
    SignIn = "/sign-in",
    SignUp = "/sing-up",
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
                        element={"Account"} />
                    <Route path={RoutesList.Book} element={<Book/>} />
                    <Route path={RoutesList.Basket} element={"Basket"} />
                    <Route path={RoutesList.SignIn} element={<SignIn/>} />
                    <Route path={RoutesList.SignUp} element={<SignUp/>} />
                    <Route
                        path={RoutesList.FavoritesBooks}
                        element={"FavoritesBooks"}
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
