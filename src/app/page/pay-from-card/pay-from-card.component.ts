import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardPayModel } from 'src/app/shared/card-pay.model';
import { ServerService } from 'src/app/shared/server.service';
import { ValidatorService } from 'src/app/shared/validator.service';

@Component({
  selector: 'app-pay-from-card',
  templateUrl: './pay-from-card.component.html',
  styleUrls: ['./pay-from-card.component.css']
})
export class PayFromCardComponent implements OnInit {

  cardForm: FormGroup = new FormGroup({
    cardDataNumber: new FormControl('', [
      Validators.required
    ], [
      this.validator.validateCardNumber.bind(this.validator)
    ]),
    cardDataExpires: new FormControl('', [
      Validators.required
    ], [
      this.validator.validateCardExpires.bind(this.validator)
    ]),
    cardDataCvc: new FormControl('', [
      Validators.required
    ], [
      this.validator.validateCardCVC.bind(this.validator)
    ]),
    sum: new FormControl('', [
      Validators.required
    ], [
      this.validator.validateHowMuch.bind(this.validator)
    ]),
    comment: new FormControl('', [], [
      this.validator.validateComment.bind(this.validator)
    ]),
    email: new FormControl('', [
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
    const cardNumber = this.cardForm.get("cardDataNumber").value;
    const cardExpires = this.cardForm.get("cardDataExpires").value;
    const cvc = this.cardForm.get("cardDataCvc").value;
    const sum = this.cardForm.get("sum").value;
    const comment = this.cardForm.get("comment").value;
    const email = this.cardForm.get("email").value;
    const model = new CardPayModel(cardNumber, cardExpires, cvc, sum, comment, email, true, '');
    this.service.saveCardPay(model).subscribe(value => console.log(value));
  }

}
