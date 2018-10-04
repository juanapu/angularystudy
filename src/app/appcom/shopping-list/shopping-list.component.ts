import { Component, OnInit } from '@angular/core';
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
 ingredients: Ingredient[];

 constructor(private serviceIngredients: ServiceIngredients){ }

 ngOnInit(){
 	// this.ingredients = this.serviceIngredients.ingredients;
 	const _this = this;

 	this.ingredients=this.serviceIngredients.getIngredients();

 	this.serviceIngredients.ingredientsChange
 	   .subscribe(
 			(val: Ingredient[])=>{
 				_this.ingredients = val;
 			}
 		)
 }


}
