(self["webpackChunkmk_cv"] = self["webpackChunkmk_cv"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _lightTheme_lightTheme_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightTheme/lightTheme.component */ 3154);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _darkTheme_darkTheme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./darkTheme/darkTheme.component */ 6582);
/* harmony import */ var _colorsTheme_colorsTheme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorsTheme/colorsTheme.component */ 1131);
/* harmony import */ var _cartoonTheme_cartoonTheme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartoonTheme/cartoonTheme.component */ 5876);









function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-lightTheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-darkTheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-colorsTheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-cartoonTheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(route) {
        this.route = route;
        this.title = 'app';
        this.currentApp = 'home';
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe(queryParams => {
            this.currentApp = queryParams.get('app');
            console.log('Data: ', queryParams);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 5, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentApp == "home" || ctx.currentApp == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentApp == "lightTheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentApp == "darkTheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentApp == "colorsTheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentApp == "cartoonsTheme");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _lightTheme_lightTheme_component__WEBPACK_IMPORTED_MODULE_0__.LightThemeComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _darkTheme_darkTheme_component__WEBPACK_IMPORTED_MODULE_2__.DarkThemeComponent, _colorsTheme_colorsTheme_component__WEBPACK_IMPORTED_MODULE_3__.ColorsThemeComponent, _cartoonTheme_cartoonTheme_component__WEBPACK_IMPORTED_MODULE_4__.CartoonThemeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _lightTheme_lightTheme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightTheme/lightTheme.component */ 3154);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing.module */ 1182);
/* harmony import */ var _darkTheme_darkTheme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./darkTheme/darkTheme.component */ 6582);
/* harmony import */ var _colorsTheme_colorsTheme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorsTheme/colorsTheme.component */ 1131);
/* harmony import */ var _cartoonTheme_cartoonTheme_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartoonTheme/cartoonTheme.component */ 5876);
/* harmony import */ var _digitalClock_digitalClock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./digitalClock/digitalClock.component */ 4453);
/* harmony import */ var _modernTheme_modernTheme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modernTheme/modernTheme.component */ 7802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _lightTheme_lightTheme_component__WEBPACK_IMPORTED_MODULE_1__.LightThemeComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _darkTheme_darkTheme_component__WEBPACK_IMPORTED_MODULE_4__.DarkThemeComponent,
        _colorsTheme_colorsTheme_component__WEBPACK_IMPORTED_MODULE_5__.ColorsThemeComponent,
        _cartoonTheme_cartoonTheme_component__WEBPACK_IMPORTED_MODULE_6__.CartoonThemeComponent,
        _digitalClock_digitalClock_component__WEBPACK_IMPORTED_MODULE_7__.DigitalClockComponent,
        _modernTheme_modernTheme_component__WEBPACK_IMPORTED_MODULE_8__.ModernThemeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule] }); })();


/***/ }),

/***/ 5876:
/*!********************************************************!*\
  !*** ./src/app/cartoonTheme/cartoonTheme.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartoonThemeComponent": () => (/* binding */ CartoonThemeComponent)
/* harmony export */ });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/data.service */ 2468);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);






function CartoonThemeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartoonThemeComponent_div_3_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const slide_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.showModalSmoothly(slide_r3.marker)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", slide_r3.width + "px")("background", slide_r3.photoUrl)("background-size", slide_r3.width + "px 100vh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-top", slide_r3.markerMarginTop + "px")("margin-left", slide_r3.markerMarginLeft + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", slide_r3.marker);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-left", -slide_r3.markerOffset + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r3.marker);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-left", -slide_r3.markerOffset + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r3.marker);
} }
const _c0 = function () { return { "background-image": "url(assets/Muhannadonia/cloud.png)" }; };
function CartoonThemeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "cloud" + i_r7)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
} }
function CartoonThemeComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/Muhannadonia/" + ctx_r8.selectedMarker + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CartoonThemeComponent_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/Muhannadonia/" + ctx_r9.selectedMarker + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CartoonThemeComponent_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "div", 34)(3, "div", 41)(4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Welcome to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Muhannadonia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 41)(10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Feel free to explore my town..");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 42)(13, "i")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Hint:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Scroll or Swipe left and rignt, and click on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " \u00A0 red labels \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} }
function CartoonThemeComponent_div_6_div_11_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](icon_r19);
} }
function CartoonThemeComponent_div_6_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CartoonThemeComponent_div_6_div_11_div_1_span_2_Template, 2, 2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 50)(8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const skill_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", skill_r17.icons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r17.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r17.name.split("(")[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", skill_r17.value + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r17.value, "% ");
} }
function CartoonThemeComponent_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartoonThemeComponent_div_6_div_11_div_1_Template, 10, 6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.data.skills);
} }
function CartoonThemeComponent_div_6_div_12_div_5_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r25.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", place_r25.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", place_r25.name)("alt", place_r25.name);
} }
function CartoonThemeComponent_div_6_div_12_div_5_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const study_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Since ", study_r21.from, " ");
} }
function CartoonThemeComponent_div_6_div_12_div_5_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const study_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", study_r21.from, " to ", study_r21.to, "");
} }
function CartoonThemeComponent_div_6_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CartoonThemeComponent_div_6_div_12_div_5_a_6_Template, 2, 4, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64)(8, "div", 59)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CartoonThemeComponent_div_6_div_12_div_5_span_15_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CartoonThemeComponent_div_6_div_12_div_5_span_16_Template, 2, 2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const study_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", study_r21.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](study_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", study_r21.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !study_r21.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", study_r21.to);
} }
function CartoonThemeComponent_div_6_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 54)(4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CartoonThemeComponent_div_6_div_12_div_5_Template, 17, 5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.data.studies);
} }
function CartoonThemeComponent_div_6_div_13_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 84);
} if (rf & 2) {
    const experience_r32 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-hide", ctx_r28.data.experiences[ctx_r28.selectedExperienceIndex] != experience_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/Muhannadonia/" + ctx_r28.data.experiences[ctx_r28.selectedExperienceIndex].title + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", ctx_r28.data.experiences[ctx_r28.selectedExperienceIndex].title)("alt", ctx_r28.data.experiences[ctx_r28.selectedExperienceIndex].title);
} }
function CartoonThemeComponent_div_6_div_13_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r33.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-circle", place_r33.circle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", place_r33.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", place_r33.name)("alt", place_r33.name);
} }
function CartoonThemeComponent_div_6_div_13_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Since ", ctx_r30.data.experiences[ctx_r30.selectedExperienceIndex].from, " ");
} }
function CartoonThemeComponent_div_6_div_13_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", ctx_r31.data.experiences[ctx_r31.selectedExperienceIndex].from, " to ", ctx_r31.data.experiences[ctx_r31.selectedExperienceIndex].to, "");
} }
function CartoonThemeComponent_div_6_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "div", 71)(4, "div", 72)(5, "div", 34)(6, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartoonThemeComponent_div_6_div_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.prev()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u276E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 74)(9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartoonThemeComponent_div_6_div_13_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.flipCard180 = !ctx_r36.flipCard180); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 76)(11, "div", 77)(12, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CartoonThemeComponent_div_6_div_13_img_13_Template, 1, 5, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 79)(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " (Click for details) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 80)(21, "div", 71)(22, "div", 69)(23, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CartoonThemeComponent_div_6_div_13_a_24_Template, 2, 6, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 59)(26, "div", 81)(27, "h3", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br")(31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CartoonThemeComponent_div_6_div_13_span_33_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CartoonThemeComponent_div_6_div_13_span_34_Template, 2, 2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 72)(36, "div", 34)(37, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartoonThemeComponent_div_6_div_13_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r13.selectedExperienceIndex == 0 || ctx_r13.disableButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-zoom-in", ctx_r13.zoomIn)("w3-zoom-out", ctx_r13.zoomOut)("w3-flip", ctx_r13.flipCard180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-hide", ctx_r13.flipCard180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.data.experiences);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.data.experiences[ctx_r13.selectedExperienceIndex].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-hide", !ctx_r13.flipCard180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.data.experiences[ctx_r13.selectedExperienceIndex].places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.data.experiences[ctx_r13.selectedExperienceIndex].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.data.experiences[ctx_r13.selectedExperienceIndex].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.data.experiences[ctx_r13.selectedExperienceIndex].to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.data.experiences[ctx_r13.selectedExperienceIndex].to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r13.selectedExperienceIndex == ctx_r13.data.experiences.length - 1 || ctx_r13.disableButtons);
} }
function CartoonThemeComponent_div_6_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91)(1, "div", 92)(2, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span")(6, "a", 66)(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const contactDetail_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contactDetail_r39.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", contactDetail_r39.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contactDetail_r39.detail);
} }
function CartoonThemeComponent_div_6_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "div", 34)(2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CartoonThemeComponent_div_6_div_14_div_4_Template, 10, 4, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 87)(6, "div", 88)(7, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u00A0Download\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.data.contactDetails);
} }
function CartoonThemeComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53)(1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Background was created using: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 95)(4, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Cartoons were created using: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 95)(10, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", ctx_r15.icogram);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", ctx_r15.Bitmoji);
} }
function CartoonThemeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25)(4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartoonThemeComponent_div_6_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r40.showModal = false; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.selectedExperience = null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CartoonThemeComponent_div_6_div_7_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CartoonThemeComponent_div_6_div_8_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CartoonThemeComponent_div_6_div_10_Template, 21, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CartoonThemeComponent_div_6_div_11_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CartoonThemeComponent_div_6_div_12_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CartoonThemeComponent_div_6_div_13_Template, 39, 19, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CartoonThemeComponent_div_6_div_14_Template, 11, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CartoonThemeComponent_div_6_div_15_Template, 12, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx_r2.modalTop + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-light-grey", ctx_r2.selectedMarker == "Credits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedMarker != "Credits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedMarker != "Credits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("l7", ctx_r2.selectedMarker != "Credits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedMarker == "Welcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedMarker == "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedMarker == "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedMarker == "Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedMarker == "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedMarker == "Credits");
} }
const _c1 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; };
class CartoonThemeComponent {
    constructor(data, viewportScroller) {
        this.data = data;
        this.viewportScroller = viewportScroller;
        this.originalSlides = [
            { width: 1000, markerMarginLeft: 180, markerMarginTop: 500, photoUrl: null, marker: "Welcome", markerOffset: 48 },
            { width: 1600, markerMarginLeft: 200, markerMarginTop: 575, photoUrl: null, marker: "Skills", markerOffset: 28 },
            { width: 2000, markerMarginLeft: 800, markerMarginTop: 400, photoUrl: null, marker: "Education", markerOffset: 58 },
            { width: 2000, markerMarginLeft: 1156, markerMarginTop: 320, photoUrl: null, marker: "Work", markerOffset: 28 },
            { width: 1400, markerMarginLeft: 1270, markerMarginTop: 428, photoUrl: null, marker: "Contact", markerOffset: 40 }
        ];
        this.slides = [];
        this.fullHeight = 1113;
        this.innerHeight = 0;
        this.wrapperWidth = 0;
        this.showModal = false;
        this.modalTop = -100;
        this.photosUrl = "url('assets/Muhannadonia/Muhannadonia_";
        this.selectedMarker = null;
        this.selectedExperienceIndex = 0;
        this.flipCard180 = false;
        this.zoomOut = false;
        this.zoomIn = false;
        this.disableButtons = false;
    }
    ngOnInit() {
        this.updateSizes();
        this.viewportScroller.scrollToAnchor('Work');
        this.showModalSmoothly('Welcome');
    }
    onResize(event) {
        this.updateSizes();
    }
    // @HostListener('window:wheel', ['$event']) 
    // windowScrolled(event) 
    // {
    //   let x = this.viewportScroller.scrollToAnchor('Work');
    //   console.log("scrolling " + x);
    // }
    updateSizes() {
        this.slides = [];
        this.wrapperWidth = 0;
        this.innerHeight = window.innerHeight;
        let heightRatio = (this.innerHeight / this.fullHeight);
        document.documentElement.style.setProperty('--heightRatio', heightRatio.toString());
        this.originalSlides.forEach((originalSlide, i) => {
            let s = new slide;
            s.width = heightRatio * this.originalSlides[i].width;
            s.markerMarginLeft = heightRatio * this.originalSlides[i].markerMarginLeft;
            s.markerMarginTop = heightRatio * this.originalSlides[i].markerMarginTop - 64;
            s.photoUrl = this.photosUrl + (i + 1) + ".png')";
            s.marker = originalSlide.marker;
            s.markerOffset = originalSlide.markerOffset;
            this.wrapperWidth += s.width;
            this.slides.push(s);
        });
    }
    showModalSmoothly(marker) {
        this.showModal = true;
        this.selectedMarker = marker;
        // Since CCS transition did not work on 'top' value :(
        this.modalTop = -100;
        let t = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(0, 10);
        t.subscribe(() => {
            if (this.modalTop < 0) {
                this.modalTop = this.modalTop + 1;
            }
        });
    }
    next() {
        this.zoom(+1);
    }
    prev() {
        this.zoom(-1);
    }
    zoom(value) {
        this.disableButtons = true;
        this.zoomOut = true;
        setTimeout(() => {
            this.selectedExperienceIndex = this.selectedExperienceIndex + value;
            this.zoomOut = false;
            if (this.flipCard180) {
                this.flipCard180 = false;
            }
            this.zoomIn = true;
            setTimeout(() => {
                this.zoomIn = false;
                this.disableButtons = false;
            }, 500);
        }, 500);
    }
}
CartoonThemeComponent.ɵfac = function CartoonThemeComponent_Factory(t) { return new (t || CartoonThemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.ViewportScroller)); };
CartoonThemeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartoonThemeComponent, selectors: [["app-cartoonTheme"]], hostBindings: function CartoonThemeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function CartoonThemeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 17, vars: 14, consts: [[1, "outer-wrapper"], [1, "wrapper", 2, "overflow-x", "hidden"], [2, "position", "absolute", "z-index", "-1000"], ["class", "slide", 3, "width", "background", "background-size", 4, "ngFor", "ngForOf"], [1, "sky", 2, "z-index", "10"], ["class", "cloud", 3, "id", "ngStyle", 4, "ngFor", "ngForOf"], ["class", "w3-modal", "style", "padding-top: 0; display: block;", 4, "ngIf"], [2, "position", "fixed", "right", "0", "bottom", "0"], [1, "w3-container", "w3-button", "w3-round", "w3-white", "w3-opacity", 3, "click"], [2, "position", "fixed", "left", "0", "top", "0"], [1, "w3-container", "w3-button", "w3-round", "w3-white", "w3-opacity"], ["href", "./"], [1, "fa", "fa-home"], ["autoplay", "", "loop", "", 2, "display", "none"], ["src", "assets/Muhannadonia/Village-ambience.mp3", "type", "audio/mpeg"], [1, "slide"], [1, "marker", 2, "position", "relative"], [1, "", 2, "cursor", "pointer", "width", "50px", 3, "title", "click"], [1, "w3-padding-small", "w3-xlarge", "w3-red", "w3-text-white", "w3-round-large", "w3-box-shadow", 2, "position", "fixed", "z-index", "0"], ["aria-hidden", "true", 1, "fa", "fa-map-marker", "w3-text-red", "w3-jumbo", "w3-text-shadow", 2, "position", "fixed", "z-index", "1"], [1, "w3-padding-small", "w3-xlarge", "w3-red", "w3-text-white", "w3-round-large", 2, "position", "fixed", "z-index", "2", "text-shadow", "1px 1px 0 #444"], [1, "cloud", 3, "id", "ngStyle"], [1, "w3-modal", 2, "padding-top", "0", "display", "block"], [1, "w3-modal-content", 2, "width", "90%"], [1, "w3-container"], [1, "w3-row-padding"], [1, "w3-button", "w3-display-topright", "w3-hover-opacity", 3, "click"], [1, "w3-row-padding", "w3-margin-bottom", "w3-center"], ["class", "", 4, "ngIf"], [1, "w3-col", "m12", "s12"], ["class", "w3-serif w3-margin-top", 4, "ngIf"], ["class", "w3-row-padding w3-margin", 4, "ngIf"], ["class", "w3-row-padding w3-margin-top", 4, "ngIf"], ["class", "w3-cell-row", "style", "min-height: 400px;", 4, "ngIf"], [1, ""], [1, "w3-col", "l5", "w3-hide-medium", "w3-hide-small"], [2, "max-width", "100%", "max-height", "50vh", 3, "src"], [1, "w3-col", "m12", "s12", "w3-hide-large"], [2, "max-width", "100%", "max-height", "35vh", 3, "src"], [1, "w3-serif", "w3-margin-top"], [1, "w3-full-center"], [1, "w3-row", "w3-padding-small", "w3-xxlarge"], [1, "w3-row", "w3-margin", "w3-xlarge", "blink"], [1, "w3-red", "w3-text-white", "w3-round-large"], [1, "w3-row-padding", "w3-margin"], ["class", "w3-col l12 m6 s12 w3-margin-bottom w3-left-align w3-small", 4, "ngFor", "ngForOf"], [1, "w3-col", "l12", "m6", "s12", "w3-margin-bottom", "w3-left-align", "w3-small"], ["class", "w3-hide-medium", 4, "ngFor", "ngForOf"], [1, "w3-hide-medium", "w3-hide-small"], [1, "w3-hide-large"], [1, "w3-light-grey", "w3-small"], [1, "w3-container", "w3-red", "w3-center"], [1, "w3-hide-medium"], [1, "w3-row-padding", "w3-margin-top"], [1, "w3-card-4", "w3-margin-top", "w3-brown", "w3-padding"], [1, "w3-container", "w3-orange", "w3-padding-32", "noise", "w3-row-padding"], ["class", "w3-col l6", 4, "ngFor", "ngForOf"], [1, "w3-col", "l6"], [1, "w3-card-4", "paper-shadow", "w3-pale-yellow", "w3-margin-bottom", "w3-padding", 2, "transform", "rotate(3deg)"], [1, "w3-row"], [1, "w3-row", "w3-center", "w3-margin-bottom"], ["aria-hidden", "true", 1, "fa", "fa-circle", "w3-text-red", "w3-text-shadow", "w3-xlarge"], [1, "w3-col", "l12", "m4", "s12", "w3-margin-bottom"], [3, "href", 4, "ngFor", "ngForOf"], [1, "w3-col", "l12", "m8", "s12"], [4, "ngIf"], [3, "href"], [1, "w3-image", "w3-padding", "w3-white", "w3-border", 2, "max-height", "100px", "width", "auto", 3, "src", "title", "alt"], [1, "w3-cell-row", 2, "min-height", "400px"], [1, "w3-cell", "w3-cell-middle"], [1, "w3-margin-top"], [1, "w3-cell-row"], [1, "w3-cell", "w3-cell-middle", 2, "width", "10%"], [1, "w3-button", "prev", 3, "disabled", "click"], [1, "w3-cell", "w3-cell-middle", "w3-container", "w3-center", "flip-card", 2, "width", "80%"], [1, "w3-card-4", "w3-light-grey", "flip-card-inner", 3, "click"], [1, "flip-card-front", 2, "overflow", "hidden"], [1, "w3-cell-row", 2, "width", "100%"], ["style", "max-height: 50vh; max-width: 100%;", 3, "src", "title", "alt", "w3-hide", 4, "ngFor", "ngForOf"], [1, "w3-large"], [1, "flip-card-back"], [1, "w3-margin", "w3-center"], [1, "w3-margin-bottom"], [1, "w3-button", "next", 3, "disabled", "click"], [2, "max-height", "50vh", "max-width", "100%", 3, "src", "title", "alt"], [1, "w3-margin-top", 2, "max-height", "80px", 3, "src", "title", "alt"], ["class", "w3-col l6 m6 s12", 4, "ngFor", "ngForOf"], [1, "w3-row", "w3-center", "w3-margin"], [1, "w3-button", "w3-margin", "w3-large", "w3-dark-grey"], ["href", "assets/CV.pdf", 2, "text-decoration", "none"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "w3-col", "l6", "m6", "s12"], [1, "w3-margin", "w3-padding-small", "w3-card-4", "w3-light-grey", "w3-text-black", "w3-center", 2, "overflow-wrap", "break-word", "height", "120px"], [1, "w3-margin", "w3-xxlarge"], [1, "w3-row", "w3-margin", "w3-padding", "w3-xlarge"], [1, "w3-row", "w3-margin", "w3-padding"], ["href", "https://icograms.com"], ["src", "assets/logos/icograms.svg", 2, "height", "100px", "max-width", "100%", 3, "alt"], [2, "border-top", "1px dashed black"], ["href", "https://www.bitmoji.com/"], ["src", "assets/logos/bitmoji.svg", 2, "height", "100px", "max-width", "100%", 3, "alt"]], template: function CartoonThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CartoonThemeComponent_div_3_Template, 11, 17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CartoonThemeComponent_div_5_Template, 1, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CartoonThemeComponent_div_6_Template, 16, 14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartoonThemeComponent_Template_div_click_8_listener() { return ctx.showModalSmoothly("Credits"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "audio", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "source", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.wrapperWidth + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.wrapperWidth + "px")("height", ctx.innerHeight + "px")("background", "url(assets/Muhannadonia/Muhannadonia.png)")("background-size", "contain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showModal);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: [".outer-wrapper[_ngcontent-%COMP%] \r\n{\r\n    width: 100vh;\r\n    height: 100vw;\r\n    transform: rotate(-90deg) translateX(-100vh);\r\n    transform-origin: top left;\r\n    overflow-y: scroll;\r\n    overflow-x: scroll;\r\n    position: absolute;\r\n    scrollbar-width: none;\r\n    -ms-overflow-style: none;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar \r\n{\r\n    display:none;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] \r\n{\r\n    display: flex;\r\n    flex-direction: row;\r\n    transform: rotate(90deg) translateY(-100vh);\r\n    transform-origin: top left;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%] \r\n{\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    overflow: hidden;\r\n}\r\n\r\n.horizontal-container[_ngcontent-%COMP%]\r\n{\r\n    display: flex;    overflow-x: auto;\r\n}\r\n\r\n.marker[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover\r\n{\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sky[_ngcontent-%COMP%] \r\n{\r\n    \r\n    height: 25%;\r\n}\r\n\r\n.cloud[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: no-repeat;\r\n    width: 176px;\r\n    height: 114px;\r\n    opacity: 0.7;\r\n    margin-top: 2%;\r\n    transform: scaleX(-1);\r\n}\r\n\r\n#cloud1[_ngcontent-%COMP%] {\r\n    top: 40px;\r\n    left: 400px;\r\n    -webkit-animation: movingclouds 160s linear infinite reverse;\r\n    -moz-animation: movingclouds 160s linear infinite reverse;\r\n    -o-animation: movingclouds 160s linear infinite reverse;\r\n}\r\n\r\n#cloud2[_ngcontent-%COMP%] {\r\n    top: 10px;\r\n    left: 600px;\r\n    -webkit-animation: movingclouds 80s linear infinite reverse;\r\n    -moz-animation: movingclouds 80s linear infinite reverse;\r\n    -o-animation: movingclouds 80s linear infinite reverse;\r\n}\r\n\r\n#cloud3[_ngcontent-%COMP%] {\r\n    top: 100px;\r\n    left: 100px;\r\n    transform: scale(0.9);\r\n    opacity: 0.9; \r\n    -webkit-animation: movingclouds 60s linear infinite reverse;\r\n    -moz-animation: movingclouds 60s linear infinite reverse;\r\n    -o-animation: movingclouds 60s linear infinite reverse;\r\n}\r\n\r\n#cloud4[_ngcontent-%COMP%] {\r\n    top: -20px;\r\n    left: 40px;\r\n    transform: scale(0.8);\r\n    opacity: 0.8; \r\n    -webkit-animation: movingclouds 40s linear infinite reverse;\r\n    -moz-animation: movingclouds 40s linear infinite reverse;\r\n    -o-animation: movingclouds 40s linear infinite reverse;\r\n}\r\n\r\n#cloud5[_ngcontent-%COMP%] {\r\n    top: 100px;\r\n    left: 500px;\r\n    transform: scale(0.7);\r\n    opacity: 0.7; \r\n    -webkit-animation: movingclouds 50s linear infinite reverse;\r\n    -moz-animation: movingclouds 50s linear infinite reverse;\r\n    -o-animation: movingclouds 50s linear infinite reverse;\r\n}\r\n\r\n#cloud6[_ngcontent-%COMP%] {\r\n    top: 20px;\r\n    left: 200px;\r\n    transform: scale(0.5);\r\n    opacity: 0.5; \r\n    -webkit-animation: movingclouds 54s linear infinite reverse;\r\n    -moz-animation: movingclouds 54s linear infinite reverse;\r\n    -o-animation: movingclouds 54s linear infinite reverse;\r\n}\r\n\r\n#cloud7[_ngcontent-%COMP%] {\r\n    top: 92px;\r\n    left: 700px;\r\n    transform: scale(0.4);\r\n    opacity: 0.4; \r\n    -webkit-animation: movingclouds 60s linear infinite reverse;\r\n    -moz-animation: movingclouds 60s linear infinite reverse;\r\n    -o-animation: movingclouds 60s linear infinite reverse;\r\n}\r\n\r\n#cloud14[_ngcontent-%COMP%] {\r\n    top: 40px;\r\n    left: 400px;\r\n    -webkit-animation: movingclouds 80s linear infinite reverse;\r\n    -moz-animation: movingclouds 80s linear infinite reverse;\r\n    -o-animation: movingclouds 80s linear infinite reverse;\r\n}\r\n\r\n#cloud13[_ngcontent-%COMP%] {\r\n    top: 10px;\r\n    left: 600px;\r\n    -webkit-animation: movingclouds 40s linear infinite reverse;\r\n    -moz-animation: movingclouds 40s linear infinite reverse;\r\n    -o-animation: movingclouds 40s linear infinite reverse;\r\n}\r\n\r\n#cloud12[_ngcontent-%COMP%] {\r\n    top: 100px;\r\n    left: 100px;\r\n    transform: scale(0.9);\r\n    opacity: 0.9; \r\n    -webkit-animation: movingclouds 30s linear infinite reverse;\r\n    -moz-animation: movingclouds 30s linear infinite reverse;\r\n    -o-animation: movingclouds 30s linear infinite reverse;\r\n}\r\n\r\n#cloud11[_ngcontent-%COMP%] {\r\n    top: -20px;\r\n    left: 40px;\r\n    transform: scale(0.8);\r\n    opacity: 0.8; \r\n    -webkit-animation: movingclouds 20s linear infinite reverse;\r\n    -moz-animation: movingclouds 20s linear infinite reverse;\r\n    -o-animation: movingclouds 20s linear infinite reverse;\r\n}\r\n\r\n#cloud10[_ngcontent-%COMP%] {\r\n    top: 100px;\r\n    left: 500px;\r\n    transform: scale(0.7);\r\n    opacity: 0.7; \r\n    -webkit-animation: movingclouds 25s linear infinite reverse;\r\n    -moz-animation: movingclouds 25s linear infinite reverse;\r\n    -o-animation: movingclouds 25s linear infinite reverse;\r\n}\r\n\r\n#cloud9[_ngcontent-%COMP%] {\r\n    top: 20px;\r\n    left: 200px;\r\n    transform: scale(0.5);\r\n    opacity: 0.5; \r\n    -webkit-animation: movingclouds 27s linear infinite reverse;\r\n    -moz-animation: movingclouds 27s linear infinite reverse;\r\n    -o-animation: movingclouds 27s linear infinite reverse;\r\n}\r\n\r\n#cloud8[_ngcontent-%COMP%] {\r\n    top: 192px;\r\n    left: 600px;\r\n    transform: scale(0.4);\r\n    opacity: 0.4; \r\n    -webkit-animation: movingclouds 30s linear infinite reverse;\r\n    -moz-animation: movingclouds 30s linear infinite reverse;\r\n    -o-animation: movingclouds 30s linear infinite reverse;\r\n}\r\n\r\n@keyframes movingclouds {\r\n    0% {margin-left: 100%;}\r\n    100% {margin-left: -150%;}\r\n}\r\n\r\n.noise[_ngcontent-%COMP%]\r\n{\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);\r\n}\r\n\r\n.w3-text-shadow[_ngcontent-%COMP%]\r\n{\r\n    text-shadow:2px 2px 0 #444;\r\n}\r\n\r\n.w3-box-shadow[_ngcontent-%COMP%]\r\n{\r\n    box-shadow:2px 2px 0 #444;\r\n}\r\n\r\n.paper-shadow[_ngcontent-%COMP%]\r\n{\r\n    box-shadow:\r\n    0 2.8px 2.2px rgba(0, 0, 0, 0.34),\r\n    0 3.7px 5.3px rgba(0, 0, 0, 0.48),\r\n    0 6.5px 10px rgba(0, 0, 0, 0.16),\r\n    0 8.3px 17.9px rgba(0, 0, 0, 0.072)\r\n    ;\r\n}\r\n\r\n.arrow-div[_ngcontent-%COMP%]\r\n{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n\r\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  \r\n  width: auto;\r\n  padding: 16px;\r\n  margin-top: -50px;\r\n  color: black;\r\n  background-color: #ffffff00;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  border-radius: 0 3px 3px 0;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled\r\n{\r\n    cursor: not-allowed;\r\n}\r\n\r\n\r\n\r\n.next[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n\r\n\r\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.w3-flip[_ngcontent-%COMP%]\r\n{\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.w3-zoom-out[_ngcontent-%COMP%]\r\n{\r\n    transform: scale(0.01);\r\n}\r\n\r\n.w3-zoom-in[_ngcontent-%COMP%]\r\n{\r\n    transform: scale(1);\r\n}\r\n\r\n.flip-card[_ngcontent-%COMP%]\r\n{\r\n    perspective: 1000px;\r\n    cursor: pointer;\r\n}\r\n\r\n.flip-card-inner[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 60vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: transform 0.5s;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] \r\n{\r\n    \r\n    \r\n    \r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n}\r\n\r\n.flip-card-back[_ngcontent-%COMP%] \r\n{\r\n    transform: rotateY(180deg);\r\n    overflow-y: scroll;\r\n}\r\n\r\n.w3-full-center[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    min-height: 40vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.blink[_ngcontent-%COMP%] {\r\n    animation: blinker 1s linear infinite;\r\n  }\r\n\r\n@keyframes blinker {\r\n    50% {\r\n      opacity: 0;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnRvb25UaGVtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQywwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7O0FBR0E7O0lBRUksYUFBYSxLQUFLLGdCQUFnQjtBQUN0Qzs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUEsNkRBQTZEOztBQUM3RCw2REFBNkQ7O0FBQzdELDZEQUE2RDs7QUFDN0QsNkRBQTZEOztBQUc3RDs7SUFFSTs7Ozs7bUVBSytEO0lBQy9ELFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUVkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsNERBQTREO0lBQzVELHlEQUF5RDtJQUN6RCx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLDJEQUEyRDtJQUMzRCx3REFBd0Q7SUFDeEQsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFJWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDJEQUEyRDtJQUMzRCx3REFBd0Q7SUFDeEQsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFJVixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDJEQUEyRDtJQUMzRCx3REFBd0Q7SUFDeEQsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFJWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDJEQUEyRDtJQUMzRCx3REFBd0Q7SUFDeEQsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFJWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDJEQUEyRDtJQUMzRCx3REFBd0Q7SUFDeEQsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFJWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDJEQUEyRDtJQUMzRCx3REFBd0Q7SUFDeEQsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCwyREFBMkQ7SUFDM0Qsd0RBQXdEO0lBQ3hELHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMkRBQTJEO0lBQzNELHdEQUF3RDtJQUN4RCxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUlYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osMkRBQTJEO0lBQzNELHdEQUF3RDtJQUN4RCxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUlWLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osMkRBQTJEO0lBQzNELHdEQUF3RDtJQUN4RCxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUlYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osMkRBQTJEO0lBQzNELHdEQUF3RDtJQUN4RCxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUlYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osMkRBQTJEO0lBQzNELHdEQUF3RDtJQUN4RCxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUlYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osMkRBQTJEO0lBQzNELHdEQUF3RDtJQUN4RCxzREFBc0Q7QUFDMUQ7O0FBR0E7SUFDSSxJQUFJLGlCQUFpQixDQUFDO0lBQ3RCLE1BQU0sa0JBQWtCLENBQUM7QUFDN0I7O0FBVUE7O0lBRUkseWtFQUF5a0U7QUFDN2tFOztBQUVBOztJQUVJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUk7Ozs7O0lBS0E7QUFDSjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBLDRCQUE0Qjs7QUFDNUI7O0VBRUUsZUFBZTtFQUNmOzs7Z0NBRzhCO0VBQzlCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUEsNENBQTRDOztBQUM1QztFQUNFLFFBQVE7RUFDUiwwQkFBMEI7QUFDNUI7O0FBRUEseUVBQXlFOztBQUN6RTs7RUFFRSxvQ0FBb0M7QUFDdEM7O0FBRUE7O0lBRUksMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEI7bUJBQ2U7O0lBRWYsbUNBQW1DO0lBQ25DLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQ0FBcUM7RUFDdkM7O0FBRUE7SUFDRTtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6ImNhcnRvb25UaGVtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ub3V0ZXItd3JhcHBlciBcclxue1xyXG4gICAgd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDB2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWCgtMTAwdmgpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIgXHJcbntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi53cmFwcGVyIFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKC0xMDB2aCk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxufVxyXG5cclxuLnNsaWRlIFxyXG57XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4uaG9yaXpvbnRhbC1jb250YWluZXJcclxue1xyXG4gICAgZGlzcGxheTogZmxleDsgICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLm1hcmtlciA6aG92ZXJcclxue1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbi5za3kgXHJcbntcclxuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzZEOUU4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjQzZEOUU4IDAlLCAjZmZmIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLWxpbmVhci1ncmFkaWVudCh0b3AsICNDNkQ5RTggMCUsICNmZmYgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNDNkQ5RTggMCUsICNmZmYgMTAwJSk7ICovXHJcbiAgICBoZWlnaHQ6IDI1JTtcclxufVxyXG5cclxuLmNsb3VkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxNzZweDtcclxuICAgIGhlaWdodDogMTE0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcblxyXG4jY2xvdWQxIHtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDQwMHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyAxNjBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW1vei1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyAxNjBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgMTYwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxufVxyXG5cclxuI2Nsb3VkMiB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiA2MDBweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgODBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW1vei1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA4MHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbiAgICAtby1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA4MHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbn1cclxuXHJcbiNjbG91ZDMge1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICBvcGFjaXR5OiAwLjk7IFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA2MHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDYwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIC1vLWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDYwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxufVxyXG5cclxuI2Nsb3VkNCB7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgbGVmdDogNDBweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgb3BhY2l0eTogMC44OyBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgNDBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW1vei1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA0MHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbiAgICAtby1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA0MHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbn1cclxuXHJcbiNjbG91ZDUge1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDUwMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICBvcGFjaXR5OiAwLjc7IFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA1MHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDUwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIC1vLWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDUwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxufVxyXG5cclxuI2Nsb3VkNiB7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAyMDBweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgb3BhY2l0eTogMC41OyBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgNTRzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW1vei1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA1NHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbiAgICAtby1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA1NHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbn1cclxuXHJcbiNjbG91ZDcge1xyXG4gICAgdG9wOiA5MnB4O1xyXG4gICAgbGVmdDogNzAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC40KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcclxuICAgIG9wYWNpdHk6IDAuNDsgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDYwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgNjBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgNjBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG59XHJcblxyXG4jY2xvdWQxNCB7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiA0MDBweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgODBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW1vei1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA4MHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbiAgICAtby1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA4MHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbn1cclxuXHJcbiNjbG91ZDEzIHtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDYwMHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyA0MHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDQwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIC1vLWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDQwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxufVxyXG5cclxuI2Nsb3VkMTIge1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICBvcGFjaXR5OiAwLjk7IFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyAzMHMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDMwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIC1vLWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDMwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxufVxyXG5cclxuI2Nsb3VkMTEge1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIG9wYWNpdHk6IDAuODsgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDIwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgMjBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgMjBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG59XHJcblxyXG4jY2xvdWQxMCB7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogNTAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIG9wYWNpdHk6IDAuNzsgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDI1cyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgMjVzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgMjVzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG59XHJcblxyXG4jY2xvdWQ5IHtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICBvcGFjaXR5OiAwLjU7IFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmluZ2Nsb3VkcyAyN3MgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDI3cyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIC1vLWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDI3cyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxufVxyXG5cclxuI2Nsb3VkOCB7XHJcbiAgICB0b3A6IDE5MnB4O1xyXG4gICAgbGVmdDogNjAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC40KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcclxuICAgIG9wYWNpdHk6IDAuNDsgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92aW5nY2xvdWRzIDMwcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgMzBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBtb3ZpbmdjbG91ZHMgMzBzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBtb3ZpbmdjbG91ZHMge1xyXG4gICAgMCUge21hcmdpbi1sZWZ0OiAxMDAlO31cclxuICAgIDEwMCUge21hcmdpbi1sZWZ0OiAtMTUwJTt9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmluZ2Nsb3VkcyB7XHJcbiAgICAwJSB7bWFyZ2luLWxlZnQ6IDEwMCU7fVxyXG4gICAgMTAwJSB7bWFyZ2luLWxlZnQ6IC0xNTAlO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgbW92aW5nY2xvdWRzIHtcclxuICAgIDAlIHttYXJnaW4tbGVmdDogMTAwJTt9XHJcbiAgICAxMDAlIHttYXJnaW4tbGVmdDogLTE1MCU7fVxyXG59XHJcblxyXG4ubm9pc2Vcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xyXG59XHJcblxyXG4udzMtdGV4dC1zaGFkb3dcclxue1xyXG4gICAgdGV4dC1zaGFkb3c6MnB4IDJweCAwICM0NDQ7XHJcbn1cclxuXHJcbi53My1ib3gtc2hhZG93XHJcbntcclxuICAgIGJveC1zaGFkb3c6MnB4IDJweCAwICM0NDQ7XHJcbn1cclxuXHJcbi5wYXBlci1zaGFkb3dcclxue1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjM0KSxcclxuICAgIDAgMy43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjQ4KSxcclxuICAgIDAgNi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxyXG4gICAgMCA4LjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MilcclxuICAgIDtcclxufVxyXG5cclxuLmFycm93LWRpdlxyXG57XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAqL1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIDpkaXNhYmxlZFxyXG57XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXHJcbi5wcmV2OmhvdmVyLFxyXG4ubmV4dDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4udzMtZmxpcFxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLnczLXpvb20tb3V0XHJcbntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wMSk7XHJcbn1cclxuXHJcbi53My16b29tLWluXHJcbntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmRcclxue1xyXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1pbm5lclxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayBcclxue1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgLyogd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICBcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWJhY2sgXHJcbntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4udzMtZnVsbC1jZW50ZXJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJsaW5rIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYmxpbmtlciB7XHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
class slide {
}


/***/ }),

/***/ 1131:
/*!******************************************************!*\
  !*** ./src/app/colorsTheme/colorsTheme.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorsThemeComponent": () => (/* binding */ ColorsThemeComponent)
/* harmony export */ });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function ColorsThemeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 30)(2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColorsThemeComponent_div_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.showMenu = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "palette");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Change Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("w3-container w3-center w3-margin-bottom w3-" + ctx_r0.selectedColor);
} }
function ColorsThemeComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColorsThemeComponent_span_6_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const color_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r9.selectedColor = color_r8; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.showMenu = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("w3-bar-item w3-button w3-hover-black w3-text-" + color_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", color_r8, " ");
} }
function ColorsThemeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span")(4, "a", 37)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const contactDetail_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("w3-margin-right w3-large w3-text-" + ctx_r2.selectedColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contactDetail_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", contactDetail_r11.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contactDetail_r11.detail);
} }
function ColorsThemeComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const skill_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("w3-container w3-center w3-round-xlarge w3-" + ctx_r3.selectedColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", skill_r12.value + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r12.value, "% ");
} }
function ColorsThemeComponent_div_41_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Since ", experience_r13.from, " ");
} }
function ColorsThemeComponent_div_41_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", experience_r13.from, " to ", experience_r13.to, "");
} }
function ColorsThemeComponent_div_41_span_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ColorsThemeComponent_div_41_span_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ColorsThemeComponent_div_41_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ColorsThemeComponent_div_41_span_8_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ColorsThemeComponent_div_41_span_8_span_4_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r21 = ctx.$implicit;
    const places_index_r22 = ctx.index;
    const experience_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r21.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](place_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", places_index_r22 != experience_r13.places.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", places_index_r22 == experience_r13.places.length - 1);
} }
function ColorsThemeComponent_div_41_hr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
} }
function ColorsThemeComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ColorsThemeComponent_div_41_span_3_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ColorsThemeComponent_div_41_span_4_Template, 2, 2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 42)(6, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ColorsThemeComponent_div_41_span_8_Template, 5, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ColorsThemeComponent_div_41_hr_11_Template, 1, 0, "hr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r13 = ctx.$implicit;
    const experiences_index_r14 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("w3-text-" + ctx_r4.selectedColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !experience_r13.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", experience_r13.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", experience_r13.title, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", experience_r13.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](experience_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", experiences_index_r14 != ctx_r4.data.experiences.length - 1);
} }
function ColorsThemeComponent_div_46_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const study_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Since ", study_r26.from, " ");
} }
function ColorsThemeComponent_div_46_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const study_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", study_r26.from, " to ", study_r26.to, "");
} }
function ColorsThemeComponent_div_46_span_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ColorsThemeComponent_div_46_span_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ColorsThemeComponent_div_46_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ColorsThemeComponent_div_46_span_8_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ColorsThemeComponent_div_46_span_8_span_4_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r34 = ctx.$implicit;
    const places_index_r35 = ctx.index;
    const study_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r34.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](place_r34.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", places_index_r35 != study_r26.places.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", places_index_r35 == study_r26.places.length - 1);
} }
function ColorsThemeComponent_div_46_hr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
} }
function ColorsThemeComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ColorsThemeComponent_div_46_span_3_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ColorsThemeComponent_div_46_span_4_Template, 2, 2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 42)(6, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ColorsThemeComponent_div_46_span_8_Template, 5, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ColorsThemeComponent_div_46_hr_9_Template, 1, 0, "hr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const study_r26 = ctx.$implicit;
    const studies_index_r27 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("w3-text-" + ctx_r5.selectedColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !study_r26.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", study_r26.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", study_r26.title, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", study_r26.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", studies_index_r27 != ctx_r5.data.studies.length - 1);
} }
class ColorsThemeComponent {
    constructor(data) {
        this.data = data;
        this.showMenu = false;
        this.colors = [
            "red",
            "pink",
            "purple",
            "indigo",
            "blue",
            "teal",
            "green",
            "yellow",
            "orange",
            "brown"
        ];
        this.selectedColor = 'purple';
    }
    ngOnInit() {
    }
}
ColorsThemeComponent.ɵfac = function ColorsThemeComponent_Factory(t) { return new (t || ColorsThemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
ColorsThemeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorsThemeComponent, selectors: [["app-colorsTheme"]], decls: 50, vars: 19, consts: [[1, "w3-light-grey"], [3, "class", 4, "ngIf"], ["id", "mySidebar", 1, "w3-sidebar", "w3-black", "w3-animate-top", "w3-xxlarge", 2, "width", "100%", "padding-top", "100px", "opacity", "0.9"], ["href", "javascript:void(0)", 1, "w3-button", "w3-black", "w3-xxlarge", "w3-padding", "w3-display-topright", 2, "padding", "6px 24px", 3, "click"], [1, "fa", "fa-remove"], [1, "w3-bar-block", "w3-center"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "w3-content", 2, "max-width", "1400px"], [1, "w3-row-padding"], [1, "w3-col", "l4", "m5"], [1, "w3-white", "w3-text-grey", "w3-card", "w3-margin-top", "w3-margin-bottom"], [1, "w3-display-container"], ["alt", "Avatar", 2, "width", "100%", 3, "src"], [1, "w3-display-bottomleft", "w3-container", "w3-text-white"], [1, "w3-margin-left"], [1, "w3-container", "w3-margin-top", "w3-margin-right", "w3-margin-left"], [1, "w3-container", "w3-margin-right", "w3-margin-left", 2, "overflow-wrap", "break-word"], ["class", "w3-row", 4, "ngFor", "ngForOf"], [1, "w3-row", "w3-center"], [1, "w3-button", "w3-dark-grey"], ["href", "assets/CV.pdf", 2, "text-decoration", "none"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "w3-container", "w3-margin-right", "w3-margin-left", 2, "margin-bottom", "12px"], [1, "w3-large", "w3-margin-bottom"], [4, "ngFor", "ngForOf"], [1, "w3-col", "l8", "m7", "w3-margin-top"], [1, "w3-container", "w3-card", "w3-white", "w3-margin-bottom"], [1, "w3-text-grey", "w3-padding-16", "w3-xxlarge"], ["class", "w3-container", 4, "ngFor", "ngForOf"], [2, "opacity", "0"], [1, "w3-button", "w3-hover-opacity", "w3-left"], ["href", "./"], [1, "fa", "fa-home"], [1, "w3-button", "w3-hover-opacity", "w3-right", "rainbow-text", 3, "click"], [1, "material-icons", "w3-large", 2, "vertical-align", "sub"], [3, "click"], [1, "w3-row"], [3, "href"], [1, "w3-light-grey", "w3-round-xlarge", "w3-small", "w3-margin-bottom"], [1, "w3-container"], [1, "fa", "fa-calendar", "fa-fw", "w3-margin-right"], [4, "ngIf"], [1, "w3-opacity"], [1, "w3-margin-right"]], template: function ColorsThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ColorsThemeComponent_div_1_Template, 8, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColorsThemeComponent_Template_a_click_3_listener() { return ctx.showMenu = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ColorsThemeComponent_span_6_Template, 2, 3, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13)(14, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ColorsThemeComponent_div_20_Template, 7, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18)(23, "div", 19)(24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u00A0Download\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22)(30, "div", 23)(31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ColorsThemeComponent_div_34_Template, 6, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 25)(37, "div", 26)(38, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Work Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ColorsThemeComponent_div_41_Template, 12, 8, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 26)(43, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ColorsThemeComponent_div_46_Template, 10, 7, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "footer")(48, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Find me on social media.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.showMenu ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.data.contactRedPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.aboutMe_short, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.contactDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("fa fa-asterisk fa-fw w3-margin-right w3-text-" + ctx.selectedColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("fa fa-suitcase fa-fw w3-margin-right w3-text-" + ctx.selectedColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("fa fa-certificate fa-fw w3-margin-right w3-text-" + ctx.selectedColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.studies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("w3-container w3-center w3-margin-top w3-" + ctx.selectedColor);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] \r\n{\r\n    font-family: \"Roboto\", sans-serif\r\n}\r\n\r\n.rainbow-text[_ngcontent-%COMP%] {\r\n    background-image: repeating-linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red, violet, red, orange, yellow, green, blue, indigo, violet);\r\n    background-size: 500% 500%;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    animation: rainbow 2s ease-in-out infinite;\r\n    font-weight: bold;\r\n}\r\n\r\n@keyframes rainbow {\r\n    0% {\r\n        background-position: 0% 50%;\r\n    }\r\n    100% {\r\n        background-position: 100% 25%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yc1RoZW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLDhKQUE4SjtJQUM5SiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKIiwiZmlsZSI6ImNvbG9yc1RoZW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHksaDEsaDIsaDMsaDQsaDUsaDYgXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5yYWluYm93LXRleHQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywgdmlvbGV0LCBpbmRpZ28sIGJsdWUsIGdyZWVuLCB5ZWxsb3csIG9yYW5nZSwgcmVkLCB2aW9sZXQsIHJlZCwgb3JhbmdlLCB5ZWxsb3csIGdyZWVuLCBibHVlLCBpbmRpZ28sIHZpb2xldCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwMCUgNTAwJTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYW5pbWF0aW9uOiByYWluYm93IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAyNSU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6582:
/*!**************************************************!*\
  !*** ./src/app/darkTheme/darkTheme.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkThemeComponent": () => (/* binding */ DarkThemeComponent)
/* harmony export */ });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = ["about"];
const _c1 = ["work"];
const _c2 = ["education"];
const _c3 = ["contact"];
function DarkThemeComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9, " ");
} }
function DarkThemeComponent_div_59_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](icon_r13);
} }
function DarkThemeComponent_div_59_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](icon_r14);
} }
function DarkThemeComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DarkThemeComponent_div_59_span_3_Template, 3, 2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 52)(6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DarkThemeComponent_div_59_span_7_Template, 3, 2, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const skill_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", skill_r10.icons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", skill_r10.value + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", skill_r10.icons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r10.name, " ");
} }
function DarkThemeComponent_div_69_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r20 = ctx.$implicit;
    const experience_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r20.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-width", 100 / experience_r15.places.length + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", place_r20.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", place_r20.name)("alt", place_r20.name);
} }
function DarkThemeComponent_div_69_span_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DarkThemeComponent_div_69_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DarkThemeComponent_div_69_span_11_span_3_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r22 = ctx.$implicit;
    const places_index_r23 = ctx.index;
    const experience_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r22.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](place_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", places_index_r23 != experience_r15.places.length - 1);
} }
function DarkThemeComponent_div_69_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Since ", experience_r15.from, " ");
} }
function DarkThemeComponent_div_69_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", experience_r15.from, " to ", experience_r15.to, "");
} }
function DarkThemeComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "header", 60)(3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DarkThemeComponent_div_69_a_4_Template, 2, 6, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 62)(6, "h4")(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "@ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DarkThemeComponent_div_69_span_11_Template, 4, 3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div")(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "footer", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DarkThemeComponent_div_69_span_16_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DarkThemeComponent_div_69_span_17_Template, 2, 2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const experience_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", experience_r15.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](experience_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", experience_r15.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", experience_r15.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !experience_r15.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", experience_r15.to);
} }
function DarkThemeComponent_div_78_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r32 = ctx.$implicit;
    const study_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r32.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-width", 100 / study_r28.places.length + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", place_r32.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", place_r32.name)("alt", place_r32.name);
} }
function DarkThemeComponent_div_78_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const study_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Since ", study_r28.from, " ");
} }
function DarkThemeComponent_div_78_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const study_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", study_r28.from, " to ", study_r28.to, "");
} }
function DarkThemeComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "header", 60)(3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DarkThemeComponent_div_78_a_4_Template, 2, 6, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 62)(6, "h4")(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "footer", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DarkThemeComponent_div_78_span_13_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DarkThemeComponent_div_78_span_14_Template, 2, 2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const study_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", study_r28.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](study_r28.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", study_r28.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !study_r28.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", study_r28.to);
} }
function DarkThemeComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69)(1, "div", 70)(2, "div", 71)(3, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 73)(6, "div", 74)(7, "span")(8, "a", 66)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 70)(12, "div", 71)(13, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const contactDetail_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contactDetail_r36.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", contactDetail_r36.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contactDetail_r36.detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contactDetail_r36.icon);
} }
class DarkThemeComponent {
    constructor(data) {
        this.data = data;
        this.currentActive = 0;
        this.homeOffset = null;
        this.aboutOffset = null;
        this.workOffset = null;
        this.educationOffset = null;
        this.contactOffset = null;
        this.showMenu = false;
    }
    ngAfterViewInit() {
        // this.homeOffset = this.homeElement.nativeElement.offsetTop;
        this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
        this.workOffset = this.workElement.nativeElement.offsetTop;
        this.educationOffset = this.educationElement.nativeElement.offsetTop;
        this.contactOffset = this.contactElement.nativeElement.offsetTop;
    }
    ngOnInit() {
    }
    onWindowScroll(e) {
        let element = document.querySelector('.w3-bar');
        let pageoffset = window.pageYOffset;
        let clientHeight = element.clientHeight;
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add("w3-bar");
            element.classList.add("w3-card");
            element.classList.add("w3-animate-top");
            element.classList.add("w3-white");
        }
        else {
            element.classList.remove("w3-card");
            element.classList.remove("w3-animate-top");
            element.classList.remove("w3-white");
        }
        // if (window.pageYOffset >= this.homeOffset && window.pageYOffset < this.aboutOffset) {
        //   this.currentActive = 1;
        // } else 
        if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.workOffset) {
            this.currentActive = 2;
        }
        else if (window.pageYOffset >= this.workOffset && window.pageYOffset < this.educationOffset) {
            this.currentActive = 3;
        }
        else if (window.pageYOffset >= this.educationOffset && window.pageYOffset < this.contactOffset) {
            this.currentActive = 4;
        }
        else if (window.pageYOffset >= this.contactOffset) {
            this.currentActive = 5;
        }
        else {
            this.currentActive = 0;
        }
    }
    toggleFunction() {
        this.showMenu = !this.showMenu;
    }
}
DarkThemeComponent.ɵfac = function DarkThemeComponent_Factory(t) { return new (t || DarkThemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
DarkThemeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DarkThemeComponent, selectors: [["app-darkTheme"]], viewQuery: function DarkThemeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.aboutElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.workElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.educationElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contactElement = _t.first);
    } }, hostBindings: function DarkThemeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function DarkThemeComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 93, vars: 26, consts: [[1, "w3-black"], [1, "w3-sidebar", "w3-bar-block", "w3-small", "w3-hide-small", "w3-center", "blueGreyTransparentBackColor"], [1, "", 2, "width", "100%", 3, "src"], ["href", "./", 1, "w3-bar-item", "w3-button", "w3-padding-large", "w3-hover-black"], [1, "fa", "fa-home", "w3-xxlarge"], ["href", "./darkTheme#about", 1, "w3-bar-item", "w3-button", "w3-padding-large", "w3-hover-black"], [1, "fa", "fa-user", "w3-xxlarge"], ["href", "./darkTheme#work", 1, "w3-bar-item", "w3-button", "w3-padding-large", "w3-hover-black"], [1, "fa", "fa-th", "w3-xxlarge"], ["href", "./darkTheme#education", 1, "w3-bar-item", "w3-button", "w3-padding-large", "w3-hover-black"], [1, "fa", "fa-book", "w3-xxlarge"], ["href", "./darkTheme#contact", 1, "w3-bar-item", "w3-button", "w3-padding-large", "w3-hover-black"], [1, "fa", "fa-envelope", "w3-xxlarge"], ["id", "myNavbar", 1, "w3-top", "w3-hide-large", "w3-hide-medium", "blueGreyTransparentBackColor"], [1, "w3-bar", "w3-black", "w3-opacity", "w3-hover-opacity-off", "w3-center", "w3-small"], ["href", "./", 1, "w3-bar-item", "w3-button", 2, "width", "20% !important"], ["href", "./darkTheme#about", 1, "w3-bar-item", "w3-button", 2, "width", "20% !important"], ["href", "./darkTheme#work", 1, "w3-bar-item", "w3-button", 2, "width", "20% !important"], ["href", "./darkTheme#education", 1, "w3-bar-item", "w3-button", 2, "width", "20% !important"], ["href", "./darkTheme#contact", 1, "w3-bar-item", "w3-button", 2, "width", "20% !important"], ["id", "main", 1, ""], ["id", "home", 1, "w3-display-container", "w3-center", "w3-black"], ["alt", "boy", "width", "100%", 1, "w3-image", "w3-grayscale-max", 3, "src"], [1, "w3-display-topleft", "w3-container", "w3-padding-small"], [1, "w3-jumbo"], [1, "w3-hide-medium", "w3-hide-small"], [1, "w3-hide-small"], ["id", "about", 1, "w3-content", "w3-justify", "w3-text-grey", "w3-padding-16"], ["about", ""], [1, "w3-container", "w3-margin", "w3-round-large", "blueGreyTransparentBackColor"], [1, "w3-text-white", "w3-center"], ["class", "w3-text-white", 4, "ngFor", "ngForOf"], [1, "w3-container", "w3-margin", "w3-padding", "w3-round-large", "blueGreyTransparentBackColor"], [1, "w3-text-white", "w3-center", "w3-margin"], ["id", "work", 1, "w3-content"], ["work", ""], [1, "w3-row-padding"], ["class", "w3-col l6", 4, "ngFor", "ngForOf"], ["id", "education", 1, "w3-content", "w3-padding-16"], ["education", ""], ["id", "contact", 1, "w3-content", "w3-justify", "w3-padding-16", "w3-text-grey"], ["contact", ""], [1, "w3-text-white", "w3-center", "w3-margin-bottom"], ["class", "w3-row", 4, "ngFor", "ngForOf"], [1, "w3-row", "w3-center", "w3-margin"], [1, "w3-button", "w3-xlarge", "w3-dark-grey"], ["href", "assets/CV.pdf", 2, "text-decoration", "none"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "w3-text-white"], [1, "w3-margin"], [1, "w3-row", "w3-hide-large"], ["class", "w3-large", 4, "ngFor", "ngForOf"], [1, "w3-row", "w3-theme-d3", "w3-round-large"], [1, "w3-theme-l2", "w3-padding", "w3-round-large"], ["class", "w3-large w3-hide-medium w3-hide-small", 4, "ngFor", "ngForOf"], [1, "w3-large", "w3-hide-medium", "w3-hide-small", "w3-margin-right"], [1, "w3-large"], [1, "w3-large", "w3-hide-medium", "w3-hide-small"], [1, "w3-col", "l6"], [1, "w3-card-4", "w3-round-large", "w3-margin-bottom", "w3-text-white", "w3-center", "w3-theme-d4"], [1, "w3-container", "w3-padding", "blueGreyTransparentBackColor", 2, "border-radius", "8px 8px 0px 0px"], [3, "href", 4, "ngFor", "ngForOf"], [1, "w3-container"], [4, "ngFor", "ngForOf"], [1, "w3-padding-small", "blueGreyTransparentBackColor", 2, "border-radius", "0px 0px 8px 8px"], [4, "ngIf"], [3, "href"], [1, "w3-image", "w3-white", "w3-round-xlarge", 2, "height", "100px", "margin", "0 3px", "padding", "1px", 3, "src", "title", "alt"], [1, "w3-image", "w3-white", "w3-round-xlarge", 2, "height", "100px", "margin", "0 3px", "padding", "5px", 3, "src", "title", "alt"], [1, "w3-row"], [1, "w3-col", "l3", "m2", "s1", "w3-margin-bottom"], [1, "w3-row", "w3-text-white", "w3-large"], [1, "w3-right"], [1, "w3-col", "l6", "m8", "s10", "w3-margin-bottom", "w3-center"], [1, "w3-row", "w3-text-white", "w3-large", 2, "overflow-wrap", "break-word"], [1, "w3-left"]], template: function DarkThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body", 0)(1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13)(24, "div", 14)(25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20)(36, "header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23)(39, "h1", 24)(40, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 26)(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 27, 28)(47, "div", 29)(48, "header", 30)(49, "h1")(50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, DarkThemeComponent_span_53_Template, 3, 1, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 32)(55, "header", 33)(56, "h1")(57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "My Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, DarkThemeComponent_div_59_Template, 10, 6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 34, 35)(63, "div", 32)(64, "header", 33)(65, "h1")(66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, DarkThemeComponent_div_69_Template, 18, 6, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 38, 39)(72, "div", 32)(73, "header", 30)(74, "h1")(75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "My Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, DarkThemeComponent_div_78_Template, 15, 5, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 40, 41)(81, "div", 32)(82, "header", 42)(83, "h1")(84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, DarkThemeComponent_div_86_Template, 15, 6, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 44)(88, "div", 45)(89, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " \u00A0Download\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.data.contactSmallDarkPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-black", ctx.currentActive === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-black", ctx.currentActive === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-black", ctx.currentActive === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-black", ctx.currentActive === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-light-grey", ctx.currentActive === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-light-grey", ctx.currentActive === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-light-grey", ctx.currentActive === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-light-grey", ctx.currentActive === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.data.contactDarkPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("I'm ", ctx.data.fullName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.aboutMe_short);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.aboutMe_long);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.studies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.contactDetails);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] \r\n{\r\n\tfont-family: \"Montserrat\", sans-serif\r\n}\r\n\r\n.w3-row-padding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] \r\n{\r\n\tmargin-bottom: 12px\r\n}\r\n\r\n\r\n\r\n.w3-sidebar[_ngcontent-%COMP%] \r\n{\r\n\twidth: 120px;\r\n\tbackground: #222;\r\n}\r\n\r\n\r\n\r\n#main[_ngcontent-%COMP%] \r\n{\r\n\tmargin-left: 120px\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 600px) \r\n{\r\n    #main[_ngcontent-%COMP%] \r\n    {\r\n\t\tmargin-left: 0\r\n\t}\r\n}\r\n\r\n.blueGreyTransparentBackColor[_ngcontent-%COMP%]\r\n{\r\n\tbackground-color: #8a8a8a70;\r\n}\r\n\r\n.w3-theme-l5[_ngcontent-%COMP%] {color:#000 !important; background-color:#f8f8f8 !important}\r\n\r\n.w3-theme-l4[_ngcontent-%COMP%] {color:#000 !important; background-color:#e8e8e8 !important}\r\n\r\n.w3-theme-l3[_ngcontent-%COMP%] {color:#000 !important; background-color:#d0d0d0 !important}\r\n\r\n.w3-theme-l2[_ngcontent-%COMP%] {color:#000 !important; background-color:#b9b9b9 !important}\r\n\r\n.w3-theme-l1[_ngcontent-%COMP%] {color:#fff !important; background-color:#a1a1a1 !important}\r\n\r\n.w3-theme-d1[_ngcontent-%COMP%] {color:#fff !important; background-color:#7c7c7c !important}\r\n\r\n.w3-theme-d2[_ngcontent-%COMP%] {color:#fff !important; background-color:#6e6e6e !important}\r\n\r\n.w3-theme-d3[_ngcontent-%COMP%] {color:#fff !important; background-color:#606060 !important}\r\n\r\n.w3-theme-d4[_ngcontent-%COMP%] {color:#fff !important; background-color:#535353 !important}\r\n\r\n.w3-theme-d5[_ngcontent-%COMP%] {color:#fff !important; background-color:#454545 !important}\r\n\r\n.w3-theme-light[_ngcontent-%COMP%] {color:#000 !important; background-color:#f8f8f8 !important}\r\n\r\n.w3-theme-dark[_ngcontent-%COMP%] {color:#fff !important; background-color:#454545 !important}\r\n\r\n.w3-theme-action[_ngcontent-%COMP%] {color:#fff !important; background-color:#454545 !important}\r\n\r\n.w3-theme[_ngcontent-%COMP%] {color:#fff !important; background-color:#8a8a8a !important}\r\n\r\n.w3-text-theme[_ngcontent-%COMP%] {color:#8a8a8a !important}\r\n\r\n.w3-border-theme[_ngcontent-%COMP%] {border-color:#8a8a8a !important}\r\n\r\n.w3-hover-theme[_ngcontent-%COMP%]:hover {color:#fff !important; background-color:#8a8a8a !important}\r\n\r\n.w3-hover-text-theme[_ngcontent-%COMP%]:hover {color:#8a8a8a !important}\r\n\r\n.w3-hover-border-theme[_ngcontent-%COMP%]:hover {border-color:#8a8a8a !important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmtUaGVtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FBQ0Q7O0FBRUE7O0NBRUM7QUFDRDs7QUFLQSwwQ0FBMEM7O0FBQzFDOztDQUVDLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7O0FBR0EsMEZBQTBGOztBQUMxRjs7Q0FFQztBQUNEOztBQUdBLHdEQUF3RDs7QUFDeEQ7O0lBRUk7O0VBRUY7Q0FDRDtBQUNEOztBQUVBOztDQUVDLDJCQUEyQjtBQUM1Qjs7QUFFQSxjQUFjLHFCQUFxQixFQUFFLG1DQUFtQzs7QUFDeEUsY0FBYyxxQkFBcUIsRUFBRSxtQ0FBbUM7O0FBQ3hFLGNBQWMscUJBQXFCLEVBQUUsbUNBQW1DOztBQUN4RSxjQUFjLHFCQUFxQixFQUFFLG1DQUFtQzs7QUFDeEUsY0FBYyxxQkFBcUIsRUFBRSxtQ0FBbUM7O0FBQ3hFLGNBQWMscUJBQXFCLEVBQUUsbUNBQW1DOztBQUN4RSxjQUFjLHFCQUFxQixFQUFFLG1DQUFtQzs7QUFDeEUsY0FBYyxxQkFBcUIsRUFBRSxtQ0FBbUM7O0FBQ3hFLGNBQWMscUJBQXFCLEVBQUUsbUNBQW1DOztBQUN4RSxjQUFjLHFCQUFxQixFQUFFLG1DQUFtQzs7QUFFeEUsaUJBQWlCLHFCQUFxQixFQUFFLG1DQUFtQzs7QUFDM0UsZ0JBQWdCLHFCQUFxQixFQUFFLG1DQUFtQzs7QUFDMUUsa0JBQWtCLHFCQUFxQixFQUFFLG1DQUFtQzs7QUFFNUUsV0FBVyxxQkFBcUIsRUFBRSxtQ0FBbUM7O0FBQ3JFLGdCQUFnQix3QkFBd0I7O0FBQ3hDLGtCQUFrQiwrQkFBK0I7O0FBRWpELHVCQUF1QixxQkFBcUIsRUFBRSxtQ0FBbUM7O0FBQ2pGLDRCQUE0Qix3QkFBd0I7O0FBQ3BELDhCQUE4QiwrQkFBK0IiLCJmaWxlIjoiZGFya1RoZW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IFxyXG57XHJcblx0Zm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi53My1yb3ctcGFkZGluZyBpbWcgXHJcbntcclxuXHRtYXJnaW4tYm90dG9tOiAxMnB4XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgdG8gMTIwcHggKi9cclxuLnczLXNpZGViYXIgXHJcbntcclxuXHR3aWR0aDogMTIwcHg7XHJcblx0YmFja2dyb3VuZDogIzIyMjtcclxufVxyXG5cclxuXHJcbi8qIEFkZCBhIGxlZnQgbWFyZ2luIHRvIHRoZSBcInBhZ2UgY29udGVudFwiIHRoYXQgbWF0Y2hlcyB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKDEyMHB4KSAqL1xyXG4jbWFpbiBcclxue1xyXG5cdG1hcmdpbi1sZWZ0OiAxMjBweFxyXG59XHJcblxyXG5cclxuLyogUmVtb3ZlIG1hcmdpbnMgZnJvbSBcInBhZ2UgY29udGVudFwiIG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkgXHJcbntcclxuICAgICNtYWluIFxyXG4gICAge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDBcclxuXHR9XHJcbn1cclxuXHJcbi5ibHVlR3JleVRyYW5zcGFyZW50QmFja0NvbG9yXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOGE4YThhNzA7XHJcbn1cclxuXHJcbi53My10aGVtZS1sNSB7Y29sb3I6IzAwMCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiNmOGY4ZjggIWltcG9ydGFudH1cclxuLnczLXRoZW1lLWw0IHtjb2xvcjojMDAwICFpbXBvcnRhbnQ7IGJhY2tncm91bmQtY29sb3I6I2U4ZThlOCAhaW1wb3J0YW50fVxyXG4udzMtdGhlbWUtbDMge2NvbG9yOiMwMDAgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjojZDBkMGQwICFpbXBvcnRhbnR9XHJcbi53My10aGVtZS1sMiB7Y29sb3I6IzAwMCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiNiOWI5YjkgIWltcG9ydGFudH1cclxuLnczLXRoZW1lLWwxIHtjb2xvcjojZmZmICFpbXBvcnRhbnQ7IGJhY2tncm91bmQtY29sb3I6I2ExYTFhMSAhaW1wb3J0YW50fVxyXG4udzMtdGhlbWUtZDEge2NvbG9yOiNmZmYgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjojN2M3YzdjICFpbXBvcnRhbnR9XHJcbi53My10aGVtZS1kMiB7Y29sb3I6I2ZmZiAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiM2ZTZlNmUgIWltcG9ydGFudH1cclxuLnczLXRoZW1lLWQzIHtjb2xvcjojZmZmICFpbXBvcnRhbnQ7IGJhY2tncm91bmQtY29sb3I6IzYwNjA2MCAhaW1wb3J0YW50fVxyXG4udzMtdGhlbWUtZDQge2NvbG9yOiNmZmYgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjojNTM1MzUzICFpbXBvcnRhbnR9XHJcbi53My10aGVtZS1kNSB7Y29sb3I6I2ZmZiAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiM0NTQ1NDUgIWltcG9ydGFudH1cclxuXHJcbi53My10aGVtZS1saWdodCB7Y29sb3I6IzAwMCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiNmOGY4ZjggIWltcG9ydGFudH1cclxuLnczLXRoZW1lLWRhcmsge2NvbG9yOiNmZmYgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjojNDU0NTQ1ICFpbXBvcnRhbnR9XHJcbi53My10aGVtZS1hY3Rpb24ge2NvbG9yOiNmZmYgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjojNDU0NTQ1ICFpbXBvcnRhbnR9XHJcblxyXG4udzMtdGhlbWUge2NvbG9yOiNmZmYgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjojOGE4YThhICFpbXBvcnRhbnR9XHJcbi53My10ZXh0LXRoZW1lIHtjb2xvcjojOGE4YThhICFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItdGhlbWUge2JvcmRlci1jb2xvcjojOGE4YThhICFpbXBvcnRhbnR9XHJcblxyXG4udzMtaG92ZXItdGhlbWU6aG92ZXIge2NvbG9yOiNmZmYgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjojOGE4YThhICFpbXBvcnRhbnR9XHJcbi53My1ob3Zlci10ZXh0LXRoZW1lOmhvdmVyIHtjb2xvcjojOGE4YThhICFpbXBvcnRhbnR9XHJcbi53My1ob3Zlci1ib3JkZXItdGhlbWU6aG92ZXIge2JvcmRlci1jb2xvcjojOGE4YThhICFpbXBvcnRhbnR9Il19 */"] });


/***/ }),

