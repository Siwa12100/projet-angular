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
    protected joueursService: JoueursService
  ) {}


  onInit() {
    if (!this.localStorage.getData('username')) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/']);
    }
  }

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
}
