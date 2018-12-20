
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RoutingModule } from './route.module';
import { SharedModule } from './shared.module';



import { HeaderComponent } from '../appcom/header/header.component';
import { HomeComponent } from '../appcom/home/home.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ServiceIngredients } from '../services/ingredients.service';
import { ServiceRecipes } from '../services/recipes.service';
import { ServerService } from '../services/server.service';
import { ServiceAuth } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';

import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { ResponseInterceptor } from '../interceptors/response.interceptor';


@NgModule({
	declarations:[
	    HeaderComponent,
	    HomeComponent,
	],
	imports: [
        BsDropdownModule.forRoot(),
		CommonModule,
	    RoutingModule,
        SharedModule,

	],
	exports: [
		HeaderComponent,
		RoutingModule
	],
    providers: [
	  	ServiceIngredients,
	  	ServerService,
	  	ServiceRecipes,
	  	ServiceAuth,
	  	AuthGuard,
	  	{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
	  	{provide: HTTP_INTERCEPTORS,useClass:ResponseInterceptor,multi:true}
	],
})

export class CoreModule {}