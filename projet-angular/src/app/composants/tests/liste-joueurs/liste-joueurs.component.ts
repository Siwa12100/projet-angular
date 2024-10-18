import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../../../services/joueurs.service';
import { Joueur } from '../../../modeles/joueur';
import { AuthentificationService } from '../../../services/authentification.service';
import { JoueurComponent } from '../joueur/joueur.component';
import { NavbarComponent } from '../../partial/navbar/navbar.component';

@Component({
  selector: 'app-liste-joueurs',
  standalone: true,
  imports: [JoueurComponent],  // Ajout de l'import du composant Joueur
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css']
})
export class ListeJoueursComponent implements OnInit {

  protected joueurs: Joueur[] = [];

  constructor(
    protected joueursService: JoueursService,
    protected authService: AuthentificationService
  ) {}

  ngOnInit(): void {
    this.joueursService.recupererJoueurs().subscribe(data => {
      this.joueurs = data;
    });
  }
}
