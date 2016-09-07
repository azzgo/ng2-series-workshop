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
      value: 'v',
      color: 'lightblue'
    }, {
      title: 'n1',
      value: 'v1',
      color: 'blue'
    }, {
      title: 'n1',
      value: 'v1',
      color: 'white'
    }, {
      title: 'n1',
      value: 'v1',
      color: 'red'
    }
  ]

  checkCard(note, i) {
    this.notes.splice(i, 1)
  }

  newNote(note) {
    this.notes.push(note);
  }
}