import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { BlockModel } from 'src/app/models/project/block.model';
import { ProjectModel } from 'src/app/models/project/project.model';
import { PropertyModel } from 'src/app/models/project/property.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';
import { AdminBlockService } from 'src/app/services/project/block/admin-block.service';
import { AdminPropertyService } from 'src/app/services/project/block/property/admin-property.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {
  
  property:PropertyModel;
  aFormGroup: FormGroup;
  countries: CountryModel[] = [];
  cities:CityModel[]=[];
  blocks:BlockModel[]=[];
  projects:ProjectModel[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service:AdminPropertyService,
    private router:Router,
    private countryService:CountryService,
    private cityService:CityService,
    private blockService:AdminBlockService,
    private projectService:AdminProjectService
  ) { }
  ngOnInit(): void {
    this.FormBuilding();
    this.getCountries();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      description:['', [Validators.required]],
      value:['', [Validators.required]],
      number:['', [Validators.required]],
      blockId:['',[Validators.required]]
    });
  }

  createProperty() {
    console.log(this.aFormGroup);
    
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      this.getPropertyData();
      console.log(this.property);
      
      this.service.saveNewRecord(this.property).subscribe(
        data=>{
          this.router.navigate(["/project/admin/"]);
        },
        err=>{
          console.log('invalid data');
          
        }
      )
      
    }
  }
  getPropertyData() {
    this.property={
      description: '',
      number: '',
      value: 0,
      blockId: ''
    }

    this.property.description = this.aFormGroup.value.description;
    this.property.number = this.aFormGroup.value.number;
    this.property.value = this.aFormGroup.value.value;
    this.property.blockId = this.aFormGroup.value.blockId;

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
        console.log(this.cities);
      },
      (err) => console.log
    );
  }
  getProjectsByCityId(event:any){
    let id = event.target.value;
    this.projectService.getProjectsByCityId(id).subscribe(
      (projects) => {
        this.projects = projects;
        console.log(this.projects);
      },
      (err) => console.log
    );
  }
  getBlocksByProjectId(event:any){
    let id = event.target.value;
    this.blockService.getBlocksByProjectId(id).subscribe(
      (blocks) => {
        this.blocks = blocks;
        console.log(this.blocks);
      },
      (err) => console.log
    );
  }
}