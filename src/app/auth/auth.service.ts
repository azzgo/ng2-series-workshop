import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'


@Injectable()
export class AuthSevice implements CanActivate{
  constructor(private router: Router) {}
  canActivate():boolean {
    this.router.navigate(['auth']);
    return false;
  }
}