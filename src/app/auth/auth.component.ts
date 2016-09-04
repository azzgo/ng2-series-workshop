import { Router } from '@angular/router';
import { Component, Input } from '@angular/core'

import { AuthSevice } from './auth.service';


@Component({
  selector: 'auth-page',
  templateUrl: 'app/auth/auth.component.html',
  styleUrls: [ 'app/auth/auth.component.css' ]
})
export class AuthComponent {
  private mode:("signin" |  "signup") = "signin";

  private user = {email: '', password: ''}

  constructor(private authservice: AuthSevice, private router: Router){}

  private signin() {
    console.log(this.mode);
    this.authservice.login(this.mode, this.user)
    .subscribe(()=>{
      this.router.navigate(['note']);
    });
  }
}
