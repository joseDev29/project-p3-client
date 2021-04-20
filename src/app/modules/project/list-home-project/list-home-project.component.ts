import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project/project.model';
import { PublicProjectService } from 'src/app/services/project/public-project.service';

@Component({
  selector: 'app-list-home-project',
  templateUrl: './list-home-project.component.html',
  styleUrls: ['./list-home-project.component.css'],
})
export class ListHomeProjectComponent implements OnInit {
  projects: any = [];

  constructor(private publicProjectService: PublicProjectService) {}

  ngOnInit(): void {
    this.publicProjectService.getAllRecords().subscribe(
      (projects) => {
        this.projects = projects;
      },
      (err) => console.log
    );
  }
}
