webpackJsonp([0,3],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as jQuery from 'jquery';
//import './js/jquery-3.1.1.min.js';
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.viewUpdated = function (view) {
            this.activeView = view;
        };
    }
    AppComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.http.get('assets/config.json')
            .map(function (responseData) {
            _this.configuration_file = responseData.json();
            _this.renderViews();
        })
            .subscribe(function (data) { return function (data) {
        }; }, function (err) { return _this.logError(err); });
    };
    AppComponent.prototype.renderViews = function () {
        // if(this.configuration_file){
        //   this.configuration_file.forEach(function(elem){
        //   });
        // }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(624),
            styles: [__webpack_require__(615)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/app.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(455);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camera_view_camera_view_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__status_bar_status_bar_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slideshow_slideshow_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__render_view_render_view_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__multiple_slideshow_multiple_slideshow_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__number_template_directive__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tracking_camera_tracking_camera_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__employee_stats_employee_stats_component__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__camera_view_camera_view_component__["a" /* CameraViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__status_bar_status_bar_component__["a" /* StatusBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__slideshow_slideshow_component__["a" /* SlideshowComponent */],
                __WEBPACK_IMPORTED_MODULE_8__render_view_render_view_component__["a" /* RenderViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__multiple_slideshow_multiple_slideshow_component__["a" /* MultipleSlideshowComponent */],
                __WEBPACK_IMPORTED_MODULE_10__number_template_directive__["a" /* NumberTemplateDirective */],
                __WEBPACK_IMPORTED_MODULE_11__tracking_camera_tracking_camera_component__["a" /* TrackingCameraComponent */],
                __WEBPACK_IMPORTED_MODULE_12__employee_stats_employee_stats_component__["a" /* EmployeeStatsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CameraViewComponent = (function () {
    // ngDoCheck() {
    //   console.log("docheck",this.isOWL)
    //   this.isActive = !this.isOWL||this.cameraView.nativeElement.dataset.isactive;
    //   if(this.isActive=='true'){
    //     this.startTicker();  
    //   }else{
    //     this.stopTicker();  
    //   }
    // }
    function CameraViewComponent() {
        // var t = this;
        // setInterval(function(){   console.log("check isActive",typeof
        // t.camera!='undefined'&&t.camera.id," -> ",t.isActive); },1000)
        this.autoplay = true;
        this.isOWL = false;
        this.playing = false;
        this.destroyed = false;
        this.isActive = this.isOWL ? 'false' : 'true';
    }
    CameraViewComponent.prototype.update_image_canvas = function (input) {
        //console.log("update_image_canvas ",input)
        var blob = new Blob([input], { type: 'image/png' });
        // var url = URL.createObjectURL(blob);
        var img = new Image;
        var t = this;
        img.onload = function () {
            var ctx = t
                .video_player
                .nativeElement;
            ctx.src = input;
            // console.log("image this",this)
            //   .getContext('2d');
            //   ctx.mozImageSmoothingEnabled = false;
            //   ctx.webkitImageSmoothingEnabled = false;
            //   ctx.msImageSmoothingEnabled = false;
            //   ctx.imageSmoothingEnabled = false;
            // ctx.drawImage(this, 0,0,t
            //   .video_playerdestroy
            //   .nativeElement.width,t
            //   .video_player
            //   .nativeElement.height);
            // console.log("image updatedddd",this) URL.revokeObjectURL(input);
            //if (!t.destroyed) 
            //  t.imageUpdated(t)
        };
        img.src = input;
    };
    CameraViewComponent.prototype.ngOnChanges = function (changes) {
        //console.log("changes", changes);
        var t = this;
        if (typeof changes['imageUpdate'] != 'undefined') {
            clearInterval(this.update_camera);
            if (!this.destroyed)
                t.startTicker();
        }
    };
    CameraViewComponent.prototype.startTicker = function () {
        if (!this.autoplay)
            return this.stopTicker;
        this.destroyed = false;
        var t = this;
        // this.video_player.nativeElement = document.getElementById("videoPlayer");
        // console.log(this.video_player.nativeElement)
        clearInterval(this.update_camera);
        this.update_camera = setInterval(function () {
            //console.log("updatecamera2")
            t.update_image_canvas(t.camera.img + ((t.camera.img.indexOf('?') >= 0)
                ? "&"
                : "?") + "id=" + t.camera.id + "&r=" + Math.random() * 1000);
            // t.video_player.nativeElement.nativeElement.src =
            // t.camera.img+((t.camera.img.indexOf('?')>=0)?"&":"?")+"r="+Math.random()*1000;
        }, this.imageUpdate * 1000);
    };
    CameraViewComponent.prototype.stopTicker = function () {
        this.destroyed = true;
        // console.log(" clearInterval(this.update_camera)", this.update_camera)
        clearInterval(this.update_camera);
    };
    CameraViewComponent.prototype.ngOnInit = function () {
        // this.video_player.nativeElement.nativeElement.onload =
        // this.imageUpdated(this);
        var t = this;
        this.autoplay = localStorage.getItem("autoplay") === "true";
        this.destroyed = false;
        // this.video_player.nativeElement.nativeElement.addEventListener("load",
        // function() { if(!this.destroyed)    t.imageUpdated(t) });
        t.update_image_canvas(t.camera.img + ((t.camera.img.indexOf('?') >= 0)
            ? "&"
            : "?") + "id=" + t.camera.id + "&r=" + Math.random() * 1000);
        //t.startTicker();
        t.SlideListener = function (evt) {
            //console.log("SlideListener ",t.camera)
            if (typeof t.camera == 'undefined')
                return;
            //console.log("SlideListener ",evt['detail'])
            if (evt['detail'] == t.camera.id + t.camera.url) {
                t.startTicker();
            }
            else {
                t.stopTicker();
            }
        };
        if (this.isOWL) {
            window.addEventListener("SlideActive", function (evt) {
                // console.log("SlideActivee",evt);
                t.SlideListener(evt);
            }, false);
        }
        else {
            t.startTicker();
            window.addEventListener("autoplay_changed", function (e) {
                this.autoplay = e["detail"]["autoplay"];
                if (this.autoplay) {
                    t.startTicker();
                }
                else {
                    t.stopTicker();
                }
            });
        }
        // this.subscription = this.eventAutoplay.getEmitter()
        //   .subscribe(item => this.autoplayChanged(item));
    };
    CameraViewComponent.prototype.autoplayChanged = function (item) {
        if (item) {
            this.startTicker();
        }
        else {
            this.stopTicker();
        }
    };
    CameraViewComponent.prototype.ngOnDestroy = function () {
        this.stopTicker();
        window.removeEventListener("SlideActive", this.SlideListener);
    };
    CameraViewComponent.prototype.imageUpdated = function (t) {
        if (!t.playing)
            return;
        t.update_image_canvas(t.camera.img + ((t.camera.img.indexOf('?') >= 0)
            ? "&"
            : "?") + "id=" + t.camera.id + "&r=" + Math.random() * 1000);
        //   setTimeout(function(){
        // t.video_player.nativeElement.nativeElement.src =
        // t.camera.img+((t.camera.img.indexOf('?')>=0)?"&":"?")+"r="+Math.random()*1000
        // ;  },0.15)
    };
    CameraViewComponent.prototype.clicked = function () {
        var t = this;
        this.playing = !this.playing;
        if (this.playing) {
            t.update_image_canvas(this.camera.img + ((this.camera.img.indexOf('?') >= 0)
                ? "&"
                : "?") + "id=" + t.camera.id + "&r=" + Math.random() * 1000);
        }
    };
    CameraViewComponent.prototype.open_image = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var w = window.open(this.camera.hq_img, this.camera.name, 'width=720,height=480,scrollbars=false,top=100,left=250');
        w.name = this.camera.name;
    };
    CameraViewComponent.prototype.open_window = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var w = window.open("assets/camera.html?link=" + this.camera.url, this.camera.name, 'width=720,height=480,scrollbars=false,top=100,left=250');
        w.name = this.camera.name;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CameraViewComponent.prototype, "camera", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CameraViewComponent.prototype, "autoplay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CameraViewComponent.prototype, "isOWL", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CameraViewComponent.prototype, "imageUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('videoPlayer'), 
        __metadata('design:type', Object)
    ], CameraViewComponent.prototype, "video_player", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('cameraView'), 
        __metadata('design:type', Object)
    ], CameraViewComponent.prototype, "cameraView", void 0);
    CameraViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({ selector: 'app-camera-view',
            template: __webpack_require__(625),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], CameraViewComponent);
    return CameraViewComponent;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/camera-view.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeStatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeStatsComponent = (function () {
    function EmployeeStatsComponent(http) {
        this.http = http;
        this.groupByVal = "Name";
        this.todayDay = 0;
        this.year = -1;
        this.week = -1;
        this.month = -1;
        this.years = [];
        this.weeks = [];
        this.months = [];
        this.startWeek = -1;
        this.endWeek = -1;
        this.date_module = __webpack_require__(644);
    }
    EmployeeStatsComponent.prototype.groupBy = function (newValue) {
        this.groupByVal = newValue;
        this.update_data();
    };
    ;
    EmployeeStatsComponent.prototype.loadScript = function (url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.onload = function () {
            callback();
        };
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    };
    EmployeeStatsComponent.prototype.ngOnInit = function () {
        var t = this;
        var d = new Date();
        this.todayDay = d.getDay();
        console.log("todayDay", this.todayDay);
        //t.update_data();
        t.update_stats = setInterval(function () {
            t.update_data();
        }, 60 * 1000); //60 seconds
    };
    EmployeeStatsComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(function(){
        //   t.updateyearorWeek();
        // },500)
        this.updateyearorWeek();
    };
    EmployeeStatsComponent.prototype.load_data = function () {
        var t = this;
        new Promise(function (resolve) {
            t.loadScript('/assets/js/jquery-1.9.1.min.js', function () { resolve(); });
        }).then(function () {
            return new Promise(function (resolve) {
                t.loadScript('/assets/js/bootstrap.min.js', function () { resolve(); });
            });
        }).then(function (resolve) {
            return new Promise(function (resolve) {
                t.loadScript('/assets/js/moment.min.js', function () { resolve(); });
            });
        }).then(function (resolve) {
            return new Promise(function (resolve) {
                t.loadScript('/assets/js/bootstrap-datetimepicker.min.js', function () { resolve(); });
            });
        }).then(function (resolve) {
            t.initialize_calendar.call(t);
        });
    };
    EmployeeStatsComponent.prototype.initialize_calendar = function () {
        if (typeof moment == 'undefined') {
            return this.load_data();
        }
        var t = this;
        moment.locale('en', {
            week: { dow: 6 } // Monday is the first day of the week
        });
        var today = new Date();
        $("#weeklyDatePicker").datetimepicker({
            format: 'DD.MM.YYYY',
            minDate: new Date().setFullYear(today.getFullYear() - 1),
            maxDate: today,
            useCurrent: false
        });
        //Get the value of Start and End of Week
        $('#weeklyDatePicker').on('dp.change', function (e) {
            var value = $("#weeklyDatePicker").val();
            var firstDate = moment(value, "DD.MM.YYYY").day(0);
            var lastDate = moment(value, "DD.MM.YYYY").day(6);
            t.startWeek = firstDate.toDate();
            t.endWeek = lastDate.toDate();
            $("#weeklyDatePicker").val(firstDate.format("DD.MM.YYYY") + " - " + lastDate.format("DD.MM.YYYY"));
            var d = firstDate.toDate();
            t.year = d.getFullYear();
            t.week = t.date_module.getWeek.call(d);
            t.update_data(t.year, t.week);
        });
    };
    EmployeeStatsComponent.prototype.updateyearorWeek = function () {
        this.initialize_calendar();
        this.update_data(this.year, this.week);
    };
    EmployeeStatsComponent.prototype.update_data = function (year, week) {
        if (year === void 0) { year = -1; }
        if (week === void 0) { week = -1; }
        var t = this;
        // console.log("Grouping by ",t.groupByVal);
        //         var gg = _.groupBy(t.stats.employees, function(d){return d[t.groupByVal]});
        //         t.groups = [];
        //         for (var prop in gg) {
        //                 // skip loop if the property is from prototype
        //                 if(!gg.hasOwnProperty(prop)) continue;
        //         t.groups.push({group:prop,elem:gg[prop]})
        //             }
        //         console.log(t.groups);
        t.http.get("/api/get_employees_stats/" + t.viewId + "?year=" + t.year + "&week=" + t.week)
            .map(function (res) {
            var response = res.json();
            t.stats.employees = response.employees;
            if (t.year < 0)
                t.year = response.year;
            if (t.week < 0)
                t.week = response.week;
            if (t.startWeek < 0)
                t.startWeek = response.startWeek;
            if (t.endWeek < 0)
                t.endWeek = response.endWeek;
            //console.log(t.stats.employees);
            //console.log("Grouping by ",t.groupByVal);
            var gg = __WEBPACK_IMPORTED_MODULE_3_underscore__["groupBy"](t.stats.employees, function (d) { return d[t.groupByVal]; });
            t.groups = [];
            for (var prop in gg) {
                // skip loop if the property is from prototype
                if (!gg.hasOwnProperty(prop))
                    continue;
                t.groups.push({ group: prop, elem: gg[prop] });
            }
            console.log(t.groups);
        })
            .subscribe(function (data) { return function (data) {
        }; }, function (err) { return console.log(err); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], EmployeeStatsComponent.prototype, "stats", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], EmployeeStatsComponent.prototype, "viewId", void 0);
    EmployeeStatsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-employee-stats',
            template: __webpack_require__(626),
            styles: [__webpack_require__(617)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EmployeeStatsComponent);
    return EmployeeStatsComponent;
    var _a;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/employee-stats.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(304);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(452);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/index.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleSlideshowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultipleSlideshowComponent = (function () {
    function MultipleSlideshowComponent() {
        this.subslideshows = ['horiz_slide0', 'horiz_slide1'];
        this.update_oneslideshow = true;
        this.slideshowTimer = 5;
        this.slideshowTimerVertical = 5;
        this.slideshowTimerOwl = 5;
        var timers = get_timers();
        this.slideshowTimer = timers['jssor_multiple_timer'];
        this.slideshowTimerVertical = timers['jssor_multiple_timer_vertical'];
        this.slideshowTimerOwl = timers['owl_duration'];
    }
    MultipleSlideshowComponent.prototype.inputChanged = function (event) {
        update_slideshowTimer(this.slideshowTimer);
    };
    MultipleSlideshowComponent.prototype.inputChangedVertical = function (event) {
        update_slideshowTimerVertical(this.slideshowTimerVertical);
    };
    MultipleSlideshowComponent.prototype.inputChangedOwl = function (event) {
        if (this.slideshowTimerOwl < 1)
            this.slideshowTimerOwl = 1;
        update_slideshowTimerOwl(this.slideshowTimerOwl);
    };
    MultipleSlideshowComponent.prototype.ngOnInit = function () {
    };
    MultipleSlideshowComponent.prototype.ngOnChanges = function (changes) {
        var t = this;
        if (typeof changes["activeView"] != 'undefined') {
            this.slideTo(this.activeView.slideshows[0]);
            setTimeout(function () {
                t.update_slideshow(true, '');
            }, 10);
            return;
        }
        if (typeof changes["slideshow"] != 'undefined') {
            setTimeout(function () {
                try {
                    this.update_global_slides(t.subslideshows, false);
                }
                catch (e) {
                    console.log(e);
                }
            }, 10);
        }
        // changes.prop contains the old and the new value...
    };
    MultipleSlideshowComponent.prototype.transform = function (val) {
        return JSON.stringify(val, null, 2)
            .replace(' ', '&nbsp;')
            .replace('\n', '<br/>');
    };
    MultipleSlideshowComponent.prototype.slideTo = function (i) {
        // $("#owl_one_slide>.camera_slide").moveTo('#owl_one_slide');
        this.update_oneslideshow = false;
        this.current_location = i;
        var t = this;
        setTimeout(function () {
            t.update_slideshow(true, '');
        }, 10);
    };
    MultipleSlideshowComponent.prototype.checkLocation = function () {
        return typeof this.current_location != 'undefined';
    };
    MultipleSlideshowComponent.prototype.showByLocation = function () {
        return typeof this.activeView != 'undefined' && this.activeView.byLocation;
    };
    MultipleSlideshowComponent.prototype.update_slideshow = function (b, string) {
        try {
            if (!this.showByLocation())
                update_main_slider(true, '');
            else {
                update_main_slider_one();
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], MultipleSlideshowComponent.prototype, "imageUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], MultipleSlideshowComponent.prototype, "slideshow", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], MultipleSlideshowComponent.prototype, "activeView", void 0);
    MultipleSlideshowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-multiple-slideshow',
            template: __webpack_require__(627),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], MultipleSlideshowComponent);
    return MultipleSlideshowComponent;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/multiple-slideshow.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberTemplateDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberTemplateDirective = (function () {
    function NumberTemplateDirective() {
    }
    NumberTemplateDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
            selector: 'NumberTemplate'
        }), 
        __metadata('design:paramtypes', [])
    ], NumberTemplateDirective);
    return NumberTemplateDirective;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/number-template.directive.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RenderViewComponent = (function () {
    function RenderViewComponent() {
        this.imageUpdate = typeof localStorage['imageUpdate1'] != 'undefined' && JSON.parse(localStorage['imageUpdate1']) || {};
        this.unique_id = 0;
    }
    RenderViewComponent.prototype.ngOnInit = function () {
    };
    RenderViewComponent.prototype.ngOnChanges = function (changes) {
        if (typeof changes['activeView'] != 'undefined' && typeof this.activeView != 'undefined') {
            this.unique_id = this.activeView.view_name + this.activeView.view_type;
            if (typeof this.imageUpdate[this.unique_id] == 'undefined')
                this.imageUpdate[this.unique_id] = 5;
            localStorage.setItem('imageUpdate1', JSON.stringify(this.imageUpdate));
        }
    };
    RenderViewComponent.prototype.inputChangedImgUpdate = function (e) {
        localStorage.setItem('imageUpdate1', JSON.stringify(this.imageUpdate));
    };
    RenderViewComponent.prototype.isSlideshow = function () {
        return typeof this.activeView != 'undefined' && this.activeView.view_type == "slideshow";
    };
    RenderViewComponent.prototype.isGrid = function () {
        return typeof this.activeView != 'undefined' && this.activeView.view_type.indexOf("grid") == 0;
    };
    RenderViewComponent.prototype.isMultipleSlideshow = function () {
        return typeof this.activeView != 'undefined' && (this.activeView.view_type == "multiple-slideshow" || this.activeView.view_type == "full_screen-slideshow");
    };
    RenderViewComponent.prototype.isTrackMode = function () {
        return typeof this.activeView != 'undefined' && this.activeView.view_type.indexOf("track_car") >= 0;
    };
    RenderViewComponent.prototype.isEmployeeStatsMode = function () {
        return typeof this.activeView != 'undefined' && this.activeView.view_type.indexOf("employee-stats") >= 0;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], RenderViewComponent.prototype, "activeView", void 0);
    RenderViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-render-view',
            template: __webpack_require__(628),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], RenderViewComponent);
    return RenderViewComponent;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/render-view.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideshowComponent = (function () {
    function SlideshowComponent() {
    }
    SlideshowComponent.prototype.ngOnInit = function () {
        // this.updateSlideshow();
        // setTimeout(this.updateSlideshow,500)
        if (this.activeCameras)
            this.slideTo(this.activeCameras[0]);
    };
    SlideshowComponent.prototype.slideTo = function (camera) {
        console.log("slide to ", camera);
        this.activeCameraSlideshow = camera;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], SlideshowComponent.prototype, "activeCameras", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], SlideshowComponent.prototype, "imageUpdate", void 0);
    SlideshowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-slideshow',
            template: __webpack_require__(629),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], SlideshowComponent);
    return SlideshowComponent;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/slideshow.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusBarComponent = (function () {
    function StatusBarComponent() {
        this.viewUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.current_view = 5;
        this.fullscreen = false;
        this.changeView = function (view) {
            this.current_view = view;
            this.viewUpdated.emit(this.current_view);
        };
        this.autoplay_notification = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    StatusBarComponent.prototype.ngOnInit = function () {
        this.autoplay = localStorage.getItem("autoplay") === "true";
        this.send_event_autoplay();
        this.setAutoplayBtn();
        //this.eventAutoplay.getEmitter().emit(this.autoplay);
        //this.viewUpdated.emit(this.current_view);
    };
    StatusBarComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if (propName == "configuration") {
                if (this.configuration)
                    this.changeView(this.configuration[this.current_view]);
            }
        }
    };
    StatusBarComponent.prototype.toggleFullscreen = function () {
        this.fullscreen = !this.fullscreen;
        FullscreenToggle(this.fullscreen);
    };
    StatusBarComponent.prototype.toggleAutoplay = function () {
        this.autoplay = !this.autoplay;
        this.setAutoplayBtn();
        localStorage.setItem('autoplay', this.autoplay + "");
        this.send_event_autoplay();
    };
    StatusBarComponent.prototype.send_event_autoplay = function () {
        var event = new CustomEvent('autoplay_changed', {
            detail: {
                autoplay: this.autoplay
            }
        });
        window.dispatchEvent(event);
    };
    StatusBarComponent.prototype.setAutoplayBtn = function () {
        if (this.autoplay) {
            this.autoplay_btn_text = "Autoplay On";
        }
        else {
            this.autoplay_btn_text = "Autoplay Off";
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], StatusBarComponent.prototype, "viewUpdated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], StatusBarComponent.prototype, "current_view", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], StatusBarComponent.prototype, "configuration", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], StatusBarComponent.prototype, "autoplay_notification", void 0);
    StatusBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-status-bar',
            template: __webpack_require__(630),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [])
    ], StatusBarComponent);
    return StatusBarComponent;
    var _a;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/status-bar.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingCameraComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackingCameraComponent = (function () {
    function TrackingCameraComponent(http) {
        this.http = http;
        this.geocoder1 = new google.maps.Geocoder();
        this.destroyed = false;
    }
    TrackingCameraComponent.prototype.ngOnInit = function () {
        this.destroyed = false;
    };
    TrackingCameraComponent.prototype.twoDigits = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    TrackingCameraComponent.prototype.GeocodeHandler = function (coordenadas, next) {
        var t = this;
        this.geocoder1.geocode({ 'location': coordenadas }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT)
                return setTimeout(function () {
                    t.GeocodeHandler(coordenadas, next);
                }, 1000);
            next(results, status);
        });
    };
    TrackingCameraComponent.prototype.ResponseHandle = function (data) {
        var dataarray = data.split(",");
        var firstpart = dataarray[0].split(":");
        var vehicle_title = firstpart[1];
        vehicle_title = vehicle_title.substring(1, vehicle_title.length - 1);
        var secondpart = dataarray[1].split(":");
        var vehicle_details = secondpart[1];
        vehicle_details = vehicle_details.substring(1, vehicle_details.length - 1);
        var thirdpart1 = dataarray[2].split(":");
        var latitude1 = thirdpart1[1];
        latitude1 = latitude1.substring(1, latitude1.length - 1);
        var fourthpart1 = dataarray[3].split(":");
        var longitude1 = fourthpart1[1];
        longitude1 = longitude1.substring(1, longitude1.length - 1);
        var fifthpart = dataarray[4].split(":");
        var ignition = fifthpart[1];
        ignition = ignition.substring(1, ignition.length - 1);
        var sixthpart = dataarray[5].split(":");
        var speed = sixthpart[1];
        speed = speed.substring(1, speed.length - 1);
        var seventhpart = dataarray[6].split(":");
        var angle = seventhpart[1];
        angle = angle.substring(1, angle.length - 1);
        var eighthpart = dataarray[7].split(":");
        var lastUpdate = eighthpart[1];
        lastUpdate = lastUpdate.substring(1, lastUpdate.length - 3);
        var datetime1 = new Date(lastUpdate * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = datetime1.getFullYear();
        var month = months[datetime1.getMonth()];
        var date = datetime1.getDate();
        var hour = this.twoDigits(datetime1.getHours()) - 4;
        var min = this.twoDigits(datetime1.getMinutes());
        var sec = this.twoDigits(datetime1.getSeconds());
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        this.labelH.nativeElement.innerHTML = "<font size=1px color='brown'><center><b>" + vehicle_title + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + ignition + "</b></font></center>";
        var coordenadas = new google.maps.LatLng(parseFloat(latitude1), parseFloat(longitude1));
        var t = this;
        console.log(coordenadas);
        this.GeocodeHandler(coordenadas, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                t.label.nativeElement.innerHTML = "<font size=1px color='brown'><center>" + results[1].formatted_address + "</font></center>";
            }
            else {
                console.log("Geocode error: ", results, status);
            }
        });
        //    console.log("mapa1",mapa1,{lat: Number(latitude1), lng:  Number(longitude1)});
        var contentString = "<font size='0.5'><center><b><font color='brown'>" + vehicle_title + "</font></b></center><br><font color='brown'><strong>Vehicle details:</strong></font> " + vehicle_details + "<br><font color='brown'><strong>Latitude: </strong></font>" + latitude1 + " <font color='brown'><strong> &nbsp; &nbsp; Longitude: </strong></font>" + longitude1 + " <br><font color='brown'><strong> Ignition: </strong></font>" + ignition + " <font color='brown'><strong> &nbsp; &nbsp; Speed: </strong></font>" + speed + " <font color='brown'><strong> &nbsp; &nbsp; Angle: </strong></font>" + angle + "<br> <font color='brown'><strong> Last update: </strong></font>" + time + "<br></font>";
        var infojanela1 = new google.maps.InfoWindow({
            content: contentString
        });
        //am inceput la 14:36
        t.mapa1.setCenter(coordenadas);
        t.marker.setPosition(coordenadas);
        t.marker.setTitle(vehicle_title);
        google.maps.event.addListener(t.marker, 'click', function () {
            infojanela1.open(t.mapa1, t.marker);
        });
    };
    TrackingCameraComponent.prototype.ngAfterViewInit = function () {
        var mapOptions = {
            center: new google.maps.LatLng(0, 0),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        //console.log("this.mapa1_html.nativeElement",this.mapa1_html.nativeElement);
        this.mapa1 = new google.maps.Map(this.mapa1_html.nativeElement, mapOptions);
        this.marker = new google.maps.Marker({ map: this.mapa1 });
        //     this.myajax1 = new XMLHttpRequest();
        //    this.myajax1.onreadystatechange=this.ResponseHandle;
        //     this.myajax1.open("POST","http://login.fams.cc/fams/serviceWeb/rest/list?app_id=501876616&app_key=GNjNDaAStiA-bEJ14&access_token=Ac3a360343471cb443D8350000050aDcQWkzYTM2MDM0MzQ3MWNiNDQzRDgzNTAwMDAwNTBhRGM$&vehicle=27850",true);
        //  this.myajax1.send();
        //  this.responseData = '[{"title":"002 - Muhammad Basharat Anjum","vehicleDetails":"H 84526-Mitsubishi-Pickup-White","latitude":"25.1221376","longitude":"55.2230656","ignitionStatus":"OFF","speed":"0","angle":"0","lastUpdateTimestamp":"1482784484"}]';
        //  this.ResponseHandle(this.responseData);
        // this.http.post(this.camera.track_car.replace('http://login.fams.cc',''),{})
        //   .subscribe(
        //     data=>function(data){
        //       this.responseData = data;
        //        this.ResponseHandle(this.responseData);
        //       console.log("track car response:",data)
        //     },
        //     error => console.log(error)
        //   );  
        var t = this;
        t.http.get(t.camera.track_car.replace('http://login.fams.cc', ''))
            .map(function (res) {
            t.responseData = res.text();
            t.ResponseHandle(t.responseData);
            // console.log("Response request",res.text())
        })
            .subscribe(function (data) { return function (data) {
        }; }, function (err) { return console.log(err); });
        //console.log("t.imageUpdate",this.imageUpdate);
        this.startTicker();
    };
    TrackingCameraComponent.prototype.ngOnChanges = function (changes) {
        //console.log("changes", changes);
        var t = this;
        if (typeof changes['imageUpdate'] != 'undefined') {
            //  console.log("image updated set interval...")
            clearInterval(this.update_camera);
            if (!this.destroyed && typeof this.http != 'undefined')
                t.startTicker();
        }
    };
    TrackingCameraComponent.prototype.startTicker = function () {
        this.destroyed = false;
        var t = this;
        // this.video_player.nativeElement = document.getElementById("videoPlayer");
        // console.log(this.video_player.nativeElement)
        clearInterval(this.update_camera);
        this.update_camera = setInterval(function () {
            //console.log("updatecamera2")
            t.http.get(t.camera.track_car.replace('http://login.fams.cc', ''))
                .map(function (res) {
                t.responseData = res.text();
                t.ResponseHandle(t.responseData);
                // console.log("Response request",res.text())
            })
                .subscribe(function (data) { return function (data) {
            }; }, function (err) { return console.log(err); });
        }, t.imageUpdate * 1000);
    };
    TrackingCameraComponent.prototype.stopTicker = function () {
        this.destroyed = true;
        // console.log(" clearInterval(this.update_camera)", this.update_camera)
        clearInterval(this.update_camera);
    };
    TrackingCameraComponent.prototype.ngOnDestroy = function () {
        this.stopTicker();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], TrackingCameraComponent.prototype, "camera", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], TrackingCameraComponent.prototype, "imageUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('label'), 
        __metadata('design:type', Object)
    ], TrackingCameraComponent.prototype, "label", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('labelH'), 
        __metadata('design:type', Object)
    ], TrackingCameraComponent.prototype, "labelH", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('mapcanvas2'), 
        __metadata('design:type', Object)
    ], TrackingCameraComponent.prototype, "mapa1_html", void 0);
    TrackingCameraComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-tracking-camera',
            template: __webpack_require__(631),
            styles: [__webpack_require__(622)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TrackingCameraComponent);
    return TrackingCameraComponent;
    var _a;
}());
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/tracking-camera.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/environment.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/iosif/Documents/Projects/Web/ip_cameras/src/polyfills.js.map

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "\n.grid1>app-camera-view{\n    width:100%;\n    height:100%;\n    float:left;\n}\n.grid2>app-camera-view{\n    width:50%;\n    min-height: 400px;\n    float:left;\n}\n.grid3>app-camera-view{\n    width:50%;\n    min-height: 400px;\n}\n.grid3::nth-last-child()>app-camera-view{\n    width:100%;\n    margin-top:20px;\n}\n.grid3>app-camera-view.last_one{\n    width:100%;\n}\n.grid4>app-camera-view{\n    width:50%;\n    float:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ":host{\n    width:33.33%;\n    text-align: center;\n    float: left;\n}\nvideo{\n    width: 100%;\n    height: 100%;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\nh2{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    float: left;\n    font-size: 12px;\n    z-index: 1000;\n    color: white;\n}\ndiv.camera-view{\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n:host.camera_slide{\n    width:100%;\n    height:100%;\n}\ndiv.controll_btn{\n    position: absolute;\n    left: 6px;\n    bottom: 4px;\n    width: 20px;\n    height: 20px;\n}\na.open_camera{\n    z-index: 2000000;\n    width: 27px;\n    height: 27px;\n    position: absolute;\n    bottom: 7px;\n    right: 16px;\n    padding: 5px;\n}\na.open_hq_img{\n        z-index: 2000000;\n    width: 27px;\n    height: 27px;\n    position: absolute;\n    bottom: 7px;\n    right: 42px;\n    padding: 5px;\n}\n.controll_btn,a.open_hq_img,a.open_camera{\n    cursor: pointer;\n}\nimg{\n\n    -o-object-fit: fill;\n\n       object-fit: fill;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".employees-stats{\n    margin-top:88px;\n        width: 1100px;\n    margin: 0 auto;\n    max-width: 95%;\n}\nh2{\n        background-color: #807fff;\n    margin-top: 82px;\n    line-height: 50px;\n    color: white;\n    text-align: center;\n    max-width: 100%;\n    width: 881px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 34px;\n}\nh4{\n    font-size: 20px;\n    margin: 5px 3px;\n    padding: 0;\n}\n.employee-row-container{\n    margin-top: 20px;\n}\ntd{\n    text-align: center;\n}\n.day_active{\n    background-color:#F1F7C5;\n}\n.input_stats_emp{\n    margin-left:10px;\n}\n.input_stats_emp_container>h4{\n    font-size:18px;\n}\n.summary-interval{\n        text-align: center;\n    margin-top: -17px;\n    margin-bottom: 22px;\n}\n.summary_commands{\n    display:none;\n}\ntd.left_align{\n    text-align:left;\n}\n\n.employee-row td{\n    padding: 2px 11px!important;\n}\nh3.groupByTitle{\n        margin-top: 26px;\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\nth{\n    text-align:center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "        /* jssor slider bullet navigator skin 03 css */\n        /*\n        .jssorb03 div           (normal)\n        .jssorb03 div:hover     (normal mouseover)\n        .jssorb03 .av           (active)\n        .jssorb03 .av:hover     (active mouseover)\n        .jssorb03 .dn           (mousedown)\n        */\n        .jssorb03 div, .jssorb03 div:hover, .jssorb03 .av\n        {\n            overflow:hidden;\n            cursor: pointer;\n        }\n        .jssorb03 div { background-position: -5px -4px; }\n        .jssorb03 div:hover, .jssorb03 .av:hover { background-position: -35px -4px; }\n        .jssorb03 .av { background-position: -65px -4px; }\n        .jssorb03 .dn, .jssorb03 .dn:hover { background-position: -95px -4px; }\n\t\t.image-container {\n    position: relative;\n    width: 200px;\n    height: 300px;\n}\n.image-container .after { position: absolute; top: 0; left: 0; width: 100%; display: none; color: #333333;}\n.image-container:hover .after { display: block; background: rgba(0, 0, 0, .6);}\n.slider_container{\nposition: relative; top: 0px; left: 0px; width: 809px; height: 150px;\n}            /*\n            .jssorb02 div           (normal)\n            .jssorb02 div:hover     (normal mouseover)\n            .jssorb02 .av           (active)\n            .jssorb02 .av:hover     (active mouseover)\n            .jssorb02 .dn           (mousedown)\n            */\n            .jssorb02 div, .jssorb02 div:hover, .jssorb02 .av\n            {\n                overflow:hidden;\n                cursor: pointer;\n            }\n            .jssorb02 div { background-position: -5px -5px; }\n            .jssorb02 div:hover, .jssorb02 .av:hover { background-position: -35px -5px; }\n            .jssorb02 .av { background-position: -65px -5px; }\n            .jssorb02 .dn, .jssorb02 .dn:hover { background-position: -95px -5px; }\n\n.slidd_cont{\n    position: relative; top: 0px; left: 0px; width: 809px; height: 150px;\n}\ndiv.jssorb02{\n    left:10px!important;\n}\n.slideshow-menus-wrapper{\n        position: fixed;\n    top: 68px;\n    left: 22px;\n    background: white;\n    padding: 5px 12px;\n    width: 150px;\n\n    z-index: 400000;\n}\n.slideshow-menus-wrapper>a{\n    float:left;\n    width:100%;\n    cursor: pointer;  \n      text-decoration: none;\n    color: #343434;\n}\n.slideshow-menus-wrapper>a.active,.slideshow-menus-wrapper>a:hover{\n    color: black;\n      text-decoration: underline;\n\n}\n\n.slideshow-menu-timer{\n    position: fixed;\n    top: 75px;\n    right: 20px;\n    z-index: 20000000;\n    color:#fff;\n    display:none;\n}\n.slideshow-menu-timer>input{\n    width: 49px;\n    text-align: center;\n    padding: 5px 10px ;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".setImageUpdate{\n        position: fixed;\n    top: 139px;\n    right: 20px;\n    z-index: 20000;\n    color:white;\n    display:none;\n}\n.setImageUpdate>input{\n    text-align: center;\n    padding: 5px 10px;\n    width: 49px;\n}\napp-employee-stats{\n    background-color: #fff;\n        overflow: auto;\n    padding-bottom: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".slideshow-menus-wrapper{\n        position: fixed;\n    top: 68px;\n    left: 22px;\n    background: white;\n    padding: 5px 12px;\n    width: 109px;\n    z-index: 400000;\n}\n.slideshow-menus-wrapper>a{\n    float:left;\n    width:100%;\n    cursor: pointer;  \n      text-decoration: none;\n    color: #343434;\n}\n.slideshow-menus-wrapper>a.active,.slideshow-menus-wrapper>a:hover{\n    color: black;\n      text-decoration: underline;\n\n}\n.cameras-wrapper>h2{\n    left: 0;\n    right: 0;\n    top: 60px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "button{\n    outline:none;\n    cursor:pointer;\n        background: transparent;\n    border: 3px solid rgba(181, 180, 180, 0.47);\n    padding: 5px 8px;\n}\nbutton.active{\n    border: 3px solid rgb(130, 130, 130);\n\n}\na#close_btn{\n    cursor:pointer;\n    text-decoration: none;\n    color:black;\n    line-height: 33px;\n}\ndiv.status-bar-wrapper{\n        position: fixed;\n    background: white;\n    border-bottom: 1px solid #d2d2d2;\n    padding: 15px 24px;\n    top: 0;\n    left: 0;\n    right: 0;\n    margin-bottom: 15px;\n    z-index: 20;\n}\ndiv.fullscreen{  \n      visibility: collapse;\n}\na.fullscreen{\n    visibility: visible;\n    z-index:20000;\n    color:white!important;\n}\na{\n    color:black;\n}\nbutton#toggle_autoplay{\n        margin-right: 24px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ":host{\n    width:33.33%;\n    text-align: center;\n    float: left;\n}\nvideo{\n    width: 100%;\n    height: 100%;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\nh2{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    float: left;\n    font-size: 12px;\n    z-index: 1000;\n    color: white;\n}\ndiv.camera-view{\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n:host.camera_slide{\n    width:100%;\n    height:100%;\n}\n:host{\n        border: 1px solid grey;\n}\ndiv.controll_btn{\n    position: absolute;\n    left: 6px;\n    bottom: 4px;\n    width: 20px;\n    height: 20px;\n}\na.open_camera{\n    z-index: 2000000;\n    width: 27px;\n    height: 27px;\n    position: absolute;\n    bottom: 7px;\n    right: 16px;\n    padding: 5px;\n}\na.open_hq_img{\n        z-index: 2000000;\n    width: 27px;\n    height: 27px;\n    position: absolute;\n    bottom: 7px;\n    right: 42px;\n    padding: 5px;\n}\n.controll_btn,a.open_hq_img,a.open_camera{\n    cursor: pointer;\n}\nimg{\n\n    -o-object-fit: fill;\n\n       object-fit: fill;\n}\ndiv#labelH2,div#label2 {\n    background-color: gainsboro;\n}\ndiv#label2{\n        position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.map-canvas{\n        position: absolute;\n    overflow: hidden;\n    top: 18px;\n    right: 0;\n    left: 0;\n    bottom: 18px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<app-status-bar (viewUpdated)=\"viewUpdated($event)\" [configuration]=\"configuration_file\"></app-status-bar>\n<app-render-view id=\"view_wrapper\" [activeView]=\"activeView\"></app-render-view>\n\n\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<div class=\"camera-view\" #cameraView  [attr.camid]=\"camera.id\" [attr.camurl]=\"camera.url\"> \n   <h2>{{camera.name}}</h2>\n  <img #videoPlayer id=\"videoPlayer\" style=\"width: 100%;height: 100%;\"/>\n  <div class=\"controll_btn\" (click)=\"clicked()\">\n    <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"!playing\">\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z\"/>\n    </svg>\n    <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"playing\">\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z\"/>\n    </svg>\n  </div>\n  <a  class=\"open_camera\" (click)=\"open_window($event)\">\n    <svg fill=\"#FFFFFF\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n      <path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/>\n  </svg>\n  </a>\n   <a  class=\"open_hq_img\" (click)=\"open_image($event)\">\n    <svg fill=\"#FFFFFF\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\"/>\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n     </svg>\n  </a>\n\n  \n</div>"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"employees-stats\">\n  <h2>Weekly Summary By Day</h2>\n  <div class=\"summary-interval\">  <input type='text' id='weeklyDatePicker' placeholder=\"Select Week\" value=\"{{startWeek| date: 'dd.MM.yyyy'}} - {{endWeek| date: 'dd.MM.yyyy'}}\" />\n </div>\n<div class=\"summary_commands\">\n    <div class=\"input_stats_emp_container\">\n  <select #item (change)=\"groupBy(item.value)\" [(ngModel)]=\"groupByVal\" style=\"margin:10px 0\">\n    <option value=\"Name\" >Location</option>\n    <option value=\"Department\">Department</option>\n  </select>\n  </div>\n  <!--<div class=\"input_stats_emp_container\">\n    <h4>Year :\n      <select class=\"input_stats_emp\" [(ngModel)]=\"year\" (ngModelChange)=\"updateyearorWeek()\">\n      <option *ngFor=\"let i of years\" value=\"{{i}}\">{{i}}</option>\n    </select>\n    </h4>\n    <h4>Month :<select class=\"input_stats_emp\" [(ngModel)]=\"month\" (ngModelChange)=\"updateyearorWeek()\">\n      <option *ngFor=\"let i of months\" value=\"{{i}}\">{{i}}</option>\n    </select>\n    </h4>\n    <h4>Week :<select class=\"input_stats_emp\" [(ngModel)]=\"week\" (ngModelChange)=\"updateyearorWeek()\">\n      <option *ngFor=\"let i of weeks\" value=\"{{i}}\">{{i}}</option>\n    </select>\n    </h4>\n    </div>-->\n  </div>\n\n  <table style=\"width:100%\" class=\"employee-row-container\" >\n    <tr class=\"header\">\n      <th *ngIf=\"groupByVal=='Name'\">Department</th>\n      <th *ngIf=\"groupByVal=='Department'\">Location</th>\n      <th>ID</th> \n      <th>Name</th>\n      <th  [ngClass]=\"{'day_active':todayDay==6}\" class=\"day_row\">Sat</th>\n      <th  [ngClass]=\"{'day_active':todayDay==0}\" class=\"day_row\">Sun</th>\n      <th  [ngClass]=\"{'day_active':todayDay==1}\" class=\"day_row\">Mon</th>\n      <th  [ngClass]=\"{'day_active':todayDay==2}\" class=\"day_row\">Tue</th>\n      <th  [ngClass]=\"{'day_active':todayDay==3}\" class=\"day_row\">Wed</th>\n      <th  [ngClass]=\"{'day_active':todayDay==4}\" class=\"day_row\">Thu</th>\n      <th  [ngClass]=\"{'day_active':todayDay==5}\" class=\"day_row\">Fri</th>\n    </tr>\n    <tbody *ngFor=\"let group of groups\">\n        <h3 class=\"groupByTitle\">{{group.group}}</h3>\n\n      <tr  class=\"row employee-row\" *ngFor=\"let employee of group.elem\" >\n          <td *ngIf=\"groupByVal=='Name'\" class=\"left_align\">{{employee.Department}}</td>\n          <td *ngIf=\"groupByVal=='Department'\" class=\"left_align\">{{employee.Name}}</td>\n          <td>{{employee.SerialNo}}</td>\n          <td class=\"left_align\">{{employee.FullName}}</td>\n          <td [ngClass]=\"{'day_active':todayDay==6}\" class=\"day_row\">{{employee.Saturday || ''}}</td>\n          <td [ngClass]=\"{'day_active':todayDay==0}\" class=\"day_row\">{{employee.Sunday || ''}}</td>\n          <td [ngClass]=\"{'day_active':todayDay==1}\" class=\"day_row\">{{employee.Monday|| ''}}</td>\n          <td [ngClass]=\"{'day_active':todayDay==2}\" class=\"day_row\">{{employee.Tuesday|| '' }}</td>\n          <td [ngClass]=\"{'day_active':todayDay==3}\" class=\"day_row\">{{employee.Wednesday || ''}}</td>\n          <td [ngClass]=\"{'day_active':todayDay==4}\" class=\"day_row\">{{employee.Thursday|| ''}}</td>\n          <td [ngClass]=\"{'day_active':todayDay==5}\" class=\"day_row\">{{employee.Friday || '' }}</td>\n        </tr>\n    </tbody>\n\n   \n</table>\n\n</div>\n\n\n\n"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<div class=\"full\" *ngIf=\"!showByLocation()\" >\n    <div class=\"slideshow-menu-timer\">\n        H:<input id=\"slideshow-duration\" placeholder=\"Duration\" min=\"0\" [(ngModel)]=\"slideshowTimer\" type=\"number\"  (input)=\"inputChanged($event)\"/><br/>\n        V:<input id=\"slideshow-duration_vertical\" placeholder=\"Duration\" min=\"0\"  [(ngModel)]=\"slideshowTimerVertical\" type=\"number\"  (input)=\"inputChangedVertical($event)\"/>\n  </div>\n  <div id=\"slider1_container\" style=\"position: relative; top: 0px; left: 0px; bottom:0px; right:0px; width: 809px; height: 456px; overflow: hidden; \">\n            <!-- Slides Container -->\n            <div u=\"slides\" style=\"cursor: move; position: absolute; left: 0px; top: 0px; width: 1024px; height: 456px; overflow: hidden;\">\n              \n               <div *ngFor=\"let slide of slideshow\" style=\"cursor: move; position: absolute; left: 0px; top: 0px; width: 809px; height: 150px;\n                            overflow: hidden;\">\n                    <div class=\"slidd_cont\">\n\n                        <!-- Slides Container -->\n                        <div u=\"slides\" style=\"cursor: move; position: absolute; left: 0px; top: 0px; width: 809px; height: 150px;\n                            overflow: hidden;\">\n\t\t\t\t\t\t\t<div *ngFor=\"let camera of slide.cameras\"class=\"image-container\">\n                                <app-camera-view [imageUpdate]=\"imageUpdate\" [camera]=\"camera\" class=\"camera_slide\"></app-camera-view>\n                            </div>\n                            \n                            </div>\n                        <!-- Bullet Navigator Skin Begin -->\n                        <!-- bullet navigator container -->\n                        <div u=\"navigator\" class=\"jssorb03\" style=\"position: absolute; bottom: 10px; right: 10px;\">\n                            <!-- bullet navigator item prototype -->\n                            <div u=\"prototype\" style=\"position: absolute; width: 21px; height: 21px; text-align:center; line-height:21px; color:white; font-size:12px;\"><NumberTemplate></NumberTemplate></div>\n                        </div>\n                        <!-- Bullet Navigator Skin End -->\n                    </div>\n                </div> \n                \n            \n\t\t\t</div>\n\n\n              \n        <!-- bullet navigator container -->\n        <div u=\"navigator\" class=\"jssorb02\" style=\"position: absolute; bottom: 8px; left: 6px;\">\n            <!-- bullet navigator item prototype -->\n            <div u=\"prototype\" style=\"POSITION: absolute; WIDTH: 21px; HEIGHT: 21px; text-align:center; line-height:21px; color:White; font-size:12px;\"><NumberTemplate></NumberTemplate></div>\n        </div>\n        <!-- Bullet Navigator Skin End -->\n            <a style=\"display: none\" href=\"http://www.jssor.com\">javascript</a>\n        </div>\n   </div>\n   <div class=\"full\" *ngIf=\"showByLocation()\">\n           <div class=\"slideshow-menu-timer\" >\n        H:<input id=\"slideshow-duration\"  min=\"0\" placeholder=\"Duration\" [(ngModel)]=\"slideshowTimerOwl\" type=\"number\"  (input)=\"inputChangedOwl($event)\"/>\n  </div>\n\n    <div class=\"slideshow-menus-wrapper\" *ngIf=\"activeView.slideshows.length>1\">\n             <a href=\"#\" *ngFor=\"let i of activeView.slideshows; \" [ngClass]=\"{'active': i==current_location }\" (click)=\"slideTo(i)\" >{{i.view_name}}</a>\n    </div>\n\n    <div id=\"owl_one_slide\" *ngIf=\"checkLocation()\"  class=\"owl-carousel owl-theme\">\n            <app-camera-view isOWL=\"true\" [imageUpdate]=\"imageUpdate\" *ngFor=\"let camera of current_location.cameras\" [camera]=\"camera\" class=\"camera_slide\"></app-camera-view>\n    </div>\n   </div>\n   \n   \n   \n   \n   \n   \n   \n   \n    \n"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"!isEmployeeStatsMode()\" class=\"setImageUpdate\">U:<input type=\"number\"  min=\"0\" [(ngModel)]=\"imageUpdate[unique_id]\" (input)=\"inputChangedImgUpdate($event)\"/></span>\n<div *ngIf=\"isSlideshow()\">\n <app-slideshow [activeCameras]=\"activeView.cameras\" [imageUpdate]=\"imageUpdate[unique_id]\"></app-slideshow>\n</div>\n<div *ngIf=\"isGrid()\">\n  <div class=\"grid{{activeView.cameras.length}} full\" *ngIf=\"!isTrackMode()\">\n    <app-camera-view [imageUpdate]=\"imageUpdate[unique_id]\" *ngFor=\"let i of activeView.cameras;let last= last\" [camera]=\"i\" class=\"{{activeView.view_type}} {{last?'last_one':''}}\" ></app-camera-view>\n  </div>\n    <div class=\"grid{{activeView.cameras.length}} full\" *ngIf=\"isTrackMode()\">\n    <app-tracking-camera  [imageUpdate]=\"imageUpdate[unique_id]\" *ngFor=\"let i of activeView.cameras;let last= last\" [camera]=\"i\" class=\"{{activeView.view_type}} {{last?'last_one':''}}\" ></app-tracking-camera>\n  </div>\n\n</div>\n\n<div *ngIf=\"isMultipleSlideshow()\">\n    <app-multiple-slideshow [imageUpdate]=\"imageUpdate[unique_id]*60\" *ngIf=\"!activeView.byLocation\" class=\"full\"  [slideshow]=\"activeView.slideshows\" ></app-multiple-slideshow>\n    <app-multiple-slideshow [imageUpdate]=\"imageUpdate[unique_id]\" *ngIf=\"activeView.byLocation\" class=\"full\"  [slideshow]=\"activeView.slideshows\" [activeView]=\"activeView\" ></app-multiple-slideshow>\n</div>\n\n<div *ngIf=\"isEmployeeStatsMode()\">\n    <app-employee-stats class=\"full\" [viewId]=\"activeView.view_id\" [stats]=\"activeView.stats\" ></app-employee-stats>\n </div>\n\n\n\n\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = " <div class=\"slideshow-wrapper full\">\n     <div class=\"slideshow-menus-wrapper\">\n             <a href=\"#\" *ngFor=\"let i of activeCameras; \" [ngClass]=\"{'active': i==activeCameraSlideshow }\" (click)=\"slideTo(i)\" >{{i.name}}</a>\n    </div>\n     <div class=\"cameras-wrapper full\">\n            <app-camera-view  [imageUpdate]=\"imageUpdate\" [camera]=\"activeCameraSlideshow\"></app-camera-view>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<div class=\"status-bar-wrapper\" [ngClass]=\"{'fullscreen': fullscreen }\">\n  <button *ngFor=\"let index of configuration\" (click)=\"changeView(index,this)\" [ngClass]=\"{'active':current_view==index}\" >\n      {{index.view_name}}\n  </button>\n    <div style=\"float:right\">\n        <button id=\"toggle_autoplay\" (click)=\"toggleAutoplay()\" >{{autoplay_btn_text}}</button>\n      <a id=\"close_btn\" [ngClass]=\"{'fullscreen': fullscreen }\"  (click)=\"toggleFullscreen()\" href=\"#\">\n                <span *ngIf=\"!fullscreen\">✖</span>\n\n      <svg *ngIf=\"fullscreen\" fill=\"#000000\" height=\"23\" viewBox=\"0 0 24 24\" width=\"23\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\" fill=\"#000000\"/>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n      </svg>\n\n      </a>\n    </div>\n</div>\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<div class=\"camera-view\">\n    <div id=\"labelH2\" #labelH>\n        Loading....\n    </div>\n    <div #mapcanvas2 id=\"mapa1\"style=\"height: 100%;width: 100%;\" class=\"map-canvas\"></div>\n    <div id=\"label2\" #label>\n        Loading....\n    </div>\n</div>"

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

/** 
* Get the ISO week date year number 
*/  
module.exports.getWeekYear = function getWeekYear()   
{  
  // Create a new date object for the thursday of this week  
  var target  = new Date(this.valueOf());  
  target.setDate(target.getDate() - ((this.getDay() + 6) % 7) + 3);  

  return target.getFullYear();  
}

/** 
 * Convert ISO week number and year into date (first day of week)
 */ 
module.exports.getStartFromISOWeek = function getStartFromISOWeek() {
  return new Date(this.getFullYear(),0,(this.getWeek()-1)*7)
}
module.exports.getEndFromISOWeek = function getEndFromISOWeek() {
  return new Date(this.getFullYear(),0,this.getWeek()*7)
}

module.exports.getWeek = function getWeek() {
// Create a copy of this date object  
  var target  = new Date(this.valueOf());  

  // ISO week date weeks start on monday  
  // so correct the day number  
  var dayNr   = (this.getDay() + 15) % 7;  

  // ISO 8601 states that week 1 is the week  
  // with the first thursday of that year.  
  // Set the target date to the thursday in the target week  
  target.setDate(target.getDate() - dayNr + 3);  

  // Store the millisecond value of the target date  
  var firstThursday = target.valueOf();  

  // Set the target to the first thursday of the year  
  // First set the target to january first  
  target.setMonth(0, 1);  
  // Not a thursday? Correct the date to the next thursday  
  if (target.getDay() != 4) {  
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);  
  }  

  // The weeknumber is the number of weeks between the   
  // first thursday of the year and the thursday in the target week  
  return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000                   - 3 + (week1.getDay() + 6) % 7) / 7);
}

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[648]);
//# sourceMappingURL=main.bundle.js.map