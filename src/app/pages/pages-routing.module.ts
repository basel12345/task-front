import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuardService } from '../shared/Guard/authGuard.service';
import { PagesComponent } from './pages.component';

const routes: Routes = [
 {
   path: '',
   component: PagesComponent,
   children: [
    { path: "", redirectTo: "devices", pathMatch: "full" },
    {
      path: "devices",
      loadChildren: () =>
        import("./devices/devices.module").then((m) => m.DevicesModule),
      canActivate: [RoleGuardService]
    },
    {
      path: "my-devices",
      loadChildren: () =>
        import("./my-devices/my-devices.module").then((m) => m.MyDevicesModule),
      canActivate: [RoleGuardService]
    },
    {
      path: "users",
      loadChildren: () =>
        import("./users/users.module").then((m) => m.UserModule),
      canActivate: [RoleGuardService]
    },
    { path: "**", redirectTo: "devices" },
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
