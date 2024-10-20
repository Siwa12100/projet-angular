import { Component, OnInit } from "@angular/core";
import { JoueurComponent } from "../../tests/joueur/joueur.component";
import { JoueursService } from "../../../services/joueurs.service";
import { AuthentificationService } from "../../../services/authentification.service";
import { Joueur } from "../../../modeles/joueur";
import { DatePipe } from "@angular/common";

@Component({
    selector: 'home-component',
    standalone: true,
    imports: [JoueurComponent, DatePipe],  
    templateUrl: './home.component.html',
    styleUrl : './home.component.css'
  })
  export class HomeComponent implements OnInit {
    protected currentDate : Date = new Date()
    protected joueur!: Joueur;
  
    constructor(
      protected joueursService: JoueursService,
      protected authService: AuthentificationService
    ) {
    }
  
    ngOnInit(): void {
        this.joueursService.recupererJoueurs().subscribe(data => {
            console.log(data)
            for( let joueur of data){
                if(joueur.login == localStorage.getItem('username'))
                    this.joueur = joueur;
            }
          });
    }
  }