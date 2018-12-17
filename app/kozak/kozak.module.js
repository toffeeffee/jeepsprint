"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var programmK_component_1 = require("./programmK/programmK.component");
var ReglamentK_component_1 = require("./ReglamentK/ReglamentK.component");
var locationK_component_1 = require("./locationK/locationK.component");
var galleryK_component_1 = require("./galleryK/galleryK.component");
var partnersK_component_1 = require("./partnersK/partnersK.component");
var KozakModule = /** @class */ (function () {
    function KozakModule() {
    }
    KozakModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                programmK_component_1.programmKComponent, ReglamentK_component_1.ReglamentKComponent, locationK_component_1.locationKComponent, galleryK_component_1.galleryKComponent, partnersK_component_1.partnersKComponent
            ]
        })
    ], KozakModule);
    return KozakModule;
}());
exports.KozakModule = KozakModule;
//# sourceMappingURL=kozak.module.js.map