import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from "./components/register/register.component";
import { AccessComponent } from "./layouts/admin-access/access/access.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule),
      }
    ],
  },
  {
    path: "",
    component: AccessComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/admin-access/access/access.module").then(m => m.AccessModule)
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
