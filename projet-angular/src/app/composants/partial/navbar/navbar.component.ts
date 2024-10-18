import { Component } from '@angular/core';
import { NavbarMenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [NavbarMenuComponent],
    templateUrl: './navbar.component.html', 
    styleUrl : './navbar.component.css'
  })
  export class NavbarComponent{
    constructor() {}
  }