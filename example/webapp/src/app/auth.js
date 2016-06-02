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