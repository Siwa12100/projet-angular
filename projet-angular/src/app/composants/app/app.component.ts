import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeJoueursComponent } from "../liste-joueurs/liste-joueurs.component";
import { TestsCmptComponent } from "../tests-cmpt/tests-cmpt.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeJoueursComponent, TestsCmptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-angular';
}
