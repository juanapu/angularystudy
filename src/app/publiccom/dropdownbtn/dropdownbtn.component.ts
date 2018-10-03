import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdownbtn',
  templateUrl: './dropdownbtn.component.html',
  styleUrls: ['./dropdownbtn.component.css']
})
export class DropdownbtnComponent implements OnInit {
  btnshow: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleShow(){
  	this.btnshow = !this.btnshow;
  }

}
