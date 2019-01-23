import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

}
