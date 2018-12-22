import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../services/auth-guard.service';

import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { HomeComponent } from '../appcom/home/home.component';
import { ShoppingListComponent } from '../appcom/shopping-list/shopping-list.component';

const appRoutes: Routes = [
	// { path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: '', redirectTo: '/home', pathMatch:'full'},
	{ path: 'home', component: HomeComponent},
	// { path: 'shoppinglist', loadChildren: './shoppinglist/shoppinglist.module#ShoppinglistModule', canLoad: [AuthGuard]},
	{ path: 'shoppinglist', component: ShoppingListComponent},
	{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] },
	{ path: 'signup', component: SignupComponent},
	{ path: 'signin', component: SigninComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [ RouterModule ]
})

export class RoutingModule {

}
