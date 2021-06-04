import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CityCountryModel } from 'src/app/models/parameters/cityCountry.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {
  
  City:CityModel;
  aFormGroup: FormGroup;
  countries: CountryModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service:CityService,
    private router:Router,
    private countryService:CountryService
  ) { }
  ngOnInit(): void {
    this.FormBuilding();
    this.getCountries();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      countryId:['', [Validators.required]]
    });
  }

  createCity() {
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      this.getCityData();
      this.service.saveNewCity(this.City).subscribe(
        data=>{
          this.router.navigate(["/parameters/city"]);
        },
        err=>{
          console.log('invalid data');
          
        }
      )
      
    }
  }
  getCityData() {
    this.City={
      name:"",
      countryId:""
    }
    this.City.name = this.aFormGroup.value.name;
    this.City.countryId = this.aFormGroup.value.countryId;
  }

  getCountries() {
    this.countryService.getAllRecords().subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => console.log
    );

  }
  get fgv() {
    return this.aFormGroup.controls;
  }
}
