"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require("angular2/core");

var _router = require("angular2/router");

var _login = require("./login.html");

var _login2 = _interopRequireDefault(_login);

var _tokenAuth = require("../services/tokenAuth");

var _http = require("angular2/http");

var _tokenStorage = require("../services/tokenStorage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginApp = exports.LoginApp = (_dec = (0, _core.Component)({
  selector: 'login',
  template: _login2.default,
  changeDetection: _core.ChangeDetectionStrategy.Default,
  encapsulation: _core.ViewEncapsulation.None

}), _dec(_class = function () {
  function LoginApp(tokenAuthService, router, tokenStorageService) {
    _classCallCheck(this, LoginApp);

    this.username = this.username;
    this.password = this.password;

    this.tokenAuthService = tokenAuthService;
    this.router = router;
    this.tokenStorageService = tokenStorageService;
  }

  _createClass(LoginApp, [{
    key: "submit",
    value: function submit() {
      var _this = this;

      this.tokenAuthService.obtainToken(this.username, this.password).subscribe(function (res) {
        _this.errorMessage = undefined;
        var data = res.json();
        _this.tokenStorageService.setToken(data.token);
        // navigate with router will work if common http headers will be refreshed with token here.
        // this.router.navigate(['/App']);
        window.location.href = '/';
      }, function (res) {
        _this.errorMessage = res.json()['non_field_errors'];
      });
    }
  }]);

  return LoginApp;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_tokenAuth.TokenAuthService, _router.Router, _tokenStorage.TokenStorageService], LoginApp);