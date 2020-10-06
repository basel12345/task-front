import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class HandleErrorService {
  constructor() {}
  logError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("Client side Error", error);
    } else {
      console.log("Server side Error", error);
    }
    return throwError(error.statusText);
  }
}
