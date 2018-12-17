import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './modules/route.module';
import { AuthModule } from './modules/auth/auth.module';
import { ShoppinglistModule } from './modules/shoppinglist/shoppinglist.module';
import { SharedModule } from './modules/shared.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './appcom/header/header.component';

import { ServiceIngredients } from './services/ingredients.service';
import { ServiceRecipes } from './services/recipes.service';
import { ServerService } from './services/server.service';
import { ServiceAuth } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './appcom/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    RoutingModule,
    AuthModule,
    ShoppinglistModule,
    SharedModule
  ],
  providers: [ServiceIngredients,ServerService,ServiceRecipes,ServiceAuth,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
