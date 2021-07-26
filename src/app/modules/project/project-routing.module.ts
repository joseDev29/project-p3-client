import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { CreateProjectComponent } from './admin/create-project/create-project.component';
import { UpdateProjectComponent } from './admin/update-project/update-project.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { ListBlockComponent } from './block/admin/list-block/list-block.component';
import { CreateBlockComponent } from './block/admin/create-block/create-block.component';
import { UpdateBlockComponent } from './block/admin/update-block/update-block.component';
import { CreatePropertyComponent } from './block/property/create-property/create-property.component';
import { UpdatePropertyComponent } from './block/property/update-property/update-property.component';
import { ListPropertyComponent } from './block/property/list-property/list-property.component';
import { AuthenticatedAdminGuard } from 'src/app/guards/authenticated-admin.guard';
import { ViewProjectComponent } from './admin/view-project/view-project.component';
import { PublicClientRequestComponent } from './public-client-request/public-client-request.component';
import { AuthenticatedUserGuard } from 'src/app/guards/authenticated-user.guard';
import { AuthenticatedBothGuard } from 'src/app/guards/authenticated-both.guard';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'list',
        component: ListProjectComponent,
        canActivate: [AuthenticatedBothGuard]
      },
      {
        path: 'creation',
        component: CreateProjectComponent,
        canActivate: [AuthenticatedAdminGuard]

      },
      {
        path: 'edition/:id',
        component: UpdateProjectComponent,
        canActivate: [AuthenticatedAdminGuard]

      },
      {
        path: 'view/:id',
        component: ViewProjectComponent,
        canActivate: [AuthenticatedBothGuard]

      },
      {
        path: 'block',
        children: [
          {
            path: 'creation',
            component: CreateBlockComponent,
            canActivate: [AuthenticatedAdminGuard]

          },
          {
            path: 'edition/:id',
            component: UpdateBlockComponent,
            canActivate: [AuthenticatedAdminGuard]

          },
          {
            path: 'list',
            component: ListBlockComponent,
            canActivate: [AuthenticatedBothGuard]
          },
          {
            path: 'property',
            children: [
              {
                path: 'creation',
                component: CreatePropertyComponent,
                canActivate: [AuthenticatedAdminGuard]

              },
              {
                path: 'edition/:id',
                component: UpdatePropertyComponent,
                canActivate: [AuthenticatedAdminGuard]

              },
              {
                path: 'list',
                component: ListPropertyComponent,
                canActivate: [AuthenticatedBothGuard]
              },
              {
                path: '**',
                redirectTo: 'list',
              },
            ],
          },
          {
            path: '**',
            redirectTo: 'list',
          },
        ],
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
    path: 'public-request/:id',
    component: PublicClientRequestComponent,
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
export class ProjectRoutingModule { }
