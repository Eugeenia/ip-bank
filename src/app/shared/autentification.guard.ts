import { TokensService } from './tokens.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AutentificationGuard implements CanActivate {
    
    constructor(private token: TokensService, 
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const canActivate = this.token.isAuth();
        if (!canActivate) {
            this.router.navigate(['/']);
        }

        return canActivate;
    }
}
