import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import protectedTemplate from './protected.html';

@Component({
  template: protectedTemplate,
  directives: [ROUTER_DIRECTIVES]
})
export class ProtectedComponent {
}
