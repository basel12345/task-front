import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

@Injectable()
export class UsersResolver implements Resolve<any> {
  constructor(private service: AuthService) {}

  resolve() {
    return this.service.getAllUsers();
  }
}
