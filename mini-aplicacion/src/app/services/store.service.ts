import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
interface ILogin {
  username: string,
    password: string
}
export class StoreService {
  initialState: ILogin ={
    username:'',
    password:''
  }
  private user$ = new BehaviorSubject<ILogin>(this.initialState)
  constructor() { }
}
