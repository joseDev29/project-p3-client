import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/security/user.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  dropdownActive: string = '';
  sidebarActive: string = '';
  isLoggedIn: Boolean = false;
  subsription: Subscription = new Subscription();
  sessionData: any;

  constructor(private service: SecurityService) {}

  ngOnInit(): void {
    this.subsription = this.service
      .getUserData()
      .subscribe((datos: UserModel) => {
        console.log(datos);
        this.sessionData = datos;
        this.isLoggedIn = datos.isLogged;
      });
  }

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
