export type CardType = {
    title: string,
    subtitle: string,
    isbn13: number,
    price: string,
    image: string,
    url: string,
}
    export type CardProps = {
    card: CardType,
}
export type CardListType = CardType[]

export type SingleBook = {
    error: string;
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: string;
    isbn13: string;
    pages: string;
    year: string;
    rating: number;
    desc: string;
    price: string;
    image: string;
    url: string;
    pdf?: { [key: string]: string };
}
export type BookListType = SingleBook []

export type BasketCartProps = {
    card: CardType,
    quantity: number;
}
