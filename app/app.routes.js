"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import{AboutUniversityRoutingModule} from '@angular/router';
var home_component_1 = require("./01-main/home.component");
var past_component_1 = require("./02-past/past.component");
var planned_component_1 = require("./03-planned/planned.component");
var partners_component_1 = require("./04-partners/partners.component");
var gallery_component_1 = require("./05-gallery/gallery.component");
// import {garantiiComponent,programmComponent,historyComponent,napravleniyaComponent,
//     proizvoditeliComponent,resursesComponent,sertificatesComponent} from './01-main/index'; 
var index_1 = require("./kozak/index");
var index_2 = require("./sahara/index");
var contact_component_1 = require("./06-contact/contact.component");
var index_3 = require("./02-past/index");
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot([
                    // export const routes: Routes = [
                    {
                        path: "",
                        redirectTo: "01-main",
                        pathMatch: "full"
                    },
                    { path: "01-main", component: home_component_1.HomeComponent, },
                    { path: '02-past', component: past_component_1.PastComponent },
                    { path: '03-planned', component: planned_component_1.PlannedComponent },
                    { path: '04-partners', component: partners_component_1.PartnersComponent },
                    { path: '05-gallery', component: gallery_component_1.GalleryComponent },
                    { path: "06-contact", component: contact_component_1.ContactComponent, },
                    // { path: 'garantii', component: garantiiComponent,},
                    // { path: "history", component: historyComponent,}, 
                    // { path: "napravleniya", component: napravleniyaComponent,}, 
                    // { path: "programm", component: programmComponent,}, 
                    // { path: "proizvoditeli", component: proizvoditeliComponent,}, 
                    // { path: "resurses", component: resursesComponent,}, 
                    // { path: "sertificates", component: sertificatesComponent,}, 
                    { path: "programmK", component: index_1.programmKComponent, },
                    { path: "ReglamentK", component: index_1.ReglamentKComponent, },
                    { path: "locationK", component: index_1.locationKComponent, },
                    { path: "galleryK", component: index_1.galleryKComponent, },
                    { path: "partnersK", component: index_1.partnersKComponent, },
                    { path: "programmS", component: index_2.programmSComponent, },
                    { path: "ReglamentS", component: index_2.ReglamentSComponent, },
                    { path: "locationS", component: index_2.locationSComponent, },
                    { path: "galleryS", component: index_2.gallerySComponent, },
                    { path: "partnersS", component: index_2.partnersSComponent, },
                    // { path: "09-komplektujschie", component: KozakComponent,}, 
                    { path: "02-past/kozak", component: index_3.KozakComponent, },
                    { path: "02-past/sahara", component: index_3.SaharaComponent, },
                ])],
            exports: [router_1.RouterModule] // делаем re-export модуля для использования директив при маршрутизации
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routes.js.map