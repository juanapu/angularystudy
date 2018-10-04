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

  constructor(private serviceIngredients: ServiceIngredients) { }

  ngOnInit() {
		 this.serviceIngredients.selectedIngredients
		 	.subscribe(
		 			(val: number)=>{
		 				 this.selectedIngredients = val;
		 			}
		 		);
	}

  onSelectedIngredient(){
  	this.serviceIngredients.selectedIngredients.emit(this.indexNum);
  	this.serviceIngredients.onChangeStatusEdit();
  }

}
