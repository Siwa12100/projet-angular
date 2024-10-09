import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  constructor(protected localStorage : LocalStorageService) {}

  ngOnInit() : void {
    this.localStorage.saveData('Con','vers Jean')
  }
}
