import { Component, OnInit } from '@angular/core';
import { AskForPaymentModel } from 'src/app/shared/ask-for-payment.model';
import { ServerService } from 'src/app/shared/server.service';

@Component({
  selector: 'app-ask-payments',
  templateUrl: './ask-payments.component.html',
  styleUrls: ['./ask-payments.component.css']
})
export class AskPaymentsComponent implements OnInit {

  array = this.server.getAskPay();
  constructor(private server: ServerService) { }

  ngOnInit() {
  }

}
