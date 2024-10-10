import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from '../../../../services/authentification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  submitError : boolean;

  constructor(private fb: FormBuilder, 
            protected authService : AuthentificationService
        ) {
    this.loginForm = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });
    this.submitError = false;
  }

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
