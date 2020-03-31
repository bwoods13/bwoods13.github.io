function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _new_monster_generator_new_monster_generator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-monster-generator/new-monster-generator.component */
    "./src/app/new-monster-generator/new-monster-generator.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'pf2-monster-generator';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [["role", "banner", 1, "toolbar"], ["width", "150", "alt", "Pathfinder Logo", "src", "assets/pathfinder-logo-png-2.png"], [1, "spacer"], ["role", "main", 1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2E Custom Creature Building Quick Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-new-monster-generator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_new_monster_generator_new_monster_generator_component__WEBPACK_IMPORTED_MODULE_1__["NewMonsterGeneratorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _new_monster_generator_new_monster_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./new-monster-generator/new-monster-generator.component */
    "./src/app/new-monster-generator/new-monster-generator.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _new_monster_generator_new_monster_generator_component__WEBPACK_IMPORTED_MODULE_4__["NewMonsterGeneratorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _new_monster_generator_new_monster_generator_component__WEBPACK_IMPORTED_MODULE_4__["NewMonsterGeneratorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/new-monster-generator/new-monster-generator.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/new-monster-generator/new-monster-generator.component.ts ***!
    \**************************************************************************/

  /*! exports provided: NewMonsterGeneratorComponent */

  /***/
  function srcAppNewMonsterGeneratorNewMonsterGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewMonsterGeneratorComponent", function () {
      return NewMonsterGeneratorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function NewMonsterGeneratorComponent_option_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var level_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", level_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", level_r13, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ac_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ac_r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ac_r14, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hp_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", hp_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hp_r15, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fort_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", fort_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fort_r16, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reflex_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", reflex_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reflex_r17, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var will_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", will_r18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", will_r18, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stab_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stab_r19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stab_r19, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var strikeDamage_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", strikeDamage_r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", strikeDamage_r20, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_115_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var spellDC_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", spellDC_r21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spellDC_r21, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_119_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var spellAttackBonus_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", spellAttackBonus_r22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spellAttackBonus_r22, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var abilityMod_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", abilityMod_r23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", abilityMod_r23, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_130_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var perceptionMod_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", perceptionMod_r24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", perceptionMod_r24, " ");
      }
    }

    function NewMonsterGeneratorComponent_option_134_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skillMod_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", skillMod_r25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skillMod_r25, " ");
      }
    }

    var NewMonsterGeneratorComponent = /*#__PURE__*/function () {
      function NewMonsterGeneratorComponent() {
        _classCallCheck(this, NewMonsterGeneratorComponent);

        this.levels = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        this.abilityMods = [['n/a', '+3', '+2', '+0'], ['n/a', '+3', '+2', '+0'], ['+5', '+4', '+3', '+1'], ['+5', '+4', '+3', '+1'], ['+5', '+4', '+3', '+1'], ['+6', '+5', '+3', '+2'], ['+6', '+5', '+4', '+2'], ['+7', '+5', '+4', '+2'], ['+7', '+6', '+4', '+2'], ['+7', '+6', '+4', '+3'], ['+7', '+6', '+4', '+3'], ['+8', '+7', '+5', '+3'], ['+8', '+7', '+5', '+3'], ['+8', '+7', '+5', '+4'], ['+9', '+8', '+5', '+4'], ['+9', '+8', '+5', '+4'], ['+9', '+8', '+6', '+4'], ['+10', '+9', '+6', '+5'], ['+10', '+9', '+6', '+5'], ['+10', '+9', '+6', '+5'], ['+11', '+10', '+6', '+5'], ['+11', '+10', '+7', '+6'], ['+11', '+10', '+7', '+6'], ['+11', '+10', '+8', '+6'], ['+11', '+10', '+8', '+6'], ['+13', '+12', '+9', '+7']]; // Level 24

        this.perceptionMods = [['+9', '+8', '+5', '+2', '+0'], ['+10', '+9', '+6', '+3', '+1'], ['+11', '+10', '+7', '+4', '+2'], ['+12', '+11', '+8', '+5', '+3'], ['+14', '+12', '+9', '+6', '+4'], ['+15', '+14', '+11', '+8', '+6'], ['+17', '+15', '+12', '+9', '+7'], ['+18', '+17', '+14', '+11', '+8'], ['+20', '+18', '+15', '+12', '+10'], ['+21', '+19', '+16', '+13', '+11'], ['+23', '+21', '+18', '+15', '+12'], ['+24', '+22', '+19', '+16', '+14'], ['+26', '+24', '+21', '+18', '+15'], ['+27', '+25', '+22', '+19', '+16'], ['+29', '+26', '+23', '+20', '+18'], ['+30', '+28', '+25', '+22', '+19'], ['+32', '+29', '+26', '+23', '+20'], ['+33', '+30', '+28', '+25', '+22'], ['+35', '+32', '+29', '+26', '+23'], ['+36', '+33', '+30', '+27', '+24'], ['+38', '+35', '+32', '+29', '+26'], ['+39', '+36', '+33', '+30', '+27'], ['+41', '+38', '+35', '+32', '+28'], ['+43', '+39', '+36', '+33', '+30'], ['+44', '+40', '+37', '+34', '+31'], ['+46', '+42', '+38', '+36', '+32']]; // Level 24

        this.skillMods = [['+8', '+5', '+4', '+2 to +1'], ['+9', '+6', '+5', '+3 to +2'], ['+10', '+7', '+6', '+4 to +3'], ['+11', '+8', '+7', '+5 to +4'], ['+13', '+10', '+9', '+7 to +5'], ['+15', '+12', '+10', '+8 to +7'], ['+16', '+13', '+12', '+10 to +8'], ['+18', '+15', '+13', '+11 to +9'], ['+20', '+17', '+15', '+13 to +11'], ['+21', '+18', '+16', '+14 to +12'], ['+23', '+20', '+18', '+16 to +13'], ['+25', '+22', '+19', '+17 to +15'], ['+26', '+23', '+21', '+19 to +16'], ['+28', '+25', '+22', '+20 to +17'], ['+30', '+27', '+24', '+22 to +19'], ['+31', '+28', '+25', '+23 to +20'], ['+33', '+30', '+27', '+25 to +21'], ['+35', '+32', '+28', '+26 to +23'], ['+36', '+33', '+30', '+28 to +24'], ['+38', '+35', '+31', '+29 to +25'], ['+40', '+37', '+33', '+31 to +27'], ['+41', '+38', '+34', '+32 to +28'], ['+43', '+40', '+36', '+34 to +29'], ['+45', '+42', '+37', '+35 to +31'], ['+46', '+43', '+38', '+36 to +32'], ['+48', '+45', '+40', '+38 to +33']]; // Level 24

        this.safeItems = [['0'], ['0'], ['0'], ['0'], ['0'], ['1'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9'], ['10'], ['11'], ['12'], ['13'], ['14'], ['15'], ['16'], ['17'], ['18'], ['19'], ['20']]; // Level 24

        this.ac = [['18', '15', '14', '12'], ['19', '16', '15', '13'], ['19', '16', '15', '13'], ['21', '18', '17', '15'], ['22', '19', '18', '16'], ['24', '21', '20', '18'], ['25', '22', '21', '19'], ['27', '24', '23', '21'], ['28', '25', '24', '22'], ['30', '27', '26', '24'], ['31', '28', '27', '25'], ['33', '30', '29', '27'], ['34', '31', '30', '28'], ['36', '33', '32', '30'], ['37', '34', '33', '31'], ['39', '36', '35', '33'], ['40', '37', '36', '34'], ['42', '39', '38', '36'], ['43', '40', '39', '37'], ['45', '42', '41', '39'], ['46', '43', '42', '40'], ['48', '45', '44', '42'], ['49', '46', '45', '43'], ['51', '48', '47', '45'], ['52', '49', '48', '46'], ['54', '51', '50', '48']]; // Level 24

        this.hp = [['9', '8-7', '6-5'], ['20-17', '16-14', '13-11'], ['26-24', '21-19', '16-14'], ['40-36', '32-28', '25-21'], ['59-53', '48-42', '37-31'], ['78-72', '63-57', '48-42'], ['97-91', '78-72', '59-53'], ['123-115', '99-91', '75-67'], ['148-140', '119-111', '90-82'], ['173-165', '139-131', '105-97'], ['198–190', '159–151', '120–112'], ['223–215', '179–171', '135–127'], ['248–240', '199–191', '150–142'], ['273–265', '219–211', '165–157'], ['298–290', '239–231', '180–172'], ['323–315', '259–251', '195–187'], ['348–340', '279–271', '210–202'], ['373–365', '299–291', '225–217'], ['398–390', '319–311', '240–232'], ['423–415', '339–331', '255–247'], ['448–440', '359–351', '270–262'], ['473–465', '379–371', '285–277'], ['505–495', '405–395', '305–295'], ['544–532', '436–424', '329–317'], ['581–569', '466–454', '351–339'], ['633–617', '508–492', '383–367']]; // Level 24

        this.savingThrows = [['+9', '+8', '+5', '+2', '+0'], ['+10', '+9', '+6', '+3', '+1'], ['+11', '+10', '+7', '+4', '+2'], ['+12', '+11', '+8', '+5', '+3'], ['+14', '+12', '+9', '+6', '+4'], ['+15', '+14', '+11', '+8', '+6'], ['+17', '+15', '+12', '+9', '+7'], ['+18', '+17', '+14', '+11', '+8'], ['+20', '+18', '+15', '+12', '+10'], ['+21', '+19', '+16', '+13', '+11'], ['+23', '+21', '+18', '+15', '+12'], ['+24', '+22', '+19', '+16', '+14'], ['+26', '+24', '+21', '+18', '+15'], ['+27', '+25', '+22', '+19', '+16'], ['+29', '+26', '+23', '+20', '+18'], ['+30', '+28', '+25', '+22', '+19'], ['+32', '+29', '+26', '+23', '+20'], ['+33', '+30', '+28', '+25', '+22'], ['+35', '+32', '+29', '+26', '+23'], ['+36', '+33', '+30', '+27', '+24'], ['+38', '+35', '+32', '+29', '+26'], ['+39', '+36', '+33', '+30', '+27'], ['+41', '+38', '+35', '+32', '+28'], ['+43', '+39', '+36', '+33', '+30'], ['+44', '+40', '+37', '+34', '+31'], ['+46', '+42', '+38', '+36', '+32']]; // Level 24

        this.resistWeak = [['1-1'], ['3-1'], ['3-2'], ['5-2'], ['6-3'], ['7-4'], ['8-4'], ['9-5'], ['10-5'], ['11-6'], ['12-6'], ['13-7'], ['14-7'], ['15-8'], ['16-8'], ['17-9'], ['18-9'], ['19-9'], ['19-10'], ['20-10'], ['21-11'], ['22-11'], ['23-12'], ['24-12'], ['25-13'], ['26-13']]; // Level 24

        this.stab = [['+10', '+8', '+6', '+4'], ['+10', '+8', '+6', '+4'], ['+11', '+9', '+7', '+5'], ['+13', '+11', '+9', '+7'], ['+14', '+12', '+10', '+8'], ['+16', '+14', '+12', '+9'], ['+17', '+15', '+13', '+11'], ['+19', '+17', '+15', '+12'], ['+20', '+18', '+16', '+13'], ['+22', '+20', '+18', '+15'], ['+23', '+21', '+19', '+16'], ['+25', '+23', '+21', '+17'], ['+27', '+24', '+22', '+19'], ['+28', '+26', '+24', '+20'], ['+29', '+27', '+25', '+21'], ['+31', '+29', '+27', '+23'], ['+32', '+30', '+28', '+24'], ['+34', '+32', '+30', '+25'], ['+35', '+33', '+31', '+27'], ['+37', '+35', '+33', '+28'], ['+38', '+36', '+34', '+29'], ['+40', '+38', '+36', '+31'], ['+41', '+39', '+37', '+32'], ['+43', '+41', '+39', '+33'], ['+44', '+42', '+40', '+35'], ['+46', '+44', '+42', '+36']]; // Level 24

        this.strikeDamage = [['1d6+1 (4)', '1d4+1 (3)', '1d4 (3)', '1d4 (2)'], ['1d6+3 (6)', '1d6+2 (5)', '1d4+2 (4)', '1d4+1 (3)'], ['1d8+4 (8)', '1d6+3 (6)', '1d6+2 (5)', '1d4+2 (4)'], ['1d12+4 (11)', '1d10+4 (9)', '1d8+4 (8)', '1d6+3 (6)'], ['1d12+8 (15)', '1d10+6 (12)', '1d8+6 (10)', '1d6+5 (8)'], ['2d10+7 (18)', '2d8+5 (14)', '2d6+5 (12)', '2d4+4 (9)'], ['2d12+7 (20)', '2d8+7 (16)', '2d6+6 (13)', '2d4+6 (11)'], ['2d12+10 (23)', '2d8+9 (18)', '2d6+8 (15)', '2d4+7 (12)'], ['2d12+12 (25)', '2d10+9 (20)', '2d8+8 (17)', '2d6+6 (13)'], ['2d12+15 (28)', '2d10+11 (22)', '2d8+9 (18)', '2d6+8 (15)'], ['2d12+17 (30)', '2d10+13 (24)', '2d8+11 (20)', '2d6+9 (16)'], ['2d12+20 (33)', '2d12+13 (26)', '2d10+11 (22)', '2d6+10 (17)'], ['2d12+22 (35)', '2d12+15 (28)', '2d10+12 (23)', '2d8+10 (19)'], ['3d12+19 (38)', '3d10+14 (30)', '3d8+12 (25)', '3d6+10 (20)'], ['3d12+21 (40)', '3d10+16 (32)', '3d8+14 (27)', '3d6+11 (21)'], ['3d12+24 (43)', '3d10+18 (34)', '3d8+15 (28)', '3d6+13 (23)'], ['3d12+26 (45)', '3d12+17 (36)', '3d10+14 (30)', '3d6+14 (24)'], ['3d12+29 (48)', '3d12+18 (37)', '3d10+15 (31)', '3d6+15 (25)'], ['3d12+31 (50)', '3d12+19 (38)', '3d10+16 (32)', '3d6+16 (26)'], ['3d12+34 (53)', '3d12+20 (40)', '3d10+17 (33)', '3d6+17 (27)'], ['4d12+29 (55)', '4d10+20 (42)', '4d8+17 (35)', '4d6+14 (28)'], ['4d12+32 (58)', '4d10+22 (44)', '4d8+19 (37)', '4d6+15 (29)'], ['4d12+34 (60)', '4d10+24 (46)', '4d8+20 (38)', '4d6+17 (31)'], ['4d12+37 (63)', '4d10+26 (48)', '4d8+22 (40)', '4d6+18 (32)'], ['4d12+39 (65)', '4d12+24 (50)', '4d10+20 (42)', '4d6+19 (33)'], ['4d12+42 (68)', '4d12+26 (52)', '4d10+22 (44)', '4d6+21 (35)']]; // Level 24

        this.spellDC = [['19', '16', '13'], ['19', '16', '13'], ['20', '17', '14'], ['22', '18', '15'], ['23', '20', '17'], ['25', '21', '18'], ['26', '22', '19'], ['27', '24', '21'], ['29', '25', '22'], ['30', '26', '23'], ['32', '28', '25'], ['33', '29', '26'], ['34', '30', '27'], ['36', '32', '29'], ['37', '33', '30'], ['39', '34', '31'], ['40', '36', '33'], ['41', '37', '34'], ['43', '38', '35'], ['44', '40', '37'], ['46', '41', '38'], ['47', '42', '39'], ['48', '44', '41'], ['50', '45', '42'], ['51', '46', '43'], ['52', '48', '45']]; // Level 24

        this.spellAttackBonus = [['+11', '+8', '+5'], ['+11', '+8', '+5'], ['+12', '+9', '+6'], ['+14', '+10', '+7'], ['+15', '+12', '+9'], ['+17', '+13', '+10'], ['+18', '+14', '+11'], ['+19', '+16', '+13'], ['+21', '+17', '+14'], ['+22', '+18', '+15'], ['+24', '+20', '+17'], ['+25', '+21', '+18'], ['+26', '+22', '+19'], ['+28', '+24', '+21'], ['+29', '+25', '+22'], ['+31', '+26', '+24'], ['+32', '+28', '+25'], ['+33', '+29', '+26'], ['+35', '+30', '+27'], ['+36', '+32', '+29'], ['+38', '+33', '+30'], ['+39', '+34', '+31'], ['+40', '+36', '+33'], ['+42', '+37', '+34'], ['+43', '+38', '+35'], ['+44', '+40', '+37']]; // Level 24

        this.name = 'Game Master';
        this.selectedLevel = -1;
        this.selectedLevelOffset = this.selectedLevel + +1;
        this.dispAbilityMods = this.abilityMods[this.selectedLevelOffset];
        this.dispPreceptionMods = this.perceptionMods[this.selectedLevelOffset];
        this.dispSkillMods = this.skillMods[this.selectedLevelOffset];
        this.dispSafeItems = this.safeItems[this.selectedLevelOffset];
        this.dispAC = this.ac[this.selectedLevelOffset];
        this.dispHP = this.hp[this.selectedLevelOffset];
        this.dispSavingThrows = this.savingThrows[this.selectedLevelOffset];
        this.dispResistWeak = this.resistWeak[this.selectedLevelOffset];
        this.dispSTAB = this.stab[this.selectedLevelOffset];
        this.dispStrikeDamage = this.strikeDamage[this.selectedLevelOffset];
        this.dispSpellDC = this.spellDC[this.selectedLevelOffset];
        this.dispSpellAttackBonus = this.spellAttackBonus[this.selectedLevelOffset];
      }

      _createClass(NewMonsterGeneratorComponent, [{
        key: "changeLevel",
        value: function changeLevel(e) {
          this.selectedLevel = e.target.value;
          this.selectedLevelOffset = +e.target.value + +1;
        }
      }, {
        key: "filterLevel",
        value: function filterLevel(filterVal) {
          this.changeLevel(filterVal);
          this.dispAbilityMods = this.abilityMods[this.selectedLevelOffset];
          this.dispPreceptionMods = this.perceptionMods[this.selectedLevelOffset];
          this.dispSkillMods = this.skillMods[this.selectedLevelOffset];
          this.dispSafeItems = this.safeItems[this.selectedLevelOffset];
          this.dispAC = this.ac[this.selectedLevelOffset];
          this.dispHP = this.hp[this.selectedLevelOffset];
          this.dispSavingThrows = this.savingThrows[this.selectedLevelOffset];
          this.dispResistWeak = this.resistWeak[this.selectedLevelOffset];
          this.dispSTAB = this.stab[this.selectedLevelOffset];
          this.dispStrikeDamage = this.strikeDamage[this.selectedLevelOffset];
          this.dispSpellDC = this.spellDC[this.selectedLevelOffset];
          this.dispSpellAttackBonus = this.spellAttackBonus[this.selectedLevelOffset];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewMonsterGeneratorComponent;
    }();

    NewMonsterGeneratorComponent.ɵfac = function NewMonsterGeneratorComponent_Factory(t) {
      return new (t || NewMonsterGeneratorComponent)();
    };

    NewMonsterGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewMonsterGeneratorComponent,
      selectors: [["app-new-monster-generator"]],
      decls: 140,
      vars: 15,
      consts: [["id", "main"], [1, "Title"], ["id", "level Block"], ["id", "selectLevel", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "Main Stat Block"], ["id", "selectAC"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "selectHP"], ["id", "selectFort"], ["id", "selectReflex"], ["id", "selectWill"], ["id", "selectSTAB"], ["id", "selectStrikeDamage"], ["id", "selectSpellDC"], ["id", "selectSpellAttackBonus"], ["id", "specialty stats"], ["id", "selectAbilityMods"], ["id", "selectPerceptionMods"], ["id", "selectSkillMods"], ["type", "button", "onclick", "location.reload()"], [3, "ngValue"], [3, "value"]],
      template: function NewMonsterGeneratorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Creature Building Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Most of the statistics in this section use a scale of extreme, high, moderate, and low\u2014some use terrible values as well. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "Br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Extreme:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The creature is world class in this statistic and can challenge almost any character. Most creatures have no extreme statistics or only one extreme statistic, although some creatures might have additional extreme statistics and weaker related statistics elsewhere (a common example being a creature trading accuracy for extreme damage). Examples from the Bestiary include the succubus\u2019s Diplomacy and the lich\u2019s spell DC. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "High:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Extremely capable but not world class, the creature presents a challenge for most characters. Just about all creatures have at least one high value. Most combat-focused creatures have high AC and either a high attack bonus and high damage, or a merely moderate attack bonus but extreme damage. An ogre warrior\u2019s attack bonus and a kobold scout\u2019s Stealth are high values. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Moderate:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " A middle-of-the road statistic can cover anything unremarkable about the creature. Use this one often. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Low:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " The creature is actively bad at this. Choose these intentionally to represent the creature\u2019s weak points. Most creatures should have at least one low statistic; an example is the goblin pyro\u2019s Will save. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Terrible:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Some statistics can dip even lower than low, to terrible. This indicates a truly awful statistic that still isn\u2019t game-breakingly bad. A spider\u2019s Intelligence is terrible, as is a dero stalker\u2019s Will save. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " When it comes to statistics, a creature should be balanced overall. That means if you\u2019re giving a creature an extreme statistic, it should have some low or terrible statistics to compensate. For example, if you were making a creature extremely hard to hit by giving it an extreme AC, you\u2019d likely give it lower saving throws or low HP. If a creature is great at spellcasting, it might need several low statistics to be a balanced challenge. There\u2019s no perfect system for making these decisions. If you\u2019ve made a creature that has four high stats and nothing low, or vice-versa, take another look. A creature\u2019s strengths and weaknesses change the PCs\u2019 strategies for dealing with it, and that\u2019s what makes playing the game fun! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " At the higher levels of the game, PCs have more tools at their disposal, so the creatures they face need to hit back harder! At higher levels, give each creature more extreme statistics. Having one extreme statistic becomes typical around 11th level. A creature of 15th level or higher typically has two extreme statistics, and one of 20th level or higher should have three or four. Keep in mind that these should be relevant to the encounters you expect them to have\u2014extreme social skills aren\u2019t much use to a combatfocused creature. Be careful about giving multiple extreme statistics that are closely linked: a creature with extreme damage and Fortitude saves is one thing, but having an extreme attack bonus and extreme damage allows the creature to apply both extreme statistics to each attack. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Base Road Maps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " You can use the following suggestions to set the baseline when creating your road map. For example, use brute for a big, tough creature like an ogre, and skirmisher for a darting enemy. Each entry is a starting point you can customize as you see fit. Any core statistic that isn\u2019t listed should typically use moderate numbers. You can set ability modifiers and add additional abilities as needed. To make a creature that resembles a character of a certain class, see Class Road maps on page 73. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Brute:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " low Perception; high or extreme Str modifier, high to moderate Con modifier, low or lower Dex and mental modifiers; moderate or low AC; high Fortitude, low Reflex or Will or both; high HP; high attack bonus and high damage or moderate attack bonus and extreme damage. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Magical Striker:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " high attack and high damage; moderate to high spell DCs; either a scattering of innate spells or prepared or spontaneous spells up to half the creature\u2019s level (rounded up) minus 1. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Skill Paragon:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " high or extreme ability modifier matching its best skills; typically high Reflex or Will and low Fortitude; many skills at moderate or high and potentially one or two extreme skills; at least one special ability to use the creature\u2019s skills in combat. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Skirmisher:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " high Dex modifier; low Fortitude, high Reflex; higher Speed than typical. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sniper:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " high Perception; high Dex modifier; low Fortitude, high Reflex; moderate to low HP; ranged Strikes have high attack bonus and damage or moderate attack bonus and extreme damage (melee Strikes are weaker). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Soldier:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " high Str modifier; high to extreme AC; high Fortitude; high attack bonus and high damage; Attack of Opportunity or other tactical abilities. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Spellcaster:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " high or extreme modifier for the corresponding mental ability; low Fortitude, high Will; low HP; low attack bonus and moderate or low damage; high or extreme spell DCs; prepared or spontaneous. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Set Monster Level: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewMonsterGeneratorComponent_Template_select_change_73_listener($event) {
            return ctx.filterLevel($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, NewMonsterGeneratorComponent_option_74_Template, 2, 2, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Main Combat Stats: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Select AC (Extreme, High, Moderate, Low): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, NewMonsterGeneratorComponent_option_81_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Select HP (High, Moderate, Low): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, NewMonsterGeneratorComponent_option_85_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Select Saving Throws (Extreme, High, Moderate, Low, Terrible): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Fortitude: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, NewMonsterGeneratorComponent_option_91_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Reflex: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, NewMonsterGeneratorComponent_option_95_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Will: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, NewMonsterGeneratorComponent_option_99_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Other Combat Bonuses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Strike Attack Bonus (Extreme, High, Moderate, Low): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, NewMonsterGeneratorComponent_option_107_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Strike Damage (Extreme, High, Moderate, Low): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, NewMonsterGeneratorComponent_option_111_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Spell Attack Bonus (Extreme, High, Moderate): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, NewMonsterGeneratorComponent_option_115_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Spell DC (Extreme, High, Moderate): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, NewMonsterGeneratorComponent_option_119_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Side Stats: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Select Ability Modifiers (Extreme, High, Moderate, Low): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, NewMonsterGeneratorComponent_option_126_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Select Perception Modifiers (Extreme, High, Moderate, Low, Terrible): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, NewMonsterGeneratorComponent_option_130_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Select Skill Modifiers (Extreme, High, Moderate, Low): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, NewMonsterGeneratorComponent_option_134_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Note: Specific creatures or NPCs have more leeway to break these guidelines because you can plan the rest of your adventure\u2019s loot around them. Also, giving a boss villain a powerful magic item makes the fight and its aftermath more interesting. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Reset All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.levels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispAC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispHP);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispSavingThrows);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispSavingThrows);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispSavingThrows);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Resistances and Weaknesses (Max-Min): ", ctx.dispResistWeak, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispSTAB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispStrikeDamage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispSpellDC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispSpellAttackBonus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispAbilityMods);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispPreceptionMods);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispSkillMods);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" A creature can have a single permanent item of the listed level without issue: ", ctx.dispSafeItems, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: ["p[_ngcontent-%COMP%] {\r\n  color: blue;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]:after {\r\n\tvisibility: hidden;\r\n\tdisplay: block;\r\n\tcontent: \"\";\r\n\tclear: both;\r\n\theight: 0;\r\n\t}\r\n\r\n*[_ngcontent-%COMP%]   html[_ngcontent-%COMP%]   .clearfix[_ngcontent-%COMP%]            { zoom: 1; }\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]:first-child + html[_ngcontent-%COMP%]   .clearfix[_ngcontent-%COMP%] { zoom: 1; }\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tbackground: #222222;      \r\n\tbackground: radial-gradient(ellipse at center,  #222222 0%,#000000 100%); \r\n\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#000000',GradientType=1 ); \r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%] {\r\n    background: #0f0f0f;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%] {\r\n    background: #ededed;\r\n}\r\n\r\n#wrapper[_ngcontent-%COMP%]{\r\n\tmin-width:1120px;\r\n\twidth: 95%;\r\n\tmargin:0 auto;\r\n}\r\n\r\n#page[_ngcontent-%COMP%]{\r\n    min-height: 854px;\r\n    position: relative;\r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   #page[_ngcontent-%COMP%] {\r\n    border: 5px solid #bdbdbd;\r\n    background-color: #bdbdbd;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   #page[_ngcontent-%COMP%] {\r\n    border: 5px solid #292929;\r\n    background-color: #292929;\r\n}\r\n\r\n#main-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 200px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-bottom: 40px;\r\n    min-height: 854px;\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n    #main-wrapper.old[_ngcontent-%COMP%] {\r\n        margin-left: 220px;\r\n        padding-left: 217px;\r\n    }\r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   #main-wrapper[_ngcontent-%COMP%] {\r\n    background-color: #0f0f0f;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   #main-wrapper[_ngcontent-%COMP%] {\r\n    background-color: #ededed;\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%] {\r\n    \r\n    width: 205px;\r\n    height: 904px;\r\n    \r\n    margin-left: -5px;\r\n    padding: 0;\r\n    position: absolute;\r\n\r\n    background-position-x: -120px;\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   .splash[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    width: 200px;\r\n    margin: auto;\r\n    border-radius: 95px;\r\n    background-position-x: -64px;\r\n    background-position-y: 9px;\r\n    margin-top: -23px;\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   .nav-parent[_ngcontent-%COMP%] {\r\n    background-color: #cbc18f;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.expand-collapse-group[_ngcontent-%COMP%] {\r\n    background: hsla(51, 36%, 58%, 1);\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #main-menu[_ngcontent-%COMP%]   img.flourish[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin: auto;\r\n    text-align: center;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   #mobile-nav-parent[_ngcontent-%COMP%]{\r\n    display:none;\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n    #main-menu.old[_ngcontent-%COMP%] {\r\n        width: 297px;\r\n        height: 904px;\r\n        margin-left: 0;\r\n        padding: 240px 30px 0 78px;\r\n    }\r\n    #main-menu.old[_ngcontent-%COMP%]   .splash[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    #main-menu.old[_ngcontent-%COMP%]   .nav-parent[_ngcontent-%COMP%]{\r\n        background-color: transparent;\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        padding-left: 50px;\r\n        padding-right: 60px;\r\n    }\r\n    #main-menu.old[_ngcontent-%COMP%] {\r\n        width: 297px;\r\n        height: 904px;\r\n        margin-left: 0;\r\n        padding: 240px 30px 0 78px;\r\n    }\r\n    #main-menu.old[_ngcontent-%COMP%]   .splash[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    #main-menu.old[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #main-menu.old[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #main-menu.old[_ngcontent-%COMP%]   img.flourish[_ngcontent-%COMP%] {\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(255, 255, 255, .2);\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   #minMaxMenu[_ngcontent-%COMP%] {\r\n    border-radius: 6px;\r\n    background: #ded7bb;\r\n    margin-top: 6px;\r\n}\r\n\r\n.menu-background-stretch[_ngcontent-%COMP%]{\r\n\twidth:226px;\r\n\theight:100%;\r\n\tbackground:#fefdfb;\r\n\tposition:absolute;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   #et-al[_ngcontent-%COMP%]{\r\n\tword-spacing: 1px;\r\n\tletter-spacing:1px;\r\n\tfloat:right;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   #et-al[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\tdisplay:inline-block;\r\n\tpadding:19px 14px;\r\n}\r\n\r\n#footer-social[_ngcontent-%COMP%]{\r\n\tfloat:right;\r\n\tmargin:0px;\r\n}\r\n\r\n#footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\tmargin-left:10px;\r\n    transform: translateY(-15%);\r\n}\r\n\r\n#footer-social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    background: #000;\r\n    padding: 5px 10px;\r\n}\r\n\r\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\r\n{\r\n    text-decoration: none;\r\n    border: 0 none;\r\n}\r\n\r\nimg.ileft[_ngcontent-%COMP%]\r\n{\r\n\tfloat: left;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n}\r\n\r\nimg.iright[_ngcontent-%COMP%]\r\n{\r\n\tfloat: right;\r\n\tborder: none;\r\n}\r\n\r\nh3.framing[_ngcontent-%COMP%]\r\n{\r\n    border-top-style: solid;\r\n    border-top-width: 1px;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\r\n}\r\n\r\nimg.menu[_ngcontent-%COMP%]\r\n{\r\n\tborder: none;\r\n}\r\n\r\nimg.thumbnail[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    float: right;\r\n    padding: 5px;\r\n    width: 150px;\r\n}\r\n\r\nimg.thumbnail[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\r\n}\r\n\r\n#content[_ngcontent-%COMP%]\r\n{\r\n\tmargin: 40px 0px 40px 40px;\r\n\tfont-size: 10px;\r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   table.inner[_ngcontent-%COMP%]\r\n{\r\n    background: #64542f;\r\n    border: 1px solid white;\r\n    border-collapse: collapse;\r\n    \r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   table.inner[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1)\r\n{\r\n    background: #522e2c;\r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   table.inner[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)\r\n{\r\n    background: #342c19;\r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid white;\r\n    padding: 1px 5px 1px 5px;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   table.innerbig[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid white;\r\n    border-collapse: collapse;\r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   .innerbig[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid white;\r\n    padding: 1px 5px 1px 5px;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   .actiondark[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\nbody.dark[_ngcontent-%COMP%]   .actionlight[_ngcontent-%COMP%]\r\n{\r\n    display: initial;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   .actiondark[_ngcontent-%COMP%]\r\n{\r\n    display: initial;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   .actionlight[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   table.inner[_ngcontent-%COMP%]\r\n{\r\n    background: #eee5c8;\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n    padding: 5px 5px 5px 5px;\r\n    \r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   table.inner[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1)\r\n{\r\n    background: #522e2c;\r\n    color: white;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   table.inner[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)\r\n{\r\n    background: #f6f1e1;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid black;\r\n    padding: 1px 5px 1px 5px;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   table.innerbig[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n}\r\n\r\nbody.light[_ngcontent-%COMP%]   .innerbig[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid black;\r\n    padding: 1px 5px 1px 5px;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\np.body[_ngcontent-%COMP%] {\r\n\tline-height: 1.2em;\r\n\ttext-align: justify;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.00em;\r\n}\r\n\r\ndiv.hideSkiplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{\r\n\tdisplay:none;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: -190%;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    opacity: 0;\r\n    font-size: 14px;\r\n    transition: opacity 100ms ease-in;\r\n    font-family: Julee;\r\n}\r\n\r\n.theme-toggle-wrapper[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\r\n    font-size: 10px;\r\n}\r\n\r\n#theme-toggle-label[_ngcontent-%COMP%]:hover    + .tooltip[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n}\r\n\r\ninput.switch[_ngcontent-%COMP%] { display: none; }\r\n\r\ninput.switch[_ngcontent-%COMP%]:empty    ~ label[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    line-height: 1.6em;\r\n    text-indent: 4em;\r\n    float: left;\r\n    margin: 0.2em 0;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\ninput.switch[_ngcontent-%COMP%]:empty    ~ label[_ngcontent-%COMP%]:before, input.switch[_ngcontent-%COMP%]:empty    ~ label[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    display: block;\r\n    top: 1px;\r\n    bottom: 1px;\r\n    left: 0;\r\n    content:' ';\r\n    width: 3.3em;\r\n    background-color: #fefdfb;\r\n    border-radius: 0.75em;\r\n    box-shadow: inset 0 0.2em 0 rgba(0, 0, 0, 0.3);\r\n    transition: all 100ms ease-in;\r\n}\r\n\r\ninput.switch[_ngcontent-%COMP%]:empty    ~ label[_ngcontent-%COMP%]:after {\r\n    width: 1.2em;\r\n    top: 0.2em;\r\n    bottom: 0.2em;\r\n    margin-left: 0.1em;\r\n    background-color: #000;\r\n    border-radius: 0.75em;\r\n    box-shadow: inset 0 -0.2em 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\ninput.switch[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:before {\r\n    background-color: #000;\r\n}\r\n\r\ninput.switch[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:after {\r\n    background-color: #fefdfb;\r\n}\r\n\r\ninput.switch[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:after {\r\n    margin-left: 2em;\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    height: 44px;\r\n    width: 44px;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    left: 12px;\r\n    top: 4px;\r\n    line-height: 41px;\r\n    vertical-align: middle;\r\n    display: none;\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]:hover{\r\n    background: rgba(255, 255, 255, .3);\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]::-moz-selection{\r\n    background: rgba(255, 255, 255, .6);\r\n}\r\n\r\n#main-menu[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]:active, #main-menu[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]::selection{\r\n    background: rgba(255, 255, 255, .6);\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n    padding: 0 6px 4px 6px;\r\n    position: relative;\r\n    height: 30px;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    padding: 4px;\r\n    height: 20px;\r\n    display: block;\r\n    width: calc(100% - 29px);\r\n    margin-right: 18px;\r\n    left: 8px;\r\n    position: absolute;\r\n    border-radius: 4px;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%] {\r\n    border-radius: 0 4px 4px 0;\r\n    position: absolute;\r\n    right: 8px;\r\n    top: 0;\r\n    padding: 1px;\r\n    margin: 0;\r\n    height: 32px;\r\n}\r\n\r\n#mobile-nav-parent[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    body[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n    }\r\n    body.dark[_ngcontent-%COMP%]   #page[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   #page[_ngcontent-%COMP%]{\r\n        border-width: 0;\r\n    }\r\n    #wrapper[_ngcontent-%COMP%]{\r\n        min-width: 100%;\r\n    }\r\n    #main-menu[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 100%;\r\n        height: auto;\r\n        margin-left: 0;\r\n    }\r\n    #main-menu[_ngcontent-%COMP%]   #mobile-nav-parent[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n\r\n    #main-menu[_ngcontent-%COMP%]   #mobile-nav-parent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n        padding-bottom: 4px;\r\n    }\r\n    #main-menu[_ngcontent-%COMP%]   #nav-parent[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .expand-collapse[_ngcontent-%COMP%] {\r\n        transition: max-height ease-in-out .5s;\r\n        max-height: 25px;\r\n        overflow: hidden;\r\n    }\r\n    .expand-collapse.hide-when-collapsed[_ngcontent-%COMP%]{\r\n        max-height: 0;\r\n    }\r\n    .expand-collapse.expanded[_ngcontent-%COMP%] {\r\n        max-height: 999px;\r\n    }\r\n    #main-menu[_ngcontent-%COMP%]   .nav-parent[_ngcontent-%COMP%]    > a.brand[_ngcontent-%COMP%]    > .home[_ngcontent-%COMP%]{\r\n        display:none\r\n    }\r\n    #main-menu[_ngcontent-%COMP%]   .nav-parent[_ngcontent-%COMP%]    > a.brand[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\r\n        display: inline;\r\n        font-family: fairydustbregular;\r\n        font-weight: bold;\r\n        font-size: 1.3em;\r\n    }\r\n    #main-menu[_ngcontent-%COMP%]   .nav-parent[_ngcontent-%COMP%]    > a.brand[_ngcontent-%COMP%]{\r\n        height: 35px;\r\n        display: inline-block;\r\n    }\r\n    #main-wrapper[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n    .splash[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    #main-menu[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n    }\r\n    #main-menu[_ngcontent-%COMP%]   img.flourish[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    #main-menu[_ngcontent-%COMP%]   #minMaxMenu[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .menutitle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .menutitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    div.edition-toggle[_ngcontent-%COMP%] {\r\n        border: 1px solid #0f0f0f;\r\n        background: hsla(51, 36%, 58%, 1);\r\n        display: flex;\r\n        flex: unset;\r\n        border-radius: 14px;\r\n        margin-left: 6px;\r\n        margin-right: 6px;\r\n        margin-bottom: 4px;\r\n    }\r\n    div.edition-toggle[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n        display: inline;\r\n        flex: 50%;\r\n        text-align: center;\r\n    }\r\n    #main-menu[_ngcontent-%COMP%]   div.edition-toggle[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%], #main-menu[_ngcontent-%COMP%]   div.edition-toggle[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]:visited {\r\n        background: #522e2c;\r\n        color: white;\r\n        border-radius: 8px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 378px) {\r\n    #main-menu[_ngcontent-%COMP%]   .nav-parent[_ngcontent-%COMP%]    > a.brand[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1316px) {\r\n    .spells-per-day[_ngcontent-%COMP%] {\r\n        max-width: 570px;\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 1.75em;\r\n  text-indent: 0.00em;\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-variant: small-caps;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LW1vbnN0ZXItZ2VuZXJhdG9yL25ldy1tb25zdGVyLWdlbmVyYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsV0FBVztDQUNYLFNBQVM7Q0FDVDs7QUFDRCw4QkFBOEIsT0FBTyxFQUFFOztBQUFFLFFBQVE7O0FBQ2pELCtCQUErQixPQUFPLEVBQUU7O0FBQUUsUUFBUTs7QUFFbEQ7Q0FDQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFDOEMsV0FBVyxFQUNrQyxvQkFBb0IsRUFDL0QseUJBQXlCLEVBQzlCLGNBQWMsRUFDYixVQUFVO0NBQzVGLHdFQUF3RSxFQUFFLFFBQVE7O0NBRWxGLG1IQUFtSCxFQUFFLDBDQUEwQztBQUNoSzs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1YsYUFBYTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCOztJQUVsQiw2QkFBNkI7QUFDakM7O0FBRUE7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Z0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1Qsa0JBQWtCO0lBQ3RCO0lBQ0E7O1FBRUksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9uZXctbW9uc3Rlci1nZW5lcmF0b3IvbmV3LW1vbnN0ZXItZ2VuZXJhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRjbGVhcjogYm90aDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0fVxyXG4qIGh0bWwgLmNsZWFyZml4ICAgICAgICAgICAgeyB6b29tOiAxOyB9IC8qIElFNiAqL1xyXG4qOmZpcnN0LWNoaWxkK2h0bWwgLmNsZWFyZml4IHsgem9vbTogMTsgfSAvKiBJRTcgKi9cclxuXHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQ6ICMyMjIyMjI7IC8qIE9sZCBicm93c2VycyAqL1xyXG5cdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgICMyMjIyMjIgMCUsICMwMDAwMDAgMTAwJSk7IC8qIEZGMy42KyAqL1xyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIzIyMjIyMiksIGNvbG9yLXN0b3AoMTAwJSwjMDAwMDAwKSk7IC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgICMyMjIyMjIgMCUsIzAwMDAwMCAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cclxuXHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgIzIyMjIyMiAwJSwjMDAwMDAwIDEwMCUpOyAvKiBPcGVyYSAxMisgKi9cclxuXHRiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgICMyMjIyMjIgMCUsIzAwMDAwMCAxMDAlKTsgLyogSUUxMCsgKi9cclxuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICAjMjIyMjIyIDAlLCMwMDAwMDAgMTAwJSk7IC8qIFczQyAqL1xyXG5cclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzIyMjIyMicsIGVuZENvbG9yc3RyPScjMDAwMDAwJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcbn1cclxuYm9keS5kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZjBmMGY7XHJcbn1cclxuXHJcbmJvZHkubGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxufVxyXG4jd3JhcHBlcntcclxuXHRtaW4td2lkdGg6MTEyMHB4O1xyXG5cdHdpZHRoOiA5NSU7XHJcblx0bWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuI3BhZ2V7XHJcbiAgICBtaW4taGVpZ2h0OiA4NTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5ib2R5LmRhcmsgI3BhZ2Uge1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2JkYmRiZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuYm9keS5saWdodCAjcGFnZSB7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMjkyOTI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxufVxyXG5cclxuI21haW4td3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA4NTRweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgI21haW4td3JhcHBlci5vbGQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMjBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIxN3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5ib2R5LmRhcmsgI21haW4td3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xyXG59XHJcbmJvZHkubGlnaHQgI21haW4td3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG59XHJcblxyXG4jbWFpbi1tZW51IHtcclxuICAgIC8qIDIwMCBmb3IgbmF2LCA1IGZvciBwYWdlIGJvcmRlciovXHJcbiAgICB3aWR0aDogMjA1cHg7XHJcbiAgICBoZWlnaHQ6IDkwNHB4O1xyXG4gICAgLyogLTUgdG8gdGhlIGxlZnQgdG8gc3BhbiB0aGUgZW50aXJlIGxlZnQgZ3V0dGVyICovXHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMTIwcHg7XHJcbn1cclxuXHJcbiNtYWluLW1lbnUgLnNwbGFzaCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDlweDtcclxuICAgIG1hcmdpbi10b3A6IC0yM3B4O1xyXG59XHJcblxyXG4jbWFpbi1tZW51IC5uYXYtcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmMxOGY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZXhwYW5kLWNvbGxhcHNlLWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQ6IGhzbGEoNTEsIDM2JSwgNTglLCAxKTtcclxufVxyXG5cclxuI21haW4tbWVudSBhLFxyXG4jbWFpbi1tZW51IGJ1dHRvbixcclxuI21haW4tbWVudSBpbWcuZmxvdXJpc2h7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuI21haW4tbWVudSAjbW9iaWxlLW5hdi1wYXJlbnR7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAjbWFpbi1tZW51Lm9sZCB7XHJcbiAgICAgICAgd2lkdGg6IDI5N3B4O1xyXG4gICAgICAgIGhlaWdodDogOTA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjQwcHggMzBweCAwIDc4cHg7XHJcbiAgICB9XHJcbiAgICAjbWFpbi1tZW51Lm9sZCAuc3BsYXNoe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjbWFpbi1tZW51Lm9sZCAubmF2LXBhcmVudHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAjbWFpbi1tZW51Lm9sZCB7XHJcbiAgICAgICAgd2lkdGg6IDI5N3B4O1xyXG4gICAgICAgIGhlaWdodDogOTA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjQwcHggMzBweCAwIDc4cHg7XHJcbiAgICB9XHJcbiAgICAjbWFpbi1tZW51Lm9sZCAuc3BsYXNoe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjbWFpbi1tZW51Lm9sZCBhLFxyXG4gICAgI21haW4tbWVudS5vbGQgYnV0dG9uLFxyXG4gICAgI21haW4tbWVudS5vbGQgaW1nLmZsb3VyaXNoIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcbiNtYWluLW1lbnUgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG59XHJcbiNtYWluLW1lbnUgI21pbk1heE1lbnUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RlZDdiYjtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLm1lbnUtYmFja2dyb3VuZC1zdHJldGNoe1xyXG5cdHdpZHRoOjIyNnB4O1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdGJhY2tncm91bmQ6I2ZlZmRmYjtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuI2Zvb3RlciAjZXQtYWx7XHJcblx0d29yZC1zcGFjaW5nOiAxcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6MXB4O1xyXG5cdGZsb2F0OnJpZ2h0O1xyXG59XHJcbiNmb290ZXIgI2V0LWFsIGF7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzoxOXB4IDE0cHg7XHJcbn1cclxuXHJcbiNmb290ZXItc29jaWFse1xyXG5cdGZsb2F0OnJpZ2h0O1xyXG5cdG1hcmdpbjowcHg7XHJcbn1cclxuI2Zvb3Rlci1zb2NpYWwgYXtcclxuXHRtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNSUpO1xyXG59XHJcbiNmb290ZXItc29jaWFsIGltZ3tcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5hIGltZ1xyXG57XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxufVxyXG5cclxuaW1nLmlsZWZ0XHJcbntcclxuXHRmbG9hdDogbGVmdDtcclxuXHR0b3A6IDBweDtcclxuXHRsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbmltZy5pcmlnaHRcclxue1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmgzLmZyYW1pbmdcclxue1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuaW1nLm1lbnVcclxue1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW1nLnRodW1ibmFpbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG5pbWcudGh1bWJuYWlsOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMTQwLCAxODYsIDAuNSk7XHJcbn1cclxuXHJcbiNjb250ZW50XHJcbntcclxuXHRtYXJnaW46IDQwcHggMHB4IDQwcHggNDBweDtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5ib2R5LmRhcmsgdGFibGUuaW5uZXJcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzY0NTQyZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIC8qd2hpdGUtc3BhY2U6IG5vd3JhcDsqL1xyXG59XHJcblxyXG5ib2R5LmRhcmsgdGFibGUuaW5uZXIgdHI6bnRoLWNoaWxkKDEpXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICM1MjJlMmM7XHJcbn1cclxuXHJcbmJvZHkuZGFyayB0YWJsZS5pbm5lciB0cjpudGgtY2hpbGQoZXZlbilcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzM0MmMxOTtcclxufVxyXG5cclxuYm9keS5kYXJrIC5pbm5lciB0ZCwgdGhcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJvZHkuZGFyayB0YWJsZS5pbm5lcmJpZ1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbmJvZHkuZGFyayAuaW5uZXJiaWcgdGQsIHRoXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXB4IDVweCAxcHggNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5LmRhcmsgLmFjdGlvbmRhcmtcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuYm9keS5kYXJrIC5hY3Rpb25saWdodFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG59XHJcblxyXG5ib2R5LmxpZ2h0IC5hY3Rpb25kYXJrXHJcbntcclxuICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbn1cclxuXHJcbmJvZHkubGlnaHQgLmFjdGlvbmxpZ2h0XHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkubGlnaHQgdGFibGUuaW5uZXJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTVjODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICAgIC8qd2hpdGUtc3BhY2U6IG5vd3JhcDsqL1xyXG59XHJcblxyXG5ib2R5LmxpZ2h0IHRhYmxlLmlubmVyIHRyOm50aC1jaGlsZCgxKVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTIyZTJjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5ib2R5LmxpZ2h0IHRhYmxlLmlubmVyIHRyOm50aC1jaGlsZChldmVuKVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmMWUxO1xyXG59XHJcblxyXG5ib2R5LmxpZ2h0IC5pbm5lciB0ZCwgdGhcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJvZHkubGlnaHQgdGFibGUuaW5uZXJiaWdcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5ib2R5LmxpZ2h0IC5pbm5lcmJpZyB0ZCwgdGhcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDEuMmVtO1xyXG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMDBlbTtcclxufVxyXG5cclxuZGl2LmhpZGVTa2lwbGluayBhOmZpcnN0LWNoaWxkIGltZ3tcclxuXHRkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xOTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBlYXNlLWluO1xyXG4gICAgZm9udC1mYW1pbHk6IEp1bGVlO1xyXG59XHJcblxyXG4udGhlbWUtdG9nZ2xlLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4jdGhlbWUtdG9nZ2xlLWxhYmVsOmhvdmVyICsgLnRvb2x0aXAge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbmlucHV0LnN3aXRjaCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbmlucHV0LnN3aXRjaDplbXB0eSB+IGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgIHRleHQtaW5kZW50OiA0ZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMC4yZW0gMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuaW5wdXQuc3dpdGNoOmVtcHR5IH4gbGFiZWw6YmVmb3JlLCBpbnB1dC5zd2l0Y2g6ZW1wdHkgfiBsYWJlbDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogMXB4O1xyXG4gICAgYm90dG9tOiAxcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY29udGVudDonICc7XHJcbiAgICB3aWR0aDogMy4zZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGZiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NWVtO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcclxufVxyXG5pbnB1dC5zd2l0Y2g6ZW1wdHkgfiBsYWJlbDphZnRlciB7XHJcbiAgICB3aWR0aDogMS4yZW07XHJcbiAgICB0b3A6IDAuMmVtO1xyXG4gICAgYm90dG9tOiAwLjJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1ZW07XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0wLjJlbSAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5pbnB1dC5zd2l0Y2g6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbmlucHV0LnN3aXRjaDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRmYjtcclxufVxyXG5pbnB1dC5zd2l0Y2g6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbn1cclxuXHJcbiNtYWluLW1lbnUgLm1vYmlsZS1tZW51LXRvZ2dsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jbWFpbi1tZW51IC5tb2JpbGUtbWVudS10b2dnbGU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxufVxyXG4jbWFpbi1tZW51IC5tb2JpbGUtbWVudS10b2dnbGU6YWN0aXZlLFxyXG4jbWFpbi1tZW51IC5tb2JpbGUtbWVudS10b2dnbGU6OnNlbGVjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG59XHJcbi5zZWFyY2gge1xyXG4gICAgcGFkZGluZzogMCA2cHggNHB4IDZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4uc2VhcmNoLWlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI5cHgpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5zZWFyY2gtYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDhweDtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzJweDtcclxufVxyXG4jbW9iaWxlLW5hdi1wYXJlbnQgLnNlYXJjaCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBib2R5e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGJvZHkuZGFyayAjcGFnZSxcclxuICAgIGJvZHkubGlnaHQgI3BhZ2V7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICAgI3dyYXBwZXJ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgI21haW4tbWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgICNtYWluLW1lbnUgI21vYmlsZS1uYXYtcGFyZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAjbWFpbi1tZW51ICNtb2JpbGUtbmF2LXBhcmVudCBhe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIH1cclxuICAgICNtYWluLW1lbnUgI25hdi1wYXJlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZXhwYW5kLWNvbGxhcHNlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IGVhc2UtaW4tb3V0IC41cztcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuZXhwYW5kLWNvbGxhcHNlLmhpZGUtd2hlbi1jb2xsYXBzZWR7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgIH1cclxuICAgIC5leHBhbmQtY29sbGFwc2UuZXhwYW5kZWQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDk5OXB4O1xyXG4gICAgfVxyXG4gICAgI21haW4tbWVudSAubmF2LXBhcmVudCA+IGEuYnJhbmQgPiAuaG9tZXtcclxuICAgICAgICBkaXNwbGF5Om5vbmVcclxuICAgIH1cclxuICAgICNtYWluLW1lbnUgLm5hdi1wYXJlbnQgPiBhLmJyYW5kID4gLnRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZhaXJ5ZHVzdGJyZWd1bGFyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgICAjbWFpbi1tZW51IC5uYXYtcGFyZW50ID4gYS5icmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgI21haW4td3JhcHBlcntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5zcGxhc2h7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNtYWluLW1lbnUgLm1vYmlsZS1tZW51LXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgI21haW4tbWVudSBpbWcuZmxvdXJpc2h7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNtYWluLW1lbnUgI21pbk1heE1lbnV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tZW51dGl0bGUgaDEsXHJcbiAgICAubWVudXRpdGxlIGgyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5lZGl0aW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDUxLCAzNiUsIDU4JSwgMSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiB1bnNldDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgZGl2LmVkaXRpb24tdG9nZ2xlID4gYSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGZsZXg6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjbWFpbi1tZW51IGRpdi5lZGl0aW9uLXRvZ2dsZSA+IGEuYWN0aXZlLFxyXG4gICAgI21haW4tbWVudSBkaXYuZWRpdGlvbi10b2dnbGUgPiBhLmFjdGl2ZTp2aXNpdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNTIyZTJjO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc4cHgpIHtcclxuICAgICNtYWluLW1lbnUgLm5hdi1wYXJlbnQgPiBhLmJyYW5kID4gLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMxNnB4KSB7XHJcbiAgICAuc3BlbGxzLXBlci1kYXkge1xyXG4gICAgICAgIG1heC13aWR0aDogNTcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEuNzVlbTtcclxuICB0ZXh0LWluZGVudDogMC4wMGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewMonsterGeneratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-monster-generator',
          templateUrl: './new-monster-generator.component.html',
          styleUrls: ['./new-monster-generator.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Users\Brian\Documents\Programs\pf2-monster-generator\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map