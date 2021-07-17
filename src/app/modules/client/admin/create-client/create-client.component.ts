import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client/client.model';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { ClientService } from 'src/app/services/client/client.service';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent implements OnInit {
  client: ClientModel;
  aFormGroup: FormGroup;
  countries: CountryModel[];
  cities: CityModel[];
  file_name: string = 'Subir un archivo...';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: ClientService,
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
      birthday: ['', [Validators.required]],
      image_file: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      adress: ['', [Validators.required]],
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

  onChangeImageFile(event: any) {
    if (event.target.value) {
      this.file_name = event.target.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];

      this.aFormGroup.get('image_file').setValue(event.target.files[0]);
    } else {
      this.file_name = 'Subir un archivo...';
    }
  }

  createClient() {
    const formData = new FormData();

    formData.append('name', this.aFormGroup.value.name);
    formData.append('lastname', this.aFormGroup.value.lastname);
    formData.append('document', this.aFormGroup.value.document);
    formData.append('phone', this.aFormGroup.value.phone);
    formData.append('email', this.aFormGroup.value.email);
    formData.append('adress', this.aFormGroup.value.adress);
    formData.append('image_file', this.aFormGroup.get('image_file').value);
    formData.append('cityId', this.aFormGroup.value.cityId);
    formData.append(
      'birthday',
      new Date(this.aFormGroup.value.birthday).toJSON()
    );

    if (this.aFormGroup.invalid) {
      console.log('Invalid form');
    } else {
      this.service.saveNewRecord(formData).subscribe(
        (data) => {
          this.router.navigate(['/clients']);
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
