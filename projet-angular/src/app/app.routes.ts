import { Routes } from '@angular/router';
import { ListeJoueursComponent } from './composants/tests/liste-joueurs/liste-joueurs.component';
import { LoginComponent } from './composants/authentification/login/login.component';
import { SudokuComponent } from './composants/sudoku/sudoku.component';
import { PageRangsComponent } from './composants/pages/page-rangs/page-rangs.component';

export const routes: Routes = [
  { path: '', component: ListeJoueursComponent },
  { path: 'login', component: LoginComponent },
  {path: "joueurs", component: ListeJoueursComponent},
  {path: "sudoku", component: SudokuComponent},
  {path : "rangs", component : PageRangsComponent}
];
