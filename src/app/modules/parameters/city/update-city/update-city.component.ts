import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {

  City: CityModel;
  aFormGroup: FormGroup;
  countries: CountryModel[] = [];
  recordId: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: CityService,
    private router: Router,
    private cityService: CountryService
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.FormBuilding();
    this.getRecordById();
    this.getCountries();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      countryId: ['', [Validators.required]]
    });
  }

  editCity() {
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      this.getCityData();
      this.service.editRecordById(this.City).subscribe(
        data => {
          this.router.navigate(["/parameters/city"]);
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
        this.fgv.code.setValue(data.code);
        this.fgv.name.setValue(data.name);
        this.fgv.countryId.setValue(data.countryId);
      },
      error => {
        console.log(error);
        this.router.navigate(["/parameters/country"]);
      }
    )
  }

  getCityData() {
    this.City = {
      id: "",
      code: "",
      name: "",
      countryId: ""
    }
    this.City.code = this.aFormGroup.value.code;
    this.City.name = this.aFormGroup.value.name;
    this.City.countryId = this.aFormGroup.value.countryId;
    this.City.id = this.recordId;
  }

  getCountries() {
    this.cityService.getAllRecords().subscribe(
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

