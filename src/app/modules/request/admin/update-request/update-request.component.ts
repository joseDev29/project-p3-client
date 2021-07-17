import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestModel } from 'src/app/models/request/request.model';
import { CountryService } from 'src/app/services/parameters/country.service';
import { RequestService } from 'src/app/services/requests/request.service';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {

  request: any;
  aFormGroup: FormGroup;
  recordId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: RequestService,
    private router: Router
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.FormBuilding();
    this.getRecordById();
  }

  FormBuilding() {

  }

  acceptedRequest() {
    let record={
      id:this.request.id,
      status:''
    }
    record.status = 'accepted'
    console.log(this.request.status);
    
    this.editRecord(record);
  }
  rejectedRequest() {
    let record={
      id:this.request.id,
      status:''
    }
    record.status = 'rejected'
    console.log(this.request.status);
    
    this.editRecord(record);
  }

  getRecordById() {
    this.service.getRecordById(this.recordId).subscribe(
      data => {
        console.log(data);
        this.request = data;
      },
      error => {
        console.log(error);

        this.router.navigate(["/parameters/request"]);
      }
    )
  }

  editRecord(record) {
    console.log(this.request);
    
    
      this.service.editRecordById(record).subscribe(
        data => {
          this.router.navigate(["/request/homelist"]);
        },
        err => {
          console.log('invalid data');

        }
      )

    
  }
  getRequestData() {
    this.request = {

    }

  }
  get fgv() {
    return this.aFormGroup.controls;
  }
}

