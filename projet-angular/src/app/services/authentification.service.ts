import { Injectable } from '@angular/core';
import { RedirectCommand, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { JoueursService } from './joueurs.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(protected router: Router, protected localStorage : LocalStorageService, protected joueursService : JoueursService) { }

  onInit(){
    if(!this.localStorage.getData('username')){
        this.router.navigate(['/login'])
    }
    else{
        this.router.navigate(['/'])
    }
  }

  login(login : string, password: string) : boolean {
    console.log(login)
    // if (this.verifyIntegrityOfPlayer(login)){
      if(login == password){
        this.localStorage.saveData('username', login);
        this.router.navigate(['/'])
        return true;
      }
      return false;
    // }
    return false;
  }

  // Verification login par l'API des joueurs
  verifyIntegrityOfPlayer(login : string) : boolean {
    const logins = this.joueursService.recupererLogins();
    console.log(logins[0]);
    for (let e of logins){
      console.log(e === login)
    }
    console.log("Wallah");
    return logins.some(e => e.trim().toLowerCase() === login.trim().toLowerCase());
  }
}
