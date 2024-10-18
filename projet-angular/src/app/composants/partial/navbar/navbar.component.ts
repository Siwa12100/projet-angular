import { Component } from '@angular/core';
import { NavbarMenuComponent } from "./menu/menu.component";
import { LocalStorageService } from '../../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [NavbarMenuComponent],
    templateUrl: './navbar.component.html'
  })
  export class NavbarComponent{
    pseudo : string | null;

    constructor(protected localstorage : LocalStorageService, protected router : Router) {
      this.pseudo = localStorage.getItem('username');
    }

    logout(){
      this.localstorage.removeData('username');
      this.router.navigate(['/login']);
    }
  }