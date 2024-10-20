import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [LoginFormComponent],
    templateUrl: './login.component.html',
    styleUrl : './login.component.css'
  })
  export class LoginComponent{
    constructor(protected localStorage : LocalStorageService) {}
  }