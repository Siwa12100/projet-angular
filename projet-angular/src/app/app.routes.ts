import { Routes } from '@angular/router';
import { ListeJoueursComponent } from './composants/liste-joueurs/liste-joueurs.component';
import { LoginComponent } from './composants/authentification/login/login.component';

export const routes: Routes = [
  { path: '', component: ListeJoueursComponent },
  { path: 'login', component: LoginComponent },
];
