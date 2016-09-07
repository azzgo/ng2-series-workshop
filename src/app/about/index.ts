import { Component } from '@angular/core';
import { AppBar } from '../share'

@Component({
  selector: 'about',
  directives: [ AppBar ],
  template: require('./about.html')
})
export class About {
}