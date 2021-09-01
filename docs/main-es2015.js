(self["webpackChunkng_pdf_highlighter"] = self["webpackChunkng_pdf_highlighter"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var popper_js_dist_umd_popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popper.js/dist/umd/popper.js */ 2049);
/* harmony import */ var popper_js_dist_umd_popper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(popper_js_dist_umd_popper_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 1600);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ 9035);





function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_9_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const list_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r2.moveTo(list_r1); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_9_Template_i_click_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const list_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r4.delete(list_r1); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Position:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 2, list_r1 == null ? null : list_r1.rect), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Page ", list_r1 == null ? null : list_r1.pageNumber, " ");
} }
class AppComponent {
    constructor() {
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
        this.lastMousePosition = { x: 0, y: 0 };
        this.canvasPosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.mouseDownFlag = false;
        this.pagePosition = { x: 0, y: 0 };
        this.element = null;
        this.areaInfo = [];
        // added new div with rects when pages rendered
        this.indexOfPage = 1;
        this.showPopup = false;
        this.listRectangleId = '';
        this.areaInfo = [
            {
                'rectangleId': 'rectangle-1',
                'pageNumber': 1,
                'rect': {
                    'height': 127,
                    'width': 646,
                    'x1': 60.5,
                    'x2': 706.5,
                    'y1': 257,
                    'y2': 384
                },
                'isDelete': false
            },
            {
                'rectangleId': 'rectangle-2',
                'pageNumber': 3,
                'rect': {
                    'height': 141,
                    'width': 636,
                    'x1': 66.921875,
                    'x2': 702.921875,
                    'y1': 226,
                    'y2': 367
                },
                'isDelete': false
            }
        ];
    }
    mouseEvent(event) {
        if (!this.showPopup) {
            if (event.type === 'mousemove') {
                this.mousePosition = {
                    x: event.clientX - this.pagePosition.x,
                    y: event.clientY - this.pagePosition.y
                };
                if (this.mouseDownFlag) {
                    const width = this.mousePosition.x - this.lastMousePosition.x;
                    const height = this.mousePosition.y - this.lastMousePosition.y;
                    this.rect = {
                        x1: this.lastMousePosition.x,
                        y1: this.lastMousePosition.y,
                        x2: this.mousePosition.x,
                        y2: this.mousePosition.y,
                        width: width,
                        height: height
                    };
                    if (this.element != null) {
                        this.element.style.width = width + 'px';
                        this.element.style.height = height + 'px';
                        if (this.rect.width > 0 && this.rect.height > 0) {
                            document.getElementsByClassName('to-draw-rectangle')[this.dataPageNumber - 1].appendChild(this.element);
                        }
                    }
                }
            }
            if (event.type === 'mousedown') {
                this.mouseDownFlag = true;
                const path = this.composedPath(event.target);
                const eventPath = path.find(p => p.className === 'page');
                if (typeof eventPath !== 'undefined') {
                    this.dataPageNumber = +eventPath.getAttribute('data-page-number'); // get id of page
                    const toDrawRectangle = document.getElementsByClassName('to-draw-rectangle');
                    const pageOffset = toDrawRectangle[this.dataPageNumber - 1].getBoundingClientRect();
                    this.pagePosition = {
                        x: pageOffset.left,
                        y: pageOffset.top
                    };
                    this.lastMousePosition = {
                        x: event.clientX - this.pagePosition.x,
                        y: event.clientY - this.pagePosition.y
                    };
                    const rectId = document.getElementsByClassName('rectangle').length + 1;
                    this.element = document.createElement('div');
                    this.element.className = 'rectangle';
                    this.element.id = 'rectangle-' + rectId;
                    this.element.style.position = 'absolute';
                    this.element.style.border = '2px solid #0084FF';
                    this.element.style.borderRadius = '3px';
                    this.element.style.left = this.lastMousePosition.x + 'px';
                    this.element.style.top = this.lastMousePosition.y + 'px';
                }
            }
            if (event.type === 'mouseup') {
                this.mouseDownFlag = false;
                if (this.rect.height > 0 && this.rect.width > 0) {
                    const popper = document.querySelector('.js-popper');
                    // tslint:disable-next-line:no-unused-expression
                    new popper_js_dist_umd_popper_js__WEBPACK_IMPORTED_MODULE_2__(this.element, popper, {
                        placement: 'top-end'
                    });
                    this.showPopup = true;
                }
            }
        }
    }
    pageRendered(event) {
        const elem = document.createElement('div');
        elem.className = 'to-draw-rectangle';
        elem.style.position = 'absolute';
        elem.style.left = 0 + 'px';
        elem.style.top = 0 + 'px';
        elem.style.right = 0 + 'px';
        elem.style.bottom = 0 + 'px';
        elem.style.cursor = 'crosshair';
        // elem.style.background = 'red';
        // elem.style.opacity = '0.4';
        // console.log(event.target, 'target');
        const path = this.composedPath(event.source.div);
        path.find(p => p.className === 'page').appendChild(elem);
        jquery__WEBPACK_IMPORTED_MODULE_0__('.textLayer').addClass('disable-textLayer');
        const rectElem = this.areaInfo.find(f => f.pageNumber === this.indexOfPage);
        if (typeof rectElem !== 'undefined') {
            const rectId = document.getElementsByClassName('rectangle').length + 1;
            const rect = document.createElement('div');
            rect.className = 'rectangle';
            rect.id = 'rectangle-' + rectId;
            rect.style.position = 'absolute';
            rect.style.border = '2px solid #0084FF';
            rect.style.borderRadius = '3px';
            rect.style.left = rectElem.rect.x1 + 'px';
            rect.style.top = rectElem.rect.y1 + 'px';
            rect.style.width = rectElem.rect.width + 'px';
            rect.style.height = rectElem.rect.height + 'px';
            // get to-draw-rectangle div and add rectangle
            path.find(p => p.className === 'page').children[2].appendChild(rect);
        }
        this.indexOfPage++;
    }
    composedPath(el) {
        const path = [];
        while (el) {
            path.push(el);
            if (el.tagName === 'HTML') {
                path.push(document);
                path.push(window);
                return path;
            }
            el = el.parentElement;
        }
    }
    getStyle() {
        if (this.showPopup) {
            return 'block';
        }
        else {
            return 'none';
        }
    }
    save() {
        this.areaInfo.push({
            rectangleId: this.element.id,
            pageNumber: this.dataPageNumber,
            rect: this.rect,
            isDelete: false
        });
        this.showPopup = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
    }
    cancel() {
        const rectId = this.element.getAttribute('id');
        jquery__WEBPACK_IMPORTED_MODULE_0__('#' + rectId).remove();
        this.showPopup = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
    }
    delete(list) {
        document.getElementById(list.rectangleId).remove();
        this.areaInfo.find(f => f.rectangleId === list.rectangleId).isDelete = true;
        this.areaInfo = this.areaInfo.filter(f => f.isDelete === false);
    }
    moveTo(list) {
        if (this.listRectangleId !== '') {
            if (document.getElementById(this.listRectangleId)) {
                document.getElementById(this.listRectangleId).style.background = 'transparent';
                document.getElementById(this.listRectangleId).style.opacity = '1';
            }
        }
        if (this.listRectangleId !== list.rectangleId) {
            document.getElementById(list.rectangleId).scrollIntoView({ block: 'start', behavior: 'smooth' });
            document.getElementById(list.rectangleId).style.background = 'red';
            document.getElementById(list.rectangleId).style.opacity = '0.4';
            this.listRectangleId = list.rectangleId;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 4, consts: [[1, "container"], [1, "container__left-side"], [1, "header"], [1, "link"], ["href", "https://github.com/kbatyrbayev/ng-pdf-highlighter", "target", "blank"], [1, "list"], ["class", "list-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "container__right-side", 3, "mousemove", "mousedown", "mouseup"], ["src", "./assets/pdf-test.pdf", 2, "display", "block", 3, "render-text", "page-rendered"], [1, "js-popper", "popper"], [1, "icons"], [1, "material-icons", "icon", "icon-apply", 3, "click"], [1, "material-icons", "icon", "icon-close", 3, "click"], [1, "list-row", 3, "click"], [1, "delete-btn"], [1, "material-icons", "icon", 3, "click"], [1, "title"], [3, "innerHTML"], [1, "page-number"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Angular PDF highlighter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Open in GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_div_9_Template, 13, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousemove", function AppComponent_Template_div_mousemove_10_listener($event) { return ctx.mouseEvent($event); })("mousedown", function AppComponent_Template_div_mousedown_10_listener($event) { return ctx.mouseEvent($event); })("mouseup", function AppComponent_Template_div_mouseup_10_listener($event) { return ctx.mouseEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "pdf-viewer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page-rendered", function AppComponent_Template_pdf_viewer_page_rendered_11_listener($event) { return ctx.pageRendered($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_i_click_14_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "check_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_i_click_16_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.areaInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("render-text", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.getStyle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__.PdfViewerComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.container__left-side[_ngcontent-%COMP%] {\n  width: 20%;\n  border-right: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  overflow-x: auto;\n}\n.container__right-side[_ngcontent-%COMP%] {\n  width: 80%;\n  overflow-x: auto;\n}\n.rectangle[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n.rectangle.move-to[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.popper[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.popper[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.popper[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.popper[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon-apply[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.popper[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ff0000;\n  border: 1px solid #ff0000;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: #37474f;\n}\n.header[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n  padding: 10px;\n  font-size: 11px;\n}\n.header[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #673ab7;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.list-row[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 1px solid black;\n  cursor: pointer;\n  position: relative;\n}\n.list-row[_ngcontent-%COMP%]:hover {\n  background-color: #d5d5d5;\n}\n.list-row[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.list-row[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.list-row[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   .pre-title[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.list-row[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0kscUJBQUE7QUFFUjtBQUVBO0VBQ0kseUJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLGVBQUE7QUFHWjtBQUZZO0VBQ0ksY0FBQTtBQUloQjtBQUZZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJaEI7QUFHSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQVI7QUFFSTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFBUjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQVI7QUFDUTtFQUNJLHlCQUFBO0FBQ1o7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFDWjtBQUFZO0VBQ0ksZUFBQTtBQUVoQjtBQUVZO0VBQ0ksZ0JBQUE7QUFBaEI7QUFHUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQURaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgJl9fbGVmdC1zaWRlIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgJl9fcmlnaHQtc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVjdGFuZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLm1vdmUtdG8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLmljb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICYtYXBwbHkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxZTg4ZTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgaDIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzNzQ3NGY7XHJcbiAgICB9XHJcbiAgICAubGluayB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY3M2FiNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgJi1yb3cge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxldGUtYnRuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlIHtcclxuICAgICAgICAgICAgLnByZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLW51bWJlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-pdf-viewer */ 9035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__.PdfViewerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__.PdfViewerModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 2069:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 6599:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 5358:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 1822:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 1127:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 3074:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map