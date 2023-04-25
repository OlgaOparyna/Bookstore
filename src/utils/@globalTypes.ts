export type CardType ={
    title: string,
    subtitle: string,
    isbn13: number,
    price: string,
    image: string,
    url: string,

    error?: number,
    authors?: string,
    publisher?: string,
    isbn10?: number,
    pages?: number,
    year?: number,
    rating?: number,
    desc?: string,
        pdf?: string,
}
export type CardProps = {
    card: CardType,
}
export type CardListType = CardType[]

// export interface IBook {
//     title: string;
//     subtitle: string;
//     isbn13: string;
//     price: string;
//     image: string;
//     url: string;
// }
//
// export type CardTypeResponse = {
//     error: string;
//     total: string;
//     books: IBook[];
// }
//
// export type BookSearchResponse = {
//     total: string;
//     page: string;
//     books: IBook[];
// }
//
// export type SingleBook = {
//     error: string;
//     title: string;
//     subtitle: string;
//     authors: string;
//     publisher: string;
//     isbn10: string;
//     isbn13: string;
//     pages: string;
//     year: string;
//     rating: string;
//     desc: string;
//     price: string;
//     image: string;
//     url: string;
//     pdf?: { [key: string]: string };
// }
//
// export type BookBasket = {
//     error: string;
//     title: string;
//     subtitle: string;
//     authors: string;
//     publisher: string;
//     isbn10: string;
//     isbn13: string;
//     pages: string;
//     year: string;
//     rating: string;
//     desc: string;
//     price: string;
//     image: string;
//     url: string;
//     pdf?: { [key: string]: string };
//     quantity: number;
// }
//
// export type SearchBookValue = {
//     query: string;
//     page: number;
//}