import { Component, OnInit, AfterViewChecked,AfterViewInit,AfterContentInit,AfterContentChecked,Input } from '@angular/core';

import { Router, ActivatedRoute, ParamMap,Params } from '@angular/router';
import { Observable } from 'rxjs';

import { ServiceRecipes } from '../../../services/recipes.service';
import { ServiceIngredients } from '../../../services/ingredients.service';
import { DropdownbtnComponent } from '../../../publiccom/dropdownbtn/dropdownbtn.component';
import { Recipe } from '../../../models/recipe.model';
import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private serviceRecipes: ServiceRecipes, 
              private serviceIngredients: ServiceIngredients,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    this.route.params
      .subscribe((param: Params)=>{
        let serverdata: Recipe[] = [];
        this.recipe = this.serviceRecipes.onGet().slice()[param.id];
      });
  }

  onToShoppingList(detailArr: Array<Ingredient>){
    this.serviceIngredients.onAdd(detailArr,false);
  }

}
