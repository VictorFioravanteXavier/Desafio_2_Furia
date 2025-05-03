import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

  canActivate(
    childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot,
  ): boolean | UrlTree {
    if (!sessionStorage.getItem('token')) {
      return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
    } else {
      return true;
    }
  }
}
