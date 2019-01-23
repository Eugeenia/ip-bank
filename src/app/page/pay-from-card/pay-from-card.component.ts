import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-from-card',
  templateUrl: './pay-from-card.component.html',
  styleUrls: ['./pay-from-card.component.css']
})
export class PayFromCardComponent implements OnInit {

  cardForm: FormGroup = new FormGroup({
    cardDataNumber: new FormControl('', [
      Validators.required
    ]),
    cardDataExpires: new FormControl('', [
      Validators.required
    ]),
    cardDataCvc: new FormControl('', [
      Validators.required
    ]),
    sum: new FormControl('', [
      Validators.required
    ]),
    comment: new FormControl(''),
    email: new FormControl('', [
      Validators.required
    ]),
  });

  constructor() { }

  ngOnInit() {
    console.log(this.cardForm)
  }

}
