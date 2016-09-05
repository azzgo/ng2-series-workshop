import { Component, Output, EventEmitter } from '@angular/core';
import { isEmpty } from "lodash";


@Component({
  selector: 'note-creater',
  template: require('./note-creater.html'),
  styles: [ require('./note-creater.css') ]
})
export class NoteCreater {
  private newNote = { title: '', value: ''};
  @Output("onCreateNote")
  private createdNote = new EventEmitter();

  onCreateNote() {
    if (isEmpty(this.newNote.title) || isEmpty(this.newNote.value)) {
      return false;
    }

    const { title, value } = this.newNote;

    this.createdNote.emit({title, value});

    this.reset();
  }

  reset() {
    this.newNote = { title: '', value: '' }
  }
}
