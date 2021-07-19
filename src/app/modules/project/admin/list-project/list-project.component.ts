import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit{ 
projects: any = [];
page: number = 1;
constructor(private projectService:AdminProjectService ) { }
filterPost='';
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

}

onPageChange(number: number) {
  this.config.currentPage = number;
}

}
