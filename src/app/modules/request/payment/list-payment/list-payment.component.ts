import { Component, Input, OnInit } from '@angular/core';
import { PaymentModel } from 'src/app/models/payment/payment.model';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css']
})
export class ListPaymentComponent {
  @Input('payments') payments:PaymentModel[]=[] ;

}
