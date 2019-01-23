import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/server.service';

@Component({
  selector: 'app-card-payments',
  templateUrl: './card-payments.component.html',
  styleUrls: ['./card-payments.component.css']
})
export class CardPaymentsComponent implements OnInit {

  array = this.server.getCardPay();
  constructor(private server: ServerService) { }

  ngOnInit() {
  }

}
