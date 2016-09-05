import { Component, Output } from '@angular/core';
import { isEmpty } from "lodash";


@Component({
  selector: 'note-creater',
  template: require('./note-creater.html'),
  styles: [ require('./note-creater.css') ]
})
export class NoteCreater {
  private newNote = { title: '', value: ''};

  onCreateNote() {
    console.log(this.newNote);
  }
}
