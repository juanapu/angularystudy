import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddingstateService {
	addIngredients = new EventEmitter<boolean>();
}
