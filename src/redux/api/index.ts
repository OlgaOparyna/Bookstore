import { create } from "apisauce";

const API = create({
    baseURL: "api.itbook.store/1.0",
});
const getBooks = () => {
    return API.get("/new", { limit: 12});
};
const getSingleBook = (isbn13: string) => {
    return API.get(`/books/${isbn13}`);
};
export default {
    getBooks,
    getSingleBook,
};
