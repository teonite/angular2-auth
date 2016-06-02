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