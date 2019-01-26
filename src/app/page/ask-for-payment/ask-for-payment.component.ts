import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AskForPaymentModel } from 'src/app/shared/ask-for-payment.model';
import { ServerService } from 'src/app/shared/server.service';
import { ValidatorService } from 'src/app/shared/validator.service';

@Component({
  selector: 'app-ask-for-payment',
  templateUrl: './ask-for-payment.component.html',
  styleUrls: ['./ask-for-payment.component.css']
})
export class AskForPaymentComponent implements OnInit {

  askForPayment: FormGroup = new FormGroup({
    inn: new FormControl('1234567890', [
      Validators.required
    ], [
      this.validator.validateINN.bind(this.validator)
    ]),
    bik: new FormControl('123456789', [
      Validators.required
    ], [
      this.validator.validateBIK.bind(this.validator)
    ], ),
    countNumber: new FormControl('12345678901234567890', [
      Validators.required
    ], [
      this.validator.validateCountNumber.bind(this.validator)
    ]),
    forWhat: new FormControl('без НДС', [
      Validators.required
    ], [
      this.validator.validateForWhat.bind(this.validator)
    ]),
    howMuch: new FormControl('3000', [
      Validators.required
    ], [
      this.validator.validateHowMuch.bind(this.validator)
    ]),
    phoneNumber: new FormControl('+7 (939) 123-23-23', [
      Validators.required
    ], [
      this.validator.validatePhoneNumber.bind(this.validator)
    ]),
    email: new FormControl('we@we.com', [
      Validators.required
    ], [
      this.validator.validateEmail.bind(this.validator)
    ]),
  });

  constructor(private service: ServerService, 
              private validator: ValidatorService) { }

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
    console.log('yes')
  }

}
