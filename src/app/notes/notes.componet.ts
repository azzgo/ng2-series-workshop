import { Component } from '@angular/core';

import { AppBar, NoteCard, NoteCreater} from '../share'


@Component({
  selector: 'notes-container',
  directives: [ AppBar, NoteCard, NoteCreater ],
  templateUrl: 'app/notes/notes.componet.html',
  styleUrls: [ 'app/notes/notes.componet.css']
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

  private onAddNote(note) {
    this.notes.push(note);
  }
}
