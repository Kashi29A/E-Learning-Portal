import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private authservice: AuthenticationService, private route: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    if(this.authservice.isAdmin()){
      return true;
    }
    else{
      alert("You don't have permission to view this page, Redirecting to home page");
      this.route.navigate(['home']);
    }
  }
  
}
