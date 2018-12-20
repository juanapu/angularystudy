import { HttpEvent, HttpHandler,HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ServiceAuth } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
	constructor(public serviceAuth: ServiceAuth){}

	intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
		// console.log('Intercepted',req);

    	const token = this.serviceAuth.onGetToken();

		const copiedReq = req.clone({params: req.params.set('auth',token)});
		return next.handle(copiedReq);
	}
}