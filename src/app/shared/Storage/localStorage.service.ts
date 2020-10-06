import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor(private http: HttpClient) {}

  setToken(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
