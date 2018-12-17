import { Component } from "@angular/core";
import {items} from "./items";
import { RouterLinkActive, RouterLink } from "@angular/router";

const itemRu : items[]=[{id:1, routLink: '/01-main', menuItem:'Головна'},
                        {id:2, routLink: '/02-past', menuItem:'Єтапи', subItem: [
                            {routLink: "/02-past/kozak", menuItem:'Козак спринт'},
                            {routLink: "/02-past/sahara", menuItem:'Сахара по-кивски'}, ]},
                        {id:3, routLink: '/03-planned', menuItem:'Календар'},
                        {id:4, routLink: '/04-partners', menuItem:'Партнери'},
                        {id:5, routLink: '/05-gallery', menuItem:'Галерея'},
                        {id:6, routLink: '/06-contact', menuItem:'Контакти'},

                        {id:7, routLink: "/02-kozak/kozak", menuItem:'Kozak', subItem: [
                            {routLink: "/ReglamentK", menuItem:'Регламент'},
                            {routLink: "/locationK", menuItem:'Локації'},
                            {routLink: "/programmK", menuItem:'Програма'},
                            {routLink: "/galleryK", menuItem:'Галерея'},
                            {routLink: "/partnersK", menuItem:'Партнери'},
                            ]},
                        {id:7, routLink: "/02-past/sahara", menuItem:'Sahara', subItem: [
                            {routLink: "/ReglamentS", menuItem:'Регламент'},
                            {routLink: "/locationS", menuItem:'Локації'},
                            {routLink: "/programmS", menuItem:'Програма'},
                            {routLink: "/galleryS", menuItem:'Галерея'},
                            {routLink: "/partnersS", menuItem:'Партнери'},
                            ]},

                        ];



@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.black.css"]
})
 export class AppComponent {
    menuSite: items[] = itemRu;

    className: string="subgridEn";
    currentClasses: string = "invisiblemenu";
    otherClasses: string ='visiblemenu';

    isAccentBorder: boolean = true;
    isErrorText: boolean = true;
    isHighlighted: boolean = false;



    over(i) {
        // const ii:number=this.autorTable.indexOf(item);
        console.log(i);
        if (i==2){
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
    }        



}
