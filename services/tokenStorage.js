'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenStorageService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TokenStorageService = exports.TokenStorageService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
  function TokenStorageService() {
    _classCallCheck(this, TokenStorageService);

    this.tokenName = this.tokenName;

    this.tokenName = 'auth-token';
  }

  _createClass(TokenStorageService, [{
    key: 'getToken',
    value: function getToken() {
      return localStorage.getItem(this.tokenName);
    }
  }, {
    key: 'setToken',
    value: function setToken(token) {
      return localStorage.setItem(this.tokenName, token);
    }
  }, {
    key: 'removeToken',
    value: function removeToken() {
      localStorage.removeItem(this.tokenName);
    }
  }]);

  return TokenStorageService;
}()) || _class);