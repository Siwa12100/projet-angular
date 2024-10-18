import { Component, OnInit } from '@angular/core';
import { TableauRangSerieComponent } from '../../tableau-rang/tableau-rang.component';
import { JoueursService } from '../../../services/joueurs.service';

@Component({
  selector: 'app-page-rangs',
  standalone: true,
  imports: [TableauRangSerieComponent],
  templateUrl: './page-rangs.component.html',
  styleUrls: ['./page-rangs.component.css']
})
export class PageRangsComponent implements OnInit {

  joueursDictionnaire: { [pseudo: string]: number } = {};

  constructor(private joueursService: JoueursService) {}

  ngOnInit(): void {
    this.joueursService.recupererJoueurs().subscribe(joueurs => {

        this.joueursDictionnaire = joueurs.reduce((paire, joueur) => {
        paire[joueur.login] = parseInt(joueur.streak);
        return paire;
      }, {} as { [pseudo: string]: number });
    });
  }
}

