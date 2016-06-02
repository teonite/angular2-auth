'use strict';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs/Rx';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import {AuthComponent} from './app/auth';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS, RequestOptions, BaseRequestOptions, Headers, RequestMethod} from '@angular/http';
import {TokenAuthService} from 'angular2-auth/services/tokenAuth';
import {TokenStorageService} from 'angular2-auth/services/tokenStorage';
import {TokenAuthOptions} from 'angular2-auth/services/tokenAuthOptions';

enableProdMode();

class CustomRequestOptions extends RequestOptions {
  constructor(tokenStorageService:TokenStorageService) {
    super({method: RequestMethod.Get, headers: new Headers()});

    this.headers.append('accept', 'application/json');
    this.headers.append('content-type', 'application/json');

    if (tokenStorageService.getToken()) {
      /**
       * Add Authorization token to every request
       */
      this.headers.append('Authorization', `Token ${tokenStorageService.getToken()}`);
    }
  }
}

class CustomTokenAuthOptions extends TokenAuthOptions {
  constructor() {
    /**
     * Configure obtain-token url, public routes and login-route name
     */
    super('http://localhost:8000/api-token-auth/', ['login'], 'Login');
  }
}

bootstrap(AuthComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  /**
   * Overwrite request options and token auth options
   */
  provide(RequestOptions, {useClass: CustomRequestOptions}),
  provide(TokenAuthOptions, {useClass: CustomTokenAuthOptions}),
  TokenStorageService,
  TokenAuthService
]);
