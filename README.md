# Angular2 authentication (and authorization)

# Table of Contents

* [About this module](#about-this-module)
* [How it works](#how-it-works)
* [Installation](#installation)
* [Basic Usage](#basic-usage)
* [Running Example](#running-example)

# About this module

At the time there was no module like this available - so we've created one.
We love simplicity! We've put much effort in making this module as slim and easy to use as possible.
Angular2-auth is based on Token Authentication in Django REST Framework with the following features:

* simple front-end template with a log-in form
* redirection to the log-in form if unlogged user tries to enter an application
* defining if particular webpage should require authentication (or authorization)
* Angular2 Route support


# How it works


# Installation

* Download this module and its dependencies: 

```shell
# from the terminal at the root of your project
npm install git@git.teonite.net:teonite/angular2-auth.git
```

# Basic Usage
In main file of boot.js you have to add a few things:
 1) extend TokenAuthOptions to add adress  of server
 ```javascript
 import {TokenAuthOptions} from 'angular2-auth/services/tokenAuthOptions';
 class CustomTokenAuthOptions extends TokenAuthOptions {
   constructor() {
     super('http://localhost:8000/api-token-auth/');
   }
 }
 ```
 2) Request options for tokens
 ```javascript
 import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
 import {TokenAuthService} from 'angular2-auth/services/tokenAuth';
 import {TokenStorageService} from 'angular2-auth/services/tokenStorage';
 import {TokenAuthOptions} from 'angular2-auth/services/tokenAuthOptions';

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

 ```
3)
```javascript
import {bootstrap} from 'angular2/platform/browser';

bootstrap(MainComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(RequestOptions, {useClass: CustomRequestOptions}),
  provide(TokenAuthOptions, {useClass: CustomTokenAuthOptions}),
  TokenStorageService,
  TokenAuthService
]);

```

#### Webapp configuration using angular2 ui RouteConfig

In main.js file you have to add import of ProtectedRouterOutlet and add this as a directives
```javasrcipt
import {ProtectedRouterOutlet} from 'angular2-auth/directives/protectedRouterOutlet';

@Component({
  selector: 'main',
  directives: [ProtectedRouterOutlet],
  template: mainTemplate
})
@RouteConfig([
  {path: '/...', component: AppComponent, name: 'App'},
  {path: '/login', component: LoginApp, name: 'Login'}
])
export class MainComponent {
  constructor() {
  }
}
}
```
Second part in apps.js you can declare the rest of RouterConfig

```javascript
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import appTemplate from './app.html';
import {ProtectedComponent} from './components/protected';
import {LogoutApp} from 'angular2-auth/components/logout';


@Component({
  selector: 'exampleapp',
  directives: [ROUTER_DIRECTIVES],
  template: appTemplate,
})
@RouteConfig([
  {path: '/', component: ProtectedComponent, name: 'Protected'},
  {path: '/logout', component: LogoutApp, name: 'Logout'}
])
export class AppComponent {
  constructor() {
  }
}
```
And the last things you have to add
```html
<protected-router-outlet></protected-router-outlet>
```


# Running Example

To run example you have to :
1) install dependencies for server and webapp  (in example/server and example/webapp)
```shell
npm install
```
2) run backend server by typing:
```shell
node server.js
```

3) Run exemple webapp:
```shell
npm start
```

