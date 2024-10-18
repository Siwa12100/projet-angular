import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from "rxjs";
import { sudokuStub } from "../datas/sudoku.stub";

@Injectable({
    providedIn: 'root'
  })
  export class SudokuService {
  
    protected urlApi : string = "https://664ba07f35bbda10987d9f99.mockapi.io/api/sudoku/1";
    protected urlApiSudoku : string = "https://664ba07f35bbda10987d9f99.mockapi.io/api/game"
  
    constructor(protected httpClient: HttpClient) {}
  
    getSudoku() {
        return this.httpClient.get(this.urlApi).pipe(
          catchError(error => {
            console.error('API indisponible, utilisation de la partie par défaut', error);
            return of(this.defaultSudoku());
          })
        );
      }
    
    defaultSudoku() {
        return {
            "data": [ sudokuStub.data ],
            "easy": [ sudokuStub.easy ],
            "medium": [ sudokuStub.medium ],
            "hard": [ sudokuStub.hard ]
        };
    }

    sendResult(clues: number){
        const data = {
            date: new Date(), 
            playerName: localStorage.getItem('username'),
            clues: clues
        };
        return this.httpClient.post(this.urlApiSudoku, data).subscribe();
    }
  }
  