import { Component, Input, OnInit } from '@angular/core';
import { RequestModel } from 'src/app/models/request/request.model';

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent{
  @Input('request') request: any;
}

