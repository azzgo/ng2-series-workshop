import { Component } from '@angular/core';
import { NotesComponent } from './notes'


@Component({
  selector: 'my-app',
  directives: [ NotesComponent ],
  template: '<notes-container></notes-container>'
})
export class AppComponent {}
