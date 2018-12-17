"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
// import{UniversityComponent} from './02-university/university.component'
var home_component_1 = require("./01-main/home.component");
var planned_component_1 = require("./03-planned/planned.component");
var past_component_1 = require("./02-past/past.component");
var partners_component_1 = require("./04-partners/partners.component");
var gallery_component_1 = require("./05-gallery/gallery.component");
var kozak_module_1 = require("./kozak/kozak.module");
var sahara_module_1 = require("./sahara/sahara.module");
var contact_component_1 = require("./06-contact/contact.component");
var past_module_1 = require("./02-past/past.module");
// import {HomeModule} from "./01-home/home.module"
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.AppRoutingModule,
                router_1.RouterModule,
                kozak_module_1.KozakModule, sahara_module_1.SaharaModule, past_module_1.PastModule
                // HomeModule
            ],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, past_component_1.PastComponent, planned_component_1.PlannedComponent, partners_component_1.PartnersComponent, gallery_component_1.GalleryComponent, contact_component_1.ContactComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map