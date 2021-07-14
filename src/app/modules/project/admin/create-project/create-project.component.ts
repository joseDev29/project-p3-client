import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { ProjectModel } from 'src/app/models/project/project.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  
  project:ProjectModel;
  aFormGroup: FormGroup;
  countries: CountryModel[] = [];
  cities:CityModel[]=[];
  file_name:string = 'Subir un archivo...';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service:AdminProjectService,
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
      name: ['', [Validators.required]],
      description:['', [Validators.required]],
      cityId:['', [Validators.required]],
      image_file: ['', [Validators.required]]
    });
  }

  createProject() {
    console.log(this.aFormGroup);

    const formData = new FormData();

    formData.append('name', this.aFormGroup.value.name);
    formData.append('description', this.aFormGroup.value.description);
    formData.append('cityId', this.aFormGroup.value.cityId);
    formData.append('image_file', this.aFormGroup.get('image_file').value);

    console.log(formData.get('cityId'))

    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      
      this.service.saveNewRecord(formData).subscribe(
        data=>{
          this.router.navigate(["/"]);
        },
        err=>{
          console.log('invalid data');
          
        }
      )
      
    }
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

  onChangeImageFile(event:any){

    if(event.target.value){
      this.file_name = event.target.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];

      this.aFormGroup.get('image_file').setValue(event.target.files[0])
    }
    else{
      this.file_name = 'Subir un archivo...';
    } 
  }
}

