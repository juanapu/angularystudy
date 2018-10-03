import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from '../appcom/recipe/recipe.component';
import { ShoppingListComponent } from '../appcom/shopping-list/shopping-list.component';
import { DetailComponent } from '../appcom/recipe/detail/detail.component';
import { DetailStartComponent } from '../appcom/recipe/detail-start/detail-start.component';
import { DetailNewComponent } from '../appcom/recipe/detail-new/detail-new.component';
import { DetailEditComponent } from '../appcom/recipe/detail-edit/detail-edit.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: RecipeComponent, children: [
	    { path: '', component: DetailStartComponent, pathMatch: 'full'},
		{ path: 'new', component: DetailNewComponent},
		{ path: ':id', component: DetailComponent},
		{ path: ':id/edit',component: DetailEditComponent }
	]},
	{ path: 'shoppinglist', component: ShoppingListComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [ RouterModule ]
})

export class RoutingModule {

}
