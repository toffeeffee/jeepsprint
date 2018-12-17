"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var itemCalendar = [
    { id: 1, data: '21.12.2018', disc: 'event', event: 'Нагородження переможців', place: 'Київ' },
    { id: 2, data: '14.10.2018', disc: 'Джип-спринт', event: 'Козак-спринт', place: 'Бородянка' },
    { id: 3, data: '11.03.2018', disc: 'Джип-спринт', event: 'Сахара', place: 'Київ' },
];
var PlannedComponent = /** @class */ (function () {
    function PlannedComponent() {
        this.planned = itemCalendar;
    }
    PlannedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "planned",
            templateUrl: "planned.component.html",
            styleUrls: ["planned.component.css"]
        })
    ], PlannedComponent);
    return PlannedComponent;
}());
exports.PlannedComponent = PlannedComponent;
//# sourceMappingURL=planned.component.js.map