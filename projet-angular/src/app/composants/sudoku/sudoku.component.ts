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
    solutionGrid: number[][] = [];
    userGrid: number[][] = [];
    originalGrid: number[][] = [];
    cluesUsed: number = 0;
    displayedColumns : String[] = [];
    isDisplayed : boolean = true;

    constructor(protected sudokuService: SudokuService) {}

    ngOnInit(): void {
        this.displayedColumns = this.userGrid.map((_, index) => `col${index}`);
        if(localStorage.getItem('sudoku_key') != "true"){
            localStorage.setItem('sudoku_key', 'false')
            this.isDisplayed = true;
            this.sudokuService.getSudoku().subscribe((response: any) => {
                this.userGrid = response.easy;
                this.originalGrid = response.easy;
                this.solutionGrid = response.data;
                localStorage.setItem('sudoku', JSON.stringify(response));
            });
        }
        else{
            alert('You have already completed this sudoku!');
            this.isDisplayed = false;
        }
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
            localStorage.setItem('sudoku_key', "true");
            console.log('Grille validée avec succès !');
        } else {
            this.checkGrid();
            console.log('La grille contient des erreurs. Indices incrémentés.');
        }
    }

    replay(){
        localStorage.setItem('sudoku_key', 'false')
        window.location.reload();
        this.isDisplayed = true;
    }
}
