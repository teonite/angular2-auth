'use strict';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TokenStorageService} from './tokenStorage'
import {TokenAuthOptions} from './tokenAuthOptions'


@Injectable()
export class TokenAuthService {
  constructor(http:Http, tokenStorageService:TokenStorageService, tokenAuthOptions:TokenAuthOptions) {
    this.http = http;
    this.tokenStorageService = tokenStorageService;
    this.tokenAuthOptions = tokenAuthOptions;
  }

  obtainToken(username, password) {
    return this.http.post(this.tokenAuthOptions.obtainTokenUrl,
      JSON.stringify({
        username,
        password
      })
    )
  }
}
