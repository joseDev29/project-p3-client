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
import { ProjectPageComponent } from './project-page/project-page.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ListPublicPropertyComponent } from './block/property/list-public-property/list-public-property.component';
import { PublicBlockSelectorComponent } from './block/public-block-selector/public-block-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewProjectComponent } from './admin/view-project/view-project.component';
import { PublicClientRequestComponent } from './public-client-request/public-client-request.component';

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
    ProjectPageComponent,
    MasterPageComponent,
    ListPublicPropertyComponent,
    PublicBlockSelectorComponent,
    ViewProjectComponent,
    PublicClientRequestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [],
})
export class ProjectModule {}
