import { Component, OnInit, ViewChild, ElementRef,EventEmitter,Output } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ServiceIngredients } from '../../../services/ingredients.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('formvalue') formvalue: ElementRef;

  constructor(private serviceIngredient: ServiceIngredients) { }

  ngOnInit() {
  }

  onAdd(val){
  	const addIngredient = new Ingredient(this.formvalue.nativeElement[0].value,this.formvalue.nativeElement[1].value);
  	this.serviceIngredient.onAdd(addIngredient);
  }

}
