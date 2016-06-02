import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {AppComponent} from "./app";
import {LoginApp} from "angular2-auth/components/login";
import mainTemplate from './main.html';
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