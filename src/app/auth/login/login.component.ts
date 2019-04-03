import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  title = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getLoginTitle();
  }

  getLoginTitle(): void {
    this.title = this.loginService.getLoginTitle();
  }
}
