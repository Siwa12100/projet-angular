import { Component, } from '@angular/core';
import { AuthentificationService } from '../../../../services/authentification.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './menu.component.html',
  styleUrl : './menu.component.css'
})
export class NavbarMenuComponent {
  constructor(protected authService : AuthentificationService
        ) {}
}
