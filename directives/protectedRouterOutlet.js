'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtectedRouterOutlet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class;

var _core = require('@angular/core');

var _routerDeprecated = require('@angular/router-deprecated');

var _tokenStorage = require('../services/tokenStorage');

var _tokenAuthOptions = require('../services/tokenAuthOptions');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProtectedRouterOutlet = exports.ProtectedRouterOutlet = (_dec = (0, _core.Directive)({
  selector: 'protected-router-outlet'
}), _dec(_class = function (_RouterOutlet) {
  _inherits(ProtectedRouterOutlet, _RouterOutlet);

  function ProtectedRouterOutlet(_viewContainerRef, _loader, _parentRouter, nameAttr, tokenStorageService, tokenAuthOptions) {
    _classCallCheck(this, ProtectedRouterOutlet);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProtectedRouterOutlet).call(this, _viewContainerRef, _loader, _parentRouter, nameAttr));

    _this.parentRouter = _parentRouter;
    _this.tokenStorageService = tokenStorageService;
    _this.tokenAuthOptions = tokenAuthOptions;

    _this.publicRoutes = tokenAuthOptions.publicRoutes;
    _this.loginRouteName = tokenAuthOptions.loginRouteName;
    return _this;
  }

  _createClass(ProtectedRouterOutlet, [{
    key: 'activate',
    value: function activate(nextInstruction) {
      this.checkInstructionPermissions(nextInstruction);
      return _get(Object.getPrototypeOf(ProtectedRouterOutlet.prototype), 'activate', this).call(this, nextInstruction);
    }
  }, {
    key: 'reuse',
    value: function reuse(nextInstruction) {
      this.checkInstructionPermissions(nextInstruction);
      return _get(Object.getPrototypeOf(ProtectedRouterOutlet.prototype), 'reuse', this).call(this, nextInstruction);
    }
  }, {
    key: 'checkInstructionPermissions',
    value: function checkInstructionPermissions(nextInstruction) {
      var url = nextInstruction.urlPath;

      if (this.publicRoutes.indexOf(url) < 0 && !this.tokenStorageService.getToken()) {
        this.parentRouter.navigate([this.loginRouteName]);
      }
    }
  }]);

  return ProtectedRouterOutlet;
}(_routerDeprecated.RouterOutlet)) || _class);
Reflect.defineMetadata('design:paramtypes', [_core.ViewContainerRef, _core.DynamicComponentLoader, _routerDeprecated.Router, String, _tokenStorage.TokenStorageService, _tokenAuthOptions.TokenAuthOptions], ProtectedRouterOutlet);