import { Component, OnInit } from '@angular/core';
import { NavbarMenuComponent } from "./menu/menu.component";
import { LocalStorageService } from '../../../services/local-storage.service';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../services/authentification.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [NavbarMenuComponent],
    templateUrl: './navbar.component.html', 
    styleUrl : './navbar.component.css'
  })
  export class NavbarComponent implements OnInit {
    pseudo : string | null;

    constructor(
      protected router : Router,
      protected authentificationService : AuthentificationService) {

      this.pseudo = this.authentificationService.recupererPseudoJoueurConnecte();
    }

    ngOnInit(): void {
        this.pseudo = this.authentificationService.recupererPseudoJoueurConnecte();
    }

    deconnexion() : void {
      this.authentificationService.logout();
      this.pseudo = null;
    }
    
  }