import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  appForm : FormGroup;
  constructor(
    public auth: AuthService,
    public route: Router
  ) { }

  ngOnInit() {
    this.appForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'name': new FormControl(null,[Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'repeat_password': new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){
    this.auth.userRegister(this.appForm.value).subscribe(
      (res)=> {
        if(res['message'] == "success"){
          this.route.navigate(['/login']);
        }
      },
      (err)=> console.log(err)
    )
  }

}
