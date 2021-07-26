import { Component, OnInit } from '@angular/core';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { PublicProjectService } from 'src/app/services/project/public-project.service';

@Component({
  selector: 'app-list-home-project',
  templateUrl: './list-home-project.component.html',
  styleUrls: ['./list-home-project.component.css'],
})
export class ListHomeProjectComponent implements OnInit {
  projects: any = [];
  countries: CountryModel[] = [];
  cities: CityModel[] = [];
  selectedCity = 'all-cities';

  constructor(private publicProjectService: PublicProjectService) {}

  ngOnInit(): void {
    this.publicProjectService.getAllRecords().subscribe(
      (projects) => {
        this.projects = projects;
        this.getCountries();
      },
      (err) => console.log
    );
  }

  getCountries() {
    this.publicProjectService.getCountries().subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => console.log
    );
  }

  getCitiesByCountryId(event: any) {
    let id = event.target.value;

    this.publicProjectService.getCitiesByCountryId(id).subscribe(
      (cities) => {
        this.cities = cities;
      },
      (err) => console.log
    );
  }

  changeSelected(event: any) {
    this.selectedCity = event.target.value;
  }

  filterProjects(event: any) {
    event.preventDefault();

    if (this.selectedCity === 'all-cities') {
      this.publicProjectService.getAllRecords().subscribe(
        (projects) => {
          this.projects = projects;
        },
        (err) => console.log
      );
      return;
    }

    this.publicProjectService.getProjectsByCityId(this.selectedCity).subscribe(
      (projects) => {
        this.projects = projects;
      },
      (err) => console.log
    );
  }
}
