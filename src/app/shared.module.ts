import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class SharedModule {}