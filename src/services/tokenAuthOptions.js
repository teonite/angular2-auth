import {Injectable} from '@angular/core';

@Injectable()
export class TokenAuthOptions {
  constructor(obtainTokenUrl, publicRoutes=['login'], loginRouteName='Login') {
    this.obtainTokenUrl = obtainTokenUrl;
    this.publicRoutes = publicRoutes;
    this.loginRouteName = loginRouteName;
  }
}