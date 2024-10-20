import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  // Composent qui permet la redirection de l'utilisateur si celui-ci n'est pas connecté
  canActivate(): boolean {
    const username = localStorage.getItem('username');

    // Si le 'username' est trouvé dans le localStorage, autoriser l'accès
    if (username) {
      return true;
    } 
    // Sinon, rediriger vers la page de login
    else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
