import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';


import { SignupComponent } from '../../auth/signup/signup.component';
import { SigninComponent } from '../../auth/signin/signin.component';


@NgModule({
	declarations:[
	    SignupComponent,
	    SigninComponent
	],
	imports: [
		SharedModule
	]
})
export class AuthModule {}