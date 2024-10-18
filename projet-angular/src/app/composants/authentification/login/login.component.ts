import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [LoginFormComponent],
    templateUrl: './login.component.html'
  })
  export class LoginComponent implements OnInit {
    constructor(protected localStorage : LocalStorageService) {}
  
    ngOnInit() : void {
        if(!this.localStorage.getData('Con')){
            this.localStorage.saveData('Con','vers Jean')
        }
    }
  }