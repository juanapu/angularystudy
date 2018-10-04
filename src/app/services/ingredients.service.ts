import { Ingredient } from '../models/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ServiceIngredients{
	ingredients: Ingredient[ ] = [
		new Ingredient('apple',5)
	];

	ingredientsChange = new Subject<Ingredient[]>();

	selectedIngredients =  new EventEmitter<number>();
	statusEdit = new Subject();

   onAdd(val: Ingredient | Array<Ingredient>,statusEdit: boolean){

   		if(statusEdit){  // statusEdit = true; update item;
   			// this.selectedIngredients = null;
   			this.statusEdit.next(false);			
   		}else{  // statusEdit = false; add new item
		   	   if(val instanceof Array){
				  	this.ingredients.push(...val);
		   	   }else{
				  	this.ingredients.push(val);
		   	   }
		   	   this.changeIngredients();
   		}
	}
	getIngredients(){
		return this.ingredients;
	}

	changeIngredients(){
	 this.ingredientsChange.next(this.ingredients.slice());
	}

	onChangeStatusEdit(){
		this.statusEdit.next(true);
	}

	onUpdate(val: Ingredient, index: number){
		this.ingredients[index] = val;
		this.changeIngredients();
		this.statusEdit.next(false);			
	}

	onDelete(index:number){
		this.ingredients.splice(index,1);
		this.changeIngredients();
		this.statusEdit.next(false);
	}

}