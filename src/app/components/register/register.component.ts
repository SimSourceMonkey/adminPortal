import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { RegisterdetailsService } from '../registerdetails.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from 'src/app/shared/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  a: any;
  submitted = false;
  error: string;
  msg: string;
  user: User;

  // private reg: RegisterdetailsService,
  constructor( private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerform.controls; }

  onsubmit() {
  this.submitted = true;
  if (this.registerform.invalid) {
      return;
  }
  
this.user = {
  firstname: this.registerform.get("firstname").value,
  lastname: this.registerform.get("lastname").value,
  email: this.registerform.get("email").value,
  password: this.registerform.get("passowrd").value
}
  
let isRegistered = this.authService.registerUser(this.user);

if(isRegistered){
  alert('${this.user.firstname} has been registered')
  this.router.navigate(['login']);
}
else{
  alert('user could not be registered');
}

  // this.http.put('https://jelvtz47mk.execute-api.us-east-2.amazonaws.com/insert/', this.registerform.value).subscribe(
  //   data => {
  //     if (data.toString() === 'success') {
  //     console.log(data);
  //     this.router.navigate(['/login']);
  //   } else {
  //   this.router.navigate(['/']);
  //   }},
  //   error => { this.msg = error; }
  // );
 //this.a = this.reg.registerdetails(this.registerform);
  }
}
