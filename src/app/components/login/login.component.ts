import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginform: FormGroup;
  a: any;
  submitted = false;
  error: string;
  msg: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private authService : AuthService) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginform.controls; }

  onsubmit() {
  this.submitted = true;
  if (this.loginform.invalid) {
      return;
  }

 let isAuthenticated = this.authService.userLogin(this.loginform.get('email').value, this.loginform.get('password').value);

if(isAuthenticated)
{
  alert(`Welcome back ${this.loginform.get('email').value}`);
  this.router.navigate(['dashboard'])
}
else{
  alert('User could not be authenticated');
}
  }
}
