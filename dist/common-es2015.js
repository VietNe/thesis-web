(self["webpackChunkaqi_uit"] = self["webpackChunkaqi_uit"] || []).push([["common"],{

/***/ 65136:
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": function() { return /* binding */ BaseService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.service */ 84465);






class BaseService {
    constructor(http, toastService) {
        this.http = http;
        this.toastService = toastService;
        this.customHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    }
    get(url, options) {
        return this.http.get(url, Object.assign(Object.assign({}, this.customHeaders), options)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => response), this.catchErr());
    }
    post(body, url, options) {
        return this.http
            .post(url, body, Object.assign(Object.assign({}, this.customHeaders), options))
            .pipe(this.catchErr());
    }
    patch(body, url, options) {
        return this.http
            .patch(url, Object.assign({}, body), Object.assign(Object.assign({}, this.customHeaders), options))
            .pipe(this.catchErr());
    }
    put(body, url, options) {
        return this.http
            .put(url, Object.assign({}, body), Object.assign(Object.assign({}, this.customHeaders), options))
            .pipe(this.catchErr());
    }
    delete(url, options) {
        return this.http
            .delete(url, Object.assign(Object.assign({}, this.customHeaders), options))
            .pipe(this.catchErr());
    }
    catchErr() {
        return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => this.handleError(error));
    }
    handleError({ error }) {
        if (error.msg) {
            this.toastService.error(error.msg);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService)); };
BaseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 84465:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": function() { return /* binding */ ToastService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 19699);


class ToastService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    success(msg) {
        this.toastr.success(msg);
    }
    error(msg) {
        this.toastr.error(msg);
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 73071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ 65136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.service */ 84465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);






class UserService extends _base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(http, toastService, router) {
        super(http, toastService);
        this.router = router;
        this.usersEndpoint = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/users`;
    }
    getAllUsers() {
        return this.get(`${this.usersEndpoint}`);
    }
    getProfile() {
        return this.get(`${this.usersEndpoint}/me`);
    }
    updateProfile(body) {
        return this.patch(body, `${this.usersEndpoint}/updateMe`);
    }
    updateUser(body, id) {
        return this.patch(body, `${this.usersEndpoint}/${id}`);
    }
    createUser(body) {
        return this.post(body, `${this.usersEndpoint}/admin/signup`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map