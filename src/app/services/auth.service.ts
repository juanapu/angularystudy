import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ServiceAuth{
	token:string = null;

	constructor(private router: Router){}

	onSignup(email:string, password:string){
		firebase.auth().createUserWithEmailAndPassword(email,password)
			.catch(
					error=>{
						console.log(error);
					}
				)
	}

	onSignin(email:string, password:string){
		firebase.auth().signInWithEmailAndPassword(email,password)
			.then(
					reponse =>{
						this.onGetToken();
						this.router.navigate(['/']);
					}
				)
			.catch(
					error=>{
						console.log(error);
					}
				)
	}

	onLogout(){
		firebase.auth().signOut();
		this.token = null;
	}

	onGetToken(){
		firebase.auth().currentUser.getIdToken()
			.then(
					(token: string)=>{
						this.token = token;
					}
				)
		return this.token;
	}

	onCheckToken(){
		return this.token != null;
	}

}