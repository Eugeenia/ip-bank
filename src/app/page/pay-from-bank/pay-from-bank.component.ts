import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pay-from-bank',
  templateUrl: './pay-from-bank.component.html',
  styleUrls: ['./pay-from-bank.component.css']
})
export class PayFromBankComponent implements OnInit {

  payFromBank: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit() {
  }

}
