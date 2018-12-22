import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EditComponent } from './edit/edit.component';
import { SListComponent } from './list/list.component';
import { Ingredient } from '../../models/ingredient.model';
import { ServiceIngredients } from '../../services/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 // ingredients: Ingredient[];
 shoppingListState: Observable<{ingredients: Ingredient[]}>;

 constructor(private serviceIngredients: ServiceIngredients, 
 	private store: Store<{shoppingList:{ingredients: Ingredient[]}}>){ }

 ngOnInit(){

 	this.shoppingListState = this.store.select('shoppingList');

 	// this.ingredients = this.serviceIngredients.ingredients;
 	// const _this = this;

 	// this.ingredients=this.serviceIngredients.getIngredients();

 	// this.serviceIngredients.ingredientsChange
 	//    .subscribe(
 	// 		(val: Ingredient[])=>{
 	// 			_this.ingredients = val;
 	// 		}
 	// 	)
 }

}
