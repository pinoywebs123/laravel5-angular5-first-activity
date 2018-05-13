import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  private loggedIn:boolean;
  constructor(
    public auth: AuthService,
    public token : TokenService,
    public route: Router
  ){

  }

  ngOnInit(){
    this.auth.authStatus.subscribe(
      (value)=> this.loggedIn = value
    )
  }

  logout(){
    this.auth.changeAuthStatus(false);
    this.token.remove();
    this.route.navigate(['/login']);
  }
}
