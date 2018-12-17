import { Component } from "@angular/core";
import {calendar} from './calendar';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

const itemCalendar : calendar[]=[
    {id:1, data:'21.12.2018', disc: 'event', event: 'Нагородження переможців', place : 'Київ'},
    {id:2, data:'14.10.2018', disc: 'Джип-спринт', event: 'Козак-спринт', place : 'Бородянка'},
    {id:3, data:'11.03.2018', disc: 'Джип-спринт', event: 'Сахара', place : 'Київ'},];

@Component({
    moduleId: module.id,
    selector: "planned",
    templateUrl: "planned.component.html",
    styleUrls: ["planned.component.css"]

})

export class PlannedComponent{
    planned: calendar[] = itemCalendar;

}