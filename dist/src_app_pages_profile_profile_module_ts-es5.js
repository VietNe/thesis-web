(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkaqi_uit"] = self["webpackChunkaqi_uit"] || []).push([["src_app_pages_profile_profile_module_ts"], {
    /***/
    58220:
    /*!****************************************************!*\
      !*** ./src/app/pages/profile/profile.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileComponent": function ProfileComponent() {
          return (
            /* binding */
            _ProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/user.service */
      73071);
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/toast.service */
      84465);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      18345);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      42522);

      var _ProfileComponent = /*#__PURE__*/function () {
        function _ProfileComponent(fb, userService, toastService, localStorageService) {
          _classCallCheck(this, _ProfileComponent);

          this.fb = fb;
          this.userService = userService;
          this.toastService = toastService;
          this.localStorageService = localStorageService;
          this.form = this.fb.group({
            email: [{
              value: null,
              disabled: true
            }],
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            NameDevice: [{
              value: null,
              disabled: true
            }],
            role: [{
              value: null,
              disabled: true
            }]
          });
        }

        _createClass(_ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.getProfile().subscribe(function (res) {
              if (res) {
                _this.form.patchValue(Object.assign({}, res.data));

                localStorage.setItem("user", JSON.stringify(res.data));
              }
            });
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this2 = this;

            this.userService.updateProfile({
              name: this.form.value.name,
              address: this.form.value.address,
              phone: this.form.value.phone
            }).subscribe(function (res) {
              if (res) {
                _this2.toastService.success("Update profile successful!");

                _this2.localStorageService.user = JSON.stringify(res.data.user);
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.form.valid) {
              this.updateProfile();
            }
          }
        }]);

        return _ProfileComponent;
      }();

      _ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || _ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
      };

      _ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ProfileComponent,
        selectors: [["ngx-profile"]],
        decls: 37,
        vars: 1,
        consts: [[1, "row"], [1, "col-12"], [1, "h6"], [3, "formGroup", "ngSubmit"], [1, "col-12", "col-lg-6"], [1, "form-group"], ["for", "name", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "name", "formControlName", "name", "placeholder", "Name"], ["for", "address", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "address", "formControlName", "address", "placeholder", "Address"], ["for", "phone", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "phone", "formControlName", "phone", "placeholder", "Phone"], ["for", "email", 1, "label"], ["type", "email", "nbInput", "", "fullWidth", "", "id", "email", "formControlName", "email", "placeholder", "Email"], ["for", "NameDevice", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "NameDevice", "formControlName", "NameDevice", "placeholder", "Name Device"], ["for", "role", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "role", "formControlName", "role", "placeholder", "Role", 2, "text-transform", "uppercase"], ["type", "submit", "nbButton", "", "status", "danger"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_7_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Name Device");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Update Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    88558:
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileModule": function ProfileModule() {
          return (
            /* binding */
            _ProfileModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      19466);
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.component */
      58220);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: "",
        component: _profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
      }];

      var _ProfileModule = function _ProfileModule() {
        _classCallCheck(this, _ProfileModule);
      };

      _ProfileModule.ɵfac = function ProfileModule_Factory(t) {
        return new (t || _ProfileModule)();
      };

      _ProfileModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ProfileModule
      });
      _ProfileModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ProfileModule, {
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile_profile_module_ts-es5.js.map