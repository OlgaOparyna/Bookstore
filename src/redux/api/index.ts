import { create } from "apisauce";

const API = create({
    baseURL: "https://api.itbook.store/1.0",
});
const getBooks = () => {
    return API.get("/new");
};
const getSingleBook = (isbn13: string) => {
    return API.get(`/books/${isbn13}`);
};
const getSearchedBooks = (query: string, page: number) => {
    return API.get(`/search/${query}/${page}`);
};

export default {
    getBooks,
    getSingleBook,
    getSearchedBooks
};
