import {CardListType} from "src/utils/@globalTypes";

export type GetSearchedBooksPayload = {
    query: string;
    page: number;
}
export type SetSearchedBooksPayload = {
    cardList: CardListType,
    booksCount : number
}
export type SetUserPayload = {
    email: string | null,
    token: string,
    id: string,
}
//
// export type SignInUserPayload = {
//     email: string;
//     password: string;
// };
// export type SignUpUserPayload = {
//     username: string;
//     email: string;
//     password: string;
// };
// export type ResetPasswordPayload = {
//     email: string;
// };
// export type NewPasswordPayload = {
//     uid: string;
//     token: string;
//     new_password: string;
// };