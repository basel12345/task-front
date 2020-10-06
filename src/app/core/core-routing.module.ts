import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorsComponent } from './cors.component';

const routes: Routes = [
  {
    path: '',
     component: CorsComponent,
     children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      {
        path: "login",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginModule),
      },
      {
        path: "register",
        loadChildren: () =>
          import("./register/register.module").then((m) => m.RegisterModule),
      },
      { path: "**", redirectTo: "login" },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorsRoutingModule { }
