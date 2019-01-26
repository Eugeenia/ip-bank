import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-payments',
  templateUrl: './card-payments.component.html',
  styleUrls: ['./card-payments.component.css']
})
export class CardPaymentsComponent implements OnInit {

  array = this.server.getCardPay(this.route.snapshot.queryParams);
  constructor(private server: ServerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
