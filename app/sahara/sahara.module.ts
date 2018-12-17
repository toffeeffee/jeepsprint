import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {programmSComponent} from "./programmS/programmS.component";
import {ReglamentSComponent} from "./ReglamentS/ReglamentS.component";
import {locationSComponent} from "./locationS/locationS.component";
import {gallerySComponent} from "./galleryS/galleryS.component";
import {partnersSComponent} from "./partnersS/partnersS.component";
@NgModule({
    imports: [CommonModule],
    declarations: [
        programmSComponent,ReglamentSComponent,locationSComponent,gallerySComponent,partnersSComponent
    ]
})
export class SaharaModule {
}