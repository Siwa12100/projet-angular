import { Component, Input } from '@angular/core';
import { Joueur } from '../../../modeles/joueur';

@Component({
  selector: 'app-joueur',
  standalone: true,
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent {

  @Input() joueur!: Joueur;

}