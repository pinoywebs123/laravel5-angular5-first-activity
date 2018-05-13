import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operator/map';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  base = 'http://127.0.0.1:8000/api/';
  constructor(public http : Http, public token: TokenService) { }

  userRegister(data: any){
    return this.http.post(this.base+'user/auth', data).map(
      (res: Response)=> {
        return res = res.json();
      },
      (err)=> err= err
    )
  }

  userLogin(data:any){
    return this.http.post(this.base+'user/login', data).map
    (
      (res: Response)=> {
        return res = res.json()
      },
      (err)=> err = err 
    )
  }

  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }

}
