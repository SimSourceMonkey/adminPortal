import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, FormsModule, ReactiveFormsModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent]
})
export class ComponentsModule {}
