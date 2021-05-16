import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { CountryService } from 'src/app/services/parameters/country.service';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {
  countries: any = [];
  page: number = 1;
  constructor(private countryService: CountryService) { }
  filterPost='';
  config: PaginationInstance = {
    itemsPerPage: 11,
    currentPage: 1
  };
  ngOnInit(): void {
    this.countryService.getAllRecords().subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => console.log
    );
  
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

}
