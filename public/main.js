(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_alumnos_alumnos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/alumnos/alumnos.component */ "./src/app/components/alumnos/alumnos.component.ts");
/* harmony import */ var _components_alumnos_agregar_alumno_agregar_alumno_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/alumnos/agregar-alumno/agregar-alumno.component */ "./src/app/components/alumnos/agregar-alumno/agregar-alumno.component.ts");
/* harmony import */ var _components_alumnos_listar_alumnos_listar_alumnos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/alumnos/listar-alumnos/listar-alumnos.component */ "./src/app/components/alumnos/listar-alumnos/listar-alumnos.component.ts");
/* harmony import */ var _components_alumnos_ver_alumno_ver_alumno_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/alumnos/ver-alumno/ver-alumno.component */ "./src/app/components/alumnos/ver-alumno/ver-alumno.component.ts");
/* harmony import */ var _components_alumnos_editar_alumno_editar_alumno_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/alumnos/editar-alumno/editar-alumno.component */ "./src/app/components/alumnos/editar-alumno/editar-alumno.component.ts");
/* harmony import */ var _components_profesores_profesores_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/profesores/profesores.component */ "./src/app/components/profesores/profesores.component.ts");
/* harmony import */ var _components_profesores_agregar_profesor_agregar_profesor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profesores/agregar-profesor/agregar-profesor.component */ "./src/app/components/profesores/agregar-profesor/agregar-profesor.component.ts");
/* harmony import */ var _components_profesores_listar_profesores_listar_profesores_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profesores/listar-profesores/listar-profesores.component */ "./src/app/components/profesores/listar-profesores/listar-profesores.component.ts");
/* harmony import */ var _components_profesores_clases_clases_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/profesores/clases/clases.component */ "./src/app/components/profesores/clases/clases.component.ts");
/* harmony import */ var _components_admins_admins_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admins/admins.component */ "./src/app/components/admins/admins.component.ts");
/* harmony import */ var _components_admins_listar_admins_listar_admins_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admins/listar-admins/listar-admins.component */ "./src/app/components/admins/listar-admins/listar-admins.component.ts");
/* harmony import */ var _components_admins_agregar_admin_agregar_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admins/agregar-admin/agregar-admin.component */ "./src/app/components/admins/agregar-admin/agregar-admin.component.ts");
/* harmony import */ var _components_grupos_ver_alumnos_grupo_ver_alumnos_grupo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component */ "./src/app/components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./guards/notAuth.guard */ "./src/app/guards/notAuth.guard.ts");
/* harmony import */ var _guards_alumno_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./guards/alumno.guard */ "./src/app/guards/alumno.guard.ts");
/* harmony import */ var _guards_alumnoAdmin_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./guards/alumnoAdmin.guard */ "./src/app/guards/alumnoAdmin.guard.ts");
/* harmony import */ var _guards_profesor_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./guards/profesor.guard */ "./src/app/guards/profesor.guard.ts");
/* harmony import */ var _guards_profesorAdmin_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./guards/profesorAdmin.guard */ "./src/app/guards/profesorAdmin.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Components






// Components alumno





// Components profesor




// Components admins



// Grupos

// Services


// Libraries


// Guards







