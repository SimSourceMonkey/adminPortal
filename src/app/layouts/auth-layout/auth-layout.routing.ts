import { Routes } from '@angular/router';
import { RegisterComponent } from 'src/app/components/register/register.component';

import { RtlComponent } from '../../pages/rtl/rtl.component';


export const AuthLayoutRoutes: Routes = [
    { path: 'rtl',          component: RtlComponent },
   // {path: 'register', component: RegisterComponent}
];
