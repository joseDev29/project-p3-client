import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityRoutingModule } from './modules/security/security-routing.module';
import { MasterPageComponent } from './public/master-page/master-page.component';
import { FooterComponent } from './public/shared-components/footer/footer.component';

const routes: Routes = [
  {
    path: 'home',
    component: MasterPageComponent,
  },
  {
    path: 'security',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
