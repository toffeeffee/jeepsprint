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
var programmS_component_1 = require("./programmS/programmS.component");
var ReglamentS_component_1 = require("./ReglamentS/ReglamentS.component");
var locationS_component_1 = require("./locationS/locationS.component");
var galleryS_component_1 = require("./galleryS/galleryS.component");
var partnersS_component_1 = require("./partnersS/partnersS.component");
var SaharaModule = /** @class */ (function () {
    function SaharaModule() {
    }
    SaharaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                programmS_component_1.programmSComponent, ReglamentS_component_1.ReglamentSComponent, locationS_component_1.locationSComponent, galleryS_component_1.gallerySComponent, partnersS_component_1.partnersSComponent
            ]
        })
    ], SaharaModule);
    return SaharaModule;
}());
exports.SaharaModule = SaharaModule;
//# sourceMappingURL=sahara.module.js.map