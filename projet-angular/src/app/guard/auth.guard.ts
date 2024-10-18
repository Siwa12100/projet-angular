import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const username = localStorage.getItem('username');
    
    if (username) {
      // Si le 'username' est trouvé dans le localStorage, autoriser l'accès
      return true;
    } else {
      // Sinon, rediriger vers la page de login (ou autre page)
      this.router.navigate(['/login']); // Remplace '/login' par la route souhaitée
      return false;
    }
  }
}
