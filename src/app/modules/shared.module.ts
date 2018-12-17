import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';


import { DropdownbtnComponent } from '../publiccom/dropdownbtn/dropdownbtn.component';


@NgModule({
	declarations:[
		DropdownbtnComponent
	],
	exports: [
		DropdownbtnComponent,
	    ReactiveFormsModule,
	    FormsModule
	]
})
export class SharedModule{}