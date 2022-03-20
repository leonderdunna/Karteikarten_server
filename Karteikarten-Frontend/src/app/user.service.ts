import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import {server} from './server'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.user = JSON.parse(window.localStorage.getItem("user") ?? '{"name": "public",   "password": "public" } ')
  }

  user: User;

  getUser(): User {
    return this.user
  }

  userSpeichern(user: User): void {
    window.localStorage.setItem('user', JSON.stringify(user))
    this.user = user
  }

  changePasswort(p:string){
    return this.http.put(server+'users/'+this.user.name+'/'+this.user.password+'/'+p,{})
  }

  getAllUsers(): Observable<any> {
    return this.http.get(server+'users')
  }
  testPassword(user: User): Observable<any> {
    return this.http.get(server+'users/' + user.name + '/' + user.password)
  }

  addUser(user: User): Observable<any> {
    return this.http.post(server+'users',
      { user: user })
  }
  deleteAccount(){
    return this.http.delete(server+'users/' + this.user.name + '/' + this.user.password)
  }
}
