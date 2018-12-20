import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ServiceRecipes } from './recipes.service';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class ServerService{
	constructor(private http: HttpClient, 
		private serviceRecipes: ServiceRecipes,
		){ }
    
    serverSavedata(){
    	const data = this.serviceRecipes.onGet();
    	// return this.http.put('https://udemy-study-angular-fbb36.firebaseio.com/recipes.json?auth='+token,data);
        return this.http.put('https://udemy-study-angular-fbb36.firebaseio.com/recipes.json',data);
    }

    serverFetchdata(){
    	// return this.http.get<Recipe[]>('https://udemy-study-angular-fbb36.firebaseio.com/recipes.json?auth='+token); 
        return this.http.get<Recipe[]>('https://udemy-study-angular-fbb36.firebaseio.com/recipes.json'); 
    }

}