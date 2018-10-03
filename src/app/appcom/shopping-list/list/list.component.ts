import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-s-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class SListComponent implements OnInit {
	@Input() ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

}
