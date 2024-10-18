import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../../../services/joueurs.service';
import { TableauRangSerieComponent } from '../../tableau-rang/tableau-rang.component';

@Component({
  selector: 'app-page-rangs',
  standalone: true,
  imports: [TableauRangSerieComponent],
  templateUrl: './page-rangs.component.html',
  styleUrls: ['./page-rangs.component.css']
})
export class PageRangsComponent implements OnInit {

  joueursSerieDictionnaire: { [pseudo: string]: number } = {};
  joueursPointsDictionnaire: { [pseudo: string]: number } = {};

  constructor(private joueursService: JoueursService) {}

  ngOnInit(): void {
    this.joueursService.recupererJoueurs().subscribe(joueurs => {

      this.joueursSerieDictionnaire = joueurs.reduce((paire, joueur) => {
        paire[joueur.login] = parseInt(joueur.streak, 10);
        return paire;
      }, {} as { [pseudo: string]: number });

      this.joueursPointsDictionnaire = joueurs.reduce((paire, joueur) => {
        paire[joueur.login] = parseInt(joueur.points, 10);
        return paire;
      }, {} as { [pseudo: string]: number });

    });
  }
}
