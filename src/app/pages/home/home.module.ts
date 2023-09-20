import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { YearNavbarComponent } from './year-navbar/year-navbar.component';
import { PictureDispplayComponent } from './picture-dispplay/picture-dispplay.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    YearNavbarComponent,
    HomeComponent,
    PictureDispplayComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}




