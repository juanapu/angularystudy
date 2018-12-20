import { CanActivate,CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot,Route } from '@angular/router';
import { Injectable } from '@angular/core';

import { ServiceAuth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{
	constructor(private authService: ServiceAuth){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
		return this.authService.onCheckToken();  // have token exist: true, no token exist: false
	}

	canLoad(route: Route): boolean{
		return this.authService.onCheckToken();	
	}
}
