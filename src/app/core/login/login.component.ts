import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";
import { LocalStorageService } from "../../shared/Storage/localStorage.service";
import { Router } from "@angular/router";

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  token: any;
  user: any;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
    ) {

  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }
    this.service.login(this.loginForm.getRawValue()).subscribe(res => {
      console.log(res)
       if (res["user"]) {
        this.token = res["token"];
        this.user = res["user"];
        this.localStorage.setToken(this.token);
        this.localStorage.setUser(this.user);
        this.router.navigate(['../../pages/devices']);
      }
    })
  }
}
