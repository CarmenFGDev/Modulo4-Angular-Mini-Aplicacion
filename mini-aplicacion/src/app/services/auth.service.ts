import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLogged: boolean = false;
  private userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isUserLogged
  );
  public userLogged$ = this.userLogged.asObservable();

  private userNameInitial: string = '';
  private userName: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.userNameInitial
  );
  public userName$ = this.userName.asObservable();
  constructor() {}

  public isLogged(): boolean {
    const isLogged = localStorage.getItem('loggedUser');
    this.isUserLogged = !!isLogged && isLogged === 'true' ? true : false;
    this.userLogged.next(this.isUserLogged);
    return this.isUserLogged;
  }

  public login(username?: string, password?: string):Observable<boolean> {
    if (username === 'lemon' && password === 'code') {
      localStorage.setItem('loggedUser', 'true');
      localStorage.setItem('userName', username);
      this.userName.next(username);
      this.userLogged.next(true);
      return of(true).pipe(delay(2000) ) 
    } else {
      localStorage.setItem('loggedUser', 'false');
      localStorage.setItem('userName','');
      this.userLogged.next(false);
      this.userName.next('');
      return of(false).pipe(delay(2000)); 
    }
  }
  public getUsername() {
      const username = localStorage.getItem('userName');
      this.userNameInitial = !!username ? username : '';
      this.userName.next(this.userNameInitial);
      return this.userNameInitial;
  }
  public logout() {
     localStorage.setItem('loggedUser', 'false');
     localStorage.setItem('userName','');
     this.userLogged.next(false);
     this.userName.next('');
  }
}
