import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../../services/server.service';
import { ServiceRecipes } from '../../services/recipes.service';
import { ServiceAuth } from '../../services/auth.service';
import { Recipe } from '../../models/recipe.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  auth: boolean = false;
  
  constructor(
    private serverService: ServerService,
    private serviceRecipes: ServiceRecipes,
    public serviceAuth: ServiceAuth,
    private router: Router,
    ) { };

  ngOnInit() {
    // this.auth = this.serviceAuth.onCheckToken();
    // console.log(this.auth);
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

  onLogout(){
    this.serviceAuth.onLogout();
  }

}
