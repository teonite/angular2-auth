# angular2-auth

Authentication for Angular2-based apps.

# Table of Contents

* [About this module](#about-this-module)
* [Installation](#installation)
* [Basic Usage](#basic-usage)
* [Running Example](#running-example)

# About this module

angular2-auth is based on Token Authentication used in Django REST Framework with the following features:

* simple front-end template with a log-in form
* redirection to the log-in form if unlogged user tries to enter an application
* defining if particular webpage should require authentication (or authorization)
* Angular2 Route support

# Installation

```shell
# from the terminal at the root of your project
npm install -S https://github.com/teonite/angular2-auth.git
```

# Basic Usage
## Add custom options to boot.js

```javascript
/**
 * src/boot.js
 */
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
```

## Auth component

To protect your app you will need an outer auth component which will use a custom protected router outlet. 
The protected router outlet will allow a user to view a certain route only if there is a token in local storage or the route was configured as public.

```javascript
/**
 * src/app/auth.js
 */
import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {AppComponent} from "./app";
import {LoginComponent} from "angular2-auth/components/login";
import authTemplate from './auth.html';
import {ProtectedRouterOutlet} from 'angular2-auth/directives/protectedRouterOutlet';

@Component({
  selector: 'main',
  directives: [ProtectedRouterOutlet],
  template: authTemplate
})
@RouteConfig([
  {path: '/...', component: AppComponent, name: 'App'},
  {path: '/login', component: LoginComponent, name: 'Login'}
])
export class AuthComponent {
  constructor() {
  }
}
```

In the example above all routes under AppComponent will be protected and the Login route is configured as public so it will not be protected.
To make this work the auth component template needs to use a custom router-outlet directive.

```html
<!--src/app/auth.html-->
<protected-router-outlet></protected-router-outlet>
```

## Main app component

Finally you can add the main app component with routes configuration.

```javascript
/**
 * src/app/app.js
 */
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import appTemplate from './app.html';
import {ProtectedComponent} from './components/protected';
import {LogoutComponent} from 'angular2-auth/components/logout';


@Component({
  selector: 'exampleapp',
  directives: [ROUTER_DIRECTIVES],
  template: appTemplate,
})
@RouteConfig([
  {path: '/', component: ProtectedComponent, name: 'Protected'},
  {path: '/logout', component: LogoutComponent, name: 'Logout'}
])
export class AppComponent {
  constructor() {
  }
}
```

The component's route config includes logout route dispatched to LogoutComponent provided by angular2-auth.
LogoutComponent will remove the token from local storage and redirect the user to the root path. 

The template of the main app component uses the standard router outlet.

```html
<!--src/app/app.html-->
<router-outlet></router-outlet>
```

# Running Example

## Server
```shell
cd example/server
npm install
npm start
```

## Webapp
```shell
cd example/webapp
npm install
npm start
```
