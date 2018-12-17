import { Component } from "@angular/core";
// import {itemsK} from './itemsK';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

// const itemRu : itemsK[]=[{id:1, routLink: '/galleryK', menuItem:'Галерея'},
//                         {id:2, routLink: '/locationK', menuItem:'Локации',},
//                         {id:3, routLink: '/partnersK', menuItem:'Партреры'},
//                         {id:4, routLink: '/programmK', menuItem:'Программа'},
//                         {id:5, routLink: '/reglamentK', menuItem:'Регламент'},]

@Component({
    moduleId: module.id,
    selector: "kozak",
    templateUrl: "kozak.component.html",
    styleUrls: ["kozak.component.css"]
})
export class KozakComponent {
    // menuSite: itemsK[] = itemRu;
    private id: number;
    private routeSubscription: Subscription;
     
    constructor(private route: ActivatedRoute){
         
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
    }

}

