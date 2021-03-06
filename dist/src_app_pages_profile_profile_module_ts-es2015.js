(self["webpackChunkaqi_uit"] = self["webpackChunkaqi_uit"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 58220:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 73071);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toast.service */ 84465);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ 18345);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 42522);







class ProfileComponent {
    constructor(fb, userService, toastService, localStorageService) {
        this.fb = fb;
        this.userService = userService;
        this.toastService = toastService;
        this.localStorageService = localStorageService;
        this.form = this.fb.group({
            email: [{ value: null, disabled: true }],
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            NameDevice: [{ value: null, disabled: true }],
            role: [{ value: null, disabled: true }],
        });
    }
    ngOnInit() {
        this.userService.getProfile().subscribe((res) => {
            if (res) {
                this.form.patchValue(Object.assign({}, res.data));
                localStorage.setItem("user", JSON.stringify(res.data));
            }
        });
    }
    updateProfile() {
        this.userService
            .updateProfile({
            name: this.form.value.name,
            address: this.form.value.address,
            phone: this.form.value.phone,
        })
            .subscribe((res) => {
            if (res) {
                this.toastService.success("Update profile successful!");
                this.localStorageService.user = JSON.stringify(res.data.user);
            }
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.updateProfile();
        }
    }
}
ProfileComponent.??fac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService)); };
ProfileComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: ProfileComponent, selectors: [["ngx-profile"]], decls: 37, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "h6"], [3, "formGroup", "ngSubmit"], [1, "col-12", "col-lg-6"], [1, "form-group"], ["for", "name", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "name", "formControlName", "name", "placeholder", "Name"], ["for", "address", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "address", "formControlName", "address", "placeholder", "Address"], ["for", "phone", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "phone", "formControlName", "phone", "placeholder", "Phone"], ["for", "email", 1, "label"], ["type", "email", "nbInput", "", "fullWidth", "", "id", "email", "formControlName", "email", "placeholder", "Email"], ["for", "NameDevice", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "NameDevice", "formControlName", "NameDevice", "placeholder", "Name Device"], ["for", "role", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "role", "formControlName", "role", "placeholder", "Role", 2, "text-transform", "uppercase"], ["type", "submit", "nbButton", "", "status", "danger"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](25, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](29, "Name Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](33, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](36, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.form);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": function() { return /* binding */ ProfileModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 19466);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ 58220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);








const routes = [
    {
        path: "",
        component: _profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
    },
];
class ProfileModule {
}
ProfileModule.??fac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: ProfileModule });
ProfileModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbTreeGridModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbTreeGridModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts-es2015.js.map