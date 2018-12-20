import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ServiceRecipes } from '../../../services/recipes.service';
import { Recipe } from '../../../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-new',
  templateUrl: './detail-new.component.html',
  styleUrls: ['./detail-new.component.css']
})
export class DetailNewComponent implements OnInit {

	newRecipeForm: FormGroup;

  constructor(
    private serviceRecipes: ServiceRecipes,
    private route: ActivatedRoute,
    private router: Router,
    private Location: Location ) { }

  ngOnInit() {

  	this.newRecipeForm = new FormGroup({
  		'nameInput': new FormControl(null, Validators.required),
  		'imgInput': new FormControl(null, Validators.required),
  		'desInput': new FormControl(null, Validators.required),
  		'ingredients': new FormArray([])
  	});

  }

  onAdd(){
  	this.onAddIngredients();
  }

  onAddIngredients(){
  	const formgroup = new FormGroup({
  		'name': new FormControl(null,Validators.required),
  		'number': new FormControl(null,[Validators.required,Validators.pattern('^[1-9]\d*$')])
  	});
  	// const formgroup = new FormControl(null);
  	(<FormArray>this.newRecipeForm.get('ingredients')).push(formgroup);
  }

  onDeleteIngredient(index){
    (<FormArray>this.newRecipeForm.get('ingredients')).removeAt(index);
  }

  onSubmit(){
    const val = this.newRecipeForm.value;
    const newIngredient = new Recipe(
       val.nameInput,
       val.desInput,
       val.imgInput,
       val.ingredients
      );
    this.serviceRecipes.onAdd(newIngredient);
  }

  onCancel(){
    this.newRecipeForm.reset();
    this.router.navigate(['/home']);
  }

  getControl(){
    return this.newRecipeForm.get('ingredients');
  }

}
