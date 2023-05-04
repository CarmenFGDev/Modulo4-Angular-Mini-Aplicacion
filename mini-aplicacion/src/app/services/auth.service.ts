import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLogged: boolean = false;
  private userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isUserLogged
  );
  public userLogged$ = this.userLogged.asObservable();
  constructor() {}

  public isLogged(): boolean {
    const isLogged = localStorage.getItem('loggedUser');
    this.isUserLogged = !!isLogged && isLogged === 'true' ? true : false;
    this.userLogged.next(this.isUserLogged);
    return this.isUserLogged;
  }

  public login(username?: string, password?: string) {
    if (username === 'lemon' && password === 'code') {
      localStorage.setItem('loggedUser', 'true');
      return true;
    } else {
      localStorage.setItem('loggedUser', 'false');
      return false;
    }
  }
}
