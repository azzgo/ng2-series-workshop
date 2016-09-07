import { Component, Output, EventEmitter } from '@angular/core';
import { isEmpty } from "lodash";

import { ColorPicker } from './color-picker'


@Component({
  selector: 'note-creater',
  template: require('./note-creater.html'),
  styles: [ require('./note-creater.css') ],
  directives: [ ColorPicker ]
})
export class NoteCreater {
  private newNote = { title: '', value: '', color: 'white'};
  @Output("onCreateNote")
  private createdNote = new EventEmitter();

  private focus:boolean = false;

  onCreateNote() {
    if (isEmpty(this.newNote.title) || isEmpty(this.newNote.value)) {
      return false;
    }

    const { title, value, color } = this.newNote;

    this.createdNote.emit({title, value, color});

    this.reset();
  }

  setColor(color) {
    this.newNote.color = color;
  }

  reset() {
    this.newNote = { title: '', value: '', color: 'white' }
  }
}
