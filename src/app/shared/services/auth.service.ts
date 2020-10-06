import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../../environments/environment.prod";
import { catchError } from "rxjs/operators";
import { HandleErrorService } from "./handle-error.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}

  registerUser(User) {
    return this.http
      .post(`${env.url}/register/registerUser`, User)
      .pipe(catchError(this.handleError.logError));
  }

  login(User) {
    return this.http
      .post(`${env.url}/auth/authUser`, User)
      .pipe(catchError(this.handleError.logError));
  }

  getAllUsers() {
    return this.http.get(`${env.url}/register/getAllUsers`);
  }
}
