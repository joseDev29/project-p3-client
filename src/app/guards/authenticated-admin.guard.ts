import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../config/service-config';
import { SecurityService } from '../services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedAdminGuard implements CanActivate {
  constructor(
    private service: SecurityService,
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(ServiceConfig.adminUserRol);

    if (this.service.sessionExists() && this.service.isUserRol(ServiceConfig.adminUserRol)) {
      return true;
    } else {
      this.router.navigate(["/securtity/login"]);
      return false;
    }
  }
}
