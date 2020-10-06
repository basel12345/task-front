import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../../environments/environment.prod";
import { catchError } from "rxjs/operators";
import { HandleErrorService } from "./handle-error.service";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}

  getAllDevices() {
    return this.http.get(`${env.url}/devices/getAllDevices`)
    .pipe(catchError(this.handleError.logError));
  }

  getMyDevices(id) {
    return this.http.get(`${env.url}/register/getUserById/${id}`)
    .pipe(catchError(this.handleError.logError));
  }

  addDevices(id, Device) {
    return this.http
    .post(`${env.url}/devices/addDevice/${id}`, Device)
    .pipe(catchError(this.handleError.logError));
  }

  addDataForDevices(id, Data) {
    return this.http
    .post(`${env.url}/devices/addDataDevice/${id}`, Data)
    .pipe(catchError(this.handleError.logError));
  }
}
