export type CardType ={
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