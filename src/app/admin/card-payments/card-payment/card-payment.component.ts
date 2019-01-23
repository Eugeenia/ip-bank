import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from 'src/app/shared/server.service';
import { CardPayModel } from 'src/app/shared/card-pay.model';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  @Input() model: CardPayModel;
  constructor(private server: ServerService) { }

  ngOnInit() {
  }

  changeState() {
    this.server.markAsDangerous(this.model.url).subscribe(value => this.model = value);
  }
}
