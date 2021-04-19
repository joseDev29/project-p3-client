import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  dropdownActive: string = '';

  constructor() {}

  ngOnInit(): void {}

  changeDropdown(e) {
    e.preventDefault();

    console.log('change drop');
    if (this.dropdownActive === '')
      return (this.dropdownActive = 'dropdown-active');

    this.dropdownActive = '';
  }
}
