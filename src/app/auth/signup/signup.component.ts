import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceAuth } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private serviceAuth: ServiceAuth) { }

  ngOnInit() {
  	this.signupForm = new FormGroup({
  		'sigEmail': new FormControl(null),
  		'sigPw': new FormControl(null)
  	})
  }

  onSubmit(){
	// console.log(this.signupForm);
    const email = this.signupForm.value.sigEmail;
    const passoword = this.signupForm.value.sigPw;
    this.serviceAuth.onSignup(email,passoword);
	}


}

