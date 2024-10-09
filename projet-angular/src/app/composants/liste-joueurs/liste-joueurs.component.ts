import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../../services/joueurs.service';
import { Observable } from 'rxjs';
import { joueur } from '../../modeles/joueur';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-liste-joueurs',
  standalone: true,
  imports: [],
  templateUrl: './liste-joueurs.component.html',
  styleUrl: './liste-joueurs.component.css'
})
export class ListeJoueursComponent implements OnInit {

  protected joueurs : joueur[] = [];

  constructor(protected joueursService : JoueursService, protected authService : AuthentificationService) {}


  ngOnInit() : void {
    this.authService.onInit()

    this.joueursService.recupererJoueurs().subscribe(data => {
      this.joueurs.push(data);
    });
  }
}
