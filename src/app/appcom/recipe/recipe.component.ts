import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Data} from '@angular/router';

import { ListComponent } from './list/list.component';
import { ServiceRecipes } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
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
    this.serviceRecipes.recipesChanged
      .subscribe(
            (data: Recipe[]) => {
              this.recipe = data;
            }
        );
    this.recipe = this.serviceRecipes.onGet();
  }

  onDetail(recipe: Recipe){
    this.detailRecipe = recipe;
  }

  onNav(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
