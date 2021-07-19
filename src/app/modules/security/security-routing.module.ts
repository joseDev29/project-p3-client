import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate:[UnauthenticatedGuard]
  
},
{
  path: 'logout',
  component: LogoutComponent
 
},
{
  path: 'reset-password',
  component: ResetPasswordComponent
  
},
{
  path: 'change-password',
  component: ChangePasswordComponent
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
