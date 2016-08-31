import { Component } from '@angular/core';

import { AppBar, Card } from './share'


@Component({
  selector: 'notes-container',
  directives: [ AppBar, Card ],
  templateUrl: 'app/notes/notes.html',
  styleUrls: [ 'app/notes/notes.css']
})
export class NotesComponent{
  private notes = [
    {title: "Card1", value: "Hello"},
    {title: "Card2", value: "Word"},
    {title: "Card3", value: "!!!"}
  ]

  private onNoteChecked(index) {
    this.notes.splice(index, 1);
  }
}
