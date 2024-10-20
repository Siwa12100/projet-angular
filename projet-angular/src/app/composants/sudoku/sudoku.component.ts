import { Component } from '@angular/core';
import { SudokuService } from '../../services/suduko.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './sudoku.component.html',
    styleUrl: './sudoku.component.css'
})
export class SudokuComponent {
    // Variables pour effectuer le Sudoku
    solutionGrid: number[][] = [];
    userGrid: number[][] = [];
    originalGrid: number[][] = [];
    cluesUsed: number = 0;

    // Variables pour savoir combien de colonnes seront affichés dans le Sudoku
    displayedColumns : String[] = [];

    // Variable pour savoir si le Sudoku est affiché ou non
    isDisplayed : boolean = false;

    // Variable pour savoir si les boutons du choix de la difficulté sont affichés ou non
    chooseDifficulty : boolean = true;

    constructor(protected sudokuService: SudokuService) {}

    showGrid(difficulty : any ){
        this.chooseDifficulty = false;
        this.displayedColumns = this.userGrid.map((_, index) => `col${index}`);
        // Check si le Sudoku a déjà été complété ou non
        if(localStorage.getItem('sudoku_key') != "true"){
            localStorage.setItem('sudoku_key', 'false')
            this.isDisplayed = true;
            // Récupère le sudoku depuis l'API si il existe pas dans le local storage
            if(localStorage.getItem('sudoku') == null){
                this.sudokuService.getSudoku().subscribe((response: any) => {
                    this.userGrid = response[difficulty];
                    this.originalGrid = response[difficulty];
                    this.solutionGrid = response[difficulty];
                    localStorage.setItem('sudoku', JSON.stringify(response));
                });
            }
            // Sinon récupère depuis le local storage
            else{
                const data = JSON.parse(localStorage.getItem('sudoku')!);
                this.userGrid = data![difficulty];
                this.originalGrid = data![difficulty];
                this.solutionGrid = data!.data;
            }
        }
        else{
            alert('You have already completed this sudoku!');
            this.isDisplayed = false;
        }
    }

    onCellInput(row: number, col: number, event: KeyboardEvent): void {
        // À chaque appuie sur la touche entrée
        if (event.key === 'Enter') {
            const inputElement = event.target as HTMLInputElement;
            const value = inputElement.value;

            //Vérification de la valeur entrée si vide, un caractère ou un nombre supérieur à 10, ça passe pas
            if (value.trim() !== '') {
                const parsedValue = parseInt(value, 10);
                if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 9) {
                    this.userGrid[row][col] = parsedValue;
                } else {
                    console.error('La valeur entrée doit être un nombre valide entre 1 et 9');
                }
            } else {
                this.userGrid[row][col] = 0;
            }
        }
    }

    checkGrid(submit : boolean = false): void {
        // Test de la validité du Sudoku
        for (let i = 0; i < this.userGrid.length; i++) {
            for (let j = 0; j < this.userGrid[i].length; j++) {
                if (this.userGrid[i][j] !== this.solutionGrid[i][j]) {
                    this.userGrid[i][j] = 0;
                }
            }
        }
        // Incrémentation du l'indice de vérification
        if(!submit){
            this.cluesUsed += 1;
        }
    }

    submitGrid(): void {
        // Flag si grille correcte
        let isCorrect = true; 

        // Test de la validité du Sudoku
        for (let i = 0; i < this.userGrid.length; i++) {
            for (let j = 0; j < this.userGrid[i].length; j++) {
                if (this.userGrid[i][j] !== this.solutionGrid[i][j]) {
                    isCorrect = false;
                }
            }
        }

        // Si c'est correcte, alors on envoi le résultat grâce au service
        if (isCorrect) {
            this.sudokuService.sendResult(this.cluesUsed);
            localStorage.setItem('sudoku_key', "true");
        } 
        // Sinon, on lance la fonction checkGrid() qui va incrémenter le score de vérification
        else {
            this.checkGrid();
        }
    }

    // Fonction pour rejouer la partie
    replay(){
        localStorage.setItem('sudoku_key', 'false')
        this.chooseDifficulty = false;
        window.location.reload();
    }
}
