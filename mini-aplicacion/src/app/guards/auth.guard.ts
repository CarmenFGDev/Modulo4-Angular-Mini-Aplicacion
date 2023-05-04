/* import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  return true;
}; */
import {Injectable} from '@angular/core';
import { UrlTree, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }
    // logged in, so return true
    this.authService.isLogged();
    return true;
  }
}

