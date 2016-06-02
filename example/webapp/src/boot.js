'use strict';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs/Rx';

import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode, provide} from 'angular2/core';
import {MainComponent} from './app/main';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
import {TokenAuthService} from 'angular2-auth/services/tokenAuth';
import {TokenStorageService} from 'angular2-auth/services/tokenStorage';
import {TokenAuthOptions} from 'angular2-auth/services/tokenAuthOptions';

enableProdMode();

class CustomRequestOptions extends BaseRequestOptions {
  constructor(tokenStorageService:TokenStorageService) {
    super();
    this.headers.append('accept', 'application/json');
    this.headers.append('content-type', 'application/json');

    if (tokenStorageService.getToken()) {
      this.headers.append('Authorization', `Token ${tokenStorageService.getToken()}`);
    }
  }
}

class CustomTokenAuthOptions extends TokenAuthOptions {
  constructor() {
    super('http://localhost:8000/api-token-auth/');
  }
}

bootstrap(MainComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(RequestOptions, {useClass: CustomRequestOptions}),
  provide(TokenAuthOptions, {useClass: CustomTokenAuthOptions}),
  TokenStorageService,
  TokenAuthService
]);
