import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {SaharaComponent} from "./sahara/sahara.component";
import {KozakComponent} from "./kozak/kozak.component";
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        SaharaComponent, KozakComponent
        ]
})
export class PastModule {
}