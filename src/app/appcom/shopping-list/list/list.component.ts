import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../../ngrx/shopping-list.actions';
import * as ShoppingListReducer from '../../../ngrx/shopping-list.reducers';

import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ServiceIngredients } from '../../../services/ingredients.service';


@Component({
  selector: 'app-s-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class SListComponent implements OnInit {
	@Input() ingredient: Ingredient;
	@Input() indexNum: number;

	selectedIngredients: number;

  constructor(private serviceIngredients: ServiceIngredients,
	private store: Store<ShoppingListReducer.AppState>) { }

  ngOnInit() {

		 // this.serviceIngredients.selectedIngredients
		 // 	.subscribe(
		 // 			(val: number)=>{
		 // 				 this.selectedIngredients = val;

		 // 			}
		 // 		);


		  this.store.select('shoppingList')
		    .subscribe(
		 		data => {
		 			this.selectedIngredients = data.selectedIngredient;
		 		}
		 	)
	}

  onSelectedIngredient(){
  	// this.serviceIngredients.selectedIngredients.emit(this.indexNum);
  	this.store.dispatch(new ShoppingListActions.SelectIngredient(this.indexNum));
  	this.serviceIngredients.onChangeStatusEdit();
  }

}
