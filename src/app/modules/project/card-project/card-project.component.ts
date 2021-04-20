import { Component, Input } from '@angular/core';
import { ProjectModel } from 'src/app/models/project/project.model';

@Component({
  selector: 'app-card-project',
  templateUrl: 'card-project.component.html',
  styleUrls: ['card-project.component.css'],
})
export class CardProjectComponent {
  @Input('project') project: ProjectModel;
}