/***/ 4453:
/*!********************************************************!*\
  !*** ./src/app/digitalClock/digitalClock.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalClockComponent": () => (/* binding */ DigitalClockComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class DigitalClockComponent {
    constructor() {
        this.time = moment__WEBPACK_IMPORTED_MODULE_0__();
        this._refreshTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(1000, 1000);
    }
    ngOnInit() {
        this._refreshTimerSubscribtion = this._refreshTimer.subscribe(val => {
            this.time = moment__WEBPACK_IMPORTED_MODULE_0__();
        });
    }
    ngOnDestroy() {
        this._refreshTimerSubscribtion.unsubscribe();
    }
}
DigitalClockComponent.ɵfac = function DigitalClockComponent_Factory(t) { return new (t || DigitalClockComponent)(); };
DigitalClockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DigitalClockComponent, selectors: [["app-digitalClock"]], decls: 30, vars: 7, consts: [[1, "clock"], [1, "numbers"], [1, "hours"], [1, "placeholder"], [1, "colon"], [1, "minutes"], [1, "seconds"], [1, "am-pm"], [1, "am"], [1, "pm"]], template: function DigitalClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main")(1, "div", 0)(2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "88");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1)(11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "88");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 1)(19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "88");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7)(24, "div")(25, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "am");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div")(28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.time.format("hh"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.time.format("mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.time.format("ss"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("light-on", ctx.time.format("a") == "am");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("light-on", ctx.time.format("a") == "pm");
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n       margin: 0;\r\n       padding: 0;\r\n   }\r\n   \r\n   body[_ngcontent-%COMP%] {\r\n       color: #ffffff;\r\n       background-color: #000000;\r\n       \r\n   }\r\n   \r\n   main[_ngcontent-%COMP%] {\r\n       text-align: center;\r\n       \r\n       \r\n       \r\n       font-family: 'digital-7', 'Orbitron', sans-serif;\r\n   }\r\n   \r\n   \r\n   \r\n   div.days[_ngcontent-%COMP%] {\r\n       margin: 0 auto;\r\n       color: #184261;\r\n   }\r\n   \r\n   div.days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\r\n       \r\n       display: none;\r\n   }\r\n   \r\n   div.days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n       font-size: 8px;\r\n       font-weight: bold;\r\n       font-family: sans-serif;\r\n       margin: 5px;\r\n       text-transform: uppercase;\r\n   }\r\n   \r\n   \r\n   \r\n   div.clock[_ngcontent-%COMP%] {\r\n       \r\n       color: white;\r\n   }\r\n   \r\n   div.clock[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n       display: inline-block;\r\n       position: relative;\r\n   }\r\n   \r\n   div.clock[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n   {\r\n       font-size: 45px;\r\n       position: relative; \r\n       z-index: 50;\r\n   }\r\n   \r\n   div.clock[_ngcontent-%COMP%]   .hours[_ngcontent-%COMP%], .minutes[_ngcontent-%COMP%], .seconds[_ngcontent-%COMP%] \r\n   {\r\n        position: absolute !important;\r\n        top: 0;\r\n        z-index: 75 !important;\r\n    }\r\n   \r\n   div.clock[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] \r\n   {\r\n       color: #1842616b;\r\n       position: absolute;\r\n       top: 0;\r\n       z-index: 50;\r\n   }\r\n   \r\n   \r\n   \r\n   \r\n   \r\n   .am-pm[_ngcontent-%COMP%] {\r\n       \r\n       text-transform: uppercase;\r\n       width: 30px;\r\n       line-height: 20px;\r\n   }\r\n   \r\n   div.am-pm[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n       font-size: 15px;\r\n       font-weight: bold;\r\n       margin-left: 5px;\r\n       width: 100%;\r\n   }\r\n   \r\n   .am[_ngcontent-%COMP%], .pm[_ngcontent-%COMP%] {\r\n       color: #184261;\r\n   }\r\n   \r\n   \r\n   \r\n   .light-on[_ngcontent-%COMP%] {\r\n       color: #ffffff;\r\n       display: block !important;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0YWxDbG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0dBRUc7T0FDSSxTQUFTO09BQ1QsVUFBVTtHQUNkOztHQUVBO09BQ0ksY0FBYztPQUNkLHlCQUF5Qjs7R0FFN0I7O0dBRUE7T0FDSSxrQkFBa0I7T0FDbEI7Ozt5Q0FHa0M7T0FDbEMsbUJBQW1CO09BQ25CLCtCQUErQjtPQUMvQixnREFBZ0Q7R0FDcEQ7O0dBR0EscUJBQXFCOztHQUNyQjtPQUNJLGNBQWM7T0FDZCxjQUFjO0dBQ2xCOztHQUVBO09BQ0ksMkJBQTJCO09BQzNCLGFBQWE7R0FDakI7O0dBRUE7T0FDSSxjQUFjO09BQ2QsaUJBQWlCO09BQ2pCLHVCQUF1QjtPQUN2QixXQUFXO09BQ1gseUJBQXlCO0dBQzdCOztHQUdBLFVBQVU7O0dBQ1Y7T0FDSSxtQkFBbUI7T0FDbkIsWUFBWTtHQUNoQjs7R0FFQTtPQUNJLHFCQUFxQjtPQUNyQixrQkFBa0I7R0FDdEI7O0dBRUE7O09BRUksZUFBZTtPQUNmLGtCQUFrQjtPQUNsQixXQUFXO0dBQ2Y7O0dBRUE7O1FBRUssNkJBQTZCO1FBQzdCLE1BQU07UUFDTixzQkFBc0I7SUFDMUI7O0dBRUQ7O09BRUksZ0JBQWdCO09BQ2hCLGtCQUFrQjtPQUNsQixNQUFNO09BQ04sV0FBVztHQUNmOztHQUNBLFlBQVk7O0dBR1osWUFBWTs7R0FDWjtPQUNJLDZCQUE2QjtPQUM3Qix5QkFBeUI7T0FDekIsV0FBVztPQUNYLGlCQUFpQjtHQUNyQjs7R0FFQTtPQUNJLGVBQWU7T0FDZixpQkFBaUI7T0FDakIsZ0JBQWdCO09BQ2hCLFdBQVc7R0FDZjs7R0FFQTtPQUNJLGNBQWM7R0FDbEI7O0dBRUEsMkRBQTJEOztHQUMzRDtPQUNJLGNBQWM7T0FDZCx5QkFBeUI7R0FDN0IiLCJmaWxlIjoiZGlnaXRhbENsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgXHJcbiAgICoge1xyXG4gICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgcGFkZGluZzogMDtcclxuICAgfVxyXG4gICBcclxuICAgYm9keSB7XHJcbiAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICBcclxuICAgfVxyXG4gICBcclxuICAgbWFpbiB7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICB0b3A6IDUwJTtcclxuICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7ICovXHJcbiAgICAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG4gICAgICAgLyogYm9yZGVyOiBzb2xpZCA1cHggI2ZmZmZmZjsgKi9cclxuICAgICAgIGZvbnQtZmFtaWx5OiAnZGlnaXRhbC03JywgJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIC8qIERBWVMgT0YgVEhFIFdFRUsgKi9cclxuICAgZGl2LmRheXMge1xyXG4gICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICBjb2xvcjogIzE4NDI2MTtcclxuICAgfVxyXG4gICBcclxuICAgZGl2LmRheXMgLmRheSB7XHJcbiAgICAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcbiAgIFxyXG4gICBkaXYuZGF5cyAuZGF5IHAge1xyXG4gICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICB9XHJcbiAgIFxyXG4gICBcclxuICAgLyogQ0xPQ0sgKi9cclxuICAgZGl2LmNsb2NrIHtcclxuICAgICAgIC8qIG1hcmdpbjogNXB4IDA7ICovXHJcbiAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgIH1cclxuICAgXHJcbiAgIGRpdi5jbG9jayBkaXZ7XHJcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIH1cclxuICAgXHJcbiAgIGRpdi5jbG9jayBkaXYgcFxyXG4gICB7XHJcbiAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgICAgei1pbmRleDogNTA7XHJcbiAgIH1cclxuXHJcbiAgIGRpdi5jbG9jayAuaG91cnMsIC5taW51dGVzLCAuc2Vjb25kcyBcclxuICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiA3NSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICBcclxuICAgZGl2LmNsb2NrIC5wbGFjZWhvbGRlciBcclxuICAge1xyXG4gICAgICAgY29sb3I6ICMxODQyNjE2YjtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHRvcDogMDtcclxuICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICB9XHJcbiAgIC8qRU5EIENMT0NLKi9cclxuICAgXHJcbiAgIFxyXG4gICAvKiBBTSBPUiBQTSovXHJcbiAgIC5hbS1wbSB7XHJcbiAgICAgICAvKiBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgKi9cclxuICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICBkaXYuYW0tcG0gZGl2IHAge1xyXG4gICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5hbSwgLnBtIHtcclxuICAgICAgIGNvbG9yOiAjMTg0MjYxO1xyXG4gICB9XHJcbiAgIFxyXG4gICAvKkNMQVNTIFRIQVQgQ0hBTkdFUyBDT0xPUiBPRiBURVhUIFRPIEFQUEVBUiBMSUtFIElUUyBcIk9OXCIqL1xyXG4gICAubGlnaHQtb24ge1xyXG4gICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICB9Il19 */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _digitalClock_digitalClock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../digitalClock/digitalClock.component */ 4453);







function HomeComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 4)(2, "div", 29)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_26_Template_div_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const theme_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.openApp(theme_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 32)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const theme_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "linear-gradient(135deg, " + theme_r2.colorLeft + "," + theme_r2.colorRight + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", theme_r2.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", theme_r2.name, " ");
} }
function HomeComponent_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 35)(2, "div", 4)(3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.appToOpen.icon, " ");
} }
function HomeComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_51_div_1_Template, 7, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "linear-gradient(135deg, " + ctx_r1.appToOpen.colorLeft + "," + ctx_r1.appToOpen.colorRight + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("app-open", ctx_r1.appToOpen != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.appToOpen != null);
} }
class HomeComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.splashScreen = true;
        this.splashScreenContent = true;
        this.appToOpen = null;
        this.appToOpenColor = '';
    }
    ngOnInit() {
        if (localStorage.getItem('splashSeen') == 'true') {
            this.hideSplashScreen();
        }
        ;
    }
    hideSplashScreen() {
        this.splashScreen = false;
        this.splashScreenContent = false;
        localStorage.setItem('splashSeen', 'true');
    }
    showSplashScreen() {
        this.splashScreen = true;
        setTimeout(() => {
            this.splashScreenContent = true;
        }, 900);
        localStorage.setItem('splashSeen', 'false');
    }
    openApp(app) {
        this.appToOpen = app;
        document.documentElement.style.setProperty('--colorLeft', app.colorLeft);
        document.documentElement.style.setProperty('--colorRight', app.colorRight);
        setTimeout(() => {
            this.router.navigate([""], { queryParams: { app: app.link } });
        }, 2000);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 52, vars: 9, consts: [[2, "width", "100vw", "height", "100vh", "background-image", "url(assets/material-background.png)", "background-size", "cover", "position", "absolute", "z-index", "-5"], [1, "w3-row", "w3-top"], [1, "w3-container", "w3-center", "w3-light-grey", "w3-opacity", 2, "cursor", "pointer", 3, "click"], [1, "w3-row", 2, "height", "25px", "opacity", "0"], [1, "w3-row"], [1, "w3-col", "l3", "m2", "s12", 2, "opacity", "0"], [1, "w3-col", "l6", "m8", "s12"], [1, "w3-card-4", "box-shadow", "w3-margin", "w3-background-with-opacity", "w3-full-center"], [1, "w3-card-4", "box-shadow", "w3-margin"], ["href", "https://forecast7.com/en/33d5136d28/damascus/", "data-label_1", "DAMASCUS", "data-label_2", "WEATHER", "data-days", "4", "data-theme", "original", 1, "weatherwidget-io", 2, "opacity", "0.75 !important"], [1, "w3-card-4", "box-shadow", "w3-margin", "w3-background-with-opacity", "w3-full-center", "w3-padding-large", "w3-large", "w3-text-white"], [1, "material-icons", "w3-margin"], [1, "w3-center"], [1, "w3-row", "w3-bottom"], ["class", "w3-col m3 s3 w3-center w3-margin-bottom", 4, "ngFor", "ngForOf"], [1, "splash-screen", 3, "click"], [2, "margin-top", "10vw"], [1, "w3-row", "w3-full-center"], [1, "w3-container", "w3-margin"], [1, "w3-round-large", "box-shadow", 2, "width", "175px", "height", "175px", 3, "src"], [1, "w3-row", "w3-xxlarge", "zero-opacity"], [1, "w3-row", "w3-xxlarge", "w3-text-white", "w3-full-center"], [1, "w3-row", "w3-xlarge", "w3-center", "w3-margin-top", "w3-text-white"], [1, "w3-row", "w3-xlarge", "w3-center", "w3-bottom"], [1, "w3-margin-bottom", "w3-full-center"], [1, "circle", "box-shadow", "w3-full-center", "bouncing", 2, "cursor", "pointer"], [1, "material-icons"], ["class", "w3-container app blank", 3, "app-open", "background-image", 4, "ngIf"], [1, "w3-col", "m3", "s3", "w3-center", "w3-margin-bottom"], [1, "w3-full-center"], [1, "w3-container", "w3-round-xlarge", "box-shadow", "text-shadow", "app-shortcut", "w3-margin", "w3-full-center", "w3-text-white", "w3-center", "blinking", 3, "click"], [1, "material-icons", 2, "font-size", "48px"], [1, "w3-full-center", "w3-text-white", "text-shadow"], [1, "w3-container", "app", "blank"], [4, "ngIf"], [1, "w3-text-white", "app-content"], [1, "material-icons", 2, "font-size", "100px"], [1, "w3-row", "w3-margin", "w3-padding"], [1, "cp-spinner", "cp-morph"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_2_listener() { return ctx.showSplashScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-digitalClock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " DAMASCUS WEATHER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Select a theme from the list below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 4)(25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, HomeComponent_div_26_Template, 10, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_27_listener() { return ctx.hideSplashScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Welcome to my CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " This is Muhannad Al-Khodari, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " a Computer/Software/Robotics Engineer... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Think that's too much? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Check inside for details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 23)(47, "div", 24)(48, "div", 25)(49, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " lock_open ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, HomeComponent_div_51_Template, 2, 5, "div", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data.themes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show-splash", ctx.splashScreen)("hide-splash", !ctx.splashScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("w3-hide", !ctx.splashScreenContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.data.contactHomePhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appToOpen != null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _digitalClock_digitalClock_component__WEBPACK_IMPORTED_MODULE_1__.DigitalClockComponent], styles: [".w3-full-center[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.w3-background-with-opacity[_ngcontent-%COMP%]\r\n{\r\n    background-color: #1f557cb6;\r\n}\r\n\r\n.splash-screen[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    z-index: 100;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    transition: height 1s;\r\n    background-image: linear-gradient(-45deg, #0062c4, #00afff);\r\n}\r\n\r\n.show-splash[_ngcontent-%COMP%]\r\n{\r\n    height: 100vh;\r\n}\r\n\r\n.hide-splash[_ngcontent-%COMP%]\r\n{\r\n    height: 0vh;\r\n}\r\n\r\n.splash-screen-content[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.circle[_ngcontent-%COMP%] \r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: rgba(255, 255, 255, 0.767);\r\n    color: indigo;\r\n    border-radius: 50%;\r\n    \r\n}\r\n\r\n.box-shadow[_ngcontent-%COMP%]\r\n{\r\n    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.text-shadow[_ngcontent-%COMP%]\r\n{\r\n    text-shadow:2px 2px 0 #444;\r\n}\r\n\r\n.zero-opacity[_ngcontent-%COMP%]\r\n{\r\n    opacity: 0;\r\n}\r\n\r\n.app-shortcut[_ngcontent-%COMP%]\r\n{\r\n    width: 80px; \r\n    height: 80px; \r\n    cursor: pointer;\r\n}\r\n\r\n.app[_ngcontent-%COMP%]\r\n{\r\n    position: absolute !important;\r\n    z-index: 1000000;\r\n    width: 0; \r\n    height: 0;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    transform: translate(-50%, -50%);\r\n    transition: width 0.5s, height 0.5s, background-color 0.1s;\r\n}\r\n\r\n.app-open[_ngcontent-%COMP%]\r\n{\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.app-content[_ngcontent-%COMP%]\r\n{\r\n    position: absolute !important;\r\n    z-index: 1000000;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.blank[_ngcontent-%COMP%]\r\n{\r\n    background-color: #ffffff10;\r\n}\r\n\r\n.cp-morph[_ngcontent-%COMP%] \r\n{\r\n    width: 48px;\r\n    height: 48px;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    background: var(--colorLeft);\r\n    animation: cp-morph-animate 1s linear infinite;\r\n    animation-duration: 1s;\r\n    animation-timing-function: linear;\r\n    animation-delay: 0s;\r\n    animation-iteration-count: infinite;\r\n    animation-direction: normal;\r\n    animation-fill-mode: none;\r\n    animation-play-state: running;\r\n    animation-name: cp-morph-animate;\r\n    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.cp-spinner[_ngcontent-%COMP%] \r\n{\r\n    width: 48px;\r\n    height: 48px;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n}\r\n\r\n@keyframes cp-morph-animate\r\n{\r\n    0% \r\n    {\r\n        transform: rotate(0) scale(1);\r\n        border-radius: 0;\r\n        background: var(--colorRight);\r\n    }\r\n\r\n    25%, 75% \r\n    {\r\n        transform: rotate(180deg) scale(.4);\r\n        border-radius: 50%;\r\n        background: var(--colorLeft);\r\n    }\r\n    100% \r\n    {\r\n        transform: rotate(360deg) scale(1);\r\n        border-radius: 0;\r\n        background: var(--colorRight);\r\n    }\r\n}\r\n\r\n.blinking[_ngcontent-%COMP%] \r\n{\r\n    animation-name: blink;\r\n    animation-duration: 0.7s;\r\n    animation-direction: alternate;\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes blink \r\n{\r\n    from {opacity: 0.2;}\r\n    to {opacity: 1;}\r\n}\r\n\r\n.bouncing[_ngcontent-%COMP%] \r\n{\r\n    animation-name: bounce;\r\n    animation-duration: 1.7s;\r\n    animation-direction: alternate;\r\n    transition-timing-function: ease-out;\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes bounce \r\n{\r\n    0% {margin-bottom: 0;}\r\n    50% {margin-bottom: 50px;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwyREFBMkQ7QUFDL0Q7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2Isa0JBQWtCOztBQUV0Qjs7QUFFQTs7SUFFSSwyQ0FBMkM7QUFDL0M7O0FBRUE7O0lBRUksMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQywwREFBMEQ7QUFDOUQ7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsOENBQThDO0lBQzlDLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsMkNBQTJDO0FBQy9DOztBQUlBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUk7O1FBRUksNkJBQTZCO1FBQzdCLGdCQUFnQjtRQUNoQiw2QkFBNkI7SUFDakM7O0lBRUE7O1FBRUksbUNBQW1DO1FBQ25DLGtCQUFrQjtRQUNsQiw0QkFBNEI7SUFDaEM7SUFDQTs7UUFFSSxrQ0FBa0M7UUFDbEMsZ0JBQWdCO1FBQ2hCLDZCQUE2QjtJQUNqQztBQUNKOztBQUdBOztJQUVJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSSxNQUFNLFlBQVksQ0FBQztJQUNuQixJQUFJLFVBQVUsQ0FBQztBQUNuQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsbUNBQW1DO0FBQ3ZDOztBQUVBOztJQUVJLElBQUksZ0JBQWdCLENBQUM7SUFDckIsS0FBSyxtQkFBbUIsQ0FBQztBQUM3QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudzMtZnVsbC1jZW50ZXJcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnczLWJhY2tncm91bmQtd2l0aC1vcGFjaXR5XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjU1N2NiNjtcclxufVxyXG5cclxuLnNwbGFzaC1zY3JlZW5cclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwMDYyYzQsICMwMGFmZmYpO1xyXG59XHJcblxyXG4uc2hvdy1zcGxhc2hcclxue1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmhpZGUtc3BsYXNoXHJcbntcclxuICAgIGhlaWdodDogMHZoO1xyXG59XHJcblxyXG4uc3BsYXNoLXNjcmVlbi1jb250ZW50XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jaXJjbGUgXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2Nyk7XHJcbiAgICBjb2xvcjogaW5kaWdvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5ib3gtc2hhZG93XHJcbntcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi50ZXh0LXNoYWRvd1xyXG57XHJcbiAgICB0ZXh0LXNoYWRvdzoycHggMnB4IDAgIzQ0NDtcclxufVxyXG5cclxuLnplcm8tb3BhY2l0eVxyXG57XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uYXBwLXNob3J0Y3V0XHJcbntcclxuICAgIHdpZHRoOiA4MHB4OyBcclxuICAgIGhlaWdodDogODBweDsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcHBcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG4gICAgd2lkdGg6IDA7IFxyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMsIGhlaWdodCAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XHJcbn1cclxuXHJcbi5hcHAtb3BlblxyXG57XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYXBwLWNvbnRlbnRcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJsYW5rXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxMDtcclxufVxyXG5cclxuLmNwLW1vcnBoIFxyXG57XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvckxlZnQpO1xyXG4gICAgYW5pbWF0aW9uOiBjcC1tb3JwaC1hbmltYXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBub25lO1xyXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICBhbmltYXRpb24tbmFtZTogY3AtbW9ycGgtYW5pbWF0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcblxyXG5cclxuLmNwLXNwaW5uZXIgXHJcbntcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjcC1tb3JwaC1hbmltYXRlXHJcbntcclxuICAgIDAlIFxyXG4gICAge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApIHNjYWxlKDEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3JSaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgMjUlLCA3NSUgXHJcbiAgICB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSguNCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yTGVmdCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIFxyXG4gICAge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvclJpZ2h0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5ibGlua2luZyBcclxue1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuICBcclxuQGtleWZyYW1lcyBibGluayBcclxue1xyXG4gICAgZnJvbSB7b3BhY2l0eTogMC4yO31cclxuICAgIHRvIHtvcGFjaXR5OiAxO31cclxufVxyXG5cclxuLmJvdW5jaW5nIFxyXG57XHJcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjdzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlIFxyXG57XHJcbiAgICAwJSB7bWFyZ2luLWJvdHRvbTogMDt9XHJcbiAgICA1MCUge21hcmdpbi1ib3R0b206IDUwcHg7fVxyXG59Il19 */"] });


/***/ }),

/***/ 3154:
/*!****************************************************!*\
  !*** ./src/app/lightTheme/lightTheme.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LightThemeComponent": () => (/* binding */ LightThemeComponent)
/* harmony export */ });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = ["about"];
const _c1 = ["work"];
const _c2 = ["education"];
const _c3 = ["contact"];
function LightThemeComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9, " ");
} }
function LightThemeComponent_div_45_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](icon_r12);
} }
function LightThemeComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LightThemeComponent_div_45_span_2_Template, 3, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 49)(5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const skill_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", skill_r10.icons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", skill_r10.value + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r10.value, "% ");
} }
function LightThemeComponent_div_58_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r18 = ctx.$implicit;
    const experience_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r18.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-width", 100 / experience_r13.places.length + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-circle", place_r18.circle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", place_r18.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", place_r18.name)("alt", place_r18.name);
} }
function LightThemeComponent_div_58_span_10_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LightThemeComponent_div_58_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LightThemeComponent_div_58_span_10_span_3_Template, 2, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r20 = ctx.$implicit;
    const places_index_r21 = ctx.index;
    const experience_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r20.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](place_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", places_index_r21 != experience_r13.places.length - 1);
} }
function LightThemeComponent_div_58_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Since ", experience_r13.from, " ");
} }
function LightThemeComponent_div_58_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", experience_r13.from, " to ", experience_r13.to, "");
} }
function LightThemeComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "header", 53)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 54)(6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LightThemeComponent_div_58_a_7_Template, 2, 8, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "@ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LightThemeComponent_div_58_span_10_Template, 4, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "footer", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LightThemeComponent_div_58_span_15_Template, 2, 1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LightThemeComponent_div_58_span_16_Template, 2, 2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const experience_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](experience_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", experience_r13.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", experience_r13.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", experience_r13.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !experience_r13.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", experience_r13.to);
} }
function LightThemeComponent_div_67_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r30 = ctx.$implicit;
    const study_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", place_r30.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-width", 100 / study_r26.places.length + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-circle", place_r30.circle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", place_r30.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", place_r30.name)("alt", place_r30.name);
} }
function LightThemeComponent_div_67_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const study_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Since ", study_r26.from, " ");
} }
function LightThemeComponent_div_67_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const study_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", study_r26.from, " to ", study_r26.to, "");
} }
function LightThemeComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "header", 53)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 54)(6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LightThemeComponent_div_67_a_7_Template, 2, 8, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "footer", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LightThemeComponent_div_67_span_12_Template, 2, 1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LightThemeComponent_div_67_span_13_Template, 2, 2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const study_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](study_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", study_r26.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", study_r26.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !study_r26.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", study_r26.to);
} }
function LightThemeComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "div", 63)(3, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const contactDetail_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", contactDetail_r34.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contactDetail_r34.icon);
} }
class LightThemeComponent {
    constructor(data) {
        this.data = data;
        this.currentActive = 0;
        this.homeOffset = null;
        this.aboutOffset = null;
        this.workOffset = null;
        this.educationOffset = null;
        this.contactOffset = null;
        this.showMenu = false;
    }
    ngAfterViewInit() {
        // this.homeOffset = this.homeElement.nativeElement.offsetTop;
        this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
        this.workOffset = this.workElement.nativeElement.offsetTop;
        this.educationOffset = this.educationElement.nativeElement.offsetTop;
        this.contactOffset = this.contactElement.nativeElement.offsetTop;
    }
    ngOnInit() {
    }
    onWindowScroll(e) {
        let element = document.querySelector('.w3-bar');
        let pageoffset = window.pageYOffset;
        let clientHeight = element.clientHeight;
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add("w3-bar");
            element.classList.add("w3-card");
            element.classList.add("w3-animate-top");
            element.classList.add("w3-light-grey");
        }
        else {
            element.classList.remove("w3-card");
            element.classList.remove("w3-animate-top");
            element.classList.remove("w3-light-grey");
        }
        // if (window.pageYOffset >= this.homeOffset && window.pageYOffset < this.aboutOffset) {
        //   this.currentActive = 1;
        // } else 
        if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.workOffset) {
            this.currentActive = 2;
        }
        else if (window.pageYOffset >= this.workOffset && window.pageYOffset < this.educationOffset) {
            this.currentActive = 3;
        }
        else if (window.pageYOffset >= this.educationOffset && window.pageYOffset < this.contactOffset) {
            this.currentActive = 4;
        }
        else if (window.pageYOffset >= this.contactOffset) {
            this.currentActive = 5;
        }
        else {
            this.currentActive = 0;
        }
    }
    toggleFunction() {
        this.showMenu = !this.showMenu;
    }
}
LightThemeComponent.ɵfac = function LightThemeComponent_Factory(t) { return new (t || LightThemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
LightThemeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LightThemeComponent, selectors: [["app-lightTheme"]], viewQuery: function LightThemeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.aboutElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.workElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.educationElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contactElement = _t.first);
    } }, hostBindings: function LightThemeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function LightThemeComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 86, vars: 18, consts: [[1, "w3-top", 2, "width", "100vw", "overflow", "hidden"], ["id", "myNavbar", 1, "w3-bar", 3, "scroll"], ["href", "javascript:void(0);", "title", "Toggle Navigation Menu", 1, "w3-bar-item", "w3-button", "w3-hover-black", "w3-hide-medium", "w3-hide-large", "w3-right", 3, "click"], [1, "fa", "fa-bars"], ["href", "./", 1, "w3-bar-item", "w3-button"], ["href", "./lightTheme#about", 1, "w3-bar-item", "w3-button", "w3-hide-small"], [1, "fa", "fa-user"], ["href", "./lightTheme#work", 1, "w3-bar-item", "w3-button", "w3-hide-small"], [1, "fa", "fa-th"], ["href", "./lightTheme#education", 1, "w3-bar-item", "w3-button", "w3-hide-small"], [1, "fa", "fa-book"], ["href", "./lightTheme#contact", 1, "w3-bar-item", "w3-button", "w3-hide-small"], [1, "fa", "fa-address-card"], ["id", "navDemo", 1, "w3-bar-block", "w3-white", "w3-hide", "w3-hide-large", "w3-hide-medium"], ["href", "./lightTheme#about", 1, "w3-bar-item", "w3-button", 3, "click"], ["href", "./lightTheme#work", 1, "w3-bar-item", "w3-button", 3, "click"], ["href", "./lightTheme#education", 1, "w3-bar-item", "w3-button", 3, "click"], ["href", "./lightTheme#contact", 1, "w3-bar-item", "w3-button", 3, "click"], ["id", "about", 1, "bgimg-1", "w3-display-container", 2, "background-image", "url(\"assets/my_photos/me_light_header.jpg\")"], ["about", ""], [1, "w3-display-bottommiddle", 2, "white-space", "nowrap", "bottom", "2% !important"], [1, "w3-center", "w3-padding-large", "w3-black", "w3-xlarge", "w3-wide", "w3-animate-opacity", "w3-hide-small"], [1, "w3-center", "w3-padding-large", "w3-black", "w3-xlarge", "w3-animate-opacity", "w3-hide-medium", "w3-hide-large"], [1, "w3-content", "w3-container", "w3-padding-64"], [1, "w3-center"], [4, "ngFor", "ngForOf"], [1, "w3-xlarge", "w3-center", "w3-padding-16"], ["class", "w3-col l6 w3-padding", 4, "ngFor", "ngForOf"], ["id", "work", 1, "bgimg-2", "w3-display-container", "w3-opacity-min", 2, "background-image", "url(\"assets/light_work.jpg\")"], ["work", ""], [1, "w3-display-middle"], [1, "w3-xxlarge", "w3-text-white"], [1, "w3-row-padding", "w3-center"], ["class", "w3-col l6", 4, "ngFor", "ngForOf"], ["id", "education", 1, "bgimg-3", "w3-display-container", "w3-opacity-min", 2, "background-image", "url(\"assets/light_education.jpg\")"], ["education", ""], ["id", "contact", 1, "bgimg-4", "w3-display-container", "w3-opacity-min", 2, "background-image", "url(\"assets/light_contact.jpg\")"], ["contact", ""], [1, "w3-content", "w3-container", "w3-padding-32"], [1, "w3-row"], [1, "w3-col", "s12"], [1, "w3-row", "w3-card", "w3-light-grey", "w3-margin", 2, "width", "auto !important"], ["class", "w3-col l3 m3 s6 w3-full-center", 4, "ngFor", "ngForOf"], [1, "w3-row", "w3-center", "w3-margin"], [1, "w3-button", "w3-xlarge", "w3-dark-grey"], ["href", "assets/CV.pdf", 2, "text-decoration", "none"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "w3-col", "l6", "w3-padding"], [1, "w3-margin-bottom"], [1, "w3-grey", "w3-margin-bottom"], [1, "w3-container", "w3-padding-small", "w3-dark-grey", "w3-center"], [1, "w3-col", "l6"], [1, "w3-card-4", "w3-margin-bottom", "w3-light-grey"], [1, "w3-container", "w3-dark-grey"], [1, "w3-container"], [1, "w3-margin"], [3, "href", 4, "ngFor", "ngForOf"], [1, "w3-dark-grey", "w3-padding-small"], [4, "ngIf"], [3, "href"], [2, "height", "100px", 3, "src", "title", "alt"], [1, "w3-col", "l3", "m3", "s6", "w3-full-center"], [1, "w3-margin", "w3-center", "w3-xlarge"], [1, "circle", "w3-border", "w3-border-black", "w3-full-center", "w3-hover-dark-grey", 2, "cursor", "pointer"]], template: function LightThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function LightThemeComponent_Template_div_scroll_1_listener($event) { return ctx.onWindowScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightThemeComponent_Template_a_click_2_listener() { return ctx.toggleFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightThemeComponent_Template_a_click_19_listener() { return ctx.toggleFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightThemeComponent_Template_a_click_21_listener() { return ctx.toggleFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightThemeComponent_Template_a_click_23_listener() { return ctx.toggleFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightThemeComponent_Template_a_click_25_listener() { return ctx.toggleFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18, 19)(29, "div", 20)(30, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23)(35, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 24)(38, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, LightThemeComponent_span_41_Template, 3, 1, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " I'm really good at: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, LightThemeComponent_div_45_Template, 7, 5, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 28, 29)(48, "div", 30)(49, "span", 31)(50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23)(53, "p", 24)(54, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Here is a summary of my experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, LightThemeComponent_div_58_Template, 17, 6, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 34, 35)(61, "div", 30)(62, "span", 31)(63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 23)(66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, LightThemeComponent_div_67_Template, 14, 5, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 36, 37)(70, "div", 30)(71, "span", 31)(72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 38)(75, "div", 39)(76, "div", 40)(77, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, LightThemeComponent_div_78_Template, 5, 3, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 43)(80, "div", 44)(81, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " \u00A0Download\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " >");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-dark-grey", ctx.currentActive === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-dark-grey", ctx.currentActive === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-dark-grey", ctx.currentActive === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-dark-grey", ctx.currentActive === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("w3-show", ctx.showMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.fullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.fullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.aboutMe_short);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.aboutMe_long);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.studies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.contactDetails);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] \r\n{\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  color: #777;\r\n  line-height: 1.8;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n\r\n\r\n.bgimg-1[_ngcontent-%COMP%], .bgimg-2[_ngcontent-%COMP%], .bgimg-3[_ngcontent-%COMP%], .bgimg-4[_ngcontent-%COMP%]  \r\n{\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n\r\n\r\n.bgimg-1[_ngcontent-%COMP%] \r\n{\r\n  min-height: 70vh;\r\n}\r\n\r\n\r\n\r\n.bgimg-2[_ngcontent-%COMP%] {\r\n  min-height: 400px;\r\n}\r\n\r\n\r\n\r\n.bgimg-3[_ngcontent-%COMP%] {\r\n  min-height: 400px;\r\n}\r\n\r\n\r\n\r\n.bgimg-4[_ngcontent-%COMP%] \r\n{\r\n  min-height: 400px;\r\n}\r\n\r\n.w3-wide[_ngcontent-%COMP%] {letter-spacing: 10px;}\r\n\r\n.w3-hover-opacity[_ngcontent-%COMP%] {cursor: pointer;}\r\n\r\n\r\n\r\n.circle[_ngcontent-%COMP%] \r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: rgba(255, 255, 255, 0.767);\r\n    border-radius: 50%;\r\n}\r\n\r\n.w3-full-center[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZ2h0VGhlbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksK0JBQStCO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBLDZCQUE2Qjs7QUFDN0I7O0VBRUUsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBLG9DQUFvQzs7QUFDcEM7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUdBLDZCQUE2Qjs7QUFDN0I7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsNEJBQTRCOztBQUM1QjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSwyQkFBMkI7O0FBQzNCOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVLG9CQUFvQixDQUFDOztBQUMvQixtQkFBbUIsZUFBZSxDQUFDOztBQUVuQzs7Ozs7OztDQU9DOztBQUdEOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJsaWdodFRoZW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSxoMSxoMixoMyxoNCxoNSxoNiBcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5LCBodG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgbGluZS1oZWlnaHQ6IDEuODtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgUGFyYWxsYXggRWZmZWN0ICovXHJcbi5iZ2ltZy0xLCAuYmdpbWctMiwgLmJnaW1nLTMsIC5iZ2ltZy00ICBcclxue1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLyogRmlyc3QgaW1hZ2UgKExvZ28uIEZ1bGwgaGVpZ2h0KSAqL1xyXG4uYmdpbWctMSBcclxue1xyXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcblxyXG4vKiBTZWNvbmQgaW1hZ2UgKFBvcnRmb2xpbykgKi9cclxuLmJnaW1nLTIge1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4vKiBUaGlyZCBpbWFnZSAoRWR1Y2F0aW9uKSAqL1xyXG4uYmdpbWctMyB7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi8qIEZvdXJ0aCBpbWFnZSAoQ29udGFjdCkgKi9cclxuLmJnaW1nLTQgXHJcbntcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLnczLXdpZGUge2xldHRlci1zcGFjaW5nOiAxMHB4O31cclxuLnczLWhvdmVyLW9wYWNpdHkge2N1cnNvcjogcG9pbnRlcjt9XHJcblxyXG4vKiBUdXJuIG9mZiBwYXJhbGxheCBzY3JvbGxpbmcgZm9yIHRhYmxldHMgYW5kIHBob25lcyBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMTYwMHB4KSB7XHJcbiAgLmJnaW1nLTEsIC5iZ2ltZy0yLCAuYmdpbWctMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxufVxyXG4qL1xyXG5cclxuXHJcbi5jaXJjbGUgXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi53My1mdWxsLWNlbnRlclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ 7802:
/*!******************************************************!*\
  !*** ./src/app/modernTheme/modernTheme.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModernThemeComponent": () => (/* binding */ ModernThemeComponent)
/* harmony export */ });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function ModernThemeComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const contactDetail_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", contactDetail_r6.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contactDetail_r6.icon);
} }
function ModernThemeComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28)(1, "div", 25)(2, "div", 26)(3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const contactDetail_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", contactDetail_r7.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contactDetail_r7.icon);
} }
function ModernThemeComponent_div_6_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8, " ");
} }
function ModernThemeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "section", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModernThemeComponent_div_6_div_5_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ModernThemeComponent_div_6_div_7_Template, 5, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 14)(9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 17)(12, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 20)(16, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ModernThemeComponent_div_6_p_19_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.data.contactDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.data.contactDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.data.aboutMe_long);
} }
function ModernThemeComponent_div_7_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const contactDetail_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", contactDetail_r10.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contactDetail_r10.icon);
} }
function ModernThemeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33)(5, "div", 34)(6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 37)(9, "div", 21)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Muhannad Al-Khodari");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ModernThemeComponent_div_7_div_13_Template, 5, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 40)(15, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.data.contactHomePhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.data.contactDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.data.aboutMe_short);
} }
function ModernThemeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class ModernThemeComponent {
    constructor(data) {
        this.data = data;
        this.currentActive = 'about';
        this.foldClass = '';
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    changeTab(tab) {
        this.foldClass = 'foldOut';
        setTimeout(() => {
            this.currentActive = tab;
            this.foldClass = 'foldIn';
            setTimeout(() => {
                this.foldClass = '';
            }, 500);
        }, 500);
    }
}
ModernThemeComponent.ɵfac = function ModernThemeComponent_Factory(t) { return new (t || ModernThemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
ModernThemeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModernThemeComponent, selectors: [["app-modernTheme"]], decls: 9, vars: 5, consts: [[1, "body"], [1, "background"], [1, "w3-container", "w3-margin", "bg-primary"], [1, "card-body", "w3-margin-bottom"], [1, "w3-container"], ["class", "w3-row", 4, "ngIf"], [1, "w3-row"], [1, ""], [1, "w3-margin-top"], [1, "w3-row", "w3-center", "w3-margin-top"], [1, "w3-col", "l1", "w3-hide-medium", "w3-hide-small"], ["class", "w3-row w3-full-center w3-padding", 4, "ngFor", "ngForOf"], [1, "w3-row", "w3-hide-large"], ["class", "w3-col s3 w3-full-center w3-padding", 4, "ngFor", "ngForOf"], [1, "w3-col", "l5", "m6"], [1, "card", "box-shadow", "shape", "wiggle"], ["src", "assets/my_photos/me.jpg", "alt", "me", 1, "shape"], [1, "w3-row", "w3-margin-top", "w3-center"], ["href", "assets/CV.pdf", "target", "_blank", 1, "w3-button", "w3-purple", "w3-round-xlarge"], [1, "fa", "fa-download"], [1, "w3-col", "m6", "w3-left-align"], [1, "w3-margin-bottom"], ["class", "w3-text-dark-gray w3-large", 4, "ngFor", "ngForOf"], [1, "w3-hide-lg", 2, "margin-bottom", "50px", "opacity", "0"], [1, "w3-row", "w3-full-center", "w3-padding"], [1, "w3-full-center", "w3-xlarge"], [1, "w3-button", "w3-purple", "w3-full-center", "circle", 2, "cursor", "pointer"], [3, "href"], [1, "w3-col", "s3", "w3-full-center", "w3-padding"], [1, "w3-text-dark-gray", "w3-large"], [1, "w3-col", "l4", "m6", "s12"], [2, "padding-top", "50px !important"], [1, "profile-card", "w3-margin-bottom"], [1, "card", "bg-primary", "shadow-soft", "border-light", "text-center"], [1, "card-header"], [1, "profile-image", "bg-primary", "shadow-inset", "border", "border-light", "rounded", "mx-auto", "p-3", "mt-n6"], ["alt", "Muhannad Al-Khodari", 1, "card-img-top", "rounded", 3, "src"], [1, "card-body"], [1, "w3-container", "w3-margin-top", "w3-margin-bottom"], ["class", "w3-col s3 w3-full-center", 4, "ngFor", "ngForOf"], [1, "w3-margin-top", "w3-margin-bottom"], [1, "card-text", "w3-text-black"], ["href", "assets/CV.pdf", "target", "_blank", 1, "btn", "btn-primary"], [1, "w3-col", "s3", "w3-full-center"], [1, "w3-center", "w3-xlarge"], [1, "btn", "btn-icon-only", "btn-pill", 2, "cursor", "pointer"]], template: function ModernThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ModernThemeComponent_div_6_Template, 22, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ModernThemeComponent_div_7_Template, 21, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ModernThemeComponent_div_8_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.foldClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentActive == "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentActive == "education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentActive == "work");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVyblRoZW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRyIsImZpbGUiOiJtb2Rlcm5UaGVtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmJvZHlcclxue1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YxMWRjMywgIzhiMTc3Mik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xMDAwO1xyXG59XHJcblxyXG5odG1sLCBib2R5XHJcbntcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLndpZ2dsZVxyXG57XHJcbiAgICBhbmltYXRpb24tbmFtZTogd2lnZ2xlX2FuaW1hdGlvbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHdpZ2dsZV9hbmltYXRpb25cclxue1xyXG4gICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKCs1ZGVnKTsgfVxyXG59XHJcblxyXG4uc2hhcGVcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjMlIDM3JSAzMCUgNzAlIC8gNTAlIDQ1JSA1NSUgNTAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59ICovIl19 */"] });


/***/ }),

