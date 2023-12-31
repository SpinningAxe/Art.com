import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports:[
        CommonModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class SharedModule {}