import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRecipes } from '../../../services/recipes.service';
import { Recipe } from '../../../models/recipe.model';
import { Ingredient } from '../../../models/ingredient.model';


@Component({
  selector: 'app-detail-edit',
  templateUrl: './detail-edit.component.html',
  styleUrls: ['./detail-edit.component.css']
})
export class DetailEditComponent implements OnInit {
	newRecipeForm: FormGroup;

  constructor(
    private serviceRecipes: ServiceRecipes,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {

   const currentId = this.route.snapshot.params.id;
  const	currentRecipe = this.serviceRecipes.recipes[currentId];
  const _this = this;

  	this.newRecipeForm = new FormGroup({
  		'nameInput': new FormControl(currentRecipe.name, Validators.required),
  		'imgInput': new FormControl(currentRecipe.imagePath, Validators.required),
  		'desInput': new FormControl(currentRecipe.desc, Validators.required),
  		'ingredients': new FormArray([])
  	});

  	currentRecipe.ingredientArr.forEach((ingre)=>{
  		_this.onAddIngredients(ingre);
  	});

  }


  onAddIngredients(ingre: Ingredient | null){
  	const formgroup = new FormGroup({
  		'name': new FormControl(ingre?ingre.name:null,Validators.required),
  		'number': new FormControl(ingre?ingre.number:null,[Validators.required,Validators.pattern('^[1-9]\d*$')])
  	});
  	// const formgroup = new FormControl(null);
  	(<FormArray>this.newRecipeForm.get('ingredients')).push(formgroup);
  }

  onAdd(){
  	this.onAddIngredients(null);
  }

  onDeleteIngredient(index){
    (<FormArray>this.newRecipeForm.get('ingredients')).removeAt(index);
  }


  onCancel(){
    this.newRecipeForm.reset();
    this.router.navigate(['/home']);  
  }

   onSubmit(){
    const val = this.newRecipeForm.value;
    const currentId = this.route.snapshot.params.id;

    const newIngredient = new Recipe(
       val.nameInput,
       val.desInput,
       val.imgInput,
       val.ingredients
      );
    this.serviceRecipes.onEdit(newIngredient,currentId);
  }

}
