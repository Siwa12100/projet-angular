import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tableau-rang',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  templateUrl: './tableau-rang.component.html',
  styleUrls: ['./tableau-rang.component.css']
})
export class TableauRangSerieComponent implements OnInit, OnChanges {

  @Input() joueursDictionnaire: { [pseudo: string]: number } = {};
  @Input() colonneTitre: string = 'Valeur';
  displayedColumns: string[] = ['pseudo', 'valeur'];
  donneesDuTableau = new MatTableDataSource<{ pseudo: string, valeur: number }>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.donneesDuTableau.paginator = this.paginator;
    this.donneesDuTableau.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['joueursDictionnaire'] && this.joueursDictionnaire) {
      const joueursPaire = Object.entries(this.joueursDictionnaire).map(([pseudo, valeur]) => ({ pseudo, valeur }));
      this.donneesDuTableau.data = joueursPaire.sort((a, b) => b.valeur - a.valeur);
    }
  }

  appliquerUnFiltre(event: Event): void {
    const filtreDesValeurs = (event.target as HTMLInputElement).value;
    this.donneesDuTableau.filter = filtreDesValeurs.trim().toLowerCase();

    if (this.donneesDuTableau.paginator) {
      this.donneesDuTableau.paginator.firstPage();
    }
  }
}
