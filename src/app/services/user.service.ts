import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient = inject(HttpClient);
  url= "http://localhost:3000/api/users";
  loginUrl = "http://localhost:3000/api/users/login";
  userLogin:User={
    name:"",
    last_name:"",
    _id:"",
    contact_info:{phone:0,address:""},
    email:"",
    password:""
  };
  constructor() { }

  getUsers(){
    return this.httpClient.get<User[]>(this.url);
  }

  login(email: string, password: string) {
    return this.httpClient.post<User>(this.loginUrl, { email, password });
 }

 getUserLogin(){
  return this.userLogin;
 }

}
