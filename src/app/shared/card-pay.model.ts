export class CardPayModel {
    constructor(
        public cardNumber: string,
        public expires: string,
        public cvc: string,
        public sum: string,
        public comment: string,
        public email: string,
        public safe: boolean,
        public url: string
        ){}
}