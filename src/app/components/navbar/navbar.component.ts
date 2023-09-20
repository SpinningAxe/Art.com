import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface pageInfo{
  name: string;
  route?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() title!:string
  constructor(public route: Router) {  }
  
  pageList:pageInfo[] = [
    {name:"home",route:"/home"},
    {name:"about",route:"/about"},
    {name:"contact",route:"/contact"},
  ]

  navTo(page: pageInfo){
    if (page.route != null) {
      this.route.navigate([page.route]);
    }
  }
}
