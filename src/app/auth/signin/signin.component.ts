import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceAuth } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private serviceAuth: ServiceAuth) { }

  ngOnInit() {
  	this.signinForm = new FormGroup({
  		'sigEmail': new FormControl(null),
  		'sigPw': new FormControl(null)
  	})
  }

  onSubmit(){
	// console.log(this.signinForm);
    const email = this.signinForm.value.sigEmail;
    const passoword = this.signinForm.value.sigPw;
    this.serviceAuth.onSignin(email,passoword);
	}
}
