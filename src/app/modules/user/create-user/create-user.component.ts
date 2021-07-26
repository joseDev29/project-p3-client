import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { UserModel } from 'src/app/models/user/userCD.model';
import { ClientService } from 'src/app/services/client/client.service';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: UserModel;
  aFormGroup: FormGroup;
  countries: CountryModel[];
  cities: CityModel[];
  file_name: string = 'Subir un archivo...';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: UserService,
    private router: Router,
    private countryService: CountryService,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.FormBuilding();
    this.getCountries();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      document: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      role: ['', [Validators.required]],
      cityId: ['', [Validators.required]],
    });
  }

  getCountries() {
    this.countryService.getAllRecords().subscribe(
      (countries) => (this.countries = countries),
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

  getUserData() {
    this.user = {
      name: '',
      lastname: '',
      document: 0,
      phone: '',
      email: '',
      role: 0,
      cityId: '',
    };
    this.user.name = this.aFormGroup.value.name;
    this.user.lastname = this.aFormGroup.value.lastname;
    this.user.document = this.aFormGroup.value.document;
    this.user.phone = this.aFormGroup.value.phone;
    this.user.email = this.aFormGroup.value.email;
    this.user.role = Number(this.aFormGroup.value.role);
    this.user.cityId = this.aFormGroup.value.cityId;
  }
  createUser() {
    if (this.aFormGroup.invalid) {
      console.log('Invalid form');
    } else {
      this.getUserData();
      console.log(this.user);
      this.service.saveNewRecord(this.user).subscribe(
        (data) => {
          this.router.navigate(['/']);
        },
        (err) => {
          console.log('invalid data');
        }
      );
    }
  }

  get fgv() {
    return this.aFormGroup.controls;
  }
}
