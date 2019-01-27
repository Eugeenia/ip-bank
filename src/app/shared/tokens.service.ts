import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokensService {

  constructor() { }

  private token = '';
    getToken() {
        return this.token;
    }

    isAuth() {
        return this.token !== '';
    }

    setToken(value: string) {
        this.token = value;
        console.log('Token: ' + value);
    }

    logOut() {
        this.setToken('');
    }
}
