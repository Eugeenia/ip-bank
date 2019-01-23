import { Component, OnInit, Input } from '@angular/core';
import { AskForPaymentModel } from 'src/app/shared/ask-for-payment.model';

@Component({
  selector: 'app-ask-payment',
  templateUrl: './ask-payment.component.html',
  styleUrls: ['./ask-payment.component.css']
})
export class AskPaymentComponent implements OnInit {

  @Input() model: AskForPaymentModel;
  constructor() { }

  ngOnInit() {
  }

}
