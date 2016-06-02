'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenAuthOptions = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TokenAuthOptions = exports.TokenAuthOptions = (_dec = (0, _core.Injectable)(), _dec(_class = function TokenAuthOptions(obtainTokenUrl) {
  var publicRoutes = arguments.length <= 1 || arguments[1] === undefined ? ['login'] : arguments[1];
  var loginRouteName = arguments.length <= 2 || arguments[2] === undefined ? 'Login' : arguments[2];

  _classCallCheck(this, TokenAuthOptions);

  this.obtainTokenUrl = obtainTokenUrl;
  this.publicRoutes = publicRoutes;
  this.loginRouteName = loginRouteName;
}) || _class);