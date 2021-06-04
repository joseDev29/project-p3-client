import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { ProjectModel } from 'src/app/models/project/project.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  
  project:ProjectModel;
  aFormGroup: FormGroup;
  countries: CountryModel[] = [];
  cities:CityModel[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service:CountryService,
    private router:Router,
    private countryService:CountryService,
    private cityService:CityService
  ) { }
  ngOnInit(): void {
    this.FormBuilding();
    this.getCountries();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description:['', [Validators.required]],
      countryId:['', [Validators.required]],
      cityId:['', [Validators.required]]
    });
  }

  createProject() {
    console.log(this.aFormGroup);
    
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      this.getCountryData();
      this.service.saveNewCountry(this.project).subscribe(
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
    this.project={
      code:"",
      name:"",
      description:"",
      image:"",
      id_city:""
    }
    this.project.code = this.aFormGroup.value.code;
    this.project.name = this.aFormGroup.value.name;
  }
  get fgv() {
    return this.aFormGroup.controls;
  }

  getCountries() {
    this.countryService.getAllRecords().subscribe(
      (countries) => {
        this.countries = countries;
        console.log(this.countries);
        
      },
      (err) => console.log
    );
  }

  getCitiesByCountryId(event:any){
    let id = event.target.value;
    this.cityService.getRecordByCountryId(id).subscribe(
      (cities) => {
        this.cities = cities;
        console.log(this.cities);
        
      },
      (err) => console.log
    );
  }
}