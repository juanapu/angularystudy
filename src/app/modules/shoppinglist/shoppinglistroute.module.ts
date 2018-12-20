
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from '../../appcom/shopping-list/shopping-list.component';

const shoppinglistRoutes: Routes = [
	{ path: '', component: ShoppingListComponent}
]

@NgModule({
	imports: [
		RouterModule.forChild(shoppinglistRoutes)
	],
	exports: [ RouterModule ]	
})

export class ShoppinglistRoutesModule {
}