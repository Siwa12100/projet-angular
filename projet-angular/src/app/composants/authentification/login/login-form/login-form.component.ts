import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from '../../../../services/authentification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl : './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  submitError : boolean;

  // Création du contructeur
  constructor(private fb: FormBuilder, 
            protected authService : AuthentificationService
        ) {
    this.loginForm = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });
    this.submitError = false;
  }

  // Fonction d'envoi du formulaire, avec la gestion d'erreur avec la variable submitError
  onSubmit() {
    if (this.authService.login(this.loginForm.value['login'], this.loginForm.value['password'])) {
      this.submitError = false
      
    }
    else{
      this.submitError = true
      return; 
    }
  }
}
