"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require("@angular/core");

var _routerDeprecated = require("@angular/router-deprecated");

var _tokenStorage = require("../services/tokenStorage");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogoutComponent = exports.LogoutComponent = (_dec = (0, _core.Component)({
  selector: 'logout',
  template: ''
}), _dec(_class = function () {
  function LogoutComponent(router, tokenStorageService) {
    _classCallCheck(this, LogoutComponent);

    this.username = this.username;
    this.password = this.password;

    this.router = router;
    this.tokenStorageService = tokenStorageService;
  }

  _createClass(LogoutComponent, [{
    key: "routerOnActivate",
    value: function routerOnActivate(nextInstruction, prevInstruction) {
      this.tokenStorageService.removeToken();
      this.router.navigateByUrl(['/']);
    }
  }]);

  return LogoutComponent;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_routerDeprecated.Router, _tokenStorage.TokenStorageService], LogoutComponent);