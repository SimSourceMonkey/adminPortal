import { Routes } from "@angular/router";
import { LoginComponent } from "src/app/components/login/login.component";
import { RegisterComponent } from "src/app/components/register/register.component";

export const AccessRoutes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

];
