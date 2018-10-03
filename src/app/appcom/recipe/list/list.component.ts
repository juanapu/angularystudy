import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../../models/recipe.model';
import { ServiceRecipes } from '../../../services/recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 @Input() recipe: Recipe;
 @Input() index: number;

  constructor(private serviceRecipes: ServiceRecipes) { }

  ngOnInit() {
  }
}
