import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { CountryService } from 'src/app/services/parameters/country.service';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {
  
  Country:CountryModel;
  aFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service:CountryService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  createCountry() {
    console.log(this.aFormGroup);
    
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      this.getCountryData();
      this.service.saveNewCountry(this.Country).subscribe(
        data=>{
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
    this.Country.code = this.aFormGroup.value.code;
    this.Country.name = this.aFormGroup.value.name;
  }
  get fgv() {
    return this.aFormGroup.controls;
  }
}
