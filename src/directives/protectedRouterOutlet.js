import {Directive, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, ComponentInstruction} from '@angular/router-deprecated';
import {TokenStorageService} from '../services/tokenStorage';
import {TokenAuthOptions} from '../services/tokenAuthOptions';

@Directive({
  selector: 'protected-router-outlet'
})
export class ProtectedRouterOutlet extends RouterOutlet {
  constructor(_viewContainerRef:ViewContainerRef, _loader:DynamicComponentLoader, _parentRouter:Router, nameAttr:String,
              tokenStorageService:TokenStorageService, tokenAuthOptions:TokenAuthOptions) {
    super(_viewContainerRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
    this.tokenStorageService = tokenStorageService;
    this.tokenAuthOptions = tokenAuthOptions;

    this.publicRoutes = tokenAuthOptions.publicRoutes;
    this.loginRouteName = tokenAuthOptions.loginRouteName;
  }

  activate(nextInstruction:ComponentInstruction) {
    this.checkInstructionPermissions(nextInstruction);
    return super.activate(nextInstruction);
  }

  reuse(nextInstruction:ComponentInstruction) {
    this.checkInstructionPermissions(nextInstruction);
    return super.reuse(nextInstruction);
  }

  checkInstructionPermissions(nextInstruction:ComponentInstruction) {
    let url = nextInstruction.urlPath;

    if (this.publicRoutes.indexOf(url) < 0 && !this.tokenStorageService.getToken()) {
      this.parentRouter.navigate([this.loginRouteName]);
    }
  }
}