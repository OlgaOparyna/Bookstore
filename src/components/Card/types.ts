export type Card ={
    title: string,
    subtitle: string,
    isbn13: number,
    price: string,
    image: string,
    url: string,
}
export enum CardColor {
    Blue,
    Green,
    Orange,
    Purple
}

export type CardProps ={
    card: Card;
    color: CardColor,
}