import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private serverService: ServerService) { };

  ngOnInit() {
  }

  onSaveServer(){
  	this.serverService.serverSavedata()
  		.subscribe(
  				(response)=>{
  					console.log(' --- check header save data ---');
  					console.log(response.json());
  				}
  			)
  }

}
