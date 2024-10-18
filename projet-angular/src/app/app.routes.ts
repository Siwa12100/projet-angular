import { Routes } from '@angular/router';
import { ListeJoueursComponent } from './composants/tests/liste-joueurs/liste-joueurs.component';
import { LoginComponent } from './composants/authentification/login/login.component';
import { SudokuComponent } from './composants/sudoku/sudoku.component';
import { PageRangsComponent } from './composants/pages/page-rangs/page-rangs.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './composants/pages/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: "joueurs", component: ListeJoueursComponent, canActivate: [AuthGuard]},
  {path: "sudoku", component: SudokuComponent, canActivate: [AuthGuard]},
  {path : "rangs", component : PageRangsComponent, canActivate: [AuthGuard]},
];
