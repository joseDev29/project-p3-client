import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/requests/request.service';

@Component({
  selector: 'app-home-list-request',
  templateUrl: './home-list-request.component.html',
  styleUrls: ['./home-list-request.component.css'],
})
export class HomeListRequestComponent implements OnInit {
  requests: any = [];
  chartData = {
    labels: ['En Estudio', 'Aceptadas', 'Rechazadas'],
    data: [0, 0, 0],
    colors: ['#5497d1', '#54d188', '#d15460'],
  };

  constructor(private RequestService: RequestService) {}

  ngOnInit(): void {
    this.RequestService.getAllRecords().subscribe(
      (requests) => {
        console.log(requests);

        this.requests = requests;
        this.calculateChartData();
      },
      (err) => console.log
    );
  }

  calculateChartData() {
    this.requests.forEach((request) => {
      switch (request.status) {
        case 'EN ESTUDIO':
          this.chartData.data[0]++;
          break;
        case 'ACEPTADA':
          this.chartData.data[1]++;
          break;
        case 'RECHAZADA':
          console.log(request.status);
          this.chartData.data[2]++;
          break;
        default:
          break;
      }
    });

    console.log(this.chartData);
  }
}
