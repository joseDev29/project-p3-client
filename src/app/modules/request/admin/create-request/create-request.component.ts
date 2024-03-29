import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestModel } from 'src/app/models/request/request.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';
import { RequestService } from 'src/app/services/requests/request.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  request:RequestModel | any ;
  aFormGroup: FormGroup;
  file_name: string = 'Subir un archivo...';
  seller:any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: RequestService,
    private router: Router,
    private countryService: CountryService,
    private cityService: CityService,
    private securityService:SecurityService
  ) {}
  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      offer: ['', [Validators.required]],
      clientDoc: ['', [Validators.required]],
      propertyCode: ['', [Validators.required]],
      feeNumber: ['', [Validators.required]],
    });
  }

  createRequest() {
    
this.securityService.getUserData().subscribe(
  (data)=>{
    console.log(data);
    
    this.seller=data;
  },
  (err)=>{console.log(err);}
  
)
    this.request = {
      clientDocument: this.aFormGroup.value.clientDoc,
      seller_id:this.seller.id,
      feeNumber:  this.aFormGroup.value.feeNumber,
      propertyCode: this.aFormGroup.value.propertyCode,
      offer: this.aFormGroup.value.offer,
      date: new Date().toJSON()
    }
   

    if (this.aFormGroup.invalid) {
      console.log('Invalid form');
    } else {
      this.service.saveNewRecord(this.request).subscribe(
        (data) => {
          this.router.navigate(['/request']);
        },
        (err) => {
          console.log('invalid data');
        }
      );
    }
  }

  get fgv() {
    return this.aFormGroup.controls;
  }

  onChangeImageFile(event: any) {
    if (event.target.value) {
      this.file_name = event.target.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];

      this.aFormGroup.get('image_file').setValue(event.target.files[0]);
    } else {
      this.file_name = 'Subir un archivo...';
    }
  }
}

