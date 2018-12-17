
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from '../../appcom/recipe/recipe.component';
import { DetailStartComponent } from '../../appcom/recipe/detail-start/detail-start.component';
import { DetailNewComponent } from '../../appcom/recipe/detail-new/detail-new.component';
import { DetailComponent } from '../../appcom/recipe/detail/detail.component';
import { DetailEditComponent } from '../../appcom/recipe/detail-edit/detail-edit.component';
import { AuthGuard } from '../../services/auth-guard.service';


const recipeRoutes: Routes = [
	{ path: '', component: RecipeComponent,children: [
	    { path: '', component: DetailStartComponent, pathMatch: 'full',data:{'addIngredients': false}},
		{ path: 'new', component: DetailNewComponent,data:{'addIngredients': true}, canActivate: [AuthGuard] },
		{ path: ':id', component: DetailComponent},
		{ path: ':id/edit',component: DetailEditComponent, canActivate: [AuthGuard] }
	]}
]


@NgModule({
	imports: [
		RouterModule.forChild(recipeRoutes)
	],
	exports: [ RouterModule ]	
})

export class RecipeRouteModule {
}