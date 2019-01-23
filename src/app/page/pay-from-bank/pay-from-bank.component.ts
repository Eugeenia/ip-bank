import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-from-bank',
  templateUrl: './pay-from-bank.component.html',
  styleUrls: ['./pay-from-bank.component.css']
})
export class PayFromBankComponent implements OnInit {

  payFromBank: FormGroup = new FormGroup({
    fromWho: new FormControl('', [
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
    ])
  });

  constructor() { }

  ngOnInit() {
  }

}