// Array for the routing
var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_31__["NotAuthGuard"]] },
    { path: 'alumnos', component: _components_alumnos_alumnos_component__WEBPACK_IMPORTED_MODULE_13__["AlumnosComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_36__["AdminGuard"]] },
    { path: 'verAlumno', component: _components_alumnos_ver_alumno_ver_alumno_component__WEBPACK_IMPORTED_MODULE_16__["VerAlumnoComponent"], canActivate: [_guards_alumnoAdmin_guard__WEBPACK_IMPORTED_MODULE_33__["AlumnoAdminGuard"]] },
    { path: 'editarAlumno', component: _components_alumnos_editar_alumno_editar_alumno_component__WEBPACK_IMPORTED_MODULE_17__["EditarAlumnoComponent"], canActivate: [_guards_profesor_guard__WEBPACK_IMPORTED_MODULE_34__["ProfesorGuard"]] },
    { path: 'profesores', component: _components_profesores_profesores_component__WEBPACK_IMPORTED_MODULE_18__["ProfesoresComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_36__["AdminGuard"]] },
    { path: 'clases', component: _components_profesores_clases_clases_component__WEBPACK_IMPORTED_MODULE_21__["ClasesComponent"], canActivate: [_guards_profesorAdmin_guard__WEBPACK_IMPORTED_MODULE_35__["ProfesorAdminGuard"]] },
    { path: 'grupo', component: _components_grupos_ver_alumnos_grupo_ver_alumnos_grupo_component__WEBPACK_IMPORTED_MODULE_25__["VerAlumnosGrupoComponent"], canActivate: [_guards_profesorAdmin_guard__WEBPACK_IMPORTED_MODULE_35__["ProfesorAdminGuard"]] },
    { path: 'admins', component: _components_admins_admins_component__WEBPACK_IMPORTED_MODULE_22__["AdminsComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_36__["AdminGuard"]] },
    // Protect the following routes if youre logged in
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_36__["AdminGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_alumnos_alumnos_component__WEBPACK_IMPORTED_MODULE_13__["AlumnosComponent"],
                _components_alumnos_agregar_alumno_agregar_alumno_component__WEBPACK_IMPORTED_MODULE_14__["AgregarAlumnoComponent"],
                _components_alumnos_listar_alumnos_listar_alumnos_component__WEBPACK_IMPORTED_MODULE_15__["ListarAlumnosComponent"],
                _components_profesores_profesores_component__WEBPACK_IMPORTED_MODULE_18__["ProfesoresComponent"],
                _components_profesores_agregar_profesor_agregar_profesor_component__WEBPACK_IMPORTED_MODULE_19__["AgregarProfesorComponent"],
                _components_profesores_listar_profesores_listar_profesores_component__WEBPACK_IMPORTED_MODULE_20__["ListarProfesoresComponent"],
                _components_admins_admins_component__WEBPACK_IMPORTED_MODULE_22__["AdminsComponent"],
                _components_admins_agregar_admin_agregar_admin_component__WEBPACK_IMPORTED_MODULE_24__["AgregarAdminComponent"],
                _components_alumnos_ver_alumno_ver_alumno_component__WEBPACK_IMPORTED_MODULE_16__["VerAlumnoComponent"],
                _components_admins_listar_admins_listar_admins_component__WEBPACK_IMPORTED_MODULE_23__["ListarAdminsComponent"],
                _components_profesores_clases_clases_component__WEBPACK_IMPORTED_MODULE_21__["ClasesComponent"],
                _components_grupos_ver_alumnos_grupo_ver_alumnos_grupo_component__WEBPACK_IMPORTED_MODULE_25__["VerAlumnosGrupoComponent"],
                _components_alumnos_editar_alumno_editar_alumno_component__WEBPACK_IMPORTED_MODULE_17__["EditarAlumnoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_28__["FlashMessagesModule"].forRoot(),
                // JWT set the JWT module with the local storage token
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_29__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('id_token');
                        }
                    }
                })
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_26__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"],
                _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_31__["NotAuthGuard"],
                _guards_alumno_guard__WEBPACK_IMPORTED_MODULE_32__["AlumnoGuard"],
                _guards_alumnoAdmin_guard__WEBPACK_IMPORTED_MODULE_33__["AlumnoAdminGuard"],
                _guards_profesor_guard__WEBPACK_IMPORTED_MODULE_34__["ProfesorGuard"],
                _guards_profesorAdmin_guard__WEBPACK_IMPORTED_MODULE_35__["ProfesorAdminGuard"],
                _guards_admin_guard__WEBPACK_IMPORTED_MODULE_36__["AdminGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admins/admins.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/admins/admins.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5zL2FkbWlucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admins/admins.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/admins/admins.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-agregar-admin></app-agregar-admin>\n    </div>\n    <div class=\"col-md-7\">\n      <app-listar-admins></app-listar-admins>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admins/admins.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/admins/admins.component.ts ***!
  \*******************************************************/
/*! exports provided: AdminsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsComponent", function() { return AdminsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminsComponent = /** @class */ (function () {
    function AdminsComponent() {
    }
    AdminsComponent.prototype.ngOnInit = function () {
    };
    AdminsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admins',
            template: __webpack_require__(/*! ./admins.component.html */ "./src/app/components/admins/admins.component.html"),
            styles: [__webpack_require__(/*! ./admins.component.css */ "./src/app/components/admins/admins.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminsComponent);
    return AdminsComponent;
}());



/***/ }),

/***/ "./src/app/components/admins/agregar-admin/agregar-admin.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admins/agregar-admin/agregar-admin.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5zL2FncmVnYXItYWRtaW4vYWdyZWdhci1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admins/agregar-admin/agregar-admin.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/admins/agregar-admin/agregar-admin.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 m-md-1 bg-light\">\n  <form>\n    <h2>Agregar Administrador</h2><br>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Nombre de usuario</label>\n      <div class=\"col-sm-7 pull-left text-left\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Nombre de usuario . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Contraseña</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Contraseña . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Confirmación de contraseña</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" name=\"confirmacion\" [(ngModel)]=\"passwordConfirmation\" placeholder=\"Confirmacion . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-12\" *ngIf=\"username && password && passwordConfirmation\">\n        <button type=\"submit\" (click)=\"agregarAdmin()\" class=\"btn btn-primary btn-md btn-block\">Confirmar</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/admins/agregar-admin/agregar-admin.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/admins/agregar-admin/agregar-admin.component.ts ***!
  \****************************************************************************/
/*! exports provided: AgregarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarAdminComponent", function() { return AgregarAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import of the services
// import { ValidateService } from '../../../services/validate.service';

// Import of the module for the flash messages

// Bring out the Router so we can redirect from the code

var AgregarAdminComponent = /** @class */ (function () {
    function AgregarAdminComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    AgregarAdminComponent.prototype.ngOnInit = function () {
    };
    AgregarAdminComponent.prototype.agregarAdmin = function () {
        var _this = this;
        var admin = {
            permiso: 2,
            username: this.username,
            password: this.password
        };
        if (this.password === this.passwordConfirmation) {
            this.authService.registerAdmin(admin).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    // this.router.navigate(['/login']);
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    // this.router.navigate(['/admins']);
                }
            });
        }
        else {
            this.flashMessage.show('Las contraseñas no coinciden', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    AgregarAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agregar-admin',
            template: __webpack_require__(/*! ./agregar-admin.component.html */ "./src/app/components/admins/agregar-admin/agregar-admin.component.html"),
            styles: [__webpack_require__(/*! ./agregar-admin.component.css */ "./src/app/components/admins/agregar-admin/agregar-admin.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AgregarAdminComponent);
    return AgregarAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admins/listar-admins/listar-admins.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admins/listar-admins/listar-admins.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5zL2xpc3Rhci1hZG1pbnMvbGlzdGFyLWFkbWlucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admins/listar-admins/listar-admins.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/admins/listar-admins/listar-admins.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Listar administradores</h2><br>\n\n<hr *ngIf=\"admins\" class=\"featurette-divider\">\n<div *ngFor=\"let admin of admins\" class=\"overflow-hidden position-relative p-4 m-md-1 bg-light\">\n  <div class=\"row\">\n    <h4 class=\"list-group-item-heading m-1\">{{ admin.username }}</h4>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admins/listar-admins/listar-admins.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/admins/listar-admins/listar-admins.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListarAdminsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarAdminsComponent", function() { return ListarAdminsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import of the services

// Import of the module for the flash messages

var ListarAdminsComponent = /** @class */ (function () {
    function ListarAdminsComponent(flashMessage, authService) {
        this.flashMessage = flashMessage;
        this.authService = authService;
    }
    ListarAdminsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAdmins().subscribe(function (data) {
            if (data.success) {
                _this.admins = data.admins;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ListarAdminsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-admins',
            template: __webpack_require__(/*! ./listar-admins.component.html */ "./src/app/components/admins/listar-admins/listar-admins.component.html"),
            styles: [__webpack_require__(/*! ./listar-admins.component.css */ "./src/app/components/admins/listar-admins/listar-admins.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ListarAdminsComponent);
    return ListarAdminsComponent;
}());



/***/ }),

/***/ "./src/app/components/alumnos/agregar-alumno/agregar-alumno.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/alumnos/agregar-alumno/agregar-alumno.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWx1bW5vcy9hZ3JlZ2FyLWFsdW1uby9hZ3JlZ2FyLWFsdW1uby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/alumnos/agregar-alumno/agregar-alumno.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/alumnos/agregar-alumno/agregar-alumno.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 m-md-1 bg-light\">\n  <form>\n    <h2>Agregar Alumno</h2><br>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 col-form-label p-2 text-center\">Matricula</label>\n      <div class=\"col-sm-7 pull-left text-left\">\n        <input type=\"text\" class=\"form-control\" name=\"matricula\" [(ngModel)]=\"matricula\" placeholder=\"Matricula . .\" [ngModelOptions]=\"{standalone: true}\">\n        <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\n          Ejemplo: K208 <br>\n          (k)208 - Nivel Escolar <br>\n          K: Preescolar<br>\n          P: Primaria <br>\n          S: Secundaria <br>\n          k(2)08 - Número de grado <br>\n          k2(08) - Número de alumno\n        </small>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">CURP</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" name=\"curp\" [(ngModel)]=\"curp\" placeholder=\"CURP . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Nombre(s)</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" name=\"nombre\" [(ngModel)]=\"nombre\" placeholder=\"Nombre(s) . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Apellido Paterno</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" name=\"paterno\" [(ngModel)]=\"paterno\" placeholder=\"Paterno . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Apellido Materno</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" name=\"materno\" [(ngModel)]=\"materno\" placeholder=\"Materno . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Nivel</label>\n      <div class=\"col-sm-7 pull-left text-left\">\n        <input type=\"radio\" value=\"Preescolar\" name=\"nivel\" [(ngModel)]=\"nivel\" required> Preescolar\n        <br>\n        <input type=\"radio\" value=\"Primaria\" name=\"nivel\" [(ngModel)]=\"nivel\" required> Primaria\n        <br>\n        <input type=\"radio\" value=\"Secundaria\" name=\"nivel\" [(ngModel)]=\"nivel\" required> Secundaria\n      </div>\n    </div>\n\n    <div class=\" form-group row\">\n      <label for=\"grado\" class=\"col-sm-5 p-2 col-form-label\">Grado</label>\n      <div class=\"col-sm-7\">\n        <input type=\"number\" class=\"form-control\" name=\"grado\" [(ngModel)]=\"grado\" placeholder=\"Grado . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Grupo</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" name=\"grupo\" [(ngModel)]=\"grupo\" placeholder=\"Grupo . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Fecha de nacimiento</label>\n      <div class=\"col-sm-7\">\n        <input type=\"date\" class=\"form-control\" name=\"fecha\" [(ngModel)]=\"fechaNacimiento\" placeholder=\"Fecha de nacimiento . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Contraseña</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" name=\"contrasena\" [(ngModel)]=\"password\" placeholder=\"Contraseña . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Confirmación de contraseña</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" name=\"confirmacion\" [(ngModel)]=\"passwordConfirmation\" placeholder=\"Confirmacion . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-12\" *ngIf=\"matricula && curp && nombre && paterno && materno && grado && fechaNacimiento && password && passwordConfirmation\">\n        <button type=\"submit\" (click)=\"agregarAlumno()\" class=\"btn btn-primary btn-md btn-block\">Confirmar</button>\n      </div>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/alumnos/agregar-alumno/agregar-alumno.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/alumnos/agregar-alumno/agregar-alumno.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AgregarAlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarAlumnoComponent", function() { return AgregarAlumnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import of the services
// import { ValidateService } from '../../../services/validate.service';

// Import of the module for the flash messages

// Bring out the Router so we can redirect from the code

var AgregarAlumnoComponent = /** @class */ (function () {
    function AgregarAlumnoComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    AgregarAlumnoComponent.prototype.ngOnInit = function () {
    };
    AgregarAlumnoComponent.prototype.agregarAlumno = function () {
        var _this = this;
        var alumno = {
            permiso: 0,
            matricula: this.matricula,
            curp: this.curp,
            nombre: this.nombre,
            paterno: this.paterno,
            materno: this.materno,
            nivel: this.nivel,
            grado: this.grado,
            grupo: this.grupo,
            fechaNacimiento: this.fechaNacimiento,
            password: this.password
        };
        if (this.password === this.passwordConfirmation) {
            this.authService.registerAlumno(alumno).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.matricula = null;
                    _this.curp = null;
                    _this.nombre = null;
                    _this.paterno = null;
                    _this.materno = null;
                    _this.nivel = null;
                    _this.grado = null;
                    _this.grupo = null;
                    _this.fechaNacimiento = null;
                    _this.password = null;
                    _this.passwordConfirmation = null;
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flashMessage.show('Las contraseñas no coinciden', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    AgregarAlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agregar-alumno',
            template: __webpack_require__(/*! ./agregar-alumno.component.html */ "./src/app/components/alumnos/agregar-alumno/agregar-alumno.component.html"),
            styles: [__webpack_require__(/*! ./agregar-alumno.component.css */ "./src/app/components/alumnos/agregar-alumno/agregar-alumno.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AgregarAlumnoComponent);
    return AgregarAlumnoComponent;
}());



/***/ }),

/***/ "./src/app/components/alumnos/alumnos.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/alumnos/alumnos.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#margin {\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbHVtbm9zL2FsdW1ub3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsdW1ub3MvYWx1bW5vcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/alumnos/alumnos.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/alumnos/alumnos.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-agregar-alumno></app-agregar-alumno>\n    </div>\n    <div class=\"col-md-7\">\n      <app-listar-alumnos></app-listar-alumnos>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/alumnos/alumnos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/alumnos/alumnos.component.ts ***!
  \*********************************************************/
/*! exports provided: AlumnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnosComponent", function() { return AlumnosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlumnosComponent = /** @class */ (function () {
    function AlumnosComponent() {
    }
    AlumnosComponent.prototype.ngOnInit = function () {
    };
    AlumnosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alumnos',
            template: __webpack_require__(/*! ./alumnos.component.html */ "./src/app/components/alumnos/alumnos.component.html"),
            styles: [__webpack_require__(/*! ./alumnos.component.css */ "./src/app/components/alumnos/alumnos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlumnosComponent);
    return AlumnosComponent;
}());



/***/ }),

/***/ "./src/app/components/alumnos/editar-alumno/editar-alumno.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/alumnos/editar-alumno/editar-alumno.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWx1bW5vcy9lZGl0YXItYWx1bW5vL2VkaXRhci1hbHVtbm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/alumnos/editar-alumno/editar-alumno.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/alumnos/editar-alumno/editar-alumno.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <h1>Calificaciones de {{alumno?.nombre}} {{alumno?.materno}} {{alumno?.paterno}}</h1>\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-sm\">\n      <thead>\n        <tr>\n          <th> </th>\n          <th class=\"font-weight-bold\">Primer trimestre</th>\n          <th class=\"font-weight-bold\">Segundo trimestre</th>\n          <th class=\"font-weight-bold\">Tercer trimestre</th>\n          <th class=\"font-weight-bold\">Promedio por materia</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let materia of alumno?.materias; index as i\">\n        <tr *ngIf=\"materia.nombreMateria === grupo.nombreMateria\">\n          <td class=\"font-weight-bold\">{{materia.nombreMateria}}</td>\n          <td>{{materia.calificaciones[0]}}</td>\n          <td>{{materia.calificaciones[1]}}</td>\n          <td>{{materia.calificaciones[2]}}</td>\n          <td class=\"font-weight-bold\">{{promediosMaterias[i]}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div *ngIf=\"this.authService.profesorLoggedIn()\">\n    <div class=\"row justify-content-around\">\n      <div class=\"col-md-6 overflow-hidden position-relative p-4 m-md-1 bg-light\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h3 class=\"mb-1\">Calificar materia</h3>\n            <hr class=\"featurette-divider\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 p-2 col-form-label\">Trimestre</label>\n              <div class=\"col-sm-7 pull-left text-left\">\n                <input type=\"number\" class=\"form-control\" name=\"trimestre\" [(ngModel)]=\"trimestre\" placeholder=\"Trimestre . .\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n\n            <div class=\" form-group row\">\n              <label class=\"col-sm-5 p-2 col-form-label\">Nombre de la materia</label>\n              <div *ngFor=\"let materia of alumno?.materias; index as i\">\n                <div class=\"col-sm-12\" *ngIf=\"materia.nombreMateria === grupo.nombreMateria\">\n                  <select class=\"form-control\" [(ngModel)]=\"materiaCalificaciones\">\n                    <option [value]=\"materia.nombreMateria\">{{materia.nombreMateria}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\" form-group row\">\n              <label class=\"col-sm-5 p-2 col-form-label\">Calificación</label>\n              <div class=\"col-sm-7\">\n                <input type=\"number\" class=\"form-control\" name=\"calificacion\" [(ngModel)]=\"calificacion\" placeholder=\"Calificación . .\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"calificarMateria()\" class=\"btn btn-outline-info\">Calificar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <h1>Comentarios</h1>\n  <hr class=\"featurette-divider\">\n  <div *ngFor=\"let comentario of alumno?.comentarios; index as i\">\n    <div *ngIf=\"comentario.materia === grupo.nombreMateria\" class=\"row overflow-hidden position-relative p-4 m-md-1 bg-light\">\n      <div class=\"col-md-12 pull-left text-left\">\n        <div class=\"d-flex justify-content-between\">\n          <h3 class=\"mb-1\">{{ comentario.titulo }}</h3>\n          <p class=\"mb-1\">{{ comentario.fecha }}</p>\n        </div>\n        <h6 class=\"list-group-item-heading m-1\">Profesor: {{ comentario.profesor }}</h6>\n        <h6 class=\"list-group-item-heading m-1\">Materia: {{ comentario.materia }}</h6>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <p class=\"m-2\">{{ comentario.texto }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Agregar comentario</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"position-relative overflow-hidden p-3 m-md-1\">\n          <div class=\"form-group\">\n            <label class=\"col-md-12 p-2 col-form-label\">Titulo</label>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <input type=\"text\" class=\"form-control\" name=\"titulo\" [(ngModel)]=\"titulo\" placeholder=\"Titulo . .\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <textarea class=\"form-control\" name=\"comentario\" [(ngModel)]=\"comentario\" placeholder=\"Comentario . .\" [ngModelOptions]=\"{standalone: true}\" rows=\"4\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"comentar()\" class=\"btn btn-primary\">Comentar</button>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/alumnos/editar-alumno/editar-alumno.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/alumnos/editar-alumno/editar-alumno.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditarAlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarAlumnoComponent", function() { return EditarAlumnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import of the services

// Import of the module for the flash messages

// Bring out the Router so we can redirect from the code

var EditarAlumnoComponent = /** @class */ (function () {
    function EditarAlumnoComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.promediosMaterias = [0, 0, 0];
    }
    EditarAlumnoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10)
            dd = '0' + dd;
        if (mm < 10)
            mm = '0' + mm;
        today = mm + '/' + dd + '/' + yyyy;
        this.fecha = today;
        this.matricula = this.authService.getMatriculaAlumno();
        this.grupo = this.authService.getGrupo();
        var alumno = {
            matricula: this.matricula
        };
        this.authService.buscarAlumnoMatricula(alumno).subscribe(function (data) {
            if (data.success) {
                _this.alumno = data.alumno;
                var indexMateria = 0;
                var sumaMateria = 0;
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                for (var _i = 0, _a = data.alumno.materias; _i < _a.length; _i++) {
                    var materia = _a[_i];
                    sumaMateria = 0;
                    for (var i = 0; i < materia.calificaciones.length; i++) {
                        sumaMateria += materia.calificaciones[i];
                    }
                    sum1 += materia.calificaciones[0];
                    sum2 += materia.calificaciones[1];
                    sum3 += materia.calificaciones[2];
                    _this.promediosMaterias[indexMateria] = Math.round((sumaMateria / materia.calificaciones.length) * 100) / 100;
                    indexMateria += 1;
                }
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/clases']);
            }
        });
    };
    EditarAlumnoComponent.prototype.comentar = function () {
        var _this = this;
        var comentario = {
            matricula: this.matricula,
            profesor: this.grupo.profesor,
            materia: this.grupo.nombreMateria,
            fecha: this.fecha,
            titulo: this.titulo,
            texto: this.comentario
        };
        this.authService.agregarComentario(comentario).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.ngOnInit();
        });
    };
    EditarAlumnoComponent.prototype.calificarMateria = function () {
        var _this = this;
        for (var _i = 0, _a = this.alumno.materias; _i < _a.length; _i++) {
            var materia = _a[_i];
            if (materia.nombreMateria === this.materiaCalificaciones) {
                this.calificacionesCambiar = materia.calificaciones;
            }
        }
        this.calificacionesCambiar[this.trimestre - 1] = this.calificacion;
        var calificaciones = {
            matricula: this.matricula,
            nombreMateria: this.materiaCalificaciones,
            calificaciones: this.calificacionesCambiar
        };
        this.authService.cambiarCalificaciones(calificaciones).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.ngOnInit();
        });
    };
    EditarAlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editar-alumno',
            template: __webpack_require__(/*! ./editar-alumno.component.html */ "./src/app/components/alumnos/editar-alumno/editar-alumno.component.html"),
            styles: [__webpack_require__(/*! ./editar-alumno.component.css */ "./src/app/components/alumnos/editar-alumno/editar-alumno.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditarAlumnoComponent);
    return EditarAlumnoComponent;
}());



/***/ }),

/***/ "./src/app/components/alumnos/listar-alumnos/listar-alumnos.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/alumnos/listar-alumnos/listar-alumnos.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWx1bW5vcy9saXN0YXItYWx1bW5vcy9saXN0YXItYWx1bW5vcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/alumnos/listar-alumnos/listar-alumnos.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/alumnos/listar-alumnos/listar-alumnos.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 m-md-1 bg-light\">\n  <form>\n    <h2>Buscar Alumnos</h2><br>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 p-2 col-form-label\">Por matricula</label>\n      <div class=\"col-sm-8 pull-left text-left\">\n        <input type=\"text\" class=\"form-control\" name=\"matricula\" [(ngModel)]=\"matricula\" placeholder=\"Matricula . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 p-2 col-form-label\">Por nombre(s)</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" name=\"nombre\" [(ngModel)]=\"nombre\" placeholder=\"Nombre(s) . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <label class=\"col-sm-4 p-2 col-form-label\">Por grupo</label>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" name=\"nivel\" [(ngModel)]=\"nivel\" placeholder=\"Nivel . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"col-sm-4\">\n        <input type=\"number\" class=\"form-control\" name=\"grado\" [(ngModel)]=\"grado\" placeholder=\"Grado . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" name=\"grupo\" [(ngModel)]=\"grupo\" placeholder=\"Grupo . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-12\" *ngIf=\"matricula && !nombre && !nivel && !grado && !grupo\">\n        <button type=\"submit\" (click)=\"buscarAlumnoMatricula()\" class=\"btn btn-primary btn-md btn-block\">Buscar</button>\n      </div>\n      <div class=\"col-sm-12\" *ngIf=\"!matricula && nombre && !nivel && !grado && !grupo\">\n        <button type=\"submit\" (click)=\"buscarAlumnosNombre()\" class=\"btn btn-primary btn-md btn-block\">Buscar</button>\n      </div>\n      <div class=\"col-sm-12\" *ngIf=\"!matricula && !nombre && nivel && grado && grupo\">\n        <button type=\"submit\" (click)=\"buscarAlumnosGrupo()\" class=\"btn btn-primary btn-md btn-block\">Buscar</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n<hr *ngIf=\"alumnos\" class=\"featurette-divider\">\n<div *ngFor=\"let alumno of alumnos\" class=\"overflow-hidden position-relative p-4 m-md-1 bg-light\">\n  <div class=\"row\">\n    <div class=\"col-md-9 pull-left text-left\">\n      <h4 class=\"list-group-item-heading m-1\">{{ alumno.nombre }} {{ alumno.paterno }} {{ alumno.materno }}</h4>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <p class=\"font-weight-bold text-uppercase m-1\">Matricula: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">CURP: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Nivel: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Grado: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Grupo: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Nacimiento: </p>\n        </div>\n        <div class=\"col-md-8\">\n          <p class=\"list-group-item-text m-1\">{{ alumno.matricula }}</p>\n          <p class=\"list-group-item-text m-1\">{{ alumno.curp }}</p>\n          <p class=\"list-group-item-text m-1\">{{ alumno.nivel }}</p>\n          <p class=\"list-group-item-text m-1\">{{ alumno.grado }}°</p>\n          <p class=\"list-group-item-text m-1\">\"{{ alumno.grupo }}\"</p>\n          <p class=\"list-group-item-text m-1\">{{ alumno.fechaNacimiento }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 pull-right\">\n      <br>\n      <button type=\"button\" (click)=\"verAlumno(alumno.matricula)\" class=\"btn btn-outline-info btn-md btn-block\">Ver</button>\n      <br><br>\n      <button type=\"button\" (click)=\"eliminarAlumno(alumno.matricula)\" class=\"btn btn-outline-danger btn-md btn-block\">Eliminar</button>\n    </div>\n  </div>\n</div>\n\n<hr *ngIf=\"alumno\" class=\"featurette-divider\">\n<div *ngIf=\"alumno\" class=\"overflow-hidden position-relative p-4 m-md-1 bg-light\">\n  <div class=\"row\">\n    <div class=\"col-md-9 pull-left text-left\">\n      <h4 class=\"list-group-item-heading m-1\">{{ alumno.nombre }} {{ alumno.paterno }} {{ alumno.materno }}</h4>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <p class=\"font-weight-bold text-uppercase m-1\">Matricula: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">CURP: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Nivel: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Grado: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Grupo: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Nacimiento: </p>\n        </div>\n        <div class=\"col-md-8\">\n          <p class=\"list-group-item-text m-1\">{{ alumno.matricula }}</p>\n          <p class=\"list-group-item-text m-1\">{{ alumno.curp }}</p>\n          <p class=\"list-group-item-text m-1\">{{ alumno.nivel }}</p>\n          <p class=\"list-group-item-text m-1\">{{ alumno.grado }}°</p>\n          <p class=\"list-group-item-text m-1\">\"{{ alumno.grupo }}\"</p>\n          <p class=\"list-group-item-text m-1\">{{ alumno.fechaNacimiento }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 pull-right\">\n      <br>\n      <button type=\"button\" (click)=\"verAlumno(alumno.matricula)\" class=\"btn btn-outline-info btn-md btn-block\">Ver</button>\n      <br><br>\n      <button type=\"button\" (click)=\"eliminarAlumno(alumno.matricula)\" class=\"btn btn-outline-danger btn-md btn-block\">Eliminar</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/alumnos/listar-alumnos/listar-alumnos.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/alumnos/listar-alumnos/listar-alumnos.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListarAlumnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarAlumnosComponent", function() { return ListarAlumnosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import of the services

// Import of the module for the flash messages

// Bring out the Router so we can redirect from the code

var ListarAlumnosComponent = /** @class */ (function () {
    function ListarAlumnosComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ListarAlumnosComponent.prototype.ngOnInit = function () {
    };
    ListarAlumnosComponent.prototype.buscarAlumnoMatricula = function () {
        var _this = this;
        var alumno = {
            matricula: this.matricula
        };
        this.authService.buscarAlumnoMatricula(alumno).subscribe(function (data) {
            if (data.success) {
                _this.alumno = data.alumno;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.alumnos = null;
        this.matricula = null;
    };
    ListarAlumnosComponent.prototype.buscarAlumnosNombre = function () {
        var _this = this;
        var alumno = {
            nombre: this.nombre
        };
        this.authService.buscarAlumnosNombre(alumno).subscribe(function (data) {
            if (data.success) {
                _this.alumnos = data.alumnos;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.alumno = null;
        this.nombre = null;
    };
    ListarAlumnosComponent.prototype.buscarAlumnosGrupo = function () {
        var _this = this;
        var grupo = {
            nivel: this.nivel,
            grado: this.grado,
            grupo: this.grupo
        };
        this.authService.buscarAlumnosGrupoRaw(grupo).subscribe(function (data) {
            if (data.success) {
                _this.alumnos = data.alumnos;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.alumno = null;
        this.nivel = null;
        this.grado = null;
        this.grupo = null;
    };
    ListarAlumnosComponent.prototype.verAlumno = function (matricula) {
        this.authService.setMatriculaAlumno(matricula);
        this.router.navigate(['/verAlumno']);
    };
    ListarAlumnosComponent.prototype.eliminarAlumno = function (matricula) {
        var _this = this;
        var alumno = {
            matricula: matricula
        };
        this.authService.eliminarAlumno(alumno).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.alumno = null;
                _this.alumnos = null;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.ngOnInit();
        });
    };
    ListarAlumnosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-alumnos',
            template: __webpack_require__(/*! ./listar-alumnos.component.html */ "./src/app/components/alumnos/listar-alumnos/listar-alumnos.component.html"),
            styles: [__webpack_require__(/*! ./listar-alumnos.component.css */ "./src/app/components/alumnos/listar-alumnos/listar-alumnos.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListarAlumnosComponent);
    return ListarAlumnosComponent;
}());



/***/ }),

/***/ "./src/app/components/alumnos/ver-alumno/ver-alumno.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/alumnos/ver-alumno/ver-alumno.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWx1bW5vcy92ZXItYWx1bW5vL3Zlci1hbHVtbm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/alumnos/ver-alumno/ver-alumno.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/alumnos/ver-alumno/ver-alumno.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <h1>Calificaciones de {{alumno?.nombre}} {{alumno?.materno}} {{alumno?.paterno}}</h1>\n  <h5 class=\"m-3\">{{alumno?.nivel}} {{alumno?.grado}}° \"{{alumno?.grupo}}\"</h5>\n  <hr class=\"featurette-divider\">\n\n  <div *ngIf=\"this.authService.adminLoggedIn()\">\n    <div class=\"row justify-content-around text-center\">\n      <div class=\"form-group row justify-content-center\">\n        <label class=\"col-md-1 p-2 col-form-label\">Nivel</label>\n        <div class=\"col-md-3\">\n          <select class=\"form-control\" name=\"nivel\" [(ngModel)]=\"nivel\">\n            <option *ngFor=\"let nivel of niveles\" [value]=\"nivel\">{{nivel}}</option>\n          </select>\n        </div>\n        <label class=\"col-md-1 p-2 col-form-label\">Grado</label>\n        <div class=\"col-md-3\">\n          <input type=\"number\" class=\"form-control\" name=\"grado\" [(ngModel)]=\"grado\" placeholder=\"Grado . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <label class=\"col-md-1 p-2 col-form-label\">Grupo</label>\n        <div class=\"col-md-3\">\n          <input type=\"text\" class=\"form-control\" name=\"grupo\" [(ngModel)]=\"grupo\" placeholder=\"Grupo . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">Al editar el grupo del alumno se tendran que editar las clases correspondientes</small>\n      <button type=\"button\" (click)=\"editarGrupoAlumno()\" class=\"btn btn-outline-info\">Editar grupo </button>\n    </div>\n  </div>\n\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-sm\">\n      <thead>\n        <tr>\n          <th> </th>\n          <th class=\"font-weight-bold\">Primer trimestre</th>\n          <th class=\"font-weight-bold\">Segundo trimestre</th>\n          <th class=\"font-weight-bold\">Tercer trimestre</th>\n          <th class=\"font-weight-bold\">Promedio por materia</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let materia of alumno?.materias; index as i\">\n          <td class=\"font-weight-bold\">{{materia.nombreMateria}}\n            <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\n              {{materia.profesor}}\n            </small>\n          </td>\n          <td>{{materia.calificaciones[0]}}</td>\n          <td>{{materia.calificaciones[1]}}</td>\n          <td>{{materia.calificaciones[2]}}</td>\n          <td class=\"font-weight-bold\">{{promediosMaterias[i]}}</td>\n        </tr>\n        <tr class=\"font-weight-bold\">\n          <td class=\"text-uppercase\">Promedio trimestral</td>\n          <td>{{promediosTrimestres[0]}}</td>\n          <td>{{promediosTrimestres[1]}}</td>\n          <td>{{promediosTrimestres[2]}}</td>\n          <td>{{promedioFinal}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div *ngIf=\"this.authService.adminLoggedIn()\">\n    <div class=\"row justify-content-around\">\n      <div class=\"col-md-5 overflow-hidden position-relative p-4 m-md-1 bg-light\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h3 class=\"mb-1\">Agregar materia</h3>\n            <hr class=\"featurette-divider\">\n            <div class=\"form-group row justify-content-center\">\n              <label class=\"col-md-6 p-2 col-form-label\">Profesor</label>\n              <div class=\"col-md-6 \">\n                <select class=\"form-control\" [(ngModel)]=\"newNombreProfesor\">\n                  <option *ngFor=\"let profesor of profesoresGrupo\" [value]=\"profesor.nombre\">{{profesor.nombre}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row justify-content-center\">\n              <label class=\"col-md-6 p-2 col-form-label\">Clase</label>\n              <div class=\"col-md-6\">\n                <div *ngFor=\"let profesor of profesoresGrupo\">\n                  <select class=\"form-control\" *ngIf=\"profesor.nombre === newNombreProfesor\" [(ngModel)]=\"newNombreMateria\">\n                    <option *ngFor=\"let clase of profesor.clases\" [value]=\"clase.nombreClase\">{{clase.nombreClase}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"agregarMateria()\" class=\"btn btn-outline-info\">Agregar</button>\n        </div>\n      </div>\n      <div class=\"col-md-5 overflow-hidden position-relative p-4 m-md-1 bg-light\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h3 class=\"mb-1\">Eliminar materia</h3>\n            <hr class=\"featurette-divider\">\n            <div class=\"form-group row justify-content-center\">\n              <label class=\"col-md-6 p-2 col-form-label\">Clase</label>\n              <div class=\"col-md-6 \">\n                <select class=\"form-control\" [(ngModel)]=\"nombreMateriaDelete\">\n                  <option *ngFor=\"let materia of this.alumno?.materias\" [value]=\"materia.nombreMateria\">{{materia.nombreMateria}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"eliminarMateria()\" class=\"btn btn-outline-danger\">Eliminar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"alumno?.comentarios.length > 0\" class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n\n  <h1 *ngIf=\"!editComentario\">Comentarios</h1>\n  <h1 *ngIf=\"editComentario\">Editar Comentario</h1>\n\n  <div *ngIf=\"!editComentario\">\n    <div *ngFor=\"let comentario of alumno?.comentarios; index as i\" class=\"overflow-hidden position-relative p-4 m-md-1 bg-light\">\n      <div class=\"row\">\n        <div class=\"col-md-12 pull-left text-left\">\n          <div class=\"d-flex justify-content-between\">\n            <h3 class=\"mb-1\">{{ comentario.titulo }}</h3>\n            <p class=\"mb-1\">{{ comentario.fecha }}</p>\n          </div>\n          <h6 class=\"list-group-item-heading m-1\">Profesor: {{ comentario.profesor }}</h6>\n          <h6 class=\"list-group-item-heading m-1\">Materia: {{ comentario.materia }}</h6>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <p class=\"m-2\">{{ comentario.texto }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"this.authService.adminLoggedIn()\" class=\"modal-footer\">\n        <button type=\"button\" (click)=\"editarComentario(comentario.titulo, comentario.fecha, comentario.profesor, comentario.materia, comentario.texto)\" class=\"btn btn-outline-warning btn-md m-2\">Editar</button>\n        <button type=\"button\" (click)=\"eliminarComentario(comentario.titulo)\" class=\"btn btn-outline-danger btn-md m-2\">Eliminar</button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"editComentario\" class=\"overflow-hidden position-relative p-4 m-md-1 bg-light\">\n    <div class=\"row\">\n      <div class=\"col-md-12 pull-left text-left\">\n        <div class=\"d-flex justify-content-between\">\n          <h3 class=\"mb-1\">{{ this.comentarioEdit.titulo }}</h3>\n          <p class=\"mb-1\">{{ this.comentarioEdit.fecha }}</p>\n        </div>\n        <h6 class=\"list-group-item-heading m-1\">Profesor: {{ this.comentarioEdit.profesor }}</h6>\n        <h6 class=\"list-group-item-heading m-1\">Materia: {{ this.comentarioEdit.materia }}</h6>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <textarea class=\"form-control\" name=\"comentarioTexto\" [(ngModel)]=\"this.comentarioEdit.texto\" placeholder=\"Comentario . .\" [ngModelOptions]=\"{standalone: true}\" rows=\"4\"></textarea>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" (click)=\"cancelarPost()\" class=\"btn btn-danger\">Cancelar</button>\n      <button type=\"button\" (click)=\"editarPost()\" class=\"btn btn-info\">Aceptar</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/alumnos/ver-alumno/ver-alumno.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/alumnos/ver-alumno/ver-alumno.component.ts ***!
  \***********************************************************************/
/*! exports provided: VerAlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerAlumnoComponent", function() { return VerAlumnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import of the services

// Import of the module for the flash messages

// Bring out the Router so we can redirect from the code

var VerAlumnoComponent = /** @class */ (function () {
    function VerAlumnoComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.matricula = "";
        this.promediosMaterias = [0, 0, 0, 0, 0, 0, 0];
        this.promediosTrimestres = [];
        this.niveles = ["Preescolar", "Primaria", "Secundaria"];
    }
    VerAlumnoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.adminLoggedIn()) {
            this.matricula = this.authService.getMatriculaAlumno();
            var alumno = {
                matricula: this.matricula
            };
            this.authService.buscarAlumnoMatricula(alumno).subscribe(function (data) {
                if (data.success) {
                    _this.alumno = data.alumno;
                    var grupo = {
                        nivel: data.alumno.nivel,
                        grado: data.alumno.grado,
                        grupo: data.alumno.grupo
                    };
                    _this.authService.getProfesoresGrupo(grupo).subscribe(function (data) {
                        if (data.success) {
                            _this.profesoresGrupo = data.profesores;
                        }
                    });
                    var indexMateria = 0;
                    var sumaMateria = 0;
                    var sum1 = 0;
                    var sum2 = 0;
                    var sum3 = 0;
                    for (var _i = 0, _a = data.alumno.materias; _i < _a.length; _i++) {
                        var materia = _a[_i];
                        sumaMateria = 0;
                        for (var i = 0; i < materia.calificaciones.length; i++) {
                            sumaMateria += materia.calificaciones[i];
                        }
                        sum1 += materia.calificaciones[0];
                        sum2 += materia.calificaciones[1];
                        sum3 += materia.calificaciones[2];
                        _this.promediosMaterias[indexMateria] = Math.round((sumaMateria / materia.calificaciones.length) * 100) / 100;
                        indexMateria += 1;
                    }
                    _this.promediosTrimestres.push(Math.round((sum1 / data.alumno.materias.length) * 100) / 100);
                    _this.promediosTrimestres.push(Math.round((sum2 / data.alumno.materias.length) * 100) / 100);
                    _this.promediosTrimestres.push(Math.round((sum3 / data.alumno.materias.length) * 100) / 100);
                    var sumTotal = 0;
                    for (var i = 0; i < _this.promediosTrimestres.length; i++) {
                        sumTotal += _this.promediosTrimestres[i];
                    }
                    _this.promedioFinal = sumTotal / _this.promediosTrimestres.length;
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/alumnos']);
                }
            });
        }
        else if (this.authService.alumnoLoggedIn()) {
            this.authService.getProfileAlumno().subscribe(function (profile) {
                _this.alumno = profile.alumno;
                var indexMateria = 0;
                var sumaMateria = 0;
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                for (var _i = 0, _a = profile.alumno.materias; _i < _a.length; _i++) {
                    var materia = _a[_i];
                    sumaMateria = 0;
                    for (var i = 0; i < materia.calificaciones.length; i++) {
                        sumaMateria += materia.calificaciones[i];
                    }
                    sum1 += materia.calificaciones[0];
                    sum2 += materia.calificaciones[1];
                    sum3 += materia.calificaciones[2];
                    _this.promediosMaterias[indexMateria] = Math.round((sumaMateria / materia.calificaciones.length) * 100) / 100;
                    indexMateria += 1;
                }
                _this.promediosTrimestres.push(Math.round((sum1 / profile.alumno.materias.length) * 100) / 100);
                _this.promediosTrimestres.push(Math.round((sum2 / profile.alumno.materias.length) * 100) / 100);
                _this.promediosTrimestres.push(Math.round((sum3 / profile.alumno.materias.length) * 100) / 100);
                var sumTotal = 0;
                for (var i = 0; i < _this.promediosTrimestres.length; i++) {
                    sumTotal += _this.promediosTrimestres[i];
                }
                _this.promedioFinal = sumTotal / _this.promediosTrimestres.length;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    VerAlumnoComponent.prototype.agregarMateria = function () {
        var _this = this;
        var materia = {
            matricula: this.matricula,
            nombreMateria: this.newNombreMateria,
            profesor: this.newNombreProfesor
        };
        this.authService.agregarMateria(materia).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.ngOnInit();
        });
    };
    VerAlumnoComponent.prototype.eliminarMateria = function () {
        var _this = this;
        var materia = {
            matricula: this.matricula,
            nombreMateria: this.nombreMateriaDelete
        };
        this.authService.eliminarMateria(materia).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.ngOnInit();
        });
    };
    VerAlumnoComponent.prototype.editarComentario = function (titulo, fecha, profesor, materia, texto) {
        this.editComentario = true;
        this.comentarioEdit = {
            titulo: titulo,
            texto: texto,
            profesor: profesor,
            materia: materia,
            fecha: fecha
        };
    };
    VerAlumnoComponent.prototype.cancelarPost = function () {
        this.editComentario = false;
    };
    VerAlumnoComponent.prototype.editarPost = function () {
        var _this = this;
        var comentario = {
            matricula: this.matricula,
            titulo: this.comentarioEdit.titulo,
            texto: this.comentarioEdit.texto
        };
        this.authService.editarComentario(comentario).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.ngOnInit();
        });
        this.editComentario = false;
    };
    VerAlumnoComponent.prototype.eliminarComentario = function (titulo) {
        var _this = this;
        if (this.authService.adminLoggedIn()) {
            var comentario = {
                matricula: this.matricula,
                titulo: titulo
            };
            this.authService.eliminarComentario(comentario).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
                _this.ngOnInit();
            });
        }
        else {
            this.router.navigate(['/alumnos']);
        }
    };
    VerAlumnoComponent.prototype.editarGrupoAlumno = function () {
        var _this = this;
        if (this.authService.adminLoggedIn()) {
            var grupo = {
                matricula: this.matricula,
                nivel: this.nivel,
                grado: this.grado,
                grupo: this.grupo
            };
            this.authService.editarGrupo(grupo).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.nivel = null;
                    _this.grado = null;
                    _this.grupo = null;
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
                _this.ngOnInit();
            });
        }
        else {
            this.router.navigate(['/alumnos']);
        }
    };
    VerAlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver-alumno',
            template: __webpack_require__(/*! ./ver-alumno.component.html */ "./src/app/components/alumnos/ver-alumno/ver-alumno.component.html"),
            styles: [__webpack_require__(/*! ./ver-alumno.component.css */ "./src/app/components/alumnos/ver-alumno/ver-alumno.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VerAlumnoComponent);
    return VerAlumnoComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n}\n\n.nav-item {\n  height: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubmF2LWl0ZW0ge1xuICBoZWlnaHQ6IDIuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"navbar-nav mt-auto\">\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\">\n                <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>\n                <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n              </svg>\n              Dashboard\n            </a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file\">\n                <path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path>\n                <polyline points=\"13 2 13 9 20 9\"></polyline>\n              </svg>\n              Orders\n            </a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\" #\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\">\n                <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\n                <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\n                <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n              </svg>\n              Products\n            </a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\" #\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\">\n                <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path>\n                <circle cx=\"9\" cy=\"7\" r=\"4\"></circle>\n                <path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path>\n                <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>\n              </svg>\n              Customers\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\" #\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bar-chart-2\">\n                <line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line>\n                <line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line>\n                <line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>\n              </svg>\n              Reports\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\" #\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layers\">\n                <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n                <polyline points=\"2 17 12 22 22 17\"></polyline>\n                <polyline points=\"2 12 12 17 22 12\"></polyline>\n              </svg>\n              Integrate\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n        <div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n          <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n        </div>\n        <div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n          <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n        </div>\n      </div>\n\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n        <h1 class=\"h2\">Dashboard</h1>\n        <div class=\"btn-toolbar mb-2 mb-md-0\">\n          <div class=\"btn-group mr-2\">\n            <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" style=\"margin: 0px 4px;\">Share</button>\n            <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" style=\"margin: 0px 4px;\">Export</button>\n          </div>\n          <button type=\"button\" class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\">\n              <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n              <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line>\n              <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line>\n              <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>\n            </svg>\n            This week\n          </button>\n        </div>\n      </div>\n\n      <!-- ADD A CHART -->\n\n      <h2>Section title</h2>\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped table-sm\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Header</th>\n              <th>Header</th>\n              <th>Header</th>\n              <th>Header</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>1,001</td>\n              <td>Lorem</td>\n              <td>ipsum</td>\n              <td>dolor</td>\n              <td>sit</td>\n            </tr>\n            <tr>\n              <td>1,002</td>\n              <td>amet</td>\n              <td>consectetur</td>\n              <td>adipiscing</td>\n              <td>elit</td>\n            </tr>\n            <tr>\n              <td>1,003</td>\n              <td>Integer</td>\n              <td>nec</td>\n              <td>odio</td>\n              <td>Praesent</td>\n            </tr>\n            <tr>\n              <td>1,003</td>\n              <td>libero</td>\n              <td>Sed</td>\n              <td>cursus</td>\n              <td>ante</td>\n            </tr>\n            <tr>\n              <td>1,004</td>\n              <td>dapibus</td>\n              <td>diam</td>\n              <td>Sed</td>\n              <td>nisi</td>\n            </tr>\n            <tr>\n              <td>1,005</td>\n              <td>Nulla</td>\n              <td>quis</td>\n              <td>sem</td>\n              <td>at</td>\n            </tr>\n            <tr>\n              <td>1,006</td>\n              <td>nibh</td>\n              <td>elementum</td>\n              <td>imperdiet</td>\n              <td>Duis</td>\n            </tr>\n            <tr>\n              <td>1,007</td>\n              <td>sagittis</td>\n              <td>ipsum</td>\n              <td>Praesent</td>\n              <td>mauris</td>\n            </tr>\n            <tr>\n              <td>1,008</td>\n              <td>Fusce</td>\n              <td>nec</td>\n              <td>tellus</td>\n              <td>sed</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </main>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3J1cG9zL3Zlci1hbHVtbm9zLWdydXBvL3Zlci1hbHVtbm9zLWdydXBvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"alumnos\" class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <h1>{{grupo.nombreMateria}}</h1>\n  <h3>{{grupo.nivel}} {{grupo.grado}}° \"{{grupo.grupo}}\"</h3>\n  <hr class=\"featurette-divider\">\n  <div *ngFor=\"let alumno of alumnos\" class=\"overflow-hidden col-md-12 position-relative p-4 m-md-1 bg-light\">\n    <div class=\"row\">\n      <div class=\"col-md-9 pull-left text-left\">\n        <h4 class=\"list-group-item-heading m-1\">{{ alumno.nombre }} {{ alumno.paterno }} {{ alumno.materno }}</h4>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <h6 class=\"font-weight-bold text-uppercase m-1\">\n              Matricula: <small class=\"list-group-item-text m-1\">{{ alumno.matricula }}</small>\n              CURP: <small class=\"list-group-item-text m-1\">{{ alumno.curp }}</small>\n              Fecha de nacimiento: <small class=\"list-group-item-text m-1\">{{ alumno.fechaNacimiento }}</small>\n            </h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 pull-right\">\n        <br>\n        <button *ngIf=\"this.authService.profesorLoggedIn()\" type=\"button\" (click)=\"editarAlumno(alumno.matricula)\" class=\"btn btn-outline-info btn-md btn-block\">Editar</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component.ts ***!
  \************************************************************************************/
/*! exports provided: VerAlumnosGrupoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerAlumnosGrupoComponent", function() { return VerAlumnosGrupoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import of the module for the flash messages


var VerAlumnosGrupoComponent = /** @class */ (function () {
    function VerAlumnosGrupoComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    VerAlumnosGrupoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.grupo = this.authService.getGrupo();
        if (this.authService.profesorLoggedIn() || this.authService.adminLoggedIn()) {
            this.authService.buscarAlumnosGrupo(this.grupo).subscribe(function (grupo) {
                if (grupo.success) {
                    _this.alumnos = grupo.alumnos;
                }
                else {
                    _this.flashMessage.show(grupo.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    if (_this.authService.profesorLoggedIn()) {
                        _this.router.navigate(['/clases']);
                    }
                    else if (_this.authService.adminLoggedIn()) {
                        _this.router.navigate(['/profesores']);
                    }
                }
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    VerAlumnosGrupoComponent.prototype.editarAlumno = function (matricula) {
        this.authService.setMatriculaAlumno(matricula);
        this.router.navigate(['/editarAlumno']);
    };
    VerAlumnosGrupoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver-alumnos-grupo',
            template: __webpack_require__(/*! ./ver-alumnos-grupo.component.html */ "./src/app/components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component.html"),
            styles: [__webpack_require__(/*! ./ver-alumnos-grupo.component.css */ "./src/app/components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VerAlumnosGrupoComponent);
    return VerAlumnosGrupoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonsMargins {\n  margin: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uc01hcmdpbnMge1xuICBtYXJnaW46IDBweCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"col-md-12 p-lg-5 mx-auto my-6\">\n    <h1 class=\"display-4 font-weight-normal\">Colegio EXAMPLE administración</h1>\n    <p class=\"lead font-weight-normal\">Aplicación web que lleva el control de calificaciones tareas con roles de profesores, alumnos y un admin</p>\n    <div *ngIf=\"!this.authService.loggedIn()\">\n      <a class=\"btn btn-outline-primary buttonsMargins\" [routerLink]=\"['/login']\">Ingresar</a>\n    </div>\n  </div>\n</div>\n<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>First column</h3>\n      <p>Hey there we are making a try</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Second column</h3>\n      <p>Hey there we are making a try</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Third column</h3>\n      <p>Hey there we are making a try</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.numeroAlumnos = 244;
        this.numeroGrupos = 12;
        this.numeroProfesores = 22;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"col-md-5 p-lg-5 mx-auto my-6\">\n    <div class=\"form-group\">\n      <h2>Inicio de sesión</h2>\n    </div>\n    <div class=\"dropdown-divider\"></div>\n    <form class=\"px-4 py-3\" (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <label>Matricula</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"matricula\" name=\"matricula\" placeholder=\"K2A12\">\n      </div>\n      <div class=\"form-group\">\n        <label>Contraseña</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Contraseña\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-outline-primary\">Ingresar</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var alumnoprofesor = {
            matricula: this.matricula,
            password: this.password
        };
        var admin = {
            username: this.matricula,
            password: this.password
        };
        this.authService.authenticateAlumno(alumnoprofesor).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.alumno, 0);
                _this.flashMessage.show("Bienvenido/a " + data.alumno.nombre + " " + data.alumno.paterno + " " + data.alumno.materno, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.authService.authenticateProfesor(alumnoprofesor).subscribe(function (data) {
                    if (data.success) {
                        _this.authService.storeUserData(data.token, data.profesor, 1);
                        _this.flashMessage.show("Bienvenido/a " + data.profesor.nombre + " " + data.profesor.paterno + " " + data.profesor.materno, {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        _this.router.navigate(['/']);
                    }
                    else {
                        _this.authService.authenticateAdmin(admin).subscribe(function (data) {
                            if (data.success) {
                                _this.authService.storeUserData(data.token, data.admin, 2);
                                _this.flashMessage.show("Bienvenido/a " + data.admin.username, {
                                    cssClass: 'alert-success',
                                    timeout: 5000
                                });
                                _this.router.navigate(['/']);
                            }
                            else {
                                _this.flashMessage.show("Los campos son incorrectos", {
                                    cssClass: 'alert-danger',
                                    timeout: 5000
                                });
                                _this.router.navigate(['/login']);
                            }
                        });
                    }
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBoZWlnaHQ6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\">Colegio Example</a>\n  <ul class=\"navbar-nav mr-auto p-2\">\n    <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/']\">Principal</a></li>\n    <li *ngIf=\"authService.alumnoLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/verAlumno']\">Calificaciones</a></li>\n    <li *ngIf=\"authService.profesorLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/clases']\">Clases</a></li>\n    <li ngbDropdown *ngIf=\"authService.adminLoggedIn()\" class=\"nav-item dropdown show\">\n      <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" style=\"cursor: pointer;\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">Administración</a>\n      <div ngbDropdownMenu class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);\">\n        <a class=\"dropdown-item\"><a class=\"nav-link dropdown-item\" [routerLink]=\"['/alumnos']\" style=\"color: black;\">Alumnos</a></a>\n        <a class=\"dropdown-item\"><a class=\"nav-link dropdown-item\" [routerLink]=\"['/profesores']\" style=\"color: black;\">Profesores</a></a>\n        <a class=\"dropdown-item\"><a class=\"nav-link dropdown-item\" [routerLink]=\"['/admins']\" style=\"color: black;\">Administradores</a></a>\n      </div>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav \">\n    <!-- <li *ngIf=\"authService.adminLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a></li> -->\n    <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">Perfil</a></li>\n    <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/login']\">Ingresar</a></li>\n    <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Salir</a></li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        // Send the instruction to clear the local storage and the memory of the user logged in
        this.authService.logout();
        this.flashMessage.show('Has cerrado sesion', {
            cssClass: 'alert-warning',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profesores/agregar-profesor/agregar-profesor.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/profesores/agregar-profesor/agregar-profesor.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzb3Jlcy9hZ3JlZ2FyLXByb2Zlc29yL2FncmVnYXItcHJvZmVzb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/profesores/agregar-profesor/agregar-profesor.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/profesores/agregar-profesor/agregar-profesor.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 m-md-1 bg-light\">\n  <form>\n    <h2>Agregar Profesor</h2><br>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Matricula</label>\n      <div class=\"col-sm-7 pull-left text-left\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Matricula . .\" [(ngModel)]=\"matricula\" [ngModelOptions]=\"{standalone: true}\">\n        <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\n          Ejemplo: P12 <br>\n          (P)12 - Profesor<br>\n          P(12) - Número de profesor\n        </small>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Nombre(s)</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Nombre(s) . .\" [(ngModel)]=\"nombre\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Apellido Paterno</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Paterno . .\" [(ngModel)]=\"paterno\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Apellido Materno</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Materno . .\" [(ngModel)]=\"materno\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Posición</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Posición . .\" [(ngModel)]=\"posicion\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Teléfono</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Teléfono . .\" [(ngModel)]=\"telefono\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Correo</label>\n      <div class=\"col-sm-7\">\n        <input type=\"mail\" class=\"form-control\" placeholder=\"Correo . .\" [(ngModel)]=\"correo\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"contrasena\" class=\"col-sm-5 p-2 col-form-label\">Contraseña</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Contraseña . .\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-5 p-2 col-form-label\">Confirmación de contraseña</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Confirmacion . .\" [(ngModel)]=\"passwordConfirmation\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <!-- HACER LOS NGMODEL -->\n    <div class=\"form-group row\">\n      <div class=\"col-sm-12\" *ngIf=\"matricula && posicion && nombre && paterno && materno && telefono && correo && password && passwordConfirmation\">\n        <button type=\"submit\" (click)=\"agregarProfesor()\" class=\"btn btn-primary btn-md btn-block\">Confirmar</button>\n      </div>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/profesores/agregar-profesor/agregar-profesor.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/profesores/agregar-profesor/agregar-profesor.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AgregarProfesorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarProfesorComponent", function() { return AgregarProfesorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import of the services
// import { ValidateService } from '../../../services/validate.service';

// Import of the module for the flash messages

// Bring out the Router so we can redirect from the code

var AgregarProfesorComponent = /** @class */ (function () {
    function AgregarProfesorComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    AgregarProfesorComponent.prototype.ngOnInit = function () {
    };
    AgregarProfesorComponent.prototype.agregarProfesor = function () {
        var _this = this;
        var profesor = {
            permiso: 1,
            matricula: this.matricula,
            nombre: this.nombre,
            paterno: this.paterno,
            materno: this.materno,
            posicion: this.posicion,
            telefono: this.telefono,
            correo: this.correo,
            password: this.password
        };
        if (this.password === this.passwordConfirmation) {
            this.authService.registerProfesor(profesor).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.matricula = null;
                    _this.nombre = null;
                    _this.paterno = null;
                    _this.materno = null;
                    _this.posicion = null;
                    _this.telefono = null;
                    _this.correo = null;
                    _this.password = null;
                    _this.passwordConfirmation = null;
                    _this.router.navigate(['/profesores']);
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flashMessage.show('Las contraseñas no coinciden', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    AgregarProfesorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agregar-profesor',
            template: __webpack_require__(/*! ./agregar-profesor.component.html */ "./src/app/components/profesores/agregar-profesor/agregar-profesor.component.html"),
            styles: [__webpack_require__(/*! ./agregar-profesor.component.css */ "./src/app/components/profesores/agregar-profesor/agregar-profesor.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AgregarProfesorComponent);
    return AgregarProfesorComponent;
}());



/***/ }),

/***/ "./src/app/components/profesores/clases/clases.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/profesores/clases/clases.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzb3Jlcy9jbGFzZXMvY2xhc2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profesores/clases/clases.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/profesores/clases/clases.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <h1>Clases de {{profesor?.nombre}} {{profesor?.materno}} {{profesor?.paterno}}</h1>\n  <hr class=\"featurette-divider\">\n  <div class=\"card-deck mb-3 text-center justify-content-around\">\n\n    <div *ngFor=\"let clase of profesor?.clases; let i = index\" class=\"card mb-4 shadow-sm\" style=\"min-width: 350px; max-width: 350px\">\n      <div class=\"card-header\">\n        <h3 class=\"my-0 font-weight-normal\">{{clase.nombreClase}}</h3>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title pricing-card-title\">{{clase.grado}}° \"{{clase.grupo}}\"</h4>\n        <ul class=\"list-unstyled mt-3 mb-4\">\n          <li>{{clase.nivel}}</li>\n        </ul>\n        <button (click)=\"saveGrupoAlumnos(clase.nivel, clase.grado, clase.grupo, clase.nombreClase, profesor.nombre)\" type=\"button\" class=\"btn btn-outline-info btn-md btn-block\">Ver grupo</button>\n        <button *ngIf=\"this.authService.adminLoggedIn()\" (click)=\"deleteClase(clase.nombreClase, clase.nivel, clase.grado, clase.grupo)\" type=\"button\" class=\"btn btn-outline-danger btn-md btn-block\">Eliminar grupo</button>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"this.authService.adminLoggedIn()\" class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Agregar clase</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"position-relative overflow-hidden p-3 m-md-1\">\n          <div class=\"form-group\">\n            <label class=\"col-md-12 p-2 col-form-label\">Nombre de la materia</label>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <input type=\"text\" class=\"form-control\" name=\"nombreClase\" [(ngModel)]=\"nombreClase\" placeholder=\"Nombre de la clase . .\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <label class=\"col-md-12 p-2 col-form-label\">Nivel</label>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <select class=\"form-control\" name=\"nivel\" [(ngModel)]=\"nivel\" placeholder=\"Grado . .\">\n                  <option value=\"Preescolar\">Preescolar</option>\n                  <option value=\"Primaria\">Primaria</option>\n                  <option value=\"Secundaria\">Secundaria</option>\n                </select>\n              </div>\n            </div>\n            <label class=\"col-md-12 p-2 col-form-label\">Grado</label>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <input type=\"number\" class=\"form-control\" name=\"grado\" [(ngModel)]=\"grado\" placeholder=\"Grado . .\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <label class=\"col-md-12 p-2 col-form-label\">Grupo</label>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <input type=\"text\" class=\"form-control\" name=\"grupo\" [(ngModel)]=\"grupo\" placeholder=\"Grupo . .\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"nombreClase && nivel && grado && grupo\" type=\"button\" (click)=\"addClase()\" class=\"btn btn-outline-info\">Agregar</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profesores/clases/clases.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/profesores/clases/clases.component.ts ***!
  \******************************************************************/
/*! exports provided: ClasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasesComponent", function() { return ClasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import of the module for the flash messages


var ClasesComponent = /** @class */ (function () {
    function ClasesComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.matricula = "";
    }
    ClasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.profesorLoggedIn()) {
            this.authService.getProfileProfesor().subscribe(function (profile) {
                _this.profesor = profile.profesor;
            });
        }
        else if (this.authService.adminLoggedIn()) {
            this.matricula = this.authService.getMatricualVerProfesor();
            var profesor = {
                matricula: this.matricula
            };
            this.authService.buscarProfesorMatricula(profesor).subscribe(function (data) {
                if (data.success) {
                    _this.profesor = data.profesor;
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/profesores']);
                }
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    ClasesComponent.prototype.saveGrupoAlumnos = function (nivel, grado, grupo, nombreMateria, profesor) {
        var grupoSend = {
            nivel: nivel,
            grado: grado,
            grupo: grupo,
            nombreMateria: nombreMateria,
            profesor: profesor
        };
        this.authService.setGrupo(grupoSend);
        this.router.navigate(['/grupo']);
    };
    ClasesComponent.prototype.addClase = function () {
        var _this = this;
        if (this.authService.adminLoggedIn()) {
            var clase = {
                matricula: this.matricula,
                nombreClase: this.nombreClase,
                nivel: this.nivel,
                grado: this.grado,
                grupo: this.grupo
            };
            this.authService.addClaseProfesor(clase).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.matricula = null;
                    _this.nombreClase = null;
                    _this.nivel = null;
                    _this.grado = null;
                    _this.grupo = null;
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
                _this.ngOnInit();
            });
        }
        else {
            this.router.navigate(['/profesores']);
        }
    };
    ClasesComponent.prototype.deleteClase = function (nombreClase, nivel, grado, grupo) {
        var _this = this;
        if (this.authService.adminLoggedIn()) {
            var clase = {
                matricula: this.matricula,
                nombreClase: nombreClase,
                nivel: nivel,
                grado: grado,
                grupo: grupo
            };
            this.authService.deleteClaseProfesor(clase).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
                _this.ngOnInit();
            });
        }
        else {
            this.router.navigate(['/profesores']);
        }
    };
    ClasesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clases',
            template: __webpack_require__(/*! ./clases.component.html */ "./src/app/components/profesores/clases/clases.component.html"),
            styles: [__webpack_require__(/*! ./clases.component.css */ "./src/app/components/profesores/clases/clases.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClasesComponent);
    return ClasesComponent;
}());



/***/ }),

/***/ "./src/app/components/profesores/listar-profesores/listar-profesores.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/profesores/listar-profesores/listar-profesores.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzb3Jlcy9saXN0YXItcHJvZmVzb3Jlcy9saXN0YXItcHJvZmVzb3Jlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/profesores/listar-profesores/listar-profesores.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/profesores/listar-profesores/listar-profesores.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 m-md-1 bg-light\">\n  <form>\n    <h2>Buscar Profesores</h2><br>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 p-2 col-form-label\">Matricula</label>\n      <div class=\"col-sm-8 pull-left text-left\">\n        <input type=\"text\" class=\"form-control\" name=\"matricula\" [(ngModel)]=\"matricula\" placeholder=\"Matricula . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 p-2 col-form-label\">Nombre(s)</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" name=\"nombre\" [(ngModel)]=\"nombre\" placeholder=\"Nombre(s) . .\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-12\" *ngIf=\"matricula && !nombre\">\n        <button type=\"submit\" (click)=\"buscarProfesorMatricula()\" class=\"btn btn-primary btn-md btn-block\">Buscar</button>\n      </div>\n      <div class=\"col-sm-12\" *ngIf=\"!matricula && nombre\">\n        <button type=\"submit\" (click)=\"buscarProfesoresNombre()\" class=\"btn btn-primary btn-md btn-block\">Buscar</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n<hr *ngIf=\"profesores\" class=\"featurette-divider\">\n<div *ngFor=\"let profesor of profesores\" class=\"overflow-hidden position-relative p-4 m-md-1 bg-light\">\n  <div class=\"row\">\n    <div class=\"col-md-9 pull-left text-left\">\n      <h4 class=\"list-group-item-heading m-1\">{{ profesor.nombre }} {{ profesor.paterno }} {{ profesor.materno }}</h4>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <p class=\"font-weight-bold text-uppercase m-1\">Matricula: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Posicion: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Telefono: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Correo: </p>\n        </div>\n        <div class=\"col-md-8\">\n          <p class=\"list-group-item-text m-1\">{{ profesor.matricula }}</p>\n          <p class=\"list-group-item-text m-1\">{{ profesor.posicion }}</p>\n          <p class=\"list-group-item-text m-1\">{{ profesor.telefono }}</p>\n          <p class=\"list-group-item-text m-1\">{{ profesor.correo }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 pull-right\">\n      <br>\n      <button type=\"button\" (click)=\"verProfesor(profesor.matricula)\" class=\"btn btn-outline-info btn-md btn-block\">Ver</button>\n      <br><br>\n      <button type=\"button\" (click)=\"eliminarProfesor(profesor.matricula)\" class=\"btn btn-outline-danger btn-md btn-block\">Eliminar</button>\n    </div>\n  </div>\n</div>\n\n<hr *ngIf=\"profesor\" class=\"featurette-divider\">\n<div *ngIf=\"profesor\" class=\"overflow-hidden position-relative p-4 m-md-1 bg-light\">\n  <div class=\"row\">\n    <div class=\"col-md-9 pull-left text-left\">\n      <h4 class=\"list-group-item-heading m-1\">{{ profesor.nombre }} {{ profesor.paterno }} {{ profesor.materno }}</h4>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <p class=\"font-weight-bold text-uppercase m-1\">Matricula: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Posicion: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Telefono: </p>\n          <p class=\"font-weight-bold text-uppercase m-1\">Correo: </p>\n        </div>\n        <div class=\"col-md-8\">\n          <p class=\"list-group-item-text m-1\">{{ profesor.matricula }}</p>\n          <p class=\"list-group-item-text m-1\">{{ profesor.posicion }}</p>\n          <p class=\"list-group-item-text m-1\">{{ profesor.telefono }}</p>\n          <p class=\"list-group-item-text m-1\">{{ profesor.correo }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 pull-right\">\n      <br>\n      <button type=\"button\" (click)=\"verProfesor(profesor.matricula)\" class=\"btn btn-outline-info btn-md btn-block\">Ver</button>\n      <br><br>\n      <button type=\"button\" (click)=\"eliminarProfesor(profesor.matricula)\" class=\"btn btn-outline-danger btn-md btn-block\">Eliminar</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profesores/listar-profesores/listar-profesores.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/profesores/listar-profesores/listar-profesores.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ListarProfesoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProfesoresComponent", function() { return ListarProfesoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import of the services

// Import of the module for the flash messages

// Bring out the Router so we can redirect from the code

var ListarProfesoresComponent = /** @class */ (function () {
    function ListarProfesoresComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ListarProfesoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllProfesores().subscribe(function (data) {
            if (data.profesores.length > 0) {
                _this.profesores = data.profesores;
            }
        });
    };
    ListarProfesoresComponent.prototype.buscarProfesorMatricula = function () {
        var _this = this;
        var profesor = {
            matricula: this.matricula
        };
        this.authService.buscarProfesorMatricula(profesor).subscribe(function (data) {
            if (data.success) {
                _this.profesor = data.profesor;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.profesores = null;
        this.matricula = null;
    };
    ListarProfesoresComponent.prototype.buscarProfesoresNombre = function () {
        var _this = this;
        var profesor = {
            nombre: this.nombre
        };
        this.authService.buscarProfesoresNombre(profesor).subscribe(function (data) {
            if (data.success) {
                _this.profesores = data.profesores;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.profesor = null;
        this.nombre = null;
    };
    ListarProfesoresComponent.prototype.verProfesor = function (matricula) {
        this.authService.setMatriculaVerProfesor(matricula);
        this.router.navigate(['/clases']);
    };
    ListarProfesoresComponent.prototype.eliminarProfesor = function (matricula) {
        var _this = this;
        var profesor = {
            matricula: matricula
        };
        this.authService.eliminarProfesor(profesor).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.profesor = null;
                _this.profesores = null;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.ngOnInit();
        });
    };
    ListarProfesoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-profesores',
            template: __webpack_require__(/*! ./listar-profesores.component.html */ "./src/app/components/profesores/listar-profesores/listar-profesores.component.html"),
            styles: [__webpack_require__(/*! ./listar-profesores.component.css */ "./src/app/components/profesores/listar-profesores/listar-profesores.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListarProfesoresComponent);
    return ListarProfesoresComponent;
}());



/***/ }),

/***/ "./src/app/components/profesores/profesores.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/profesores/profesores.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzb3Jlcy9wcm9mZXNvcmVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profesores/profesores.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/profesores/profesores.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-agregar-profesor></app-agregar-profesor>\n    </div>\n    <div class=\"col-md-7\">\n      <app-listar-profesores></app-listar-profesores>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profesores/profesores.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/profesores/profesores.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfesoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesoresComponent", function() { return ProfesoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfesoresComponent = /** @class */ (function () {
    function ProfesoresComponent() {
    }
    ProfesoresComponent.prototype.ngOnInit = function () {
    };
    ProfesoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profesores',
            template: __webpack_require__(/*! ./profesores.component.html */ "./src/app/components/profesores/profesores.component.html"),
            styles: [__webpack_require__(/*! ./profesores.component.css */ "./src/app/components/profesores/profesores.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfesoresComponent);
    return ProfesoresComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-light\">\n  <div class=\"col-md-8 p-lg-5 mx-auto my-6\" *ngIf=\"typeUser === 0\">\n    <h2 class=\"page-header\">{{user.nombre}} {{user.materno}} {{user.paterno}}</h2>\n    <hr class=\"featurette-divider\">\n    <ul class=\"list-group\">\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Matricula</h5>\n          <p class=\"mb-1\">{{user.matricula}}</p>\n        </div>\n      </a>\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">CURP</h5>\n          <p class=\"mb-1\">{{user.curp}}</p>\n        </div>\n      </a>\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Nivel</h5>\n          <p class=\"mb-1\">{{user.nivel}}</p>\n        </div>\n      </a>\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Grado</h5>\n          <p class=\"mb-1\">{{user.grado}}°</p>\n        </div>\n      </a>\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Grupo</h5>\n          <p class=\"mb-1\">\"{{user.grupo}}\"</p>\n        </div>\n      </a>\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Fecha de nacimiento</h5>\n          <p class=\"mb-1\">{{user.fechaNacimiento}}</p>\n        </div>\n      </a>\n    </ul>\n  </div>\n  <div class=\"col-md-8 p-lg-5 mx-auto my-6\" *ngIf=\"typeUser === 1\">\n    <h2 class=\"page-header\">{{user.nombre}} {{user.materno}} {{user.paterno}}</h2>\n    <hr class=\"featurette-divider\">\n    <ul class=\"list-group\">\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Matricula</h5>\n          <p class=\"mb-1\">{{user.matricula}}</p>\n        </div>\n      </a>\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Posición</h5>\n          <p class=\"mb-1\">{{user.posicion}}</p>\n        </div>\n      </a>\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Teléfono</h5>\n          <p class=\"mb-1\">{{user.telefono}}</p>\n        </div>\n      </a>\n      <a class=\"m-sm-1 list-group-item flex-column align-items-start \">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Correo</h5>\n          <p class=\"mb-1\">{{user.correo}}</p>\n        </div>\n      </a>\n    </ul>\n  </div>\n  <div class=\"col-md-8 p-lg-5 mx-auto my-6\" *ngIf=\"typeUser === 2\">\n    <h2 class=\"page-header\">{{user.username}}</h2>\n    <hr class=\"featurette-divider\">\n    <p>ELIMINAR CUENTA DE ADMINISTRADOR<br>Al hacer esto perderas la cuenta que tiene todos los permisos de administración en la aplicación y base de datos.</p>\n    <form>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-5\">\n          <label class=\"col-sm-12 col-form-label\">Ingresa el siguiente texto: </label>\n          <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\"Acepto eliminar mi cuenta\"</small>\n        </div>\n        <div class=\"col-sm-7\">\n          <input type=\"text\" class=\"form-control\" name=\"textoConfirmacion\" [(ngModel)]=\"textoConfirmacion\" placeholder=\"Texto . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-5 p-3 col-form-label\">Contraseña</label>\n        <div class=\"col-sm-7\">\n          <input type=\"password\" class=\"form-control\" name=\"adminPassword\" [(ngModel)]=\"adminPassword\" placeholder=\"Contraseña . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-5 p-3 col-form-label\">Confirmación de contraseña</label>\n        <div class=\"col-sm-7\">\n          <input type=\"password\" class=\"form-control\" name=\"adminPasswordConfirmation\" [(ngModel)]=\"adminPasswordConfirmation\" placeholder=\"Confirmación de contraseña . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-12\" *ngIf=\"allCorrect()\">\n          <button type=\"submit\" (click)=\"eliminarAdmin(user.username)\" class=\"btn btn-danger btn-md btn-block\">Confirmar</button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"col-md-8 p-lg-5 mx-auto my-6\">\n    <h5 class=\"page-header\">Cambiar contraseña</h5>\n    <hr class=\"featurette-divider\">\n    <p>Al hacer esto cambiaras de la contraseña asignada por los administradores.</p>\n    <form>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-5\">\n          <label class=\"col-sm-12 col-form-label\">Ingresa el siguiente texto: </label>\n          <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\"Acepto cambiar mi contraseña\"</small>\n        </div>\n        <div class=\"col-sm-7\">\n          <input type=\"text\" class=\"form-control\" name=\"textoConfirmacionPassword\" [(ngModel)]=\"textoConfirmacionPassword\" placeholder=\"Texto . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-5 p-3 col-form-label\">Contraseña</label>\n        <div class=\"col-sm-7\">\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Contraseña . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-5 p-3 col-form-label\">Confirmación de contraseña</label>\n        <div class=\"col-sm-7\">\n          <input type=\"password\" class=\"form-control\" name=\"passwordConfirmation\" [(ngModel)]=\"passwordConfirmation\" placeholder=\"Confirmación de contraseña . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-5 p-3 col-form-label\">Contraseña nueva</label>\n        <div class=\"col-sm-7\">\n          <input type=\"password\" class=\"form-control\" name=\"passwordNew\" [(ngModel)]=\"passwordNew\" placeholder=\"Contraseña nueva . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-5 p-3 col-form-label\">Confirmación de contraseña nueva</label>\n        <div class=\"col-sm-7\">\n          <input type=\"password\" class=\"form-control\" name=\"passwordNewConfirmacion\" [(ngModel)]=\"passwordNewConfirmacion\" placeholder=\"Contraseña nueva confirmación . .\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-12\" *ngIf=\"allCorrectChangePassword()\">\n          <button type=\"submit\" (click)=\"cambiarPassword()\" class=\"btn btn-warning btn-md btn-block\">Confirmar</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import of the module for the flash messages


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.alumnoLoggedIn()) {
            this.authService.getProfileAlumno().subscribe(function (profile) {
                _this.user = profile.alumno;
                _this.matricula = profile.alumno.matricula;
                _this.typeUser = 0;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else if (this.authService.profesorLoggedIn()) {
            this.authService.getProfileProfesor().subscribe(function (profile) {
                _this.user = profile.profesor;
                _this.matricula = profile.profesor.matricula;
                _this.typeUser = 1;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else if (this.authService.adminLoggedIn()) {
            this.authService.getProfileAdmin().subscribe(function (profile) {
                _this.user = profile.admin;
                _this.matricula = profile.admin.username;
                _this.typeUser = 2;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            this.flashMessage.show("Perfil no encontrado", { cssClass: 'alert-danger', timeout: 3000 });
            this.router.navigate(['/dashboard']);
        }
    };
    ProfileComponent.prototype.eliminarAdmin = function (username) {
        var _this = this;
        var eliminar = {
            username: username,
            password: this.adminPassword
        };
        this.authService.deleteAdmin(eliminar).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.logout();
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.allCorrect = function () {
        if (this.adminPassword === this.adminPasswordConfirmation && this.adminPassword && this.adminPasswordConfirmation && this.textoConfirmacion === "Acepto eliminar mi cuenta") {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.allCorrectChangePassword = function () {
        if (this.password === this.passwordConfirmation && this.password && this.passwordConfirmation && this.passwordNew && this.passwordNewConfirmacion && this.passwordNew === this.passwordNewConfirmacion && this.textoConfirmacionPassword === "Acepto cambiar mi contraseña") {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.cambiarPassword = function () {
        var _this = this;
        if (this.typeUser === 2) {
            var user = {
                username: this.matricula,
                password: this.password,
                newPassword: this.passwordNew
            };
            this.authService.editarPasswordAdmin(user).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.textoConfirmacionPassword = null;
                    _this.password = null;
                    _this.passwordConfirmation = null;
                    _this.passwordNew = null;
                    _this.passwordNewConfirmacion = null;
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            var user = {
                matricula: this.matricula,
                password: this.password,
                newPassword: this.passwordNew
            };
            if (this.typeUser === 1) {
                this.authService.editarPasswordProfesor(user).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                        _this.textoConfirmacionPassword = null;
                        _this.password = null;
                        _this.passwordConfirmation = null;
                        _this.passwordNew = null;
                        _this.passwordNewConfirmacion = null;
                    }
                    else {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    }
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else if (this.typeUser == 0) {
                this.authService.editarPasswordAlumno(user).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                        _this.textoConfirmacionPassword = null;
                        _this.password = null;
                        _this.passwordConfirmation = null;
                        _this.passwordNew = null;
                        _this.passwordNewConfirmacion = null;
                    }
                    else {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    }
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Injectable to protect the routerlinks that you should not pass if youre not logged in



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.adminLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/alumno.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guards/alumno.guard.ts ***!
  \****************************************/
/*! exports provided: AlumnoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoGuard", function() { return AlumnoGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Injectable to protect the routerlinks that you should not pass if youre not logged in



var AlumnoGuard = /** @class */ (function () {
    function AlumnoGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AlumnoGuard.prototype.canActivate = function () {
        if (this.authService.alumnoLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AlumnoGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlumnoGuard);
    return AlumnoGuard;
}());



/***/ }),

/***/ "./src/app/guards/alumnoAdmin.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/alumnoAdmin.guard.ts ***!
  \*********************************************/
/*! exports provided: AlumnoAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoAdminGuard", function() { return AlumnoAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Injectable to protect the routerlinks that you should not pass if youre not logged in



var AlumnoAdminGuard = /** @class */ (function () {
    function AlumnoAdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AlumnoAdminGuard.prototype.canActivate = function () {
        if (this.authService.alumnoLoggedIn() || this.authService.adminLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AlumnoAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlumnoAdminGuard);
    return AlumnoAdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Injectable to protect the routerlinks that you should not pass if youre not logged in



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/notAuth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/notAuth.guard.ts ***!
  \*****************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Injectable to protect the routerlinks that you should not pass if youre not logged in



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    NotAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/profesor.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/profesor.guard.ts ***!
  \******************************************/
/*! exports provided: ProfesorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorGuard", function() { return ProfesorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Injectable to protect the routerlinks that you should not pass if youre not logged in



var ProfesorGuard = /** @class */ (function () {
    function ProfesorGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfesorGuard.prototype.canActivate = function () {
        if (this.authService.profesorLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    ProfesorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfesorGuard);
    return ProfesorGuard;
}());



/***/ }),

/***/ "./src/app/guards/profesorAdmin.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/profesorAdmin.guard.ts ***!
  \***********************************************/
/*! exports provided: ProfesorAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorAdminGuard", function() { return ProfesorAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Injectable to protect the routerlinks that you should not pass if youre not logged in



var ProfesorAdminGuard = /** @class */ (function () {
    function ProfesorAdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfesorAdminGuard.prototype.canActivate = function () {
        if (this.authService.profesorLoggedIn()) {
            return true;
        }
        else if (this.authService.adminLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    ProfesorAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfesorAdminGuard);
    return ProfesorAdminGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Bring http module and headers package

// Bring map operation cause we are working with observables

/* Import the JWT token from angular2-jwt
import { tokenNotExpired } from 'angular2-jwt';*/
// Import the JWT service from @auth0/angular-jwt *Angular v6+ and RxJS v6+*

var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.grupoAlumnos = {
            nivel: String,
            grado: String,
            grupo: String,
            nombreMateria: String,
            profesor: String
        };
    }
    /************ ALUMNO ************/
    AuthService.prototype.registerAlumno = function (alumno) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/register', alumno, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateAlumno = function (alumno) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/authenticate', alumno, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.alumnoLoggedIn = function () {
        if (localStorage.getItem('permisions') === '0')
            return !this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.buscarAlumnoMatricula = function (matriculaAlumno) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/getAlumno', matriculaAlumno, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.buscarAlumnosNombre = function (nombreAlumno) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/getAlumnosNombre', nombreAlumno, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.buscarAlumnosGrupo = function (grupo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/getAlumnosClase', grupo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.editarGrupo = function (grupo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/updateGrupo', grupo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.buscarAlumnosGrupoRaw = function (grupo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/getAlumnosGrupo', grupo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.eliminarAlumno = function (alumno) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/delete', alumno, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.editarPasswordAlumno = function (alumno) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/editPassword', alumno, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfileAlumno = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/alumnos/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.agregarComentario = function (comentario) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/addComentario', comentario, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.editarComentario = function (comentario) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/editComentario', comentario, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.agregarMateria = function (materia) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/addMateria', materia, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.cambiarCalificaciones = function (calificaciones) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/updateCalificaciones', calificaciones, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.eliminarMateria = function (materia) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/deleteMateria', materia, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.eliminarComentario = function (comentario) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alumnos/deleteComentario', comentario, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.setMatriculaAlumno = function (matricula) {
        this.matriculaVerAlumno = matricula;
    };
    AuthService.prototype.getMatriculaAlumno = function () {
        return this.matriculaVerAlumno;
    };
    AuthService.prototype.setGrupo = function (grupo) {
        this.grupoAlumnos = grupo;
    };
    AuthService.prototype.getGrupo = function () {
        return this.grupoAlumnos;
    };
    /************ PROFESOR ************/
    AuthService.prototype.registerProfesor = function (profesor) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/register', profesor, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateProfesor = function (profesor) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/authenticate', profesor, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.profesorLoggedIn = function () {
        if (localStorage.getItem('permisions') === '1')
            return !this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.editarPasswordProfesor = function (profesor) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/editPassword', profesor, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.buscarProfesorMatricula = function (profesor) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/getProfesor', profesor, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.buscarProfesoresNombre = function (profesor) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/getProfesoresNombre', profesor, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAllProfesores = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/getAllProfesores', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfesoresGrupo = function (grupo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/getProfesoresNombreByGroup', grupo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.eliminarProfesor = function (profesor) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/delete', profesor, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfileProfesor = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/profesores/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.addClaseProfesor = function (clase) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/addClase', clase, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteClaseProfesor = function (clase) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/profesores/deleteClase', clase, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.setMatriculaVerProfesor = function (matricula) {
        this.matriculaVerProfesor = matricula;
    };
    AuthService.prototype.getMatricualVerProfesor = function () {
        return this.matriculaVerProfesor;
    };
    /************ ADMIN ************/
    AuthService.prototype.registerAdmin = function (admin) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/register', admin, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateAdmin = function (admin) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/authenticate', admin, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.editarPasswordAdmin = function (admin) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/editPassword', admin, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.adminLoggedIn = function () {
        if (localStorage.getItem('permisions') === '2')
            return !this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.getProfileAdmin = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/admin/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAdmins = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/getAdmins', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteAdmin = function (admin) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/delete', admin, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    /************ GENERAL ************/
    AuthService.prototype.storeUserData = function (token, user, permisions) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('permisions', permisions);
        this.authToken = token;
        this.user = user;
        this.permisions = permisions;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.permisions = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    // Function of the sevice to validate that all the fields are filled
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // Function of the service to validate the email
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andoni/Documents/Angular/ColegioMEAN_V1/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map