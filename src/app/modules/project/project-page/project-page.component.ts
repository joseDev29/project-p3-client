import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicProjectService } from '../../../services/project/public-project.service';
import { ProjectModel } from '../../../models/project/project.model';
import { BlockModel } from 'src/app/models/project/block.model';
import { PropertyModel } from '../../../models/project/property.model';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {

  project: ProjectModel;
  blocks: BlockModel[] = [];
  properties: PropertyModel[] = [];
  projectId: string = '';
  activeBlock: BlockModel;

  constructor(
    private publicProjectService: PublicProjectService,
    private route: ActivatedRoute) {
    this.projectId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    this.publicProjectService.getProjectById(this.projectId).subscribe(
      (project) => {
        this.project = project
        this.getBlocksByProjectId();
      },
      (err) => console.log
    );
  }

  getBlocksByProjectId() {
    this.publicProjectService.getBlocksByProjectId(this.projectId).subscribe(
      (blocks) => {
        this.blocks = blocks
        this.activeBlock = this.blocks[0];
        this.getPropertiesByBlockId(this.activeBlock.id);
      },
      (err) => console.log
    );

  }

  getPropertiesByBlockId(blockId: string) {
    this.publicProjectService
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
