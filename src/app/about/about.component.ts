import { Component } from '@angular/core';

import { AppBar } from '../share/app-bar'


@Component({
  selector: 'about-container',
  directives: [ AppBar ],
  template: `     
    <app-bar></app-bar>
    <div class="about-container">
      <h1>about page</h1>
    </div>
  `
})
export class AboutComponent {}
