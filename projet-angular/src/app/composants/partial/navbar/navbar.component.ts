import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarMenuComponent } from "./menu/menu.component";
import { LocalStorageService } from '../../../services/local-storage.service';
import { NavigationEnd, Router } from '@angular/router';
import { AuthentificationService } from '../../../services/authentification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarMenuComponent],
  templateUrl: './navbar.component.html', 
  styleUrl : './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  pseudo: string | null = null;
  private routerSubscription: Subscription | null = null;

  constructor(
    protected router: Router,
    protected authentificationService: AuthentificationService
  ) {
    this.pseudo = this.authentificationService.recupererPseudoJoueurConnecte();
  }

  ngOnInit(): void {
    this.pseudo = this.authentificationService.recupererPseudoJoueurConnecte();
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rafraichirComposant();
      }
    });
  }

  deconnexion(): void {
    this.authentificationService.logout();
    this.pseudo = null;
  }

  rafraichirComposant(): void {
    this.pseudo = this.authentificationService.recupererPseudoJoueurConnecte();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
