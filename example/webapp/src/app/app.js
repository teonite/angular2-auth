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