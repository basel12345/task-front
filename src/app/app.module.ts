import { RoleGuardService } from './shared/Guard/authGuard.service';
import { Interceptors } from './shared/interceptors/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CorsModule } from './core/core.module';

import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CorsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [Interceptors, RoleGuardService, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
