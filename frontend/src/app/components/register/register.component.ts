import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  appForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.appForm = new FormGroup({
      'email': new FormControl(null),
      'name': new FormControl(null),
      'password': new FormControl(null),
      'repeat_password': new FormControl(null)
    })
  }

  onSubmit(){

  }

}
