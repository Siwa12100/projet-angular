import { Component } from '@angular/core';
import { SudokuService } from '../../services/suduko.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sudoku.component.html'
})
export class SudokuComponent {
    solutionGrid: number[][] = [];
    userGrid: number[][] = [];
    originalGrid: number[][] = [];
    cluesUsed: number = 0;

    constructor(protected sudokuService: SudokuService) {}

    ngOnInit(): void {
        this.sudokuService.getSudoku().subscribe((response: any) => {
            this.userGrid = response.data;
            this.originalGrid = response.data;
            this.solutionGrid = response.data;
            localStorage.setItem('sudoku', JSON.stringify(response));
        });
    }

    onCellInput(row: number, col: number, event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            const inputElement = event.target as HTMLInputElement;
            const value = inputElement.value;

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
        for (let i = 0; i < this.userGrid.length; i++) {
            for (let j = 0; j < this.userGrid[i].length; j++) {
                if (this.userGrid[i][j] !== this.solutionGrid[i][j]) {
                    this.userGrid[i][j] = 0;
                }
            }
        }
        if(!submit){
            this.cluesUsed += 1;
        }
    }

    submitGrid(): void {
        let isCorrect = true; // Flag pour vérifier si la grille est correcte

        for (let i = 0; i < this.userGrid.length; i++) {
            for (let j = 0; j < this.userGrid[i].length; j++) {
                if (this.userGrid[i][j] !== this.solutionGrid[i][j]) {
                    isCorrect = false;
                }
            }
        }

        if (isCorrect) {
            this.sudokuService.sendResult(this.cluesUsed);
            console.log('Grille validée avec succès !');
        } else {
            this.cluesUsed += 1;
            console.log('La grille contient des erreurs. Indices incrémentés.');
        }
    }
}
