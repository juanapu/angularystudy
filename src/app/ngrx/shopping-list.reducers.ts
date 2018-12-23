import { Action } from '@ngrx/store';
import { Ingredient } from '../models/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';


export interface AppState {
	shopplingList: State;
}

export interface State {
	ingredients: Ingredient[];
	selectedIngredient: number;
}

const initialState = {
	ingredients: [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes',5)
	],
	selectedIngredient: -1
}

export function shoppingListReducer( state = initialState, action: ShoppingListActions.ShoppingListActions) {
	switch(action.type){
		case ShoppingListActions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients,action.payload]
			};
		case ShoppingListActions.ADD_INGREDIENTS:
			return {
				...state,
				ingredients: [...state.ingredients, ...action.payload]
			};
		case ShoppingListActions.SELECT_INGREDIENT:
			return {
				...state,
				selectedIngredient: action.payload	
			};
		case ShoppingListActions.UPDATE_INGREDIENT:
			return {
				...state,
				ingredients: action.payload.ingredients,
				selectedIngredient: action.payload.selectedIngredient
			}
		default:
			return state;
	}
}

