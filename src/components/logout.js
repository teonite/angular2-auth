import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {TokenStorageService} from "../services/tokenStorage";

@Component({
  selector: 'logout',
  template: ''
})

export class LogoutComponent {
  username:String;
  password:String;

  constructor(router:Router, tokenStorageService:TokenStorageService) {
    this.router = router;
    this.tokenStorageService = tokenStorageService;
  }

  routerOnActivate(nextInstruction, prevInstruction) {
    this.tokenStorageService.removeToken();
    this.router.navigateByUrl(['/']);
  }

}