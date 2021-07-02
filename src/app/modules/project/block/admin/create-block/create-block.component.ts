import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { BlockModel } from 'src/app/models/project/block.model';
import { ProjectModel } from 'src/app/models/project/project.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';
import { AdminBlockService } from 'src/app/services/project/block/admin-block.service';

@Component({
  selector: 'app-create-block',
  templateUrl: './create-block.component.html',
  styleUrls: ['./create-block.component.css']
})
export class CreateBlockComponent implements OnInit {
  
  block:BlockModel;
  aFormGroup: FormGroup;
  countries: CountryModel[] = [];
  cities:CityModel[]=[];
  projects:ProjectModel[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service:AdminBlockService,
    private router:Router,
    private countryService:CountryService,
    private cityService:CityService,
    private projectService:AdminProjectService
  ) { }
  ngOnInit(): void {
    this.FormBuilding();
    this.getCountries();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description:['', [Validators.required]],
      projectId:['',[Validators.required]]
    });
  }

  createBlock() {
    console.log(this.aFormGroup);
    
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      this.getBlockData();
      console.log(this.block);
      
      this.service.saveNewRecord(this.block).subscribe(
        data=>{
          this.router.navigate(["/project/admin/block"]);
        },
        err=>{
          console.log('invalid data');
          
        }
      )
      
    }
  }
  getBlockData() {
    this.block={
      name:"",
      description:"",
      projectId:"",
    }
    this.block.name = this.aFormGroup.value.name;
    this.block.description = this.aFormGroup.value.description;
    this.block.projectId = this.aFormGroup.value.projectId;

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
  getProjectsByCityId(event:any){
    let id = event.target.value;
    this.projectService.getProjectByCityId(id).subscribe(
      (projects) => {
        this.projects = projects;
        console.log(this.projects);
      },
      (err) => console.log
    );
  }
}