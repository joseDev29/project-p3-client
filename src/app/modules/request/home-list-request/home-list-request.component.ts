import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/requests/request.service';

@Component({
  selector: 'app-home-list-request',
  templateUrl: './home-list-request.component.html',
  styleUrls: ['./home-list-request.component.css']
})
export class HomeListRequestComponent implements OnInit {
  requests: any = [];

  constructor(private RequestService: RequestService) {}

  ngOnInit(): void {
    this.RequestService.getAllRecords().subscribe(
      (requests) => {
        console.log(requests);
        
        this.requests = requests;
      },
      (err) => console.log
    );
  }
}
