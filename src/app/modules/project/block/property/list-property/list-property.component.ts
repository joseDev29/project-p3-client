import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertyModel } from 'src/app/models/project/property.model';
import { UserModel } from 'src/app/models/security/user.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.css']
})
export class ListPropertyComponent implements OnInit {
  @Input('properties') properties: PropertyModel[] = [];
  isLoggedIn: Boolean = false;
  subsription: Subscription = new Subscription();
  sessionData: any;
  constructor(private service: SecurityService) { }

  ngOnInit(): void {
    this.subsription = this.service
      .getUserData()
      .subscribe((datos: UserModel) => {
        console.log(datos);
        this.sessionData = datos;
        this.isLoggedIn = datos.isLogged;
      });
  }

}
