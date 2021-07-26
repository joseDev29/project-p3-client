import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/security/user.model';
import { RequestService } from 'src/app/services/requests/request.service';
import { SecurityService } from 'src/app/services/security.service';

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
  isLoggedIn: Boolean = false;
  subsription: Subscription = new Subscription();
  sessionData: any;
  constructor(private RequestService: RequestService,private service: SecurityService) {}

  ngOnInit(): void {
    this.RequestService.getAllRecords().subscribe(
      (requests) => {
        console.log(requests);

        this.requests = requests;
        this.calculateChartData();
      },
      (err) => console.log
    );
    this.subsription = this.service
      .getUserData()
      .subscribe((datos: UserModel) => {
        console.log(datos);
        this.sessionData = datos;
        this.isLoggedIn = datos.isLogged;
      });
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
