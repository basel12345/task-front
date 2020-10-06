import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CorsRoutingModule } from './core-routing.module';
import { CorsComponent } from './cors.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    CorsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CorsRoutingModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
})
export class CorsModule { }
