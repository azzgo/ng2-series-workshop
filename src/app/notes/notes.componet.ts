import { Component } from '@angular/core';

import { AppBar } from './share'


@Component({
  selector: 'notes-container',
  directives: [ AppBar ],
  templateUrl: 'app/notes/notes.html'
})
export class NotesComponent{}
