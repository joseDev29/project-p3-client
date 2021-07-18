import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestModel } from 'src/app/models/request/request.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  request:RequestModel ;
  aFormGroup: FormGroup;
  file_name: string = 'Subir un archivo...';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: AdminProjectService,
    private router: Router,
    private countryService: CountryService,
    private cityService: CityService
  ) {}
  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      offer: ['', [Validators.required]],
      date: ['', [Validators.required]],
      clientDoc: ['', [Validators.required]],
      propertyCode: ['', [Validators.required]],
      sellerID: ['', [Validators.required]],
      feeNumber: ['', [Validators.required]],
      image_file: ['', [Validators.required]],
    });
  }

  createProject() {
    console.log(this.aFormGroup);

    const formData = new FormData();
  
    formData.append('offer', this.aFormGroup.value.offer);
    formData.append('client_id', this.aFormGroup.value.clientDoc);
    formData.append('property_id', this.aFormGroup.value.propertyCode);
    formData.append('seller_id', this.aFormGroup.value.sellerID);
    formData.append('feeNumber', this.aFormGroup.value.feeNumber);
    
    formData.append('image_file', this.aFormGroup.get('image_file').value);
    formData.append(
      'date',
      new Date(this.aFormGroup.value.date).toJSON()
    );
   

    if (this.aFormGroup.invalid) {
      console.log('Invalid form');
    } else {
      this.service.saveNewRecord(formData).subscribe(
        (data) => {
          this.router.navigate(['/']);
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

