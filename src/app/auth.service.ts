import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private user: User;
  userLogin = new Subject<boolean>();
  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.userLogin.next(false);
    this.router.navigate(['/user']);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.userLogin.next(true);
    this.router.navigate(['/user']);
  }
}
