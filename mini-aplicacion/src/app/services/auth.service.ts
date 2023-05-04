import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  public isLogged(): Observable<boolean> {
    const isLogged = localStorage.getItem('loggedUser');
    const loggedBoolean =!!isLogged && isLogged === 'true' ? true : false;
    return of(loggedBoolean);
  }

  public login(username?: string, password?: string){
    if (username === 'lemon' && password === 'code') {
      localStorage.setItem('loggedUser', 'true');
      return true;
    } else {
      localStorage.setItem('loggedUser', 'false');
      return false;
    }
  }
}
