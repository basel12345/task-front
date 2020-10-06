import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./AuthInterceptor";

export const Interceptors = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
