import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesContainer from "src/pages/PagesContainer";
import Page404 from "src/pages/Page404";
import ResetPassword from "src/pages/ResetPassword/ResetPassword";
import NewPassword from "src/pages/NewPassword/NewPassword";

export enum RoutesList {
    Home = "/",
    Book = "/bookstore/:id",
    Search = "/bookstore/search",
    Account = "/bookstore/account",
    Basket = "/bookstore/basket",
    FavoritesBooks = "/bookstore/favorites-books",
    SignIn = "/bookstore/sign-in",
    SignUp = "/bookstore/sing-up",
    ResetPassword = "/bookstore/sign-up/reset-password",
    NewPassword = "/bookstore/sign-up/new-password",
    Default = "*",
}
const Router = () => {
        return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesList.Home} element={<PagesContainer />}>
                    <Route path={RoutesList.Home} element={"Home"} />
                    <Route path={RoutesList.Search} element={"Search"} />
                    <Route
                        path={RoutesList.Account}
                        element={"Account"} />
                    <Route path={RoutesList.Book} element={"Book"} />
                    <Route path={RoutesList.Basket} element={"Basket"} />
                    <Route path={RoutesList.SignIn} element={"SignIn"} />
                    <Route path={RoutesList.SignUp} element={"SignUp"} />
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
