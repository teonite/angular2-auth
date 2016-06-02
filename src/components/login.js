import {Component, ChangeDetectionStrategy, ViewEncapsulation} from "@angular/core";
import {Router} from '@angular/router-deprecated';
import loginTemplate from "./login.html";
import {TokenAuthService} from "../services/tokenAuth"
import {Response} from '@angular/http';
import {TokenStorageService} from '../services/tokenStorage'

@Component({
  selector: 'login',
  template: loginTemplate,
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent {
  username:String;
  password:String;

  constructor(tokenAuthService:TokenAuthService, router:Router, tokenStorageService:TokenStorageService) {
    this.tokenAuthService = tokenAuthService;
    this.router = router;
    this.tokenStorageService = tokenStorageService;
  }

  submit() {
    this.tokenAuthService.obtainToken(this.username, this.password).subscribe((res:Response) => {
        this.errorMessage = undefined;
        let data = res.json();
        this.tokenStorageService.setToken(data.token);
        // navigate with router will work if common http headers will be refreshed with token here.
        // this.router.navigate(['/App']);
        window.location.href = '/';
      },
      (res:Response) => {
        this.errorMessage = res.json()['non_field_errors'];
      }
    );
  }
}