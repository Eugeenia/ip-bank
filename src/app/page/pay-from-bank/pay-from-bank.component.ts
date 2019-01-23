import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator.service';

@Component({
  selector: 'app-pay-from-bank',
  templateUrl: './pay-from-bank.component.html',
  styleUrls: ['./pay-from-bank.component.css']
})
export class PayFromBankComponent implements OnInit {

  payFromBank: FormGroup = new FormGroup({
    fromWho: new FormControl('', [
      Validators.required
    ], [
      this.validator.validateINN.bind(this.validator)
    ]),
    bik: new FormControl('', [
      Validators.required
    ], [
      this.validator.validateBIK.bind(this.validator)
    ]),
    countNumber: new FormControl('', [
      Validators.required
    ], [
      this.validator.validateCountNumber.bind(this.validator)
    ]),
    forWhat: new FormControl('', [
      Validators.required
    ], [
      this.validator.validateForWhat.bind(this.validator)
    ]),
    howMuch: new FormControl('', [
      Validators.required
    ], [
      this.validator.validateForWhat.bind(this.validator)
    ])
  });

  constructor(private validator: ValidatorService) { }

  ngOnInit() {
  }

}
