import { Component } from "@angular/core";

import { NoteCard } from "./note-card"
import { NoteCreater } from './note-creater';

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [ require('./notes.css') ],
  directives: [ NoteCard, NoteCreater ]
})
export class Notes {
  notes = [
    {
      title: 'n',
      value: 'v'
    }, {
      title: 'n1',
      value: 'v1'
    }, {
      title: 'n1',
      value: 'v1'
    }, {
      title: 'n1',
      value: 'v1'
    }
  ]

  checkCard(note, i) {
    this.notes.splice(i, 1)
  }

  newNote(note) {
    this.notes.push(note);
  }
}