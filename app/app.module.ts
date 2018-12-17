import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app.routes";

// import{UniversityComponent} from './02-university/university.component'


import{ HomeComponent } from "./01-main/home.component";
import{ PlannedComponent } from "./03-planned/planned.component";
import {PastComponent} from './02-past/past.component';
import {PartnersComponent} from './04-partners/partners.component';
import {GalleryComponent} from './05-gallery/gallery.component';
import { KozakModule } from "./kozak/kozak.module";
import {SaharaModule} from "./sahara/sahara.module";
import { ContactComponent} from "./06-contact/contact.component";
import {PastModule} from "./02-past/past.module";

// import {HomeModule} from "./01-home/home.module"

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        KozakModule,SaharaModule, PastModule
        // HomeModule
            
    ],
    declarations: [AppComponent,HomeComponent,PastComponent,PlannedComponent,PartnersComponent,GalleryComponent, ContactComponent
 ],
    bootstrap: [AppComponent]
})
export class AppModule { }
