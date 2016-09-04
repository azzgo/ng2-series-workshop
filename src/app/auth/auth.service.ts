import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
import { CanActivate, Router } from '@angular/router'


@Injectable()
export class AuthSevice implements CanActivate{
  constructor(private router: Router, private http: Http) {
  }
  canActivate():boolean {
    const token = window.localStorage.getItem('token')   
    if (!token) {
      this.router.navigate(['auth']);
      return false;
    }
    return true
  }

  login(mode, user) {
    return this.http.post(`http://localhost:3500/${mode}`, user, {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
    .do((res: Response)=>{
      window.localStorage.setItem('token', res.json().token);
    });
  }
}