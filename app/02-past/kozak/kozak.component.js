"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import {itemsK} from './itemsK';
var router_1 = require("@angular/router");
// const itemRu : itemsK[]=[{id:1, routLink: '/galleryK', menuItem:'Галерея'},
//                         {id:2, routLink: '/locationK', menuItem:'Локации',},
//                         {id:3, routLink: '/partnersK', menuItem:'Партреры'},
//                         {id:4, routLink: '/programmK', menuItem:'Программа'},
//                         {id:5, routLink: '/reglamentK', menuItem:'Регламент'},]
var KozakComponent = /** @class */ (function () {
    function KozakComponent(route) {
        var _this = this;
        this.route = route;
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    KozakComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "kozak",
            templateUrl: "kozak.component.html",
            styleUrls: ["kozak.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], KozakComponent);
    return KozakComponent;
}());
exports.KozakComponent = KozakComponent;
//# sourceMappingURL=kozak.component.js.map