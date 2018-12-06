import { EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';


export class ServiceRecipes {

  recipes: Recipe[ ] = [
  	new Recipe(
  		'A test recipe',
  		'this is a simple test 1', 
  		'http://bdfjade.com/data/out/115/6189945-cute-images.gif',
  		[
  		  new Ingredient('pear',5),
  		  new Ingredient('rice',1),
  		  new Ingredient('sugar',10)
  		]
  		),
	new Recipe(
		'A test recipe',
		'this is a simple test 2', 
		'http://bdfjade.com/data/out/115/6189945-cute-images.gif',
		[
		  new Ingredient('orange',5),
  		  new Ingredient('sweet rice',1),
  		  new Ingredient('salt',10)
		]
		)
  ];

    recipesChanged = new Subject<Recipe[]>();


  onAdd(val: Recipe){
    this.recipes.push(val);
    this.recipesChanged.next(this.recipes.slice());
  }

  onEdit(val: Recipe, index: number){
    this.recipes[index] = val;
    this.recipesChanged.next(this.recipes.slice());
  }

  onUpdata(val: Recipe[]){
    this.recipes = val;
    this.recipesChanged.next(this.recipes.slice());
  }

  onGet(){
  return this.recipes.slice();
  }

}