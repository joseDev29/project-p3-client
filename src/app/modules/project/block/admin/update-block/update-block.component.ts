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
  selector: 'app-update-block',
  templateUrl: './update-block.component.html',
  styleUrls: ['./update-block.component.css']
})
export class UpdateBlockComponent implements OnInit {

  block: BlockModel;
  aFormGroup: FormGroup;
  countries: CountryModel[] = [];
  cities: CityModel[] = [];
  projects: ProjectModel[] = [];
  recordId: string = '';
  cityId: String='';
  projectId: String='';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: AdminBlockService,
    private router: Router,
    private countryService: CountryService,
    private cityService: CityService,
    private projectService: AdminProjectService
  ) { this.recordId = this.route.snapshot.params["id"]; }
  ngOnInit(): void {
    this.FormBuilding();
    this.getCountries();
    this.getRecordById();

  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      cityId: ['', [Validators.required]],
      projectId: ['', [Validators.required]]
    });
  }

  editRecord() {
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      this.getBlockData();
      this.service.editRecordById(this.block).subscribe(
        data => {
          this.router.navigate(["/project/admin/block"]);
        },
        err => {
          console.log('invalid data');

        }
      )

    }
  }
  getRecordById() {
    this.service.getRecordById(this.recordId).subscribe(
      data => {
        this.fgv.name.setValue(data.name);
        this.fgv.description.setValue(data.description);
        this.projectId=data.projectId;
        this.getCityDataByProjectId();
        this.fgv.projectId.setValue(data.projectId);
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

    this.cityService.getRecordByProjectId(this.projectId).subscribe(
      data => {
        this.cityId = data.id;
        this.setCountryData(data.countryId)
        this.fgv.cityId.setValue(data.id);
        this.getProjects(data.id)
      },
      error => {
        console.log(error);

      }
    )

  }

  getBlockData() {
    this.block = {
      id:"",
      name: "",
      description: "",
      projectId: "",
    }
    this.block.id=this.recordId;
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

  getCitiesByCountryId(event: any) {
    let id = event.target.value;
    this.cityService.getRecordByCountryId(id).subscribe(
      (cities) => {
        this.cities = cities;
      },
      (err) => console.log
    );
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
  getProjectsByCityId(event: any) {
    let id = event.target.value;
    this.projectService.getProjectsByCityId(id).subscribe(
      (projects) => {
        this.projects = projects;
      },
      (err) => console.log
    );
  }
  getProjects(id) {
    this.projectService.getProjectsByCityId(id).subscribe(
      (projects) => {
        this.projects = projects;
      },
      (err) => console.log
    );
  }
}
