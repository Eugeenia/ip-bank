import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardPayModel } from 'src/app/shared/card-pay.model';
import { ServerService } from 'src/app/shared/server.service';

@Component({
  selector: 'app-pay-from-card',
  templateUrl: './pay-from-card.component.html',
  styleUrls: ['./pay-from-card.component.css']
})
export class PayFromCardComponent implements OnInit {

  cardForm: FormGroup = new FormGroup({
    cardDataNumber: new FormControl('1111 2222 3333 4444', [
      Validators.required
    ]),
    cardDataExpires: new FormControl('11/11', [
      Validators.required
    ]),
    cardDataCvc: new FormControl('123', [
      Validators.required
    ]),
    sum: new FormControl('1000', [
      Validators.required
    ]),
    comment: new FormControl(''),
    email: new FormControl('email', [
      Validators.required
    ]),
  });

  constructor(private service: ServerService) { }

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
