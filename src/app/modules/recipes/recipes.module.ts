import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRouteModule } from './reciperoute.module';
import { SharedModule } from '../shared.module';


import { RecipeComponent } from '../../appcom/recipe/recipe.component';
import { ListComponent } from '../../appcom/recipe/list/list.component';
import { DetailComponent } from '../../appcom/recipe/detail/detail.component';

import { DetailStartComponent } from '../../appcom/recipe/detail-start/detail-start.component';
import { DetailNewComponent } from '../../appcom/recipe/detail-new/detail-new.component';
import { DetailEditComponent } from '../../appcom/recipe/detail-edit/detail-edit.component';

@NgModule({
	declarations:[
	    RecipeComponent,
        ListComponent,
	    DetailComponent,
	    DetailStartComponent,
	    DetailNewComponent,
	    DetailEditComponent
	],
	imports: [
		CommonModule,
	    RecipeRouteModule,
	    SharedModule
	]
})

export class RecipesModule {}