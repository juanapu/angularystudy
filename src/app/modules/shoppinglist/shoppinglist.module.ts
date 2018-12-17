import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';


import { EditComponent } from '../../appcom/shopping-list/edit/edit.component';
import { ShoppingListComponent } from '../../appcom/shopping-list/shopping-list.component';
import { SListComponent } from '../../appcom/shopping-list/list/list.component';


@NgModule({
	declarations:[
	    EditComponent,
	    ShoppingListComponent,
	    SListComponent
	],
	imports: [
		CommonModule,
	    SharedModule
	]
})

export class ShoppinglistModule {}