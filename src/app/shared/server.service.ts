import { HttpClient } from '@angular/common/http';
import { CardPayModel } from './card-pay.model';
import { AskForPaymentModel } from './ask-for-payment.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
    constructor(private http: HttpClient){}
    private urlServer = 'http://localhost:5000'
    private urlApiPay = this.urlServer + '/card-payments/';
    private urlApiAsk = this.urlServer + '/ask-payments/';
    private validationApiUrl = this.urlServer + '/validator/'; 
    private authUrl = this.urlServer + '/bank/api/token';

    public getToken(login: string, password: string) {
        return this.http.post<{ token: string }>(this.authUrl, { login, password });
    }

    public saveCardPay(cardModel: CardPayModel){
        return this.http.post<CardPayModel>(this.urlApiPay, cardModel);
    }
    
    public saveAskPay(askForPaymentModel: AskForPaymentModel){
        return this.http.post<AskForPaymentModel>(this.urlApiAsk, askForPaymentModel);
    }

    public getCardPay(params: any){
        return this.http.get<CardPayModel[]>(this.urlApiPay, { params: params });
    }

    public getAskPay(params: any){
        return this.http.get<AskForPaymentModel[]>(this.urlApiAsk, { params: params });
    }

    public markAsDangerous(url: string){
        return this.http.patch<CardPayModel>(this.urlServer + url, {});
    }

    validateCardNumber(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'cardNumber/', { value: value });
    }

    validateCardCVC(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'cvc/', { value: value });
    }

    validateAmount(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'amount/', { value: value });
    }

    validateCardExpires(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'cardExpires/', { value: value });
    }

    validateComment(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'comment/', { value: value });
    }

    validateEmail(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'email/', { value: value });
    }

    validateINN(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'inn/', { value: value });
    }

    validateBIK(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'bik/', { value: value });
    }

    validateNDS(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'nds/', { value: value });
    }

    validateAccNumber(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'accNumber/', { value: value });
    }

    validateTelNumber(value) {
        return this.http.post<{ [key: string]: boolean }>(this.validationApiUrl + 'telNumber/', { value: value });
    }
}