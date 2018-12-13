import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './modules/route.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './appcom/header/header.component';
import { RecipeComponent } from './appcom/recipe/recipe.component';
import { ListComponent } from './appcom/recipe/list/list.component';
import { DetailComponent } from './appcom/recipe/detail/detail.component';
import { EditComponent } from './appcom/shopping-list/edit/edit.component';
import { ShoppingListComponent } from './appcom/shopping-list/shopping-list.component';
import { SListComponent } from './appcom/shopping-list/list/list.component';
import { ServiceIngredients } from './services/ingredients.service';
import { ServiceRecipes } from './services/recipes.service';
import { ServerService } from './services/server.service';
import { ServiceAuth } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { DropdownbtnComponent } from './publiccom/dropdownbtn/dropdownbtn.component';
import { DetailStartComponent } from './appcom/recipe/detail-start/detail-start.component';
import { DetailNewComponent } from './appcom/recipe/detail-new/detail-new.component';
import { DetailEditComponent } from './appcom/recipe/detail-edit/detail-edit.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingListComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    SListComponent,
    DropdownbtnComponent,
    DetailStartComponent,
    DetailNewComponent,
    DetailEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [ServiceIngredients,ServerService,ServiceRecipes,ServiceAuth,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
