import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../../services/joueurs.service';
import { Observable } from 'rxjs';
import { joueur } from '../../modeles/joueur';

@Component({
  selector: 'app-liste-joueurs',
  standalone: true,
  imports: [],
  templateUrl: './liste-joueurs.component.html',
  styleUrl: './liste-joueurs.component.css'
})
export class ListeJoueursComponent implements OnInit {

  protected joueurs : joueur[] = [];

  constructor(protected joueursService : JoueursService) {}

  ngOnInit() : void {

    this.joueursService.recupererJoueurs().subscribe(data => {
      this.joueurs = data;
    });

    console.log(this.joueursService.recupererLogins())
  }
}
