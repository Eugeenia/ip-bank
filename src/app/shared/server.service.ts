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

    public saveCardPay(cardModel: CardPayModel){
        return this.http.post<CardPayModel>(this.urlApiPay, cardModel);
    }
    
    public saveAskPay(askForPaymentModel: AskForPaymentModel){
        return this.http.post<AskForPaymentModel>(this.urlApiAsk, askForPaymentModel);
    }

    public getCardPay(){
        return this.http.get<CardPayModel[]>(this.urlApiPay);
    }

    public getAskPay(){
        return this.http.get<AskForPaymentModel[]>(this.urlApiAsk);
    }

    public markAsDangerous(url: string){
        return this.http.patch<CardPayModel>(this.urlApiPay + url, {});
    }
}