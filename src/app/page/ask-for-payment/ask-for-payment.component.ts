import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AskForPaymentModel } from 'src/app/shared/ask-for-payment.model';
import { ServerService } from 'src/app/shared/server.service';

@Component({
  selector: 'app-ask-for-payment',
  templateUrl: './ask-for-payment.component.html',
  styleUrls: ['./ask-for-payment.component.css']
})
export class AskForPaymentComponent implements OnInit {

  askForPayment: FormGroup = new FormGroup({
    inn: new FormControl('', [
      Validators.required
    ]),
    bik: new FormControl('', [
      Validators.required
    ]),
    countNumber: new FormControl('', [
      Validators.required
    ]),
    forWhat: new FormControl('', [
      Validators.required
    ]),
    howMuch: new FormControl('', [
      Validators.required
    ]),
    phoneNumber: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private service: ServerService) { }

  ngOnInit() {
  }

  public collectInfo() {
    const inn = this.askForPayment.get("inn").value;
    const bik = this.askForPayment.get("bik").value;
    const countNumber = this.askForPayment.get("countNumber").value;
    const forWhat = this.askForPayment.get("forWhat").value;
    const howMuch = this.askForPayment.get("howMuch").value;
    const phoneNumber = this.askForPayment.get("phoneNumber").value;
    const email = this.askForPayment.get("email").value;
    const model = new AskForPaymentModel(inn, bik, countNumber, forWhat, howMuch, phoneNumber, email);
    this.service.saveAskPay(model).subscribe();
  }

}
