import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  appForm : FormGroup;
  constructor(
    public router: Router,
    public auth: AuthService,
    public token: TokenService
  ) { }

  ngOnInit() {
    this.appForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })

    
  }

  onSubmit(){
    this.auth.userLogin(this.appForm.value).subscribe
    (
      (res)=> {
         this.handleToken(res.access_token);
         this.auth.changeAuthStatus(true);
         this.router.navigateByUrl('/books');
      }
    )
  }

  handleToken(token){
    this.token.handle(token);
    
  }

 

}
