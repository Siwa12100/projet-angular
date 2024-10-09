import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { joueur } from '../modeles/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  protected joueurs : Observable<joueur[]>;
  protected urlApi : string = "https://664ba07f35bbda10987d9f99.mockapi.io/api/users";

  constructor(protected httpClient : HttpClient) {

    this.joueurs = this.httpClient.get<joueur[]>(this.urlApi);
  }

  public recupererJoueurs() : Observable<joueur[]> {
    return this.joueurs;
  }

  public recupererLogins() : string[] {

    const logins : string[] = [];
    this.joueurs.subscribe(data => {

      data.forEach(joueur => {
        logins.push(joueur.login);
      })
    });

    return logins;
  }
}
