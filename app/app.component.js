"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var itemRu = [{ id: 1, routLink: '/01-main', menuItem: 'Головна' },
    { id: 2, routLink: '/02-past', menuItem: 'Єтапи', subItem: [
            { routLink: "/02-past/kozak", menuItem: 'Козак спринт' },
            { routLink: "/02-past/sahara", menuItem: 'Сахара по-кивски' },
        ] },
    { id: 3, routLink: '/03-planned', menuItem: 'Календар' },
    { id: 4, routLink: '/04-partners', menuItem: 'Партнери' },
    { id: 5, routLink: '/05-gallery', menuItem: 'Галерея' },
    { id: 6, routLink: '/06-contact', menuItem: 'Контакти' },
    { id: 7, routLink: "/02-kozak/kozak", menuItem: 'Kozak', subItem: [
            { routLink: "/ReglamentK", menuItem: 'Регламент' },
            { routLink: "/locationK", menuItem: 'Локації' },
            { routLink: "/programmK", menuItem: 'Програма' },
            { routLink: "/galleryK", menuItem: 'Галерея' },
            { routLink: "/partnersK", menuItem: 'Партнери' },
        ] },
    { id: 7, routLink: "/02-past/sahara", menuItem: 'Sahara', subItem: [
            { routLink: "/ReglamentS", menuItem: 'Регламент' },
            { routLink: "/locationS", menuItem: 'Локації' },
            { routLink: "/programmS", menuItem: 'Програма' },
            { routLink: "/galleryS", menuItem: 'Галерея' },
            { routLink: "/partnersS", menuItem: 'Партнери' },
        ] },
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.menuSite = itemRu;
        this.className = "subgridEn";
        this.currentClasses = "invisiblemenu";
        this.otherClasses = 'visiblemenu';
        this.isAccentBorder = true;
        this.isErrorText = true;
        this.isHighlighted = false;
    }
    AppComponent.prototype.over = function (i) {
        // const ii:number=this.autorTable.indexOf(item);
        console.log(i);
        if (i == 2) {
            if (this.currentClasses == "invisiblemenu") {
                this.currentClasses = this.otherClasses;
            }
            // if (this.currentClasses = "accent-border") {
            //     this.currentClasses = this.allClasses;
            // }
            else {
                this.currentClasses = "invisiblemenu";
            }
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-app",
            templateUrl: "app.component.html",
            styleUrls: ["app.component.black.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map