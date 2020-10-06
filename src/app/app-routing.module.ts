import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "pages", pathMatch: "full" },
  {
    path: "core",
    loadChildren: () => import("./core/core.module").then((m) => m.CorsModule),
  },
  {
    path: "pages",
    loadChildren: () => import("./pages/pages.module").then((m) => m.PagesModule),
  },
  { path: "**", redirectTo: "pages" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
