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
  private route: ActivatedRoute;
  project: ProjectModel;
  blocks: BlockModel[];
  properties: PropertyModel[];

  constructor(private publicProjectService: PublicProjectService) {}

  ngOnInit(): void {
    const id = this.route.params['id'];

    this.getProject(id);
    this.getBlocks(id);
  }

  getProject(id: string) {
    this.publicProjectService.getProjectById(id).subscribe(
      (project) => (this.project = project),
      (err) => console.log
    );
  }

  getBlocks(id: string) {
    this.publicProjectService.getBlocksByProjectId(id).subscribe(
      (blocks) => (this.blocks = blocks),
      (err) => console.log
    );
  }

  getPropertiesByBlock(blockId: string) {
    this.publicProjectService
      .getPropertiesByBlockId(blockId)
      .subscribe(
        (properties) => ((this.properties = properties), (err) => console.log)
      );
  }
}
