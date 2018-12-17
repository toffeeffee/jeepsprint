import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {programmKComponent} from "./programmK/programmK.component";
import {ReglamentKComponent} from "./ReglamentK/ReglamentK.component";
import {locationKComponent} from "./locationK/locationK.component";
import {galleryKComponent} from "./galleryK/galleryK.component";
import {partnersKComponent} from "./partnersK/partnersK.component";
@NgModule({
    imports: [CommonModule],
    declarations: [
        programmKComponent,ReglamentKComponent,locationKComponent,galleryKComponent,partnersKComponent
    ]
})
export class KozakModule {
}