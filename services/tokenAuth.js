'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenAuthService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _http = require('@angular/http');

var _tokenStorage = require('./tokenStorage');

var _tokenAuthOptions = require('./tokenAuthOptions');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TokenAuthService = exports.TokenAuthService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
  function TokenAuthService(http, tokenStorageService, tokenAuthOptions) {
    _classCallCheck(this, TokenAuthService);

    this.http = http;
    this.tokenStorageService = tokenStorageService;
    this.tokenAuthOptions = tokenAuthOptions;
  }

  _createClass(TokenAuthService, [{
    key: 'obtainToken',
    value: function obtainToken(username, password) {
      return this.http.post(this.tokenAuthOptions.obtainTokenUrl, JSON.stringify({
        username: username,
        password: password
      }));
    }
  }]);

  return TokenAuthService;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_http.Http, _tokenStorage.TokenStorageService, _tokenAuthOptions.TokenAuthOptions], TokenAuthService);