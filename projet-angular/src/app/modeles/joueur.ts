import { Streak } from './streak';

export interface Joueur {
  login: string;
  streak: string;
  points: string;
  streaks: Streak[];
  id: string;
}
