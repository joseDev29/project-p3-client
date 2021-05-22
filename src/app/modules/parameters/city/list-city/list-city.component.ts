import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { CityService } from 'src/app/services/parameters/city.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {
  cities: any = [];
  page: number = 1;
  constructor(private cityService: CityService) { }
  filterPost='';
  config: PaginationInstance = {
    itemsPerPage: 11,
    currentPage: 1
  };
  ngOnInit(): void {
    this.cityService.getAllRecords().subscribe(
      (cities) => {
        this.cities = cities;
        console.log(cities);
        
      },
      (err) => console.log
    );
  
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

}
