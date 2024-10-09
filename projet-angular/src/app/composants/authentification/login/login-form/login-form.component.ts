import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { AuthentificationService } from '../../../../services/authentification.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
            protected localStorage : LocalStorageService, 
            protected authService : AuthentificationService
        ) {
    this.loginForm = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {
        this.localStorage.saveData('username', this.loginForm.value['login']);
    }
    this.authService.login(this.loginForm.value['login'], this.loginForm.value['password'])
  }
}
