import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceRecipes } from './recipes.service';
import { ServiceAuth } from './auth.service';

@Injectable()
export class ServerService{
	constructor(private http: Http, 
		private serviceRecipes: ServiceRecipes,
		private serviceAuth: ServiceAuth){ }
    
    serverSavedata(){
    	const data = this.serviceRecipes.onGet();
    	const token = this.serviceAuth.onGetToken();
    	return this.http.put('https://udemy-study-angular-fbb36.firebaseio.com/recipes.json?auth='+token,data);
    }

    serverFetchdata(){
    	const token = this.serviceAuth.onGetToken();
    	return this.http.get('https://udemy-study-angular-fbb36.firebaseio.com/recipes.json?auth='+token); 
    }

}