import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './admin/create-project/create-project.component';
import { UpdateProjectComponent } from './admin/update-project/update-project.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { ListHomeProjectComponent } from './list-home-project/list-home-project.component';
import { CreateBlockComponent } from './block/admin/create-block/create-block.component';
import { UpdateBlockComponent } from './block/admin/update-block/update-block.component';
import { ListBlockComponent } from './block/admin/list-block/list-block.component';
import { CreatePropertyComponent } from './block/property/create-property/create-property.component';
import { UpdatePropertyComponent } from './block/property/update-property/update-property.component';
import { ListPropertyComponent } from './block/property/list-property/list-property.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { ProjectDescriptionPipe } from 'src/app/pipes/project-description.pipe';
import { RouterModule } from '@angular/router';
import { PublicProjectService } from 'src/app/services/project/public-project.service';

@NgModule({
  declarations: [
    CreateProjectComponent,
    UpdateProjectComponent,
    ListProjectComponent,
    ListHomeProjectComponent,
    CreateBlockComponent,
    UpdateBlockComponent,
    ListBlockComponent,
    CreatePropertyComponent,
    UpdatePropertyComponent,
    ListPropertyComponent,
    CardProjectComponent,
    ProjectDescriptionPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ListHomeProjectComponent],
})
export class ProjectModule {}
