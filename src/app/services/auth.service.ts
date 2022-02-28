import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 users: any = [{
    email: "mash@hotmail.com",
    password: "mash1234"
 },
 { email: "twana@yahoo.com",
 password: "twana1234"
 }];

  constructor() { }

  //authenticate and login user

  userLogin(email: string, pwd: string):boolean{

    let isUser;
    for(let i = 0; i < 2; i++){
      if(this.users[i].email == email && this.users[i].password == pwd){
         isUser = true;
         break;
      }
      else{
        isUser = false;
      }
    }
 return isUser;
  }

  //register user
  registerUser(user: User):boolean{
    //create connection to database
    //post user to database, if successful return true else return false
     return true;
  }
}
