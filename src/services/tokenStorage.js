'use strict';
import {Injectable} from "@angular/core";

@Injectable()
export class TokenStorageService {
  tokenName:String;

  constructor() {
    this.tokenName = 'auth-token';
  }

  getToken() {
    return localStorage.getItem(this.tokenName);
  }

  setToken(token) {
    return localStorage.setItem(this.tokenName, token);
  }

  removeToken() {
    localStorage.removeItem(this.tokenName);
  }
}
