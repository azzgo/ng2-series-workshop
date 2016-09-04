import { Router } from '@angular/router';
import { Component } from '@angular/core'

@Component({
  selector: 'app-bar',
  templateUrl: 'app/share/app-bar/app-bar.component.html',
  styleUrls: [ 'app/share/app-bar/app-bar.component.css']
})

export class AppBar {
  constructor(private router: Router){}
  private signout() {
    window.localStorage.removeItem('token');
    this.router.navigate(["auth"]);
  }
}

