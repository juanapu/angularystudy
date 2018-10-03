import { Ingredient } from '../models/ingredient.model';

export class ServiceIngredients{
	ingredients: Ingredient[ ] = [
		new Ingredient('apple',5)
	];

   onAdd(val: Ingredient | Array<Ingredient>){
   	   if(val instanceof Array){
		  	this.ingredients.push(...val);
   	   }else{
		  	this.ingredients.push(val);
   	   }
	}
}