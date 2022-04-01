import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { UserService } from './user.service';
import {server} from './server'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient,
    private userService: UserService) {
    this.user = userService.getUser();
  }

  user: User;

  async getCards(): Promise<any> {
    return await this.http.get(server+'cards')
  }

  getCard(id: any): Observable<any> {
    return this.http.get(server+'cards/public/public/' + id)
  }

  addCard(card: any):Observable<any> {
   return  this.http.post<any>(server+'cards/public/public', { "card": card })
   
  }
  async delete(id:any):Promise<Observable<any>>{
    return this.http.delete(server+'cards/public/public/' + id)
 
  }

}
