import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PaymentModel } from 'src/app/models/payment/payment.model';
import { RequestModel } from 'src/app/models/request/request.model';
import { UserModel } from 'src/app/models/security/user.model';
import { CountryService } from 'src/app/services/parameters/country.service';
import { AdminPaymentService } from 'src/app/services/payment/admin-payment.service';
import { RequestService } from 'src/app/services/requests/request.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css'],
})
export class UpdateRequestComponent implements OnInit {
  request: any;
  aFormGroup: FormGroup;
  recordId: string = '';
  payments: PaymentModel[] = [];
  chartData = {
    labels: ['Pagado', 'Por Pagar'],
    data: [0, 0],
    colors: ['#d1a954', '#8254d1'],
  };
  isLoggedIn: Boolean = false;
  subsription: Subscription = new Subscription();
  sessionData: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: RequestService,
    private router: Router,
    private paymentService: AdminPaymentService,
    private SecurityService: SecurityService
  ) {
    this.recordId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.FormBuilding();
    this.getRecordById();
    this.getPayments();
    this.subsription = this.SecurityService
      .getUserData()
      .subscribe((datos: UserModel) => {
        console.log(datos);
        this.sessionData = datos;
        this.isLoggedIn = datos.isLogged;
      });
  }

  FormBuilding() {}
  getPayments() {
    this.paymentService.getRecordsByRequestId(this.recordId).subscribe(
      (data) => {
        this.payments = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  acceptedRequest() {
    let record = {
      id: this.request.id,
      status: '',
    };
    record.status = 'ACEPTADA';
    console.log(this.request.status);

    this.editRecord(record);
  }
  rejectedRequest() {
    let record = {
      id: this.request.id,
      status: '',
    };
    record.status = 'RECHAZADA';
    console.log(this.request.status);

    this.editRecord(record);
  }

  getRecordById() {
    this.service.getRecordById(this.recordId).subscribe(
      (data) => {
        console.log(data);
        this.request = data;
        this.calculateCharData();
      },
      (error) => {
        console.log(error);

        this.router.navigate(['/request/view/', this.recordId]);
      }
    );
  }

  editRecord(record) {
    console.log(this.request);

    this.service.editRecordById(record).subscribe(
      (data) => {
        this.router.navigate(['/request/']);
      },
      (err) => {
        console.log('invalid data');
      }
    );
  }
  getRequestData() {
    this.request = {};
  }

  get fgv() {
    return this.aFormGroup.controls;
  }

  calculateCharData() {
    this.chartData.data[0] =
      this.request.property.value - this.request.totalPayment;
    this.chartData.data[1] = this.request.totalPayment;
  }
}
