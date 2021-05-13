import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { CreateProjectComponent } from './admin/create-project/create-project.component';
import { UpdateProjectComponent } from './admin/update-project/update-project.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'list',
        component: ListProjectComponent,
      },
      {
        path: 'creation',
        component: CreateProjectComponent,
      },
      {
        path: 'edition/:id',
        component: UpdateProjectComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
  {
    path: 'home',
    component: MasterPageComponent,
  },
  {
    path: ':id',
    component: ProjectPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
