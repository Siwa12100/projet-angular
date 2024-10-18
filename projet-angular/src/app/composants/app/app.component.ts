import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../partial/navbar/navbar.component';
import { FooterComponent } from "../partial/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl : './app.component.css',
})
export class AppComponent {
  title = 'projet-angular';
}
