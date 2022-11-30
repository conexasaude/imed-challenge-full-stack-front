import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    
    return this.checkLogin(url);
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {  }

  checkLogin(url: string): boolean {
    if(this.authService.getUserLogedIn()){
      return true;
    }

    // if (this.tokenService.getRefreshToken()) {
    //   return true;
    // }

    this.authService.redirectUrl = url;

    this.router.navigate(['/login']).then(_ => false);
    return false;
  }
  
}
