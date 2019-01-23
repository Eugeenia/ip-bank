export class AskForPaymentModel{
    constructor(
        public inn: string,
        public bik: string,
        public countNumber: string,
        public forWhat: string,
        public nowMuch: string,
        public phoneNumber: string,
        public email: string,
    ){}
}