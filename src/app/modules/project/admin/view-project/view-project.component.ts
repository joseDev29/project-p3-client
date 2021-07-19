import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockModel } from 'src/app/models/project/block.model';
import { ProjectModel } from 'src/app/models/project/project.model';
import { PropertyModel } from 'src/app/models/project/property.model';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';

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

  constructor(
    private ProjectService: AdminProjectService,
    private route: ActivatedRoute) {
    this.projectId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getProject();
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
        }, (err) => console.log);
  }

  changeBlock(block: BlockModel) {
    this.activeBlock = block;
    this.getPropertiesByBlockId(this.activeBlock.id);
  }

}