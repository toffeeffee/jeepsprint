import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
// import{AboutUniversityRoutingModule} from '@angular/router';
import {HomeComponent} from './01-main/home.component';
import {PastComponent} from './02-past/past.component';
import {PlannedComponent} from './03-planned/planned.component';
import {PartnersComponent} from './04-partners/partners.component';
import {GalleryComponent} from './05-gallery/gallery.component';
// import {garantiiComponent,programmComponent,historyComponent,napravleniyaComponent,
//     proizvoditeliComponent,resursesComponent,sertificatesComponent} from './01-main/index'; 
import {programmKComponent,ReglamentKComponent,locationKComponent,galleryKComponent,partnersKComponent} from './kozak/index';
import {programmSComponent,ReglamentSComponent,locationSComponent,gallerySComponent,partnersSComponent} from './sahara/index';

import {ContactComponent} from './06-contact/contact.component';
import {SaharaComponent, KozakComponent} from './02-past/index';

@NgModule({
    imports: [RouterModule.forRoot([
// export const routes: Routes = [
     {
        path: "",
        redirectTo: "01-main",
        pathMatch: "full"
    },
    { path: "01-main", component: HomeComponent,},
    {path: '02-past', component: PastComponent }, 
    { path: '03-planned', component: PlannedComponent},
    { path: '04-partners', component: PartnersComponent },
    { path: '05-gallery', component: GalleryComponent},
    { path: "06-contact", component: ContactComponent,}, 

    // { path: 'garantii', component: garantiiComponent,},
    // { path: "history", component: historyComponent,}, 
    // { path: "napravleniya", component: napravleniyaComponent,}, 
    // { path: "programm", component: programmComponent,}, 
    // { path: "proizvoditeli", component: proizvoditeliComponent,}, 
    // { path: "resurses", component: resursesComponent,}, 
    // { path: "sertificates", component: sertificatesComponent,}, 
    { path: "programmK", component: programmKComponent,}, 
    { path: "ReglamentK", component: ReglamentKComponent,}, 
    { path: "locationK", component: locationKComponent,}, 
    { path: "galleryK", component: galleryKComponent,}, 
    { path: "partnersK", component: partnersKComponent,}, 
    { path: "programmS", component: programmSComponent,}, 
    { path: "ReglamentS", component: ReglamentSComponent,}, 
    { path: "locationS", component: locationSComponent,}, 
    { path: "galleryS", component: gallerySComponent,}, 
    { path: "partnersS", component: partnersSComponent,}, 

    // { path: "09-komplektujschie", component: KozakComponent,}, 
    { path: "02-past/kozak", component: KozakComponent,}, 
    { path: "02-past/sahara", component: SaharaComponent,}, 



// ];
])],
exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule { }