import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isLogged(){
    return false;
  }
  public login(username?: string, password?: string): boolean {
      return username==='lemon' && password==='code';
  }
}
