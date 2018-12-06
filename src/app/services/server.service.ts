import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceRecipes } from './recipes.service';

@Injectable()
export class ServerService{
	constructor(private http: Http, private serviceRecipes: ServiceRecipes){ }
    
    serverSavedata(){
    	const data = this.serviceRecipes.onGet();
    	return this.http.put('https://udemy-study-angular-fbb36.firebaseio.com/recipes.json',data);
    }

    serverFetchdata(){
    	return this.http.get('https://udemy-study-angular-fbb36.firebaseio.com/recipes.json') 
    }

}