/***/ 1182:
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    //{ path: 'app/:app', component: HomeComponent },
    // { path: 'app/lightTheme', component: LightThemeComponent },
    // { path: 'app/darkTheme', component: DarkThemeComponent },
    // { path: 'app/colorsTheme', component: ColorsThemeComponent },
    // { path: 'app/cartoonsTheme', component: CartoonThemeComponent },
    // { path: 'app/modernTheme', component: ModernThemeComponent },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService),
/* harmony export */   "experience": () => (/* binding */ experience),
/* harmony export */   "place": () => (/* binding */ place),
/* harmony export */   "skill": () => (/* binding */ skill),
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DataService {
    constructor() {
        this.simplified = true;
        this.themes = [
            {
                name: "Stylish Light",
                link: "lightTheme",
                icon: "wb_sunny",
                colorLeft: "lightgray",
                colorRight: "GhostWhite"
            },
            {
                name: "Minimalistic Dark",
                link: "darkTheme",
                icon: "filter_b_and_w",
                colorLeft: "darkgray",
                colorRight: "gray"
            },
            {
                name: "Classic Colored",
                link: "colorsTheme",
                icon: "palette",
                colorLeft: "purple",
                colorRight: "plum"
            },
            {
                name: "Cartoonish Isometric",
                link: "cartoonsTheme",
                icon: "location_city",
                colorLeft: "RoyalBlue",
                colorRight: "lawngreen"
            }
            // ,
            // {
            //   name: "Modern Trend",
            //   link: "modernTheme",
            //   icon: "thumb_up",
            //   colorLeft: "purple",
            //   colorRight: "violet"
            // }
        ];
        this.firstName = 'Muhannad';
        this.lastName = 'Al-Khodari';
        this.fullName = this.firstName + ' ' + this.lastName;
        this.aboutMe_short = 'I love analyzing problems, and designing solutions for them';
        this.aboutMe_long = [
            "Software Developer, Product Owner/Designer, Teacher/Trainer and a Content Writer willing to work on a variety of technical and creative projects and fields.",
            "Interested in making people the best at what they can be, from art and programming to learning to cook.",
            "I'm always driven by the end user experience of customers. So, my passion is the futuristic concept of NUI (Natural User Interface) and technology immersion in human life. ",
            "Routines? Sorry, not my thing. I'm always looking for new interesting problems to solve. "
        ];
        this.skills = [
            {
                name: "Inspiring/Leading People",
                icons: [
                    "fa fa-bullhorn w3-text-red",
                    "fa fa-group w3-text-orange",
                    "fa fa-lightbulb-o w3-text-yellow",
                ],
                value: 100
            },
            {
                name: "System/Business Anlaysis and Design",
                icons: [
                    "fa fa-industry w3-text-black",
                    "fa fa-magic w3-text-purple",
                    "fa fa-laptop w3-text-green",
                ],
                value: 80
            },
            {
                name: "Web Design (HTML, CSS)",
                icons: [
                    "devicon-html5-plain w3-text-red",
                    "devicon-css3-plain w3-text-cyan"
                ],
                value: 90
            },
            {
                name: "Web Programming (Angular, React, Vue)",
                icons: [
                    "devicon-javascript-plain w3-text-amber"
                ],
                value: 80
            },
            {
                name: "Microsoft Programming (Asp.Net, C#, C++)",
                icons: [
                    "devicon-dot-net-plain w3-text-blue",
                    "devicon-csharp-plain w3-text-deep-purple",
                    "devicon-cplusplus-plain w3-text-red"
                ],
                value: 70
            },
            {
                name: "Design (Photoshop, Illustrator, After Effects)",
                icons: [
                    "devicon-photoshop-plain w3-text-blue",
                    "devicon-illustrator-plain w3-orange",
                    "devicon-aftereffects-plain w3-text-indigo"
                ],
                value: 60
            },
            {
                name: "Robotics",
                icons: [
                    "fa fa-reddit-alien w3-text-blue-gray"
                ],
                value: 70
            },
            {
                name: "Electronics",
                icons: [
                    "fa fa-microchip w3-text-black"
                ],
                value: 60
            }
        ];
        this.experiences = [
            {
                title: "Frontend Developer (Remote)",
                description: "Implementing systems' user interfaces based on approved designs and logic.",
                from: "May, 2022",
                to: "Jun, 2022",
                inSimplified: false,
                places: [
                    {
                        name: "Baanx",
                        link: "https://www.baanx.com/",
                        imageUrl: "assets/logos/baanx_logo.jpg",
                        circle: true
                    }
                ]
            },
            {
                title: "Frontend Engineer",
                description: "Developing and designing user interfaces for web applications according to clients' requirements.",
                from: "May, 2021",
                to: "Apr, 2022",
                inSimplified: false,
                places: [
                    {
                        name: "AlphaApps",
                        link: "https://www.alpha-apps.ae/",
                        imageUrl: "assets/logos/AlphaApps_logo.png",
                        circle: true
                    }
                ]
            },
            {
                title: "Software Development Supervisor",
                description: "Holding the responsibility for an assigned developers team and the life-cycle of a software project/module.",
                from: "Feb, 2021",
                to: "Apr, 2021",
                inSimplified: false,
                places: [
                    {
                        name: "EastMed",
                        link: "http://eastmed.co/",
                        imageUrl: "assets/logos/EastMed_logo.png",
                        circle: false
                    }
                ]
            },
            {
                title: "Software Developer",
                description: "Analyzing buisness, brain-storming ideas and designing solutions using multiple technolgies.",
                from: "Dec. 2016",
                to: "Jan. 2021",
                inSimplified: false,
                places: [
                    {
                        name: "Syriatel",
                        link: "http://www.syriatel.sy",
                        imageUrl: "assets/logos/syriatel_logo.png",
                        circle: false
                    }
                ]
            },
            {
                title: "Robotics Trainer",
                description: "Training the next genarations to lead the robotic future ahead of us, from kindergarten to university.",
                from: "Mar. 2014",
                to: null,
                inSimplified: true,
                places: [
                    {
                        name: "RoboTech Club",
                        link: "https://www.facebook.com/HmkRoboTech",
                        imageUrl: "assets/logos/RoboTechClub_logo.jpg",
                        circle: true
                    },
                    {
                        name: "USWA Academy",
                        link: "https://www.facebook.com/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D9%91%D8%A9-%D8%A3%D8%B3%D9%88%D8%A9-USWA-Academy-1063589860322163/",
                        imageUrl: "assets/logos/USWA_logo.jpg",
                        circle: true
                    },
                    // {
                    //   name: "Al-Abjadiya Institute for Training",
                    //   link: "https://www.facebook.com/aicgrouptraining",
                    //   imageUrl: "assets/logos/aic_logo.jpg",
                    //   circle: true
                    // },
                    {
                        name: "SyBots",
                        link: "https://www.facebook.com/SyBots",
                        imageUrl: "assets/logos/SyBots_logo.png",
                        circle: true
                    }
                ]
            },
            {
                title: "Content Editor",
                description: "Entertainment, science, e-business or robotics, it is our duty to share knowledge on the web.",
                from: "Jan. 2017",
                to: "Jul. 2020",
                inSimplified: false,
                places: [
                    {
                        name: "Facts Mine",
                        link: "https://mangam.info/",
                        imageUrl: "assets/logos/mangam_logo.png",
                        circle: false
                    },
                    {
                        name: "Robotic Arena",
                        link: "https://www.roboticarena.info/",
                        imageUrl: "assets/logos/RoboticArena_logo.png",
                        circle: true
                    },
                    {
                        name: "Boraq Group",
                        link: "http://boraq-group.com/",
                        imageUrl: "assets/logos/boraq_logo.png",
                        circle: true
                    }
                ]
            },
            {
                title: "Assistant Teacher",
                description: "I was lucky to teach Computer Engineering students about Programming Algorithms and Robotics.",
                from: "Feb. 2015",
                to: "Jun. 2016",
                inSimplified: true,
                places: [
                    {
                        name: "Damascus University",
                        link: "http://www.damascusuniversity.edu.sy",
                        imageUrl: "assets/logos/DamascusUniversity_logo.jpg",
                        circle: true
                    }
                ]
            }
        ];
        this.studies = [
            {
                title: "Computer Engineering",
                description: "Damascus University",
                from: "2008",
                to: "2014",
                inSimplified: true,
                places: [
                    {
                        name: "Damascus University",
                        link: "http://www.damascusuniversity.edu.sy",
                        imageUrl: "assets/logos/DamascusUniversity_logo.jpg",
                        circle: true
                    }
                ]
            },
            {
                title: "Master of Buisness Administration",
                description: "Syrian Virtual University",
                from: "2018",
                to: "2020",
                inSimplified: true,
                places: [
                    {
                        name: "Syrian Virtual University",
                        link: "https://svuonline.org/",
                        imageUrl: "assets/logos/SVU_logo.png",
                        circle: false
                    }
                ]
            }
        ];
        this.contactDetails = [
            {
                detail: "Muhannad Al-Khodari",
                link: "https://www.linkedin.com/in/muhannad-al-khodari/",
                icon: "fa fa-linkedin-square fa-fw w3-text-indigo"
            },
            {
                detail: "+963 931874562",
                link: "tel:+963931874562",
                icon: "fa fa-phone fa-fw w3-text-green"
            },
            {
                detail: "muhannad.al.khodari@outlook.com",
                link: "mailto:muhannad.al.khodari@outlook.com",
                icon: "fa fa-envelope fa-fw w3-text-blue"
            },
            {
                detail: "Muhannad Al-Khodari",
                link: "https://www.facebook.com/muhannad.al.khodari",
                icon: "fa fa-facebook-official fa-fw w3-text-indigo"
            }
        ];
        this.contactPhotoUrl = "assets/my_photos/me_brown.jpg";
        this.contactRedPhotoUrl = "assets/my_photos/me_red.jpeg";
        this.contactHomePhotoUrl = "assets/my_photos/me_front.jpg";
        this.contactLightPhotoUrl = "assets/my_photos/me_light_header.jpg";
        this.contactDarkPhotoUrl = "assets/my_photos/me_header.jpg";
        this.contactSmallDarkPhotoUrl = "assets/my_photos/black-me.jpeg";
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
class skill {
}
class place {
}
class experience {
}
class contactDetail {
}
class theme {
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map