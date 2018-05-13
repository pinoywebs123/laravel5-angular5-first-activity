import { FormGroup, FormControl } from '@angular/forms';
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
    public router: Router
  ) { }

  ngOnInit() {
    this.appForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.appForm.value);
  }

  onRegister(){
    
  }

}
