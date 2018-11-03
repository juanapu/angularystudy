import { Component, OnInit, OnDestroy,ViewChild,EventEmitter,Output } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ServiceIngredients } from '../../../services/ingredients.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit,OnDestroy {

  @ViewChild('formvalue') formvalue: NgForm;

  /* define variables */
  statusEdit: boolean = false; /* define status = edit or not
                                   statusEdit = true -> show Edit button, hide add button
                                   statusEdit = false -> show add button hide Edit button
                                   select an item -> statusEdit = true, 
                                   click Edit button -> statusEdit = false
                              */
  selectedIngredient: Ingredient;
  selectedIndex: number;
  subscribe: Subscription;

  constructor(private serviceIngredient: ServiceIngredients) { }

  ngOnInit() {
    
    const _this = this;
    this.serviceIngredient.statusEdit
      .subscribe(
          (val: boolean)=>{
              _this.statusEdit = val;
          }
        );

    this.subscribe = this.serviceIngredient.selectedIngredients
        .subscribe(
          (val: number)=>{
            if(val!==null){
                _this.selectedIndex = val;
                _this.selectedIngredient = _this.serviceIngredient.ingredients[val];
                _this.formvalue.setValue({
                  name: _this.selectedIngredient.name,
                  amount: _this.selectedIngredient.number
                });
            }
          }
        );

  }

  onSubmit(form: NgForm){
  	const addIngredient = new Ingredient(form.value.name,form.value.amount);
    if(this.statusEdit){
      this.serviceIngredient.onUpdate(addIngredient, this.selectedIndex);
      this.serviceIngredient.selectedIngredients.emit(null); // remove all selectedIngredients
    }else{
      this.serviceIngredient.onAdd(addIngredient,this.statusEdit);
    }
  }

  onDelete(){
    this.serviceIngredient.onDelete(this.selectedIndex);
    this.onClear();
  }

  onClear(){
    this.formvalue.reset();
    this.serviceIngredient.statusEdit.next(false);
    this.serviceIngredient.selectedIngredients.emit(null);
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
