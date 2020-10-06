import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";
import { LocalStorageService } from "../../shared/Storage/localStorage.service";
import { Router } from "@angular/router";

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }
    this.service.registerUser(this.registerForm.getRawValue()).subscribe(res => {
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
