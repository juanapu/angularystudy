import { Action } from '@ngrx/store';

import { Ingredient } from '../models/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';

export class AddIngredient implements Action {
	readonly type = ADD_INGREDIENT;
	constructor(public payload: Ingredient){}
}

export class AddIngredients implements Action {
	readonly type = ADD_INGREDIENTS;
	constructor(public payload: Ingredient[]){}
}

export class SelectIngredient implements Action {
	readonly type = SELECT_INGREDIENT;
	constructor(public payload: number){}
}

export class UpdateIngredient implements Action {
	readonly type = UPDATE_INGREDIENT;
	constructor(public payload: {ingredients:Ingredient[],selectedIngredient:number}){}
}

export type ShoppingListActions = AddIngredient | AddIngredients | SelectIngredient | UpdateIngredient;
