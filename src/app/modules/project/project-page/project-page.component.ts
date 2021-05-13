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

  constructor(
    private publicProjectService: PublicProjectService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];

    this.getProject(id);
    this.getBlocks(id);
    this.getPropertiesByBlock(id);



  }

  getProject(id: string) {
    this.publicProjectService.getProjectById(id).subscribe(
      (project) => {
        this.project = project
        console.log(project);
        
        this.getBlocks(id);
      },
      (err) => console.log
    );
  }

  getBlocks(id: string) {
    this.publicProjectService.getBlocksByProjectId(id).subscribe(
      (blocks) => {
        this.blocks = blocks
        console.log(blocks);
        console.log(this.blocks);
        
        this.getPropertiesByBlock(this.blocks[0].id);
      },
      (err) => console.log
    );

  }

  getPropertiesByBlock(blockId: string) {
    this.publicProjectService
      .getPropertiesByBlockId(blockId)
      .subscribe(
        (properties) => {
          this.properties = properties
          console.log(properties);
          console.log(this.properties);
          
        }, (err) => console.log);
  }
}
