export class BankPayModel {
    constructor (
        public fromWho: string,
        public bik: string,
        public countNumber: string,
        public forWhat: string,
        public howMuch: string
    ){}
}