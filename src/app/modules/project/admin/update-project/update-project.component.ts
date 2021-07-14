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
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  
  project:ProjectModel;
  aFormGroup: FormGroup;
  countries: CountryModel[] = [];
  cities:CityModel[]=[];
  file_name:string = 'Subir un archivo...';
  recordId:string='';
  cityId: String='';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service:AdminProjectService,
    private router:Router,
    private countryService:CountryService,
    private cityService:CityService
  ) { this.recordId = this.route.snapshot.params["id"];}
  ngOnInit(): void {
    this.FormBuilding();
    this.getCountries();
    this.getRecordById();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description:['', [Validators.required]],
      cityId:['', [Validators.required]],
      countryId: ['', [Validators.required]],
      image_file: ['', [Validators.required]]
    });
  }

  editRecord() {
    console.log(this.aFormGroup);

    const formData = new FormData();

    formData.append('id',this.recordId);
    formData.append('name', this.aFormGroup.value.name);
    formData.append('description', this.aFormGroup.value.description);
    formData.append('cityId', this.aFormGroup.value.cityId);
    formData.append('image_file', this.aFormGroup.get('image_file').value);

    console.log(formData.get('id'))

    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      
      this.service.editRecordById(formData).subscribe(
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
      },
      (err) => console.log
    );
  }

  getCitiesByCountryId(event:any){
    let id = event.target.value;
    this.cityService.getRecordByCountryId(id).subscribe(
      (cities) => {
        this.cities = cities;
      },
      (err) => console.log
    );
  }
  getRecordById() {
    this.service.getRecordById(this.recordId).subscribe(
      data => {
        console.log(data);
        this.fgv.name.setValue(data.name);
        this.fgv.description.setValue(data.description);
        this.getCityDataByProjectId();
        this.fgv.cityId.setValue(data.id_city);
        this.fgv.image_file.setValue(data.image);
      },
      error => {
        console.log(error);
        this.router.navigate(["/parameters/country"]);
      }
    )
  }
  setCountryData(id) {
    this.fgv.countryId.setValue(id);
    this.getCities(id)
  }
  getCityDataByProjectId() {
    this.cityService.getRecordByProjectId(this.recordId).subscribe(
      data => {
        console.log(data);
        
        this.cityId = data.id;
        this.setCountryData(data.countryId);
        this.fgv.cityId.setValue(data.id);
      },
      error => {
        console.log(error);

      }
    )
  }

  getCities(id) {
    this.cityService.getRecordByCountryId(id).subscribe(
      (cities) => {
        this.cities = cities;
        console.log(cities);
        
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