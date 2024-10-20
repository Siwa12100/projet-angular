import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joueur } from '../modeles/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  protected urlApi : string = "https://664ba07f35bbda10987d9f99.mockapi.io/api/users";

  constructor(protected httpClient: HttpClient) {}

  // Fonction qui récupère les joueurs de l'API et renvoi un observable sur ces mêmes joueurs
  public recupererJoueurs(): Observable<Joueur[]> {
    return this.httpClient.get<Joueur[]>(this.urlApi);
  }

  // Pareil mais pour le login des joueurs
  public recupererLogins(): Observable<string[]> {
    return this.recupererJoueurs().pipe(
      map(joueurs => joueurs.map(joueur => joueur.login))
    );
  }
}
