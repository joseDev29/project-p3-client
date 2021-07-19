import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedAdminGuard } from './guards/authenticated-admin.guard';

const routes: Routes = [
  {
    path: 'project',
    loadChildren: () =>
      import('./modules/project/project.module').then((m) => m.ProjectModule),
  },
  {
    path: 'request',
    loadChildren: () =>
      import('./modules/request/request.module').then((m) => m.RequestModule),
  },
  {
    path: 'security',
    loadChildren: () =>
      import('./modules/security/security.module').then(
        (m) => m.SecurityModule
      ),
  },
  {
    path: 'parameters',
    loadChildren: () =>
      import('./modules/parameters/parameters.module').then(
        (m) => m.ParametersModule
      ),
      canActivate:[AuthenticatedAdminGuard]
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./modules/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: '**',
    redirectTo: 'project/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
