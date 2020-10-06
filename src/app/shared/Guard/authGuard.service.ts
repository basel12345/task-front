import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { LocalStorageService } from "../Storage/localStorage.service";

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public service: LocalStorageService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(["../../core/login"]);
      return false;
    }
    return true;
  }
}
