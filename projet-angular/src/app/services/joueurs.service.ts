import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { joueur } from '../modeles/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  protected urlApi : string = "https://664ba07f35bbda10987d9f99.mockapi.io/api/users";

  constructor(protected httpClient : HttpClient) {}

  public recupererJoueurs() : Observable<joueur[]> {
    return this.httpClient.get<joueur[]>(this.urlApi); 
  }
}
