import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IntranetService } from '../services/intranet.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
      private _loginService: IntranetService,
      private _router: Router){
  
    }
    canActivate():any{
        if(!this._loginService.isAuthenticated()){
            this._router.navigate(['/login']);
            return false;
        }
  
        return true;
    }
  
}
