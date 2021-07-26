import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlockModel } from 'src/app/models/project/block.model';
import { ProjectModel } from 'src/app/models/project/project.model';
import { PropertyModel } from 'src/app/models/project/property.model';
import { UserModel } from 'src/app/models/security/user.model';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  project: ProjectModel;
  blocks: BlockModel[] = [];
  properties: PropertyModel[] = [];
  projectId: string = '';
  activeBlock: BlockModel;
  chartData = {
    labels: ['Disponible', 'Vendida'],
    data: [0, 0],
    colors: ['#5497d1', '#54d188'],
  };
  isLoggedIn: Boolean = false;
  subsription: Subscription = new Subscription();
  sessionData: any;
  constructor(
    private ProjectService: AdminProjectService,
    private route: ActivatedRoute,
    private service: SecurityService) {
    this.projectId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getProject();
    this.subsription = this.service
      .getUserData()
      .subscribe((datos: UserModel) => {
        console.log(datos);
        this.sessionData = datos;
        this.isLoggedIn = datos.isLogged;
      });
  }

  getProject() {
    this.ProjectService.getProjectById(this.projectId).subscribe(
      (project) => {
        this.project = project
        this.getBlocksByProjectId();
      },
      (err) => console.log
    );
  }

  getBlocksByProjectId() {
    this.ProjectService.getBlocksByProjectId(this.projectId).subscribe(
      (blocks) => {
        this.blocks = blocks
        this.activeBlock = this.blocks[0];
        this.getPropertiesByBlockId(this.activeBlock.id);
      },
      (err) => console.log
    );

  }

  getPropertiesByBlockId(blockId: string) {
    this.ProjectService
      .getPropertiesByBlockId(blockId)
      .subscribe(
        (properties) => {
          this.properties = properties
          this.calculateChartData();
        }, (err) => console.log);
  }

  changeBlock(block: BlockModel) {
    this.activeBlock = block;
    this.getPropertiesByBlockId(this.activeBlock.id);
  }

  calculateChartData() {
    this.chartData.data=[0,0];
    this.properties.forEach((property) => {
      console.log(property);
      
      switch (property.status) {
        case 'DISPONIBLE':
          this.chartData.data[0]++;
          break;
        case 'VENDIDA':
          this.chartData.data[1]++;
          break;
        default:
          break;
      }
    });

    console.log(this.chartData);
  }
}