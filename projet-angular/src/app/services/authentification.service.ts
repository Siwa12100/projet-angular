import { Injectable } from '@angular/core';
import { RedirectCommand, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(protected router: Router, protected localStorage : LocalStorageService) { }

  onInit(){
    if(!this.localStorage.getData('username')){
        this.router.navigate(['/login'])
    }
    else{
        this.router.navigate(['/'])
    }
  }

  login(login : string, password: string) : boolean {
    if(login == password){
        this.localStorage.saveData('username', login);
        this.router.navigate(['/'])
        return true;
    }
    return false;
  }
}
