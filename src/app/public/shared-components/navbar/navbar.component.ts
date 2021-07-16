import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  dropdownActive: string = '';
  sidebarActive:string = '';

  constructor() {}

  ngOnInit(): void {}

  changeDropdown(e) {
    e.preventDefault();

    if (this.dropdownActive === '')
      return (this.dropdownActive = 'dropdown-active');

    this.dropdownActive = '';
  }

  changeSidebar(e) {
    e.preventDefault();

    if (this.sidebarActive === '')
      return (this.sidebarActive = 'sidebar-active');

    this.sidebarActive = '';
  }
}
