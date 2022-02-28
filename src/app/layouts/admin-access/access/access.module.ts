import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from 'src/app/components/register/register.component';
import { AccessRoutes } from './access-routing.routing';
import {LoginComponent} from 'src/app/components/login/login.component'

@NgModule({
  declarations: [ RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AccessRoutes)
  ]
})
export class AccessModule { }
