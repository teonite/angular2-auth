import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import protectedTemplate from './protected.html';

@Component({
  template: protectedTemplate,
  directives: [ROUTER_DIRECTIVES]
})
export class ProtectedComponent {
}
