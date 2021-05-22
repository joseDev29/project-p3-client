import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { CountryService } from 'src/app/services/parameters/country.service';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {
  
  Country:CountryModel;
  aFormGroup: FormGroup;
  recordId: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service:CountryService,
    private router:Router
  ) { 
    this.recordId = this.route.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.FormBuilding();
    this.getRecordById();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      id:[{value: '', disabled: true},[,Validators.required]],
      code: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

getRecordById(){
  this.service.getRecordById(this.recordId).subscribe(
    data=>{
      this.fgv.id.setValue(data.id);
      this.fgv.code.setValue(data.code);
      this.fgv.name.setValue(data.name);
    },
    error=>{
      console.log(error);
      
      this.router.navigate(["/parameters/country"]);
    }
  )
}

  editRecord() {
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      this.getCountryData();
      this.service.editRecordById(this.Country).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(["/parameters/country"]);
        },
        err=>{
          console.log('invalid data');
          
        }
      )
      
    }
  }
  getCountryData() {
    this.Country={
      code:"",
      name:""
    }
    this.Country.id = this.fgv.id.value;
    this.Country.code = this.fgv.code.value;
    this.Country.name = this.fgv.name.value; 
  }
  get fgv() {
    return this.aFormGroup.controls;
  }
}
