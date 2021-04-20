import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './public/master-page/master-page.component';
import { FooterComponent } from './public/shared-components/footer/footer.component';

const routes: Routes = [
  {
    path: 'home',
    component: MasterPageComponent,
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
export class AppRoutingModule {}
