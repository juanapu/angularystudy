import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from '../appcom/recipe/recipe.component';
import { ShoppingListComponent } from '../appcom/shopping-list/shopping-list.component';
import { DetailComponent } from '../appcom/recipe/detail/detail.component';
import { DetailStartComponent } from '../appcom/recipe/detail-start/detail-start.component';
import { DetailNewComponent } from '../appcom/recipe/detail-new/detail-new.component';
import { DetailEditComponent } from '../appcom/recipe/detail-edit/detail-edit.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { AuthGuard } from '../services/auth-guard.service';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: RecipeComponent,children: [
	    { path: '', component: DetailStartComponent, pathMatch: 'full',data:{'addIngredients': false}},
		{ path: 'new', component: DetailNewComponent,data:{'addIngredients': true}, canActivate: [AuthGuard] },
		{ path: ':id', component: DetailComponent},
		{ path: ':id/edit',component: DetailEditComponent, canActivate: [AuthGuard] }
	]},
	{ path: 'shoppinglist', component: ShoppingListComponent},
	{ path: 'signup', component: SignupComponent},
	{ path: 'signin', component: SigninComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [ RouterModule ]
})

export class RoutingModule {

}
