import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-create-finances',
  templateUrl: './create-finances.component.html',
  styleUrls: ['./create-finances.component.css'],
})
export class CreateFinancesComponent implements OnInit {
  clientId: string;
  aFormGroup: FormGroup;
  countries: CountryModel[];
  cities: CityModel[];
  file_name: string = 'Subir un archivo...';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['id'];
    this.FormBuilding();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      totalIncome: ['', [Validators.required]],
      jobDataTime: ['', [Validators.required]],
      familyReference: ['', [Validators.required]],
      familyReferencePhone: ['', [Validators.required]],
      personalReference: ['', [Validators.required]],
      personalReferencePhone: ['', [Validators.required]],
      clientId: [this.clientId, [Validators.required]],
    });
  }

  createClient() {
    if (this.aFormGroup.invalid) {
      console.log('Invalid form');
    } else {
      const finances = {
        totalIncome: this.aFormGroup.value.totalIncome,
        jobDataTime: this.aFormGroup.value.jobDataTime,
        familyReference: this.aFormGroup.value.familyReference,
        familyReferencePhone: this.aFormGroup.value.familyReferencePhone,
        personalReference: this.aFormGroup.value.personalReference,
        personalReferencePhone: this.aFormGroup.value.personalReferencePhone,
        clientId: this.aFormGroup.value.clientId,
      };

      this.clientService.addFinances(finances).subscribe(
        (res) => {
          this.router.navigate(['/clients/view', this.clientId]);
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
