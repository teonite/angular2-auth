"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require("angular2/core");

var _router = require("angular2/router");

var _tokenStorage = require("../services/tokenStorage");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogoutApp = exports.LogoutApp = (_dec = (0, _core.Component)({
  selector: 'logout',
  template: ''
}), _dec(_class = function () {
  function LogoutApp(router, tokenStorageService) {
    _classCallCheck(this, LogoutApp);

    this.username = this.username;
    this.password = this.password;

    this.router = router;
    this.tokenStorageService = tokenStorageService;
  }

  _createClass(LogoutApp, [{
    key: "routerOnActivate",
    value: function routerOnActivate(nextInstruction, prevInstruction) {
      this.tokenStorageService.removeToken();
      this.router.navigateByUrl(['/']);
    }
  }]);

  return LogoutApp;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_router.Router, _tokenStorage.TokenStorageService], LogoutApp);