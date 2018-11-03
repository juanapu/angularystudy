import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Data} from '@angular/router';

import { ListComponent } from './list/list.component';
import { ServiceRecipes } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [ServiceRecipes]
})
export class RecipeComponent implements OnInit {
  recipe: Recipe[];

  detailRecipe: Recipe;

  constructor(
    private serviceRecipes: ServiceRecipes,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.recipe = this.serviceRecipes.recipes;
  }

  onDetail(recipe: Recipe){
    this.detailRecipe = recipe;
  }

  onNav(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
