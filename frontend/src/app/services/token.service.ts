import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }


  handle(token){
    this.set(token);
    
  }

  set(token){
    return localStorage.setItem("token", token);
  }

  get(){
     return localStorage.getItem("token");
  }

  remove(){
    return localStorage.removeItem("token");
  }

  isValid(){
    const token = this.get();
    if(token){
      const payload = this.payload(token);
       if(payload){
          return payload.iss === 'http://127.0.0.1:8000/api/user/login' ? true: false;

       }
       return false;
    }else{
      console.log("no token");
    }
  }

  payload(token){
    const payload =  token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
     return JSON.parse(atob(payload)); 
  }
  loggedIn(){
    return this.isValid();
  }
}
