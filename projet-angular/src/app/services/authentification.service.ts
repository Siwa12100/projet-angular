import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { JoueursService } from './joueurs.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    protected router: Router,
    protected localStorage: LocalStorageService,
    protected joueursService: JoueursService,
  ) {}

  // Fonction de login qui check dans l'API si le nom d'utilisateur est bien dans la liste fourni, 
  // ainsi que vérifie la même entrée pour le mot de passe et le nom d'utilisateur pour qu'il puisse se connecter
  login(login: string, password: string): boolean {
    if (login !== password) {
      console.log("mdp et login different....");
      return false;
    }

    this.joueursService.recupererLogins().subscribe(loginsExistants => {
      const loginExiste = loginsExistants.includes(login); 
      if (!loginExiste) {
        console.log("le login existe pas....");
        return false;
      }

      this.localStorage.saveData('username', login);
      this.router.navigate(['/']);
      
      return true;
    });

    return true;
  }

  // Fonction de déconnexion
  logout() : void {
    this.localStorage.removeData('username');
    this.router.navigate(['/login']);
  }

  // Fonction qui permet de récupérer le nom d'utilisateur dans le localStorage
  recupererPseudoJoueurConnecte() : string | null {
    return this.localStorage.getData("username");
  }
}
