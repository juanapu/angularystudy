import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../../services/server.service';
import { ServiceRecipes } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private serverService: ServerService,
    private serviceRecipes: ServiceRecipes,
    private router: Router,
    ) { };

  ngOnInit() {
  }

  onSaveServer(){
  	this.serverService.serverSavedata()
  		.subscribe(
  				(response)=>{
  					console.log(response.json());
  				}
  			)
  }

  onFetchServer(){
    this.serverService.serverFetchdata()
      .subscribe(
          (response: Response)=>{
            const data: Recipe[] = response.json();
            this.serviceRecipes.onUpdata(data);
            this.router.navigate(['/home']);
          }
        )
  }

}
