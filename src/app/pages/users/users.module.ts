import { UsersResolver } from './../../shared/Resolver/allUser.resolver';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {
      Users: UsersResolver
    }
  }
];

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UsersResolver
  ],
})
export class UserModule { }
