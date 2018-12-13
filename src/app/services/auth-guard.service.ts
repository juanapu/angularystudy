import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { ServiceAuth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
	constructor(private authService: ServiceAuth){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
		return this.authService.onCheckToken();
	}
}