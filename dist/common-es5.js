(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkaqi_uit"] = self["webpackChunkaqi_uit"] || []).push([["common"], {
    /***/
    65136:
    /*!******************************************!*\
      !*** ./src/app/services/base.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BaseService": function BaseService() {
          return (
            /* binding */
            _BaseService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toast.service */
      84465);

      var _BaseService = /*#__PURE__*/function () {
        function _BaseService(http, toastService) {
          _classCallCheck(this, _BaseService);

          this.http = http;
          this.toastService = toastService;
          this.customHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        }

        _createClass(_BaseService, [{
          key: "get",
          value: function get(url, options) {
            return this.http.get(url, Object.assign(Object.assign({}, this.customHeaders), options)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              return response;
            }), this.catchErr());
          }
        }, {
          key: "post",
          value: function post(body, url, options) {
            return this.http.post(url, body, Object.assign(Object.assign({}, this.customHeaders), options)).pipe(this.catchErr());
          }
        }, {
          key: "patch",
          value: function patch(body, url, options) {
            return this.http.patch(url, Object.assign({}, body), Object.assign(Object.assign({}, this.customHeaders), options)).pipe(this.catchErr());
          }
        }, {
          key: "put",
          value: function put(body, url, options) {
            return this.http.put(url, Object.assign({}, body), Object.assign(Object.assign({}, this.customHeaders), options)).pipe(this.catchErr());
          }
        }, {
          key: "delete",
          value: function _delete(url, options) {
            return this.http["delete"](url, Object.assign(Object.assign({}, this.customHeaders), options)).pipe(this.catchErr());
          }
        }, {
          key: "catchErr",
          value: function catchErr() {
            var _this = this;

            return (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (error) {
              return _this.handleError(error);
            });
          }
        }, {
          key: "handleError",
          value: function handleError(_ref) {
            var error = _ref.error;

            if (error.msg) {
              this.toastService.error(error.msg);
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(function () {
              return error;
            });
          }
        }]);

        return _BaseService;
      }();

      _BaseService.ɵfac = function BaseService_Factory(t) {
        return new (t || _BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
      };

      _BaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _BaseService,
        factory: _BaseService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    84465:
    /*!*******************************************!*\
      !*** ./src/app/services/toast.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastService": function ToastService() {
          return (
            /* binding */
            _ToastService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      19699);

      var _ToastService = /*#__PURE__*/function () {
        function _ToastService(toastr) {
          _classCallCheck(this, _ToastService);

          this.toastr = toastr;
        }

        _createClass(_ToastService, [{
          key: "success",
          value: function success(msg) {
            this.toastr.success(msg);
          }
        }, {
          key: "error",
          value: function error(msg) {
            this.toastr.error(msg);
          }
        }]);

        return _ToastService;
      }();

      _ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || _ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
      };

      _ToastService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ToastService,
        factory: _ToastService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    73071:
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./base.service */
      65136);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toast.service */
      84465);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _UserService = /*#__PURE__*/function (_base_service__WEBPAC) {
        _inherits(_UserService, _base_service__WEBPAC);

        var _super = _createSuper(_UserService);

        function _UserService(http, toastService, router) {
          var _this2;

          _classCallCheck(this, _UserService);

          _this2 = _super.call(this, http, toastService);
          _this2.router = router;
          _this2.usersEndpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL, "/users");
          return _this2;
        }

        _createClass(_UserService, [{
          key: "getAllUsers",
          value: function getAllUsers() {
            return this.get("".concat(this.usersEndpoint));
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return this.get("".concat(this.usersEndpoint, "/me"));
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(body) {
            return this.patch(body, "".concat(this.usersEndpoint, "/updateMe"));
          }
        }, {
          key: "updateUser",
          value: function updateUser(body, id) {
            return this.patch(body, "".concat(this.usersEndpoint, "/").concat(id));
          }
        }, {
          key: "createUser",
          value: function createUser(body) {
            return this.post(body, "".concat(this.usersEndpoint, "/admin/signup"));
          }
        }]);

        return _UserService;
      }(_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService);

      _UserService.ɵfac = function UserService_Factory(t) {
        return new (t || _UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _UserService,
        factory: _UserService.ɵfac,
        providedIn: "root"
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map