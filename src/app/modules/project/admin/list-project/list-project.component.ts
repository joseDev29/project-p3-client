import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/security/user.model';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects: any = [];
  page: number = 1;
  isLoggedIn: Boolean = false;
  subsription: Subscription = new Subscription();
  sessionData: any;
  constructor(private projectService: AdminProjectService, private service: SecurityService) { }
  filterPost = '';
  config: PaginationInstance = {
    itemsPerPage: 11,
    currentPage: 1
  };
  ngOnInit(): void {
    this.projectService.getAllRecords().subscribe(
      (projects) => {
        this.projects = projects;
      },
      (err) => console.log
    );
    this.subsription = this.service
      .getUserData()
      .subscribe((datos: UserModel) => {
        console.log(datos);
        this.sessionData = datos;
        this.isLoggedIn = datos.isLogged;
      });
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

}